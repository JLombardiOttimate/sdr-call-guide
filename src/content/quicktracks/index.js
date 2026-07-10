import grocery from "./grocery";
import pharmacy from "./pharmacy";
import restaurant from "./restaurant";
import hotels from "./hotels";
import countryClubs from "./country-clubs";
import seniorLiving from "./senior-living";
import dental from "./dental";

export const QUICK_VERTICALS = [
  { id: "grocery", label: "Grocery", group: "Retail", icon: "🛒", data: grocery },
  { id: "pharmacy", label: "Pharmacy", group: "Retail", icon: "💊", data: pharmacy },
  { id: "restaurant", label: "Restaurant", group: "Hospitality", icon: "🍽️", data: restaurant },
  { id: "hotels", label: "Hotels", group: "Hospitality", icon: "🏨", data: hotels },
  { id: "country-clubs", label: "Country Clubs", group: "Hospitality", icon: "⛳", data: countryClubs },
  { id: "senior-living", label: "Senior Living", group: "Healthcare", icon: "🏥", data: seniorLiving },
  { id: "dental", label: "Dental / DSO", group: "Healthcare", icon: "🦷", data: dental },
];

export function getQuickTrackData(verticalId) {
  return QUICK_VERTICALS.find(v => v.id === verticalId)?.data || null;
}

export const INTRO_APPROACHES = {
  indirect: {
    label: "Indirect Approach",
    subtitle: "Via HQ phone number to gatekeepers, admins, or office managers",
    lines: [
      `"Hi, this is [SDR Name] -- I was looking to speak with [Prospect Name & Position]; is he/she currently available?"`,
      `"Hi, this is [SDR Name] -- I was looking to speak with whoever is overseeing accounts payables and bill payments. Would that be [Prospect Name & Role]?"`,
    ],
  },
  direct: {
    label: "Direct Approach",
    subtitle: "Via direct line or cell to influencers, champions, or decision makers",
    lines: [
      `"Hey [Prospect Name], this is [SDR Name], calling with Ottimate. Not sure if you're familiar -- but does Ottimate ring a bell?"`,
      `"Hey [Prospect Name], this is [SDR Name], calling. How are you? I'm with Ottimate -- not sure if you're familiar, but does Ottimate ring a bell?"`,
      `"Hey [Prospect Name], this is [SDR Name] -- I was looking to speak with the current [Role/Position]. Would that be you?"`,
    ],
  },
};

export const PAIN_POINTS = [
  {
    pain: "High Volume Manual Data Entry",
    desc: "Staff wastes hours manually keying in invoices, leading to resource strain and delayed month-end closes.",
    solution: "AI-Powered Instant Capture",
    solutionDesc: "Deep-learning AI instantly captures header, footer, and line-item details with 98% accuracy, reducing processing time by 80%.",
  },
  {
    pain: "Coding Errors & Rework",
    desc: "Manual entry inevitably causes typos and incorrect GL categorizations.",
    solution: "Automated GL Mapping",
    solutionDesc: "Ottimate's AI learns the business's unique AP setup and automatically codes data down to the line item across multiple dimensions.",
  },
  {
    pain: "Cost Discrepancies & Price Increases",
    desc: "Vendors slip in subtle price increases, or quantities received don't match the invoice, destroying profit margins.",
    solution: "Catalog Price Match & PO Matching",
    solutionDesc: "Automated 2- and 3-way matching down to the SKU level, flagging variances between the invoice, PO, and pre-negotiated price catalogs.",
  },
  {
    pain: "Bottlenecked Approvals",
    desc: "Disjointed workflows across multiple locations cause invoices to get lost, requiring staff to manually chase down managers.",
    solution: "Workaround-Free Approvals",
    solutionDesc: "Dynamic, rule-based routing automatically sends invoices to the correct stakeholders based on unlimited custom dimensions.",
  },
  {
    pain: "Delayed Payments & Vendor Strain",
    desc: "Manual check runs, messy vendor management, and disorganized schedules lead to late payments and strained supplier relationships.",
    solution: "VendorPay & Cash Back",
    solutionDesc: "Schedule ACH, check, or virtual card payments in one click, earning cash back rebates on spend while protecting cash flow.",
  },
  {
    pain: "Integration & Sync Failures",
    desc: "Disconnected systems require manual CSV exporting and backfilling into the ERP, creating data silos.",
    solution: "Seamless Bidirectional Sync",
    solutionDesc: "Direct API integrations with QuickBooks Online, NetSuite, and Sage Intacct automatically sync data and source documents in real time.",
  },
  {
    pain: "Fraud & Security Risks",
    desc: "Duplicate invoices, fake documents, and non-compliant spend easily slip through manual checks.",
    solution: "Proactive AI Anomaly Detection",
    solutionDesc: "The Otti AI Copilot dynamically analyzes spending patterns to automatically flag duplicates, anomalies, and potential fraud before payment.",
  },
];
