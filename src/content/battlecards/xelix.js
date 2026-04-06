export default {
  name: "Xelix",
  tagline: "AP audit overlay, not AP automation. Complementary, not competitive.",
  overview: "Xelix is a UK-based AP audit and analytics platform that bolts onto existing ERP and AP systems. It detects duplicate invoices, fraud, and payment errors using ML-based anomaly detection. It does NOT handle invoice capture, approval workflows, or payments. Think of it as an audit layer on top of AP, not a replacement for AP automation.",
  whenYouSee: [
    "Prospect mentions AP audit, duplicate detection, or fraud prevention as a standalone need",
    "Prospect is an enterprise organization (1,000+ employees) already running SAP, Oracle, or Workday",
    "Prospect's CFO or Internal Audit team is driving the evaluation (not the AP Manager)",
  ],
  weWin: [
    { area: "Complete AP automation", detail: "Xelix doesn't process invoices. No capture, no OCR, no approval routing, no GL coding, no payments. They detect problems after the fact. Ottimate prevents problems during processing and catches duplicates before payment, not after." },
    { area: "Built-in cost recovery", detail: "Ottimate's duplicate detection, vendor overcharge flagging, and price variance alerts are native to the invoice processing workflow. Xelix bolts on after the invoice is already in the system. We catch it earlier." },
    { area: "Vertical-specific intelligence", detail: "Xelix is purely horizontal with no industry-specific detection rules. Ottimate's AI is trained on hospitality, grocery, and healthcare invoice patterns, which means we catch vendor pricing anomalies specific to your industry." },
    { area: "One vendor, not two", detail: "If the prospect needs AP automation AND audit capabilities, Ottimate delivers both in one platform. Xelix requires a separate AP automation tool underneath, which means two vendors, two integrations, two contracts." },
  ],
  theyWin: [
    { area: "Deep anomaly detection", detail: "Xelix's ML-based anomaly detection across entire invoice histories is deeper than what most AP automation tools offer. If the prospect has a large, mature AP operation and specifically needs post-processing audit analytics, Xelix is purpose-built for that." },
    { area: "Vendor statement reconciliation", detail: "Xelix claims up to 90% automation on vendor statement reconciliation. This is a genuine strength for large enterprises with thousands of vendor relationships." },
    { area: "Enterprise pedigree", detail: "Xelix targets large enterprises (SAP, Oracle, Workday environments). Their $160M Series B from Insight Partners signals investment in enterprise sales. If the prospect is a Fortune 500 company, Xelix may already be on their radar." },
  ],
  trapQuestions: [
    `"Are you looking for something to catch invoice problems before you pay, or after? Because that's the difference between AP automation with built-in controls and a separate audit tool you layer on top."`,
    `"Do you already have AP automation in place and need better audit coverage? Or are you still processing invoices manually and need the full workflow automated first?"`,
    `"If you're evaluating both AP automation and AP audit tools, have you considered whether one platform could do both? Because managing two systems means two integrations and two sets of data to reconcile."`,
  ],
  landmine: `"When you're evaluating your AP stack, start with the question: do I need to fix how invoices get processed, or do I need to audit what's already been processed? If it's the first one, that's AP automation. The audit piece should be built in, not bolted on."`,
};
