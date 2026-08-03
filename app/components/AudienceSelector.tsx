"use client";

import Link from "next/link";
import { useState } from "react";

const audiences = [
  {
    short: "HR leader",
    phrase: "I’m responsible for the plan—and I need a trusted second set of eyes.",
    title: "Make the plan easier to oversee, explain, and defend.",
    body: "Brian helps you organize the right questions around fees, investments, providers, participation, and fiduciary process—then turns the answers into a clearer action list for leadership or the committee.",
    result: "A review that respects your time and makes your next committee conversation more useful.",
  },
  {
    short: "Owner / CEO",
    phrase: "I suspect our 401(k) costs too much or could do more for our company.",
    title: "See whether the plan is earning its place in the business.",
    body: "Brian looks for unnecessary cost, missed design opportunities, and service gaps that can affect both employees and owners—without assuming the answer is an expensive provider change.",
    result: "A business-minded view of where value may be leaking and what is worth fixing.",
  },
  {
    short: "CFO / finance",
    phrase: "I want objective data before we renew, negotiate, or switch anything.",
    title: "Replace anecdotes with a disciplined comparison.",
    body: "Brian helps frame the all-in cost picture, examine the investment lineup and service model, and identify the evidence needed to compare the current arrangement with credible alternatives.",
    result: "Better questions, cleaner analysis, and a decision trail your team can follow.",
  },
  {
    short: "Committee member",
    phrase: "I’m worried our fiduciary process is running on autopilot.",
    title: "Turn recurring meetings into real oversight.",
    body: "Brian reviews how decisions are made and documented, where benchmarking may be stale, and which responsibilities need clearer ownership across the plan’s advisor, recordkeeper, TPA, and committee.",
    result: "A more deliberate process—not more paperwork for its own sake.",
  },
  {
    short: "Plan has outgrown support",
    phrase: "Our provider is in place, but the service no longer matches the plan.",
    title: "Find out whether the problem is the provider, the advisor, or the setup.",
    body: "Brian separates service issues from structural ones, identifies what can be improved in place, and helps you understand when a broader market review is justified.",
    result: "A practical diagnosis before your team commits to a disruptive change.",
  },
];

export function AudienceSelector() {
  const [active, setActive] = useState(0);
  const item = audiences[active];
  return (
    <div className="shell audience-selector">
      <div className="audience-tabs" role="tablist" aria-label="Choose your situation">
        {audiences.map((audience, index) => (
          <button
            key={audience.short}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-controls="audience-panel"
            onClick={() => setActive(index)}
          >
            <span>0{index + 1}</span>
            <b>{audience.short}</b>
            <small>{audience.phrase}</small>
            <i>↗</i>
          </button>
        ))}
      </div>
      <div className="audience-panel" id="audience-panel" role="tabpanel">
        <div className="audience-watermark">0{active + 1}</div>
        <small>How Brian helps</small>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
        <div className="audience-result"><b>What you gain</b><span>{item.result}</span></div>
        <Link className="button button-light" href="/book">Schedule the free review <span>↗</span></Link>
      </div>
    </div>
  );
}
