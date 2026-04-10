export default {
  quickHitter: {
    headline: "Tipalti was built for global mass payments, not invoice intelligence. If your operation is in [VERTICAL], their platform wasn't designed with your workflows in mind.",
    support: "Worth asking: Are you seeing sync errors between Tipalti and your accounting system, or places where your team built workarounds just to make the data match up?",
  },
  name: "Tipalti",
  tagline: "Built for mass payments, not invoice intelligence. Strong globally, shallow vertically.",
  overview: "Tipalti is a mid-market AP and payment automation platform. Their core strength is global mass payments (200+ countries, 120+ currencies) and tax compliance (W-9/1099 collection). They added invoice automation later. They target tech, media, and e-commerce companies. No dedicated hospitality, grocery, or healthcare features.",
  whenYouSee: [
    "Prospect mentions global payments, contractor payouts, or 1099 compliance as a primary need",
    "Prospect is in tech, media, or e-commerce (Tipalti's core customer base)",
    "Prospect says they're evaluating 'Tipalti and Bill.com' together (common pairing in horizontal AP evaluations)",
  ],
  weWin: [
    { area: "Data sync reliability", detail: "Tipalti users report persistent sync errors between Tipalti and their ERP (especially NetSuite). One incumbent described 'gazillion error codes' with no way to tell system errors from fixable ones. Ottimate's real-time validation prevents these bottlenecks, especially at month-end close." },
    { area: "Vendor statement reconciliation", detail: "Tipalti has no automated vendor statement matching. For organizations with 100+ vendors, this means 10-20 hours/month of manual reconciliation. Ottimate automates this entirely." },
    { area: "Vertical-specific workflows", detail: "Tipalti is purely horizontal. No food cost validation, no USALI compliance, no DSD invoice handling, no PHI redaction. Their capture AI is not trained on restaurant distributor or healthcare invoice formats." },
    { area: "In-system GL matching", detail: "Tipalti performs matching outside the ERP, which one CFO described as 'outsourcing' their matching process. Ottimate integrates at the GL level for multi-dimensional allocation without moving data outside your system of record." },
  ],
  theyWin: [
    { area: "Global mass payments", detail: "If the prospect pays vendors or contractors in 50+ countries, Tipalti's payment infrastructure is genuinely deep. 200+ countries, 120+ currencies, built-in FX. We don't compete on international payments at this scale." },
    { area: "Tax compliance engine", detail: "Tipalti has a KPMG-approved tax engine with automated W-9/W-8 collection and 1099 preparation. If tax compliance is the primary buying criterion, they have a real edge." },
    { area: "Incumbent stickiness", detail: "Tipalti incumbents renew even when dissatisfied because switching costs feel high. If the prospect is already on Tipalti, you need a strong ROI case to justify the switch, not just feature comparison." },
  ],
  trapQuestions: [
    `"When your AP system flags an error on an invoice, how clear is it whether that's something your team can fix or a system-level issue? Because that distinction determines whether your people spend 5 minutes or 5 hours on it."`,
    `"Are you syncing AP data back to your accounting system in real-time, or on a batch schedule? Because batch sync creates bottlenecks at month-end that you don't see the rest of the month."`,
    `"How do you reconcile vendor statements today? Is there an automated comparison, or is someone manually matching what you paid against what the vendor says you owe?"`,
  ],
  landmine: `"One thing to check with any AP vendor: ask how their system handles a sync failure at month-end close. If it throws an error code and waits for someone to investigate, that's hours you don't have during close week."`,
};
