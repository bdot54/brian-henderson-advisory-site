import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div className="footer-brand-block">
          <Link className="brand brand-light" href="/">
            <img className="brand-symbol" src="/brian-henderson-mark-reversed.png" alt="" />
            <span className="brand-copy">
              <strong>Brian Henderson</strong>
              <small>PhD, CFA · Financial Planner</small>
            </span>
          </Link>
          <p>I help plan sponsors uncover hidden costs and overlooked risks - without spending hours chasing providers or analyzing reports, backed by objective benchmarking and hands-on support from an expert.</p>
        </div>
        <div className="footer-links">
          <div><small>Explore</small><Link href="/#review">401(k) Advisory</Link><Link href="/wealth">Personal Wealth Management</Link><Link href="/#why-brian">About Brian</Link></div>
          <div><small>Connect</small><Link href="/book">Book a review</Link><a href="mailto:bjhndrsn@gmail.com">bjhndrsn@gmail.com</a><a href="https://www.linkedin.com/in/brian-henderson-63647950/" target="_blank" rel="noreferrer">LinkedIn ↗</a><span>Reston, Virginia</span></div>
        </div>
      </div>
      <div className="shell disclosure">
        <p>Information on this site is educational and is not individualized investment, tax, or legal advice. Investing involves risk, including possible loss of principal. Advisory services and fiduciary capacity are defined by the applicable client agreement. Brian Henderson is affiliated with Signature Resources Capital Management, LLC.</p>
        <div><span>© 2026 Brian Henderson</span><a href="https://srcmadvisors.com/disclosures/" target="_blank" rel="noreferrer">Disclosures ↗</a></div>
      </div>
    </footer>
  );
}
