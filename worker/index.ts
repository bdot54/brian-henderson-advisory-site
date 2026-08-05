/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  RESEND_API_KEY?: string;
  REVIEW_REQUEST_FROM?: string;
  REVIEW_REQUEST_TO?: string;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

type ReviewRequest = {
  name?: unknown;
  organization?: unknown;
  role?: unknown;
  email?: unknown;
  size?: unknown;
  concern?: unknown;
  timing?: unknown;
  website?: unknown;
};

const REVIEW_FIELD_LIMITS = {
  name: 120,
  organization: 160,
  role: 80,
  email: 254,
  size: 80,
  concern: 2500,
  timing: 500,
} as const;

function jsonResponse(body: Record<string, unknown>, status = 200): Response {
  return Response.json(body, {
    status,
    headers: { "cache-control": "no-store" },
  });
}

function textField(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character] ?? character);
}

async function handleReviewRequest(request: Request, env: Env): Promise<Response> {
  if (request.method !== "POST") {
    return jsonResponse({ message: "Method not allowed." }, 405);
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 16_000) {
    return jsonResponse({ message: "That request is too large." }, 413);
  }

  let payload: ReviewRequest;
  try {
    payload = await request.json() as ReviewRequest;
  } catch {
    return jsonResponse({ message: "Please check the form and try again." }, 400);
  }

  // Bots commonly fill fields hidden from human visitors. Return success so
  // automated submissions do not learn how the filter works.
  if (textField(payload.website, 200)) {
    return jsonResponse({ ok: true });
  }

  const fields = {
    name: textField(payload.name, REVIEW_FIELD_LIMITS.name),
    organization: textField(payload.organization, REVIEW_FIELD_LIMITS.organization),
    role: textField(payload.role, REVIEW_FIELD_LIMITS.role),
    email: textField(payload.email, REVIEW_FIELD_LIMITS.email).toLowerCase(),
    size: textField(payload.size, REVIEW_FIELD_LIMITS.size) || "Not provided",
    concern: textField(payload.concern, REVIEW_FIELD_LIMITS.concern),
    timing: textField(payload.timing, REVIEW_FIELD_LIMITS.timing) || "Not provided",
  };

  if (!fields.name || !fields.organization || !fields.role || !fields.concern || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return jsonResponse({ message: "Please complete all required fields with a valid work email." }, 400);
  }

  const apiKey = env.RESEND_API_KEY?.trim();
  const from = env.REVIEW_REQUEST_FROM?.trim();
  const to = env.REVIEW_REQUEST_TO?.trim() || "bjhndrsn@gmail.com";

  if (!apiKey || !from) {
    return jsonResponse({ message: "Online requests are temporarily unavailable. Please try again shortly." }, 503);
  }

  const rows = [
    ["Name", fields.name],
    ["Organization", fields.organization],
    ["Role", fields.role],
    ["Email", fields.email],
    ["Approximate plan size", fields.size],
    ["What they want to understand", fields.concern],
    ["Best days or times", fields.timing],
  ];
  const plainText = rows.map(([label, value]) => `${label}: ${value}`).join("\n\n");
  const html = `
    <h1 style="font-family:Arial,sans-serif;font-size:24px;color:#07182c">New 401(k)/403(b) review request</h1>
    <p style="font-family:Arial,sans-serif;color:#394b5d">A visitor submitted the review form on Brian Henderson's website.</p>
    <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:15px;color:#07182c">
      ${rows.map(([label, value]) => `<tr><th align="left" valign="top" style="border-bottom:1px solid #d9dee3;padding-right:24px">${escapeHtml(label)}</th><td style="border-bottom:1px solid #d9dee3;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`).join("")}
    </table>`;

  try {
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${apiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: fields.email,
        subject: `New review request from ${fields.name} at ${fields.organization}`,
        text: `New 401(k)/403(b) review request\n\n${plainText}`,
        html,
      }),
    });

    if (!emailResponse.ok) {
      return jsonResponse({ message: "We couldn't send your request right now. Please try again shortly." }, 502);
    }
  } catch {
    return jsonResponse({ message: "We couldn't send your request right now. Please try again shortly." }, 502);
  }

  return jsonResponse({ ok: true, message: "Your request has been sent to Brian." });
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const SERVICE_PREFERENCE_COOKIE = "brian_service_preference";
const SERVICE_PREFERENCE_MAX_AGE = 60 * 60 * 24 * 365;

function getCookie(request: Request, name: string): string | null {
  const cookieHeader = request.headers.get("cookie");
  if (!cookieHeader) return null;

  for (const pair of cookieHeader.split(";")) {
    const separator = pair.indexOf("=");
    if (separator === -1) continue;
    const key = pair.slice(0, separator).trim();
    if (key === name) return decodeURIComponent(pair.slice(separator + 1).trim());
  }

  return null;
}

function serviceRedirect(request: Request, destination: "retirement-plans" | "wealth", remember = false): Response {
  const location = new URL(`/${destination}`, request.url);
  const headers = new Headers({ location: location.toString() });

  if (remember) {
    headers.set(
      "set-cookie",
      `${SERVICE_PREFERENCE_COOKIE}=${destination}; Max-Age=${SERVICE_PREFERENCE_MAX_AGE}; Path=/; Secure; HttpOnly; SameSite=Lax`,
    );
  }

  return new Response(null, { status: 302, headers });
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/") {
      const preference = getCookie(request, SERVICE_PREFERENCE_COOKIE);
      if (preference === "retirement-plans" || preference === "wealth") {
        return serviceRedirect(request, preference);
      }
    }

    if (request.method === "GET" && url.pathname === "/choose/retirement-plans") {
      return serviceRedirect(request, "retirement-plans", true);
    }

    if (request.method === "GET" && url.pathname === "/choose/wealth") {
      return serviceRedirect(request, "wealth", true);
    }

    if (url.pathname === "/api/review-request") {
      return handleReviewRequest(request, env);
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    return handler.fetch(request, env, ctx);
  },
};

export default worker;
