export default {
  name: "Ramp",
  tagline: "Corporate card company expanding into AP. Different product, different fit.",
  overview: "Ramp started as a corporate card and spend management platform. They've added AP automation as a feature within their broader suite. They lead with 'free software' positioning and target tech-forward, growth-stage companies. They're expanding into mid-market and increasingly showing up in our deals.",
  whenYouSee: [
    "Prospect mentions corporate cards, spend management, or 'free' AP tools",
    "Prospect is tech-forward or startup-adjacent in their thinking",
    "Prospect asks about cashback rebates or working capital optimization as part of their AP evaluation",
  ],
  weWin: [
    { area: "Purpose-built AP vs. bolted-on AP", detail: "Ramp's AP is a feature inside a card product. Ours is a purpose-built AP automation platform with 10+ years of AI training data. For multi-entity operators with complex GL structures, the depth difference shows up fast." },
    { area: "Multi-entity complexity", detail: "Ramp is built for single-entity companies. When you have 15 properties with different GL structures, approval chains, and cost centers, Ramp's AP module doesn't hold up. This is our strongest wedge." },
    { area: "Vertical workflows", detail: "Same as Stampli: USALI compliance, PHI redaction, Item Validation, DSD handling. Ramp has none of this. They don't know what a DSD invoice looks like." },
    { area: "Invoice capture quality", detail: "Our AI handles complex, multi-page, handwritten, and non-standard invoices (especially restaurant and grocery). Ramp's capture is optimized for clean, standard corporate invoices." },
    { area: "Vendor payment flexibility", detail: "VendorPay handles check, ACH, and virtual card with a rebate model. Ramp's payment rails are tied to their corporate card ecosystem. If the prospect's vendors don't accept cards, Ramp's value proposition shrinks." },
  ],
  theyWin: [
    { area: "Price (perception)", detail: "Ramp leads with 'free software.' The reality: their free tier only integrates with QuickBooks and Xero. NetSuite and Sage Intacct require the paid Plus tier ($15/user/month + platform fee). For a 50-user hospitality group on Sage Intacct, that's $750+/month, not free. But the SDR needs to be prepared for the initial 'free' objection." },
    { area: "Modern UI / brand", detail: "Ramp has a slick product, $32B valuation, and strong brand with tech companies. 4.8/5 on G2 with 2,100+ reviews. Don't trash the product. Acknowledge it and redirect to vertical fit." },
  ],
  trapQuestions: [
    `"How many entities or properties are you running? Because that's where the complexity of AP really shows up, and not every tool handles multi-entity GL mapping natively."`,
    `"Are your vendors card-friendly, or do most of them require check and ACH? That matters because some 'free' AP tools only work well if your vendors accept card payments."`,
    `"When you think about AP automation, are you looking for something that bolts onto your card program, or a standalone system that's built specifically for [vertical] invoice workflows?"`,
  ],
  landmine: `"Ask any vendor you're evaluating to demo a multi-entity invoice with split GL coding across three cost centers. If they can't do it live, they can't do it at all."`,
};
