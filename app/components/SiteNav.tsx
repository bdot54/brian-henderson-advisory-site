import Link from "next/link";

export function SiteNav() {
  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <Link className="brand" href="/" aria-label="Brian Henderson home">
          <span className="brand-mark">BH</span>
          <span><b>Brian Henderson</b><small>PhD, CFA</small></span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/#review">401(k) advisory</Link>
          <Link href="/#why-brian">Why Brian</Link>
          <Link href="/wealth">Personal Wealth Management</Link>
        </nav>
        <Link className="nav-cta" href="/book">Free 30-minute review <span>↗</span></Link>
      </div>
    </header>
  );
}
