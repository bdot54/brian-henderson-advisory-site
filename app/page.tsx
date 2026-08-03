import Link from "next/link";
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
    number: "01",
    title: "Financial advisor",
    owner: "Brian’s role",
    body: "Helps the plan sponsor evaluate investments, fees, providers, plan design, and the decisions that connect the whole retirement-plan team.",
  },
  {
    number: "02",
    title: "Recordkeeper",
    owner: "Separate provider",
    body: "Maintains participant accounts, processes contributions and distributions, and provides the employee-facing platform and statements.",
  },
  {
    number: "03",
    title: "TPA",
    owner: "Separate provider",
    body: "Handles plan administration such as testing, eligibility, census work, Form 5500 support, and plan-document coordination.",
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
          <p className="microcopy">No obligation. No provider change required. Start with a candid second opinion.</p>
        </div>

        <div className="hero-visual">
          <div className="portrait-frame">
            <img src="/brian-henderson.jpg" alt="Brian Henderson, PhD, CFA" />
            <div className="portrait-caption">
              <span>Brian Henderson</span>
              <small>PhD · CFA · Professor of Finance</small>
            </div>
          </div>
          <div className="hero-note note-top"><b>01</b> Academic depth<br />made practical.</div>
          <div className="hero-note note-bottom"><b>02</b> One advisor helping<br />quarterback the team.</div>
        </div>
      </section>

      <section className="proof-rail" aria-label="Brian's credentials">
        <div className="shell proof-grid">
          <div><strong>PhD</strong><span>Finance</span></div>
          <div><strong>CFA</strong><span>Charterholder</span></div>
          <div><strong>Professor</strong><span>George Washington University</span></div>
          <div><strong>Researcher</strong><span>Peer-reviewed financial research</span></div>
          <div><strong>Expert witness</strong><span>Complex financial matters</span></div>
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

      <section className="review-section shell" id="review">
        <div className="review-intro">
          <div className="offer-mark">30</div>
          <div>
            <div className="eyebrow"><span /> The offer</div>
            <h2>Thirty useful minutes.<br />A much clearer next step.</h2>
          </div>
          <p>
            This is a fiduciary-minded first look—not a generic sales call. Brian will ask the right questions, surface what deserves attention, and explain what your next move could be.
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
          <div className="outcome-kicker">You leave knowing</div>
          <p>what looks sound, what deserves deeper analysis, and whether Brian is the right person to help.</p>
          <Link className="button button-dark" href="/book">Claim your free review <span>↗</span></Link>
        </div>
      </section>

      <section className="roles-section" id="roles">
        <div className="shell">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span /> Less confusion, better coordination</div>
              <h2>Your 401(k) has a team.<br />Brian helps it work like one.</h2>
            </div>
            <p>A financial advisor is not the recordkeeper or the third-party administrator. Brian’s role is to help the plan sponsor see the whole field and coordinate sound decisions across the team.</p>
          </div>
          <div className="role-list">
            {roles.map((role) => (
              <article key={role.title}>
                <span className="role-number">{role.number}</span>
                <div><small>{role.owner}</small><h3>{role.title}</h3></div>
                <p>{role.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="difference-section shell" id="why-brian">
        <div className="difference-photo">
          <img src="/brian-henderson.jpg" alt="Brian Henderson" />
          <div className="photo-index">BH / 01</div>
        </div>
        <div className="difference-copy">
          <div className="eyebrow"><span /> What makes Brian different</div>
          <h2>He learned finance deeply—then saw where it can fail people.</h2>
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
          <div className="process-grid">
            <article><span>01</span><h3>Talk</h3><p>Share what you know, what feels off, and what you want the plan to do better.</p></article>
            <article><span>02</span><h3>Review</h3><p>Brian identifies the documents and data needed to examine fees, investments, service, and design.</p></article>
            <article><span>03</span><h3>Compare</h3><p>See how the plan stacks up and where the evidence points to a meaningful opportunity.</p></article>
            <article><span>04</span><h3>Decide</h3><p>Keep what works, improve what does not, and choose the next step without pressure.</p></article>
          </div>
        </div>
      </section>

      <section className="wealth-teaser shell" id="wealth">
        <div className="wealth-number">02</div>
        <div>
          <div className="eyebrow"><span /> A separate service for individuals</div>
          <h2>Personal wealth deserves the same disciplined thinking.</h2>
        </div>
        <div className="wealth-copy">
          <p>For individuals and families, Brian offers financial planning and investment management grounded in the same evidence, transparency, and investor-first perspective.</p>
          <Link className="text-link large" href="/wealth">Explore personal wealth management <span>↗</span></Link>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-inner">
          <div><div className="eyebrow eyebrow-light"><span /> Start with a second opinion</div><h2>Your plan may be fine.<br /><em>Let’s know.</em></h2></div>
          <div><p>In 30 minutes, get a sharper view of the questions your plan should be able to answer.</p><Link className="button button-light" href="/book">Book the free fee & fiduciary review <span>↗</span></Link></div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
