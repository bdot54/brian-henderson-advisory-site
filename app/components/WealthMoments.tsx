"use client";

import { useState } from "react";

const moments = [
  {
    quote: "Retirement is getting real. I need to know if I can afford the life I want.",
    title: "Know what retirement can realistically look like.",
    body: "Brian connects your savings, income needs, Social Security, taxes, spending, and investment risk to show what your resources may support and which decisions matter most.",
    result: "A practical retirement picture with clearer tradeoffs and priorities.",
  },
  {
    quote: "I’ve saved for years, but I still worry I may not have enough.",
    title: "Turn a vague fear into a plan you can measure.",
    body: "Brian examines how long your money may need to last, how your portfolio is positioned, and which changes could improve your confidence without relying on guesswork.",
    result: "A grounded view of where you stand and what could strengthen the plan.",
  },
  {
    quote: "A major life change has shifted everything. What should I do next?",
    title: "See how one change affects the whole financial picture.",
    body: "Whether it is an inheritance, business sale, career change, or concentrated position, Brian helps you evaluate the tax, investment, cash-flow, and long-term implications together.",
    result: "A coordinated next step instead of a string of isolated decisions.",
  },
  {
    quote: "I want to know I’m not leaving anything on the table.",
    title: "Find the opportunities your current plan may be missing.",
    body: "Brian reviews strategy, fees, taxes, account placement, risk, and the attention you receive to identify what is working and where a better choice may exist.",
    result: "An expert second opinion on overlooked value and unnecessary tradeoffs.",
  },
];

export function WealthMoments() {
  const [active, setActive] = useState(0);
  const item = moments[active];

  return (
    <div className="wealth-moments-selector">
      <div className="wealth-moment-tabs" role="tablist" aria-label="Choose the financial situation that sounds most like yours">
        {moments.map((moment, index) => (
          <button
            key={moment.quote}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-controls="wealth-moment-panel"
            onClick={() => setActive(index)}
          >
            <span>0{index + 1}</span>
            <strong>“{moment.quote}”</strong>
            <i aria-hidden="true">→</i>
          </button>
        ))}
      </div>
      <div className="wealth-moment-panel" id="wealth-moment-panel" role="tabpanel">
        <small>How Brian creates clarity</small>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
        <div><b>What you gain</b><span>{item.result}</span></div>
      </div>
    </div>
  );
}
