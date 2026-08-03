import Link from "next/link";
import {
  Award,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileSearch,
  GraduationCap,
  HandCoins,
  Landmark,
  ReceiptText,
  Radar,
  ScanSearch,
  Scale,
  ShieldCheck,
  Spline,
  TrendingUp,
  UsersRound,
  MessageCircle,
} from "lucide-react";
import { AudienceSelector } from "./components/AudienceSelector";
import { Footer } from "./components/Footer";
import { SiteNav } from "./components/SiteNav";

const reviewItems = [
  ["Fees", "How your all-in plan costs compare—and where avoidable cost may be hiding."],
  ["Investments", "Whether the lineup is disciplined, diversified, and working for participants."],
  ["Fiduciary process", "Where oversight, documentation, or decision-making deserves a closer look."],
  ["Plan design", "Whether plan features are helping employees participate and use the benefit well."],
];

const roles = [
  {
    icon: BriefcaseBusiness,
    title: "Financial advisor",
    owner: "Brian’s role",
    body: "Helps the plan sponsor evaluate investments, fees, providers, plan design, and the decisions that connect the whole retirement-plan team.",
  },
  {
    icon: Database,
    title: "401(k)/403(b) recordkeeper",
    owner: "Plan operations",
    body: "Maintains participant accounts, processes contributions and distributions, and provides the employee-facing platform and statements.",
  },
  {
    icon: ClipboardCheck,
    title: "Third-party administrator (TPA)",
    owner: "Plan administration",
    body: "Handles plan administration such as testing, eligibility, census work, Form 5500 support, and plan-document coordination.",
  },
];

const stakes = [
  {
    icon: TrendingUp,
    title: "Increase owner contribution potential",
    body: "Higher participation across the plan can improve testing results and may allow owners to contribute more, subject to plan design and applicable limits.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Give leadership time back",
    body: "A proactive advisor can coordinate the moving parts, surface decisions early, and keep HR, finance, and the committee out of the weeds.",
  },
  {
    icon: ReceiptText,
    title: "Reduce avoidable plan fees",
    body: "High or poorly structured fees quietly reduce participant balances. Clear benchmarking helps separate fair costs from expenses that deserve scrutiny.",
  },
  {
    icon: HandCoins,
    title: "Help employees get more from the plan",
    body: "A retirement plan works better when employees understand the match, participate consistently, and can make confident use of the investment options.",
  },
  {
    icon: UsersRound,
    title: "Do right by the staff trusting you",
    body: "Employees trust leadership to choose and oversee a plan that gives their retirement savings a fair chance to grow without unnecessary cost or confusion.",
  },
  {
    icon: ShieldCheck,
    title: "Strengthen compliance and audit readiness",
    body: "Consistent review, clear responsibilities, and sound documentation help leadership demonstrate a prudent, repeatable oversight process.",
  },
];

const processSteps = [
  { icon: MessageCircle, title: "Talk", body: "Share what you know, what feels off, and what you want the plan to do better." },
  { icon: FileSearch, title: "Review", body: "Brian identifies the documents and data needed to examine fees, investments, service, and design." },
  { icon: ScanSearch, title: "Compare", body: "See how the plan stacks up and where the evidence points to a meaningful opportunity." },
  { icon: CheckCircle2, title: "Decide", body: "Keep what works, improve what does not, and choose the next step without pressure." },
];

const insightCards = [
  {
    icon: ChartNoAxesCombined,
    label: "Fees",
    title: "Why fees deserve more attention",
    href: "/insights/fees",
    body: "Small differences in cost can become meaningful over time. Fee awareness is one of the most practical ways to evaluate whether a plan is serving its purpose.",
  },
  {
    icon: Radar,
    label: "Plan sponsors",
    title: "What plan sponsors should review",
    href: "/insights/plan-sponsor-review",
    body: "Investment menus, fees, provider structure, governance, and participant needs change. A disciplined review reveals what deserves attention now.",
  },
  {
    icon: Spline,
    label: "Discipline",
    title: "When complexity stops helping",
    href: "/insights/when-complexity-stops-helping",
    body: "More products, more jargon, and more moving parts do not automatically mean better advice. Discipline and transparency often serve plans better.",
  },
];

