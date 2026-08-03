import { InsightArticle } from "../InsightArticle";

export default function PlanSponsorReviewInsight() {
  return (
    <InsightArticle
      category="Plan sponsors"
      title="What plan sponsors should review"
      dek="A good plan review is not a ceremonial reading of last quarter’s returns followed by sandwiches. It is an oversight process."
    >
      <p className="article-lead">A retirement plan changes even when nobody intentionally changes it. Assets grow, employees come and go, fees drift, investment options evolve, laws move, and service relationships age. A plan that was sensible three years ago may still be sensible today - but “probably” is not much of a fiduciary process.</p>

      <h2>Review the plan from six angles</h2>
      <p><strong>Fees.</strong> Understand the all-in cost, who pays it, and whether it remains reasonable for a plan of similar size and complexity.</p>
      <p><strong>Investments.</strong> Check performance, risk, expenses, manager changes, and whether every option still has a clear job in the lineup. More funds do not necessarily mean more choice; sometimes they mean more homework.</p>
      <p><strong>Participation and design.</strong> Look at enrollment, deferral rates, match usage, loans, leakage, and whether plan features encourage the behavior the company actually wants.</p>
      <p><strong>Providers and service.</strong> Evaluate responsiveness, accuracy, participant support, education, and whether responsibilities are clear across the advisor, recordkeeper, and third-party administrator.</p>
      <p><strong>Governance.</strong> Confirm that meetings, decisions, policies, and follow-up items are documented. Memory is not a filing system.</p>
      <p><strong>Participant experience.</strong> Ask whether employees can understand the plan, use its tools, get answers, and make informed decisions without decoding a small novel of jargon.</p>

      <h2>Use a calendar, not a crisis</h2>
      <p>The cleanest approach is a repeatable annual calendar. Some items need quarterly attention; others can be reviewed annually or after a material change. Assign an owner, define the evidence needed, record the decision, and note the next action.</p>
      <p>This does not require the committee to become full-time retirement-plan experts. It requires a process that makes important questions difficult to forget and easy to revisit.</p>

      <h2>The practical takeaway</h2>
      <p>A disciplined review helps sponsors distinguish between a plan that merely operates and one that is being actively overseen. The difference is not more meetings. It is better questions, clearer ownership, and fewer surprises.</p>
    </InsightArticle>
  );
}
