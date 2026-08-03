import { InsightArticle } from "../InsightArticle";

export default function ComplexityInsight() {
  return (
    <InsightArticle
      category="Discipline"
      title="When complexity stops helping"
      dek="Complexity is not sophistication wearing glasses. Sometimes it is simply extra machinery asking to be maintained."
    >
      <p className="article-lead">Retirement plans naturally involve rules, providers, investments, payroll files, testing, notices, and committees. Some complexity is unavoidable. The trouble begins when every new problem produces another fund, feature, report, or meeting—and nobody can explain what the growing collection is meant to accomplish.</p>

      <h2>Useful complexity earns its keep</h2>
      <p>A feature is useful when it solves a specific problem and its benefit exceeds the cost of operating, explaining, and monitoring it. Automatic enrollment can improve participation. A thoughtful match can influence savings behavior. A carefully chosen investment structure can make decisions easier for participants.</p>
      <p>Those are purposeful choices. They have an owner, an objective, and a way to judge whether they are working.</p>

      <h2>Ornamental complexity leaves clues</h2>
      <p>Warning signs include overlapping investment options, reports nobody reads, service arrangements nobody can describe, and committee conversations dominated by jargon instead of decisions. Another clue: the sentence “We have always done it this way,” the corporate equivalent of finding an unidentified container in the office refrigerator.</p>
      <p>Complexity also becomes risky when it blurs accountability. If the advisor assumes the recordkeeper is handling something, the recordkeeper assumes the administrator owns it, and the sponsor assumes everyone else has it covered, the plan has not created a team. It has created a relay race without a baton.</p>

      <h2>Apply a simple test</h2>
      <ul>
        <li>What problem does this feature, fund, report, or meeting solve?</li>
        <li>Who owns it?</li>
        <li>How will we know whether it is working?</li>
        <li>What would happen if we simplified or removed it?</li>
      </ul>

      <h2>The practical takeaway</h2>
      <p>A well-run plan does not have to be bare-bones. It should be understandable. Keep complexity that serves participants, improves oversight, or solves a real operational need. Question the rest. Simplicity is not the absence of expertise; it is often the result of it.</p>
    </InsightArticle>
  );
}
