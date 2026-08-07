import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Planning & Retirement Plan Advisory",
  description: "Choose personal wealth management or 401(k)/403(b) plan advisory with Brian J. Henderson, PhD, CFA.",
};

export default function WelcomePage() {
  return (
    <main className="gateway-page">
      <header className="gateway-header shell">
        <Link className="brand" href="/" aria-label="Brian Henderson home">
          <img className="brand-symbol" src="/brian-henderson-mark-navy.png" alt="" />
          <span className="brand-copy">
            <strong>Brian Henderson</strong>
            <small>PhD, CFA · Wealth Manager</small>
          </span>
        </Link>
        <span className="gateway-location">Oakton, Virginia</span>
      </header>

      <section className="gateway-shell shell">
        <div className="gateway-portrait">
          <div className="gateway-photo-accent" aria-hidden="true" />
          <img src="/brian-financial-advisor-headshot-v3.png" alt="Brian J. Henderson, PhD, CFA" />
          <div className="gateway-photo-caption">
            <strong>Brian J. Henderson</strong>
            <span>Finance professor · CFA charterholder · Wealth manager</span>
          </div>
        </div>

        <div className="gateway-content">
          <div className="eyebrow"><span /> Welcome</div>
          <h1>Who is driving your portfolio? Brian is ready to take the wheel.</h1>
          <p className="gateway-question">What kind of financial guidance are you looking for?</p>

          <div className="gateway-options" aria-label="Choose the kind of financial guidance you need">
            <Link className="gateway-option gateway-option-plan" href="/choose/retirement-plans">
              <span className="gateway-option-label">For employers &amp; plan leaders</span>
              <strong>401(k)/403(b) plan advisory</strong>
              <p>Evaluate fees, investments, plan design, provider service, and fiduciary oversight.</p>
              <span className="gateway-option-action">Explore retirement plan advisory <b>↗</b></span>
            </Link>

            <Link className="gateway-option gateway-option-wealth" href="/choose/wealth">
              <span className="gateway-option-label">For individuals &amp; families</span>
              <strong>Personal financial planning &amp; wealth management</strong>
              <p>Bring your retirement, investments, taxes, and major financial decisions into one clear plan.</p>
              <span className="gateway-option-action">Explore personal wealth management <b>↗</b></span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="gateway-footer shell">
        <span>Independent thinking. Involved, one-on-one guidance.</span>
        <span>© 2026 Brian Henderson</span>
      </footer>
    </main>
  );
}
