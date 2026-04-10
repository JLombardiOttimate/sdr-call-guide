export default {
  quickHitter: {
    headline: "Stampli is more of an out-of-the-box solution, so it's really not specifically designed for [VERTICAL]. Ottimate is specifically designed for the needs of [VERTICAL].",
    support: "Worth asking: Can I ask, where is your team still having to work around Stampli because it doesn't quite fit how your industry operates?",
  },
  name: "Stampli",
  tagline: "Good at collaboration, weak on vertical depth",
  overview: "Stampli positions itself as a communication-centric AP platform. Strong on approver collaboration features and a clean UI. They sell across industries without deep vertical specialization.",
  whenYouSee: [
    "Prospect mentions they want better approval workflows or collaboration between approvers",
    "Prospect is in a general vertical (not hospitality, grocery, or healthcare specifically)",
    "Deal 1 in the meta-analysis: Stampli was present alongside Tipalti in a senior living deal",
  ],
  weWin: [
    { area: "Vertical depth", detail: "Stampli is horizontal. We have purpose-built workflows for hospitality (USALI, multi-property GL), grocery (Item Validation, DSD, cost file matching), and healthcare (PHI redaction, HIPAA compliance). They can't match this." },
    { area: "AI-first capture", detail: "Ottimate uses AI from day one with no templates or stencils. Stampli relies more on structured data ingestion. For complex, variable invoices (especially grocery DSD), our capture is more accurate out of the box." },
    { area: "Line-item detail", detail: "We capture and validate at the line-item level. This is what powers Item Validation in grocery and PO matching in hospitality. Stampli's line-item capabilities are thinner." },
    { area: "Cost recovery", detail: "Our duplicate detection and vendor overcharge flagging directly recover dollars. Stampli focuses more on workflow speed, not cost identification." },
  ],
  theyWin: [
    { area: "Collaboration UX", detail: "Stampli's approval interface is clean and built around conversation threads on invoices. If the prospect's primary pain is approver communication, they'll like what they see." },
    { area: "Broad ERP support", detail: "Stampli integrates with a wide range of ERPs including some niche ones. If the prospect is on an unusual ERP, check our integration list first." },
    { area: "Brand recognition", detail: "Stampli has strong marketing presence and may already be on the prospect's shortlist. Don't dismiss them. Acknowledge and redirect to vertical fit." },
  ],
  trapQuestions: [
    `"Is your AP tool built for [vertical] specifically, or is it a general-purpose platform? Because the workflows in [vertical] are different from what a horizontal tool is designed for."`,
    `"When you look at your invoices, are you validating at the line-item level, or just at the header? Because that's where the cost leaks hide."`,
    `"Does your current system catch duplicate invoices and vendor overcharges before payment, or is that something your team does manually?"`,
  ],
  landmine: `"One thing to pressure-test with any vendor: ask them to show you how they handle [vertical-specific workflow]. If they can't demo that natively, it's because they don't have it."`,
};
