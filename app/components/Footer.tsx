import Link from "next/link";

type FooterProps = {
  context?: "plan" | "wealth";
};

const footerSummary = {
  plan: "I help plan sponsors uncover hidden costs and overlooked risks - without spending hours chasing providers or analyzing reports, backed by objective benchmarking and hands-on support from an expert.",
  wealth: "I help individuals and families build a clear path to retirement - without sorting through investments, taxes, and major financial decisions alone, backed by decades of financial expertise and hands-on, one-on-one support.",
};

export function Footer({ context = "plan" }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div className="footer-brand-block">
          <Link className="brand brand-light" href="/">
            <img className="brand-symbol" src="/brian-henderson-mark-reversed.png" alt="" />
            <span className="brand-copy">
              <strong>Brian Henderson</strong>
              <small>PhD, CFA · Wealth Manager</small>
            </span>
          </Link>
          <p>{footerSummary[context]}</p>
        </div>
        <div className="footer-links">
          <div><small>Explore</small><Link href="/#review">401(k) Advisory</Link><Link href="/wealth">Personal Wealth Management</Link><Link href="/#why-brian">About Brian</Link></div>
          <div><small>Connect</small><Link href="/book">Book a review</Link><a href="mailto:bjhndrsn@gmail.com">bjhndrsn@gmail.com</a><a href="https://www.linkedin.com/in/brian-henderson-63647950/" target="_blank" rel="noreferrer">LinkedIn ↗</a><span>Oakton, Virginia</span></div>
        </div>
      </div>
      <div className="shell disclosure">
        <p>Information on this site is educational and is not individualized investment, tax, or legal advice. Investing involves risk, including possible loss of principal. Advisory services and fiduciary capacity are defined by the applicable client agreement. Brian Henderson is affiliated with Signature Resources Capital Management, LLC.</p>
        <div><span>© 2026 Brian Henderson</span><a href="https://srcmadvisors.com/disclosures/" target="_blank" rel="noreferrer">Disclosures ↗</a></div>
      </div>
    </footer>
  );
}
