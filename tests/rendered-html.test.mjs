import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the service gateway", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /You found Brian J\. Henderson’s website/);
  assert.match(html, /401\(k\)\/403\(b\) plan advisory/);
  assert.match(html, /Personal financial planning &amp; wealth management/);
  assert.match(html, /href="\/choose\/retirement-plans"/);
  assert.match(html, /href="\/choose\/wealth"/);
  assert.match(html, /brian-financial-advisor-headshot-v3\.png/);
});

test("remembers the service chosen from the gateway", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-gateway-choice`);
  const { default: worker } = await import(workerUrl.href);
  const runtime = {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  };
  const context = { waitUntil() {}, passThroughOnException() {} };

  for (const destination of ["retirement-plans", "wealth"]) {
    const choiceResponse = await worker.fetch(
      new Request(`https://example.com/choose/${destination}`),
      runtime,
      context,
    );

    assert.equal(choiceResponse.status, 302);
    assert.equal(choiceResponse.headers.get("location"), `https://example.com/${destination}`);
    assert.match(
      choiceResponse.headers.get("set-cookie") ?? "",
      new RegExp(`brian_service_preference=${destination};.*Max-Age=31536000.*HttpOnly.*SameSite=Lax`),
    );

    const returnResponse = await worker.fetch(
      new Request("https://example.com/", {
        headers: { cookie: `brian_service_preference=${destination}` },
      }),
      runtime,
      context,
    );

    assert.equal(returnResponse.status, 302);
    assert.equal(returnResponse.headers.get("location"), `https://example.com/${destination}`);
  }
});

test("server-renders the retirement plan advisory landing page", async () => {
  const response = await render("/retirement-plans");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>401\(k\)\/403\(b\) Plan Advisory \| Brian Henderson, PhD, CFA<\/title>/i);
  assert.match(html, /Schedule the free review/);
  assert.match(html, /401\(k\)\/403\(b\) Advisory for Plan Sponsors/);
  assert.match(html, /Increase owner contribution potential/);
  assert.match(html, /Give leadership time back/);
  assert.match(html, /Strengthen compliance and audit readiness/);
  assert.match(html, /A great advisor is:/);
  assert.match(html, /Third-party administrator \(TPA\)/);
  assert.match(html, /401\(k\)\/403\(b\) Recordkeeper/);
  assert.match(html, /brian-client-meeting\.png/);
  assert.match(html, /Read more \(3 min read\)/);
  assert.match(html, /Personal Wealth Management/);
  assert.match(html, /brian-henderson-mark-navy\.png/);
  assert.match(html, /PhD, CFA · Wealth Manager/);
  assert.match(html, /A no-risk first step/);
  assert.match(html, /bjhndrsn@gmail\.com/);
  assert.match(html, /linkedin\.com\/in\/brian-henderson-63647950/);
  assert.match(html, /Finance Professor/);
  assert.match(html, /Market Expert/);
  assert.match(html, /Investment strategy &amp; market analysis/);
  assert.match(html, /I help plan sponsors uncover hidden costs and overlooked risks/);
  assert.match(html, /objective benchmarking/);
  assert.match(html, /hands-on support from an expert/);
  assert.match(html, /You leave knowing\.\.\./);
  assert.match(html, /Get a custom presentation outlining/);
  assert.match(html, /Schedule your free review/);
  assert.match(html, /multiple perspectives that rarely sit in one room/);
  assert.doesNotMatch(html, /Claim your free review/);
  assert.doesNotMatch(html, /BH \/ 01/);
  assert.doesNotMatch(html, /—/);
});

test("server-renders the personal wealth page", async () => {
  const response = await render("/wealth");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /A clearer path to the <em>future<\/em> you’ve worked for/);
  assert.match(html, /brian-henderson-mark-wealth\.png/);
  assert.match(html, /brian-financial-advisor-headshot-v3\.png/);
  assert.match(html, /Personal financial planning · Wealth management · Oakton, Virginia/);
  assert.match(html, /One-on-one advisor/);
  assert.match(html, /I’ve saved for years, but I still worry I may not have enough/);
  assert.match(html, /not leaving anything on the table/);
  assert.match(html, /Invest intelligently/);
  assert.match(html, /decades of financial expertise and involved, one-on-one service/);
  assert.match(html, /passionate, well-known financial expert/);
  assert.match(html, /How Brian creates clarity/);
  assert.match(html, /brian-henderson-mark-reversed\.png/);
  assert.match(html, /Start with your goals/);
  assert.match(html, /I help individuals and families build a clear path to retirement/);
  assert.match(html, /hands-on, one-on-one support/);
  assert.match(html, /Your company’s retirement plan deserves the same clear thinking/);
  assert.match(html, /Explore 401\(k\)\/403\(b\) plan advisory/);
  assert.match(html, /href="\/retirement-plans"/);
  assert.doesNotMatch(html, /I help plan sponsors uncover hidden costs/);
  assert.doesNotMatch(html, /Looking for 401\(k\) plan advisory/);
});

test("server-renders a direct-submit review form without a mailto handoff", async () => {
  const response = await render("/book");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Send my review request/);
  assert.match(html, /sent securely to Brian/);
  assert.doesNotMatch(html, /Prepare my review request/);
  assert.doesNotMatch(html, /opens a prepared email/);
});

test("review endpoint validates submissions before attempting delivery", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-review-api`);
  const { default: worker } = await import(workerUrl.href);
  const response = await worker.fetch(
    new Request("http://localhost/api/review-request", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name: "" }),
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  assert.equal(response.status, 400);
  assert.match(await response.text(), /complete all required fields/i);
});

test("review endpoint delivers a valid submission to Brian without exposing credentials", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-review-delivery`);
  const { default: worker } = await import(workerUrl.href);
  const originalFetch = globalThis.fetch;
  let outboundRequest;

  globalThis.fetch = async (input, init) => {
    outboundRequest = { input: String(input), init };
    return Response.json({ id: "email_test" });
  };

  try {
    const response = await worker.fetch(
      new Request("http://localhost/api/review-request", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: "Alex Sponsor",
          organization: "Example Company",
          role: "Owner / CEO",
          email: "alex@example.com",
          size: "$5–20 million",
          concern: "Fees and fiduciary process",
          timing: "Thursday afternoon",
        }),
      }),
      {
        ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
        RESEND_API_KEY: "test-key",
        REVIEW_REQUEST_FROM: "Brian Henderson Advisory <reviews@example.com>",
      },
      { waitUntil() {}, passThroughOnException() {} },
    );

    assert.equal(response.status, 200);
    assert.equal(outboundRequest.input, "https://api.resend.com/emails");
    const email = JSON.parse(outboundRequest.init.body);
    assert.deepEqual(email.to, ["bjhndrsn@gmail.com"]);
    assert.equal(email.reply_to, "alex@example.com");
    assert.match(email.subject, /Alex Sponsor at Example Company/);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

const articles = [
  ["/insights/fees", "Why fees deserve more attention"],
  ["/insights/plan-sponsor-review", "What plan sponsors should review"],
  ["/insights/when-complexity-stops-helping", "What kind of service should I expect from my 401(k) plan financial advisor?"],
];

for (const [pathname, title] of articles) {
  test(`server-renders ${pathname}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.ok(html.includes(title));
    assert.match(html, /3 min read/);
    assert.match(html, /The practical takeaway/);
  });
}
