export default {
  quickHitter: {
    headline: "Sage is a great GL, but it was never built to be an AP automation platform. That's exactly why Sage has 40+ AP automation partners in their own marketplace.",
    support: "Worth asking: Where does your team end up working outside of Sage, like in email or spreadsheets, just to get the AP process done?",
  },
  name: "Sage Intacct",
  tagline: "Strong GL, weak AP. Most Sage shops need a better front-end for invoices.",
  overview: "Sage Intacct is a cloud ERP platform with native AP capabilities. It excels at multi-entity financial consolidation and dimensional accounting, but the AP module is a generic add-on, not a purpose-built AP automation tool. Sage has 40+ AP automation partners in their own marketplace, which tells you everything about where their native AP falls short.",
  whenYouSee: [
    "Prospect mentions GL dimensions, cost centers, or location codes (sophisticated GL = likely Sage Intacct)",
    "Prospect says 'separate instances' or 'separate databases' (likely Sage 50 with multi-instance pain)",
    "Prospect has a Systems Analyst or Finance Systems Manager involved in discovery calls",
  ],
  weWin: [
    { area: "Multi-location GL allocation", detail: "Sage's native AP uses percentage-based allocation only. Ottimate's AI handles invoice-line-item allocation automatically across locations, departments, and cost centers. This is the #1 reason Sage shops evaluate us." },
    { area: "Approval workflow automation", detail: "Sage's approval routing is generic and often pushes approvals to email outside the system. Ottimate offers location-level permissions, delegation, stand-in approvers, and conditional routing by dollar amount, vendor, or GL account." },
    { area: "Vendor statement reconciliation", detail: "Sage has no automated vendor statement matching. Ottimate reconciles statement invoices against uploaded docs automatically. This is a feature Sage cannot replicate natively." },
    { area: "Implementation speed", detail: "Sage ERP migrations take 4-6+ months. Ottimate goes live in 4-7 weeks for organizations already on Sage Intacct, because we integrate on top of the existing GL." },
    { area: "AI invoice capture", detail: "Sage's AP module assumes structured data or manual entry. Ottimate handles complex, multi-page, and handwritten invoices (especially utility bills and DSD invoices) without templates." },
  ],
  theyWin: [
    { area: "Single-vendor simplicity", detail: "If the prospect is already on Sage for GL, the 'fewer vendors' argument is real. Adding Ottimate means another relationship to manage. Acknowledge this and redirect to what Sage AP actually cannot do." },
    { area: "Deep ERP-native embedding", detail: "Prospects with heavy Sage customizations (custom dimensions, SuiteApps, workflows) may feel friction adding an external tool. If they have simple AP needs and low volume, Sage's native module may be sufficient." },
    { area: "AICPA endorsement and brand trust", detail: "Sage Intacct is the only AICPA-preferred financial management solution. That credibility carries weight with Controllers and CFOs who trust the accounting profession's recommendations." },
  ],
  trapQuestions: [
    `"How many locations or entities does your GL span? Because Sage's native AP handles single-entity allocation fine, but multi-location invoice splits with different GL coding per line item is where it breaks down."`,
    `"When you get a utility bill that needs to be split across 10 properties, how does that work today? Is someone manually calculating the percentages and keying each line?"`,
    `"Does Sage handle your approval routing the way you need it, or are approvals happening over email outside the system?"`,
  ],
  landmine: `"When you're evaluating any AP solution, ask them to demo a multi-location invoice where each line item codes to a different department, cost center, and GL account. That's the real test of whether the tool can handle your complexity."`,
};
