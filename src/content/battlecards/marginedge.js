export default {
  quickHitter: {
    headline: "MarginEdge is strong on food cost analytics, but their invoice processing relies on human analysts with a 24-48 hour turnaround. Ottimate processes invoices in real time with AI.",
    support: "Worth asking: Has that 24-48 hour processing turnaround ever caused a problem at month-end close, or when a vendor needed to know a payment was on the way?",
  },
  name: "MarginEdge",
  tagline: "Restaurant cost management with AP features. Deep on food cost, shallow on AP automation.",
  overview: "MarginEdge is a restaurant-specific platform for invoice processing, food cost tracking, recipe costing, and inventory management. Founded by restaurant operators (Wasabi, Bonefish Grill backgrounds). Serves 7,000-11,000 restaurants. They process invoices using a hybrid of AI and human analysts with restaurant experience, which means 24-48 hour turnaround. Strong on food cost intelligence, but limited on AP automation depth.",
  whenYouSee: [
    "Prospect is a restaurant operator comparing back-of-house tools (often alongside xtraCHEF)",
    "Prospect mentions food cost tracking, recipe costing, or vendor price alerts as their primary need",
    "Prospect is on a POS system other than Toast (MarginEdge integrates with 60+ POS systems vs. xtraCHEF's Toast-only)",
  ],
  weWin: [
    { area: "Full AP automation", detail: "MarginEdge has basic approval workflows but no three-way matching, no PO management, no duplicate detection, no multi-tier approval chains, and no AP aging dashboards. Ottimate automates the full AP lifecycle from capture through payment." },
    { area: "Multi-entity complexity", detail: "MarginEdge works for restaurant groups, but Ottimate is built for operators with 10-100+ locations needing different GL structures, approval chains, and cost centers per entity. Our multi-entity support handles the complexity that comes with scale." },
    { area: "Cross-vertical coverage", detail: "MarginEdge is restaurant-only. If the prospect also operates hotels, senior living facilities, or grocery, they need separate tools for each. Ottimate covers hospitality, grocery, and healthcare in one platform." },
    { area: "Processing speed", detail: "MarginEdge relies on human analysts for invoice review, which means 24-48 hour turnaround. Ottimate's AI processes invoices in real-time. When you're running month-end close, that time difference matters." },
    { area: "Payment flexibility", detail: "MarginEdge includes basic bill pay (ACH and check) but has no virtual card rebate program. Ottimate's VendorPay offers check, ACH, and virtual card with a rebate model that puts money back in your pocket." },
  ],
  theyWin: [
    { area: "Food cost intelligence", detail: "MarginEdge has deep restaurant-specific analytics: dynamic recipe costing with auto-updated ingredient prices, menu engineering (Stars/Puzzles/Plow Horses matrix), theoretical vs. actual food cost analysis, and daily controllable P&L. These are genuine strengths for food-focused operators." },
    { area: "60+ POS integrations", detail: "MarginEdge integrates with 60+ POS systems (vs. xtraCHEF's Toast-only). For operators not on Toast, MarginEdge is the more flexible restaurant-specific option." },
    { area: "Operator-founded credibility", detail: "Founded by restaurant operators with 40+ years of combined experience. MarginEdge ranks #7 on Glassdoor Best Places to Work (small/medium businesses). The team understands restaurant pain points firsthand." },
  ],
  trapQuestions: [
    `"Is your biggest need food cost management and recipe costing, or is it really about automating the full AP process: capture, coding, multi-level approvals, and vendor payments? Because those are different problems."`,
    `"How many locations are you running, and does each one have a different GL structure and approval chain? Because the tools built for 3 restaurants don't always scale to 15 or 30."`,
    `"How fast do you need invoices processed? If you're running month-end close and can't wait 24-48 hours for human review, real-time AI processing might matter more than you think."`,
  ],
  landmine: `"If you're evaluating back-of-house tools, separate the food cost question from the AP automation question. Great recipe costing doesn't mean great invoice processing, approvals, and payments. Make sure the tool you choose handles the full workflow, not just the food cost piece."`,
};
