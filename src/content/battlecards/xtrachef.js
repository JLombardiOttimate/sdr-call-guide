export default {
  name: "xtraCHEF by Toast",
  tagline: "Restaurant food cost tool with basic AP features. POS-locked to Toast.",
  overview: "xtraCHEF is Toast's back-of-house platform for invoice scanning, recipe costing, and food cost management. Acquired by Toast in 2021. The full feature set only works with Toast POS, making it non-viable for operators on other point-of-sale systems. It's a food cost management tool with AP capabilities, not an AP automation platform with food cost features.",
  whenYouSee: [
    "Prospect is a restaurant operator already on Toast POS",
    "Prospect mentions food cost tracking, recipe costing, or inventory management as their primary need",
    "Prospect is evaluating 'the Toast ecosystem' or mentions bundling POS with back-of-house",
  ],
  weWin: [
    { area: "Works with any POS and ERP", detail: "xtraCHEF's full features only work with Toast POS. Ottimate integrates with Sage Intacct, NetSuite, QuickBooks, R365, and any major accounting system. If the prospect isn't on Toast, xtraCHEF isn't an option." },
    { area: "AP automation depth", detail: "xtraCHEF has basic approval workflows but lacks multi-tier approval chains, PO matching, duplicate detection, sophisticated exception handling, or payment automation. Ottimate is purpose-built for the full AP lifecycle." },
    { area: "Multi-unit capabilities", detail: "G2 reviewers rate xtraCHEF poorly for multi-unit: 'Bad data, very difficult to manage, not set up for multi-units.' Ottimate is built for operators running 10-100+ locations with different GL structures per entity." },
    { area: "Support quality", detail: "xtraCHEF has a 3.1 out of 10 support score on G2. When invoice processing breaks at scale, support responsiveness matters. Ottimate provides hands-on support with dedicated account management." },
    { area: "Data quality", detail: "Prospects who migrated from xtraCHEF report data quality issues: inventory catalogs imported as 'big data dumps' that created downstream GL problems. Ottimate's AI validates at the line-item level before data hits your accounting system." },
  ],
  theyWin: [
    { area: "POS-to-cost integration (Toast users only)", detail: "For single-location or small multi-unit operators already on Toast, the POS-to-food-cost view is seamless. Sales data flows directly into recipe costing. We don't replicate this POS integration." },
    { area: "Recipe and inventory management", detail: "xtraCHEF has genuine depth in recipe costing, menu engineering, and inventory management with mobile offline counting. If food cost analytics is the primary need, not AP automation, they have features we don't." },
    { area: "Bundling economics", detail: "Toast bundles xtraCHEF with POS, payroll, and online ordering. The 'one vendor' pitch is appealing for smaller operators who want simplicity over depth." },
  ],
  trapQuestions: [
    `"Are you on Toast for your point-of-sale, or a different system? Because some back-of-house tools only work with specific POS platforms, which limits your flexibility if you ever switch."`,
    `"How many locations are you running? Because the tools that work great for 2-3 restaurants often break down when you're managing 10-15 locations with different GL structures and approval chains."`,
    `"Is your primary need food cost tracking and recipe management, or is it really about automating the full AP process: capture, coding, approvals, and payments? Because those are different tools solving different problems."`,
  ],
  landmine: `"Before you commit to any vendor, ask whether their AP features work independently of their POS system. If they only work inside one ecosystem, you're making a technology decision today that limits your options for years."`,
};
