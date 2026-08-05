"use client";

import { FormEvent, useState } from "react";

export function BookForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/review-request", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      const result = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(result?.message || "We couldn't send your request. Please try again.");
      }

      form.reset();
      setStatus("success");
      setMessage("Your request has been sent to Brian. He'll follow up with you directly.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We couldn't send your request. Please try again.");
    }
  }

  return (
    <form className="book-form" onSubmit={submit}>
      <div className="form-heading"><span>Review request</span><small>About 2 minutes</small></div>
      <label>Full name<input name="name" autoComplete="name" required placeholder="Your name" /></label>
      <label>Organization<input name="organization" autoComplete="organization" required placeholder="Company or organization" /></label>
      <div className="form-row">
        <label>Your role<select name="role" required defaultValue=""><option value="" disabled>Select one</option><option>HR leader</option><option>Owner / CEO</option><option>CFO / finance</option><option>Plan committee member</option><option>Other</option></select></label>
        <label>Work email<input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label>
      </div>
      <label>Approximate plan size<select name="size" defaultValue=""><option value="">Not sure / prefer not to say</option><option>Under $1 million</option><option>$1–5 million</option><option>$5–20 million</option><option>$20–50 million</option><option>More than $50 million</option></select></label>
      <label>What would you most like to understand?<textarea name="concern" required rows={4} placeholder="Fees, investment options, provider service, fiduciary process, participation, plan design…" /></label>
      <label>Best days or times to meet<input name="timing" placeholder="For example: Tuesday or Thursday afternoons" /></label>
      <div className="form-honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <button className="button button-primary form-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending your request…" : "Send my review request"} <span>↗</span>
      </button>
      <p className="form-privacy">Your information is sent securely to Brian and used only to respond to this request.</p>
      {message && <p className={`form-status form-status-${status}`} role="status" aria-live="polite">{message}</p>}
    </form>
  );
}
