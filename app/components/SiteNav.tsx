import Link from "next/link";

type SiteNavProps = {
  accent?: "blue" | "green";
};

export function SiteNav({ accent = "blue" }: SiteNavProps) {
  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <Link className="brand" href="/" aria-label="Brian Henderson home">
          <img
            className="brand-symbol"
            src={accent === "green" ? "/brian-henderson-mark-wealth.png" : "/brian-henderson-mark-navy.png"}
            alt=""
          />
          <span className="brand-copy">
            <strong>Brian Henderson</strong>
            <small>PhD, CFA · Wealth Manager</small>
          </span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/retirement-plans">401(k) Advisory</Link>
          <Link href="/wealth">Personal Wealth Management</Link>
          <Link href="/retirement-plans#why-brian">Why Brian</Link>
        </nav>
        <Link className="nav-cta" href="/book">Free 30-minute review <span>↗</span></Link>
      </div>
    </header>
  );
}
