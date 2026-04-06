export default {
  name: "Restaurant365",
  tagline: "All-in-one restaurant ERP. Broad but shallow on AP. Users supplement with dedicated AP tools.",
  overview: "Restaurant365 is a restaurant management platform covering accounting, AP, inventory, purchasing, workforce management, and payroll. $132M revenue, 40,000-50,000 locations. Backed by KKR and L Catterton. They win on the 'single platform' argument for restaurant operators. But their AP module is one piece of a large platform, not a specialized tool, and users often supplement it with third-party AP automation.",
  whenYouSee: [
    "Prospect is a multi-unit restaurant operator evaluating 'all-in-one' platforms",
    "Prospect says 'we're on R365' or mentions Restaurant365 as their accounting system",
    "Prospect mentions item master management, recipe costing, or food cost tracking alongside AP needs",
  ],
  weWin: [
    { area: "AP capture quality", detail: "R365's 'AP Capture AI' is limited to standard invoices and credit memos. It cannot handle receipts, vendor statements, or multi-invoice files. Their paid 'AP Capture Pro' service uses humans to manually enter invoices within 24 hours, which is a tacit admission the AI isn't sufficient." },
    { area: "Ottimate works ON TOP of R365", detail: "Multiple Ottimate customers (Barcade, Cherry Hills CC, Hillsboro Club) run both R365 and Ottimate together. R365 handles the GL, Ottimate handles AP automation. We're complementary, not competitive. This is a powerful positioning: 'You don't have to choose.'" },
    { area: "Approval workflow depth", detail: "R365's approval routing is basic. Ottimate offers multi-tier approvals, conditional routing by dollar amount, vendor, GL account, or department, plus delegation and stand-in approver logic." },
    { area: "Statement reconciliation", detail: "R365 does not automate vendor statement reconciliation. Ottimate does. For operators with 100+ vendors, this saves hours every month." },
    { area: "Item master bottleneck", detail: "R365 users report that item creation is a major bottleneck. When vendors change item names or pack sizes, it requires manual rework. One prospect described 50% of invoices 'sitting there because we need to create the vendor items.'" },
  ],
  theyWin: [
    { area: "All-in-one platform", detail: "R365's strongest argument is single-platform simplicity: accounting, AP, inventory, purchasing, workforce, payroll. For operators who value one vendor over best-of-breed depth, this is compelling." },
    { area: "Seamless GL posting", detail: "Since R365 IS the accounting system, AP transactions post directly to the GL with no integration friction. This is the all-in-one argument's strongest technical point." },
    { area: "Restaurant-specific features", detail: "Vendor contract price violation alerts, direct integration with 60+ food/beverage vendors for automated invoice import, and food cost data flowing into recipe costing. These are genuine vertical capabilities that horizontal AP tools lack." },
  ],
  trapQuestions: [
    `"Are you using R365's native AP capture, or the paid human entry service? Because if you're paying extra for someone to manually key invoices, that tells you something about the AI's accuracy on your invoice types."`,
    `"How much time does your team spend creating and maintaining vendor items in R365? Because we hear from a lot of R365 users that item master management is where the real bottleneck lives."`,
    `"Have you considered keeping R365 for accounting and adding a dedicated AP automation layer on top? Some of our customers run both and say it gives them the best of both worlds."`,
  ],
  landmine: `"Ask R365 to show you how their AP capture handles a complex multi-page distributor invoice with item substitutions and pack size changes. If they route it to their paid human entry service, that's your answer about the AI."`,
};
