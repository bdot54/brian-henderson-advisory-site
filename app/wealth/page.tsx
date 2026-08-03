import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { SiteNav } from "../components/SiteNav";

export const metadata: Metadata = {
  title: "Personal Wealth Management",
  description: "Disciplined financial planning and investment management for individuals and families from Brian Henderson, PhD, CFA.",
};

const moments = [
  ["Retirement is getting real", "Turn accounts, income needs, Social Security, taxes, and risk into one coordinated decision process."],
  ["You worry you may not have enough", "Know whether your savings, spending, and investment strategy can support the life and retirement you want."],
  ["A major transition changed the picture", "Bring discipline to an inheritance, business sale, career change, concentrated position, or other high-stakes decision."],
  ["You want to know you’re not leaving anything on the table", "Get a careful review of the strategy, attention, fees, taxes, and overlooked opportunities in your current financial arrangement."],
];

export default function WealthPage() {
  return (
    <main>
      <SiteNav />
      <section className="subhero shell">
        <div>
          <div className="eyebrow"><span /> Personal wealth management</div>
          <h1>A clearer path to the future you’ve worked for.</h1>
        </div>
        <div className="subhero-side">
          <p>I help individuals and families get a clearer path to retirement in one focused conversation - without sorting through it alone - backed by a PhD in finance, CFA expertise, and hands-on investment management.</p>
          <a className="button button-primary" href="mailto:info@srcmadvisors.com?subject=Personal%20wealth%20conversation%20with%20Brian">Request a 30-minute conversation <span>↗</span></a>
        </div>
      </section>

      <section className="wealth-portrait-section">
        <div className="shell wealth-portrait-grid">
          <div className="wealth-portrait"><img src="/brian-financial-advisor-headshot-v2.png" alt="Brian Henderson, PhD, CFA" /><span>Reston, Virginia / serving clients with disciplined financial guidance</span></div>
          <div className="wealth-thesis">
            <span className="quote-mark">“</span>
            <blockquote>Who do you want running your portfolio: a salesperson - or a passionate, relentless, well-known financial expert?</blockquote>
            <p>Brian combines academic finance, practical investment experience, and an investor-protection perspective to help clients make consequential decisions with more clarity.</p>
          </div>
        </div>
      </section>

      <section className="moments-section shell">
        <div className="section-heading">
          <div><div className="eyebrow"><span /> When clients reach out</div><h2>Your financial future is too important to leave to hope.</h2></div>
          <p>Brian’s work starts by understanding the real decision in front of you—not by forcing your situation into a preset product.</p>
        </div>
        <div className="moments-grid">
          {moments.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className="wealth-approach">
        <div className="shell wealth-approach-grid">
          <div><div className="eyebrow eyebrow-light"><span /> Brian’s approach</div><h2>Plan with purpose.<br />Invest with rigor.<br /><em>Stay confidently on track.</em></h2></div>
          <div className="approach-list">
            <div><b>01</b><h3>Build the full picture</h3><p>Goals, cash flow, assets, liabilities, taxes, risks, and the people who matter to the plan.</p></div>
            <div><b>02</b><h3>Examine the structure</h3><p>Portfolio design, costs, concentration, account placement, and the assumptions holding everything together.</p></div>
            <div><b>03</b><h3>Make tradeoffs visible</h3><p>Clear explanations of what each choice may improve, what it may cost, and what uncertainty remains.</p></div>
            <div><b>04</b><h3>Stay engaged</h3><p>Ongoing advice that evolves with markets, taxes, life changes, and the decisions ahead.</p></div>
          </div>
        </div>
      </section>

      <section className="wealth-services shell">
        <div className="section-heading"><div><div className="eyebrow"><span /> The work</div><h2>Planning and investment management, connected.</h2></div></div>
        <div className="service-columns">
          <article><span>Financial planning</span><ul><li>Retirement income decisions</li><li>Cash-flow and savings strategy</li><li>Risk and insurance coordination</li><li>Tax-aware planning with your tax professional</li><li>Estate-planning coordination with counsel</li></ul></article>
          <article><span>Investment management</span><ul><li>Portfolio design and asset allocation</li><li>Investment selection and monitoring</li><li>Risk, liquidity, and concentration review</li><li>Cost and complexity analysis</li><li>Disciplined rebalancing and ongoing oversight</li></ul></article>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-inner">
          <div><div className="eyebrow eyebrow-light"><span /> A more thoughtful first conversation</div><h2>Start with your goals.<br /><em>Leave with clarity.</em></h2></div>
          <div><p>A focused conversation can reveal whether your current plan supports the future you want - and where a better path may exist.</p><a className="button button-light" href="mailto:info@srcmadvisors.com?subject=Personal%20wealth%20conversation%20with%20Brian">Request a 30-minute conversation <span>↗</span></a></div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
