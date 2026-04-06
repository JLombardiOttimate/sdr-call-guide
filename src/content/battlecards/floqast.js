export default {
  name: "FloQast",
  tagline: "Accounting close management tool, not AP automation. Different problem, different buyer.",
  overview: "FloQast is the #1 accounting close management platform on G2, used by 3,000+ teams to streamline month-end close. They've added a workflow module called FloQast Ops that can track AP-related tasks, but it does not include invoice capture, coding, approval routing, or payments. FloQast and Ottimate solve different problems for different buyers.",
  whenYouSee: [
    "Prospect's Controller mentions FloQast in the context of month-end close acceleration",
    "Prospect says they're 'looking at FloQast for AP' (they may be confusing close management with AP automation)",
    "Prospect is evaluating how to reduce close cycle time, and AP processing is one bottleneck in that process",
  ],
  weWin: [
    { area: "Actual AP automation", detail: "FloQast Ops is a checklist and task tracker for accounting teams. It does NOT capture invoices, code them to GL, route approvals, or execute payments. Their own case studies show customers using MineralTree and NetSuite for actual AP processing alongside FloQast." },
    { area: "Invoice-to-payment lifecycle", detail: "Ottimate handles the complete AP workflow from invoice receipt through payment. FloQast tells you whether the AP task got done on time. These are fundamentally different capabilities." },
    { area: "AP-specific cost recovery", detail: "FloQast has no duplicate detection, no vendor overcharge flagging, no price variance alerts. It's a workflow tracker, not an invoice intelligence platform." },
  ],
  theyWin: [
    { area: "Close management (their actual product)", detail: "FloQast is genuinely excellent at accounting close management, reconciliation tracking, and compliance workflows. If the prospect's primary pain is close cycle time and AP is just one contributor, FloQast addresses the broader problem." },
    { area: "Controller relationship", detail: "FloQast has deep relationships with Controllers and CAOs. If the Controller already uses FloQast for close, they may default to exploring FloQast Ops before considering a dedicated AP tool." },
    { area: "EY partnership", detail: "FloQast announced a strategic partnership with EY in January 2026. For enterprise prospects where EY is the auditor, this creates a trusted recommendation path." },
  ],
  trapQuestions: [
    `"When you say you're looking at AP automation, do you mean automating the actual invoice processing, or tracking whether AP tasks get completed on time? Because those are different problems with different solutions."`,
    `"Is your primary pain the close cycle itself, or the AP processing that feeds into the close? Because if invoices are backed up going into month-end, a close management tool won't fix the upstream bottleneck."`,
    `"Does the tool you're evaluating actually capture and code invoices, or does it just give you a dashboard showing whether your team finished the AP work?"`,
  ],
  landmine: `"If your month-end close is slow because AP processing is backed up, the fix is automating AP, not adding a dashboard that shows the backlog. Fix the source, not the symptom."`,
};
