import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "../components/Footer";
import { SiteNav } from "../components/SiteNav";

type InsightArticleProps = {
  category: string;
  title: string;
  dek: string;
  children: ReactNode;
};

export function InsightArticle({ category, title, dek, children }: InsightArticleProps) {
  return (
    <main>
      <SiteNav />
      <article className="article-page">
        <header className="article-hero shell">
          <Link className="article-back" href="/retirement-plans#insights">← All insights</Link>
          <div className="eyebrow"><span /> {category} · 3 min read</div>
          <h1>{title}</h1>
          <p>{dek}</p>
        </header>
        <div className="article-body shell">{children}</div>
        <div className="article-return shell">
          <p>Clearer questions usually lead to better decisions.</p>
          <Link className="text-link large" href="/retirement-plans#insights">Read the other insights <span>→</span></Link>
        </div>
      </article>
      <Footer />
    </main>
  );
}