export default function Home() {
  return (
    <main>
      <SiteNav />

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> 401(k) advisory for plan sponsors</div>
          <h1>A clearer view of your <em>401(k).</em></h1>
          <p className="hero-lead">
            Find out whether your plan’s fees, investments, design, and oversight are doing what they should—for your company and your people.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/book">Book your free 30-minute review <span>↗</span></Link>
            <Link className="text-link" href="#why-brian">Why Brian is different <span>↓</span></Link>
          </div>
          <p className="microcopy">I help small and midsized employers improve retirement-plan value without another time-consuming internal project, backed by independent analysis and expert oversight.</p>
        </div>

        <div className="hero-visual">
          <div className="portrait-accent" aria-hidden="true" />
          <div className="portrait-frame">
            <img src="/brian-financial-advisor-headshot-v2.png" alt="Brian Henderson, PhD, CFA" />
          </div>
          <div className="hero-identity">
            <strong>Brian Henderson, PhD, CFA</strong>
            <span>Distinguished Professor of Finance · Financial Advisor · Reston, Virginia</span>
          </div>
        </div>
      </section>

      <section className="proof-rail" aria-label="Brian's credentials">
        <div className="shell proof-grid">
          <div><GraduationCap aria-hidden="true" /><span><strong>PhD</strong><small>Finance</small></span></div>
          <div><Award aria-hidden="true" /><span><strong>CFA</strong><small>Charterholder</small></span></div>
          <div><Landmark aria-hidden="true" /><span><strong>Distinguished Professor of Finance</strong><small>George Washington University</small></span></div>
          <div><ChartNoAxesCombined aria-hidden="true" /><span><strong>Market Expert</strong><small>Investment strategy &amp; market analysis</small></span></div>
          <div><Scale aria-hidden="true" /><span><strong>Expert witness</strong><small>Complex financial matters</small></span></div>
        </div>
      </section>

      <section className="audience-section" id="who-we-help">
        <div className="shell section-heading heading-light">
          <div>
            <div className="eyebrow eyebrow-light"><span /> Start where you are</div>
            <h2>Which sounds most like you?</h2>
          </div>
          <p>Choose your situation. Brian will show you where a focused review can create clarity first.</p>
        </div>
        <AudienceSelector />
      </section>

      <section className="stakes-section" id="why-care">
        <div className="shell section-heading">
          <div>
            <div className="eyebrow"><span /> Why should a plan leader care?</div>
            <h2>What could an underperforming plan be leaving on the table?</h2>
          </div>
          <p>Your 401(k) is more than an employee benefit. It is a meaningful business expense, a tool for attracting and retaining talent, a tax-advantaged savings vehicle, and an ongoing fiduciary responsibility.</p>
        </div>
        <div className="shell stakes-grid">
          {stakes.map(({ icon: Icon, title, body }) => (
            <article key={title}>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="shell stakes-summary">
          <strong>The real question</strong>
          <p>Is your plan producing the greatest practical value it can - for owners, employees, and the business - at a reasonable cost?</p>
          <Link className="text-link large" href="/book">Find out in a free 30-minute review <span>↗</span></Link>
        </div>
      </section>

      <section className="review-section shell" id="review">
        <div className="review-intro">
          <div className="offer-mark">30</div>
          <div>
            <div className="eyebrow"><span /> A low-risk first step</div>
            <h2>Thirty useful minutes.<br />A much clearer next step.</h2>
          </div>
          <p>
            This fiduciary-minded first look is designed to provide useful insights, create immediate value, and demonstrate what thoughtful fiduciary guidance can look like. Brian will ask the right questions, surface what deserves attention, and explain what your next move could be.
          </p>
        </div>
        <div className="review-grid">
          {reviewItems.map(([title, body], index) => (
            <article className="review-card" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="review-outcome">
          <div className="outcome-copy">
            <div className="outcome-kicker">You leave knowing</div>
            <p>what looks sound, what deserves deeper analysis, and whether Brian is the right person to help.</p>
          </div>
          <Link className="button button-dark" href="/book">Claim your free review <span>↗</span></Link>
        </div>
      </section>

      <section className="roles-section" id="roles">
        <div className="shell">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span /> Less confusion, better coordination</div>
              <h2>Your 401(k) has a team.<br />Brian makes it work like one.</h2>
            </div>
            <p>Each provider keeps a distinct role. Brian connects the work and helps the plan sponsor keep the whole system pointed in the same direction.</p>
          </div>
          <div className="role-orchestration">
            {roles.slice(0, 1).map(({ icon: Icon, ...role }) => (
              <article className="role-node role-advisor" key={role.title}>
                <Icon aria-hidden="true" />
                <div><small>{role.owner}</small><h3>{role.title}</h3><p>{role.body}</p></div>
                <div className="advisor-qualities">
                  <strong>A great advisor is:</strong>
                  <span>Proactive year-round</span>
                  <span>Responsive</span>
                  <span>Engaged</span>
                  <span>Fluent in complex finance</span>
                </div>
                <p className="advisor-question">Is your current advisor all of these things?</p>
              </article>
            ))}
            <div className="role-connector" aria-hidden="true"><span /><i /></div>
            <div className="role-support-grid">
              {roles.slice(1).map(({ icon: Icon, ...role }) => (
                <article className="role-node" key={role.title}>
                  <Icon aria-hidden="true" />
                  <div><small>{role.owner}</small><h3>{role.title}</h3><p>{role.body}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="difference-section shell" id="why-brian">
        <div className="difference-photo">
          <img src="/brian-financial-advisor-headshot-v3.png" alt="Brian Henderson" />
          <div className="photo-index">BH / 01</div>
        </div>
        <div className="difference-copy">
          <div className="eyebrow"><span /> What makes Brian different</div>
          <h2>He spent his career teaching finance—and fighting the damage high fees and poor performance can cause.</h2>
          <p className="difference-lead">
            Brian brings together three perspectives that rarely sit in one room: finance professor, investment professional, and expert witness in complex financial matters.
          </p>
          <div className="difference-points">
            <div><b>01</b><p><strong>Professor, not product-pusher.</strong> Brian’s instinct is to teach the decision, explain the tradeoffs, and make complexity useful.</p></div>
            <div><b>02</b><p><strong>Research tested in the real world.</strong> His work spans investment analysis, portfolio management, risk, and peer-reviewed financial research.</p></div>
            <div><b>03</b><p><strong>An investor-protection lens.</strong> Expert-witness work sharpened his attention to excessive fees, poor products, weak plan design, and avoidable harm.</p></div>
            <div><b>04</b><p><strong>A quarterback mindset.</strong> He helps the sponsor coordinate advisor, recordkeeper, TPA, and other professionals around a clearer plan.</p></div>
          </div>
          <div className="source-links">
            <a href="https://business.gwu.edu/brian-j-henderson" target="_blank" rel="noreferrer">GW faculty profile ↗</a>
            <a href="https://srcmadvisors.com/about/srcm-team/advisors/" target="_blank" rel="noreferrer">Advisor profile ↗</a>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="shell">
          <div className="section-heading heading-light">
            <div><div className="eyebrow eyebrow-light"><span /> A lower-friction path</div><h2>From uncertainty to an informed decision.</h2></div>
          </div>
          <div className="process-flow">
            {processSteps.map(({ icon: Icon, title, body }, index) => (
              <article key={title}>
                <div className="process-node"><Icon aria-hidden="true" /><span>0{index + 1}</span></div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="insights-section" id="insights">
        <div className="shell insights-heading">
          <div className="eyebrow"><span /> Three questions worth asking</div>
          <h2>Clear thinking for decisions that carry weight.</h2>
        </div>
        <div className="shell insight-grid">
          {insightCards.map(({ icon: Icon, label, title, body, href }) => (
            <Link className="insight-card" href={href} key={title}>
              <div className="insight-visual"><span>{label}</span><Icon aria-hidden="true" /></div>
              <div className="insight-body"><h3>{title}</h3><p>{body}</p><strong>Read more (3 min read) <span>→</span></strong></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="final-cta" id="final-review">
        <div className="shell final-cta-inner">
          <div><div className="eyebrow eyebrow-light"><span /> Start with a second opinion</div><h2>Your plan may be fine.<br /><em>Let’s know.</em></h2></div>
          <div><p>In 30 minutes, get a sharper view of the questions your plan should be able to answer.</p><Link className="button button-light" href="/book">Book the free fee & fiduciary review <span>↗</span></Link></div>
        </div>
      </section>

      <section className="wealth-teaser shell" id="wealth">
        <div className="wealth-scene"><img src="/brian-client-meeting.png" alt="Brian Henderson speaking with a couple about their financial plans" /></div>
        <div>
          <div className="eyebrow"><span /> The same rigor, applied personally</div>
          <h2>Personal wealth deserves the same disciplined thinking.</h2>
        </div>
        <div className="wealth-copy">
          <p>Business owners and plan leaders who saw Brian’s rigor on their company retirement plans began asking him to bring that same discipline to their personal finances. They wanted his investment know-how, a disciplined pursuit of strong long-term outcomes, and hands-on service from someone who already understood how they think.</p>
          <Link className="text-link large" href="/wealth">Explore personal wealth management <span>↗</span></Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
