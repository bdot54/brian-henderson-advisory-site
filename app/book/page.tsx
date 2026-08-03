import type { Metadata } from "next";
import { BookForm } from "../components/BookForm";
import { Footer } from "../components/Footer";
import { SiteNav } from "../components/SiteNav";

export const metadata: Metadata = { title: "Book a Free 401(k) Review", description: "Request a free 30-minute 401(k) fee and fiduciary review with Brian Henderson, PhD, CFA." };

export default function BookPage() {
  return (
    <main>
      <SiteNav />
      <section className="book-page shell">
        <div className="book-copy">
          <div className="eyebrow"><span /> Free 30-minute fee & fiduciary review</div>
          <h1>Let’s find the question your plan most needs to answer.</h1>
          <p>Tell Brian a little about your plan and what prompted the review. He’ll follow up to schedule a focused, no-obligation conversation.</p>
          <div className="book-expectations">
            <div><span>01</span><p><b>A candid first look</b>No canned presentation. Start with your concern and the plan you have.</p></div>
            <div><span>02</span><p><b>Clear information needs</b>Know which documents or data would support a more complete review.</p></div>
            <div><span>03</span><p><b>A sensible next step</b>Understand whether to go deeper, improve in place, or leave things alone.</p></div>
          </div>
          <small className="book-note">This review is educational and is not legal, tax, or individualized investment advice. No advisory relationship is created by submitting this form.</small>
        </div>
        <BookForm />
      </section>
      <Footer />
    </main>
  );
}
