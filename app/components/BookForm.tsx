"use client";

import { FormEvent, useState } from "react";

export function BookForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      "Hi Brian,",
      "",
      "I'd like to request a free 30-minute 401(k) fee and fiduciary review.",
      "",
      `Name: ${data.get("name")}`,
      `Organization: ${data.get("organization")}`,
      `Role: ${data.get("role")}`,
      `Email: ${data.get("email")}`,
      `Plan size: ${data.get("size")}`,
      `Primary concern: ${data.get("concern")}`,
      `Preferred timing: ${data.get("timing")}`,
    ].join("\n");
    setSent(true);
    window.location.href = `mailto:info@srcmadvisors.com?subject=${encodeURIComponent("Free 401(k) fee & fiduciary review")}&body=${encodeURIComponent(body)}`;
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
      <button className="button button-primary form-submit" type="submit">Prepare my review request <span>↗</span></button>
      <p className="form-privacy">Your information is used only to respond to this request. Submitting opens a prepared email in your own email app.</p>
      {sent && <p className="form-status" role="status">Your email app should open with the request prepared.</p>}
    </form>
  );
}
