export default {
  name: "Yooz",
  tagline: "European SMB AP tool with strong Sage integration. Thin on vertical depth.",
  overview: "Yooz is a cloud AP automation platform with French origins, serving 7,000+ customers across 50+ countries. They have a strong partnership with Sage (certified Tech Partner, 1,500+ Sage clients). They target SMB organizations with a volume-based pricing model at roughly $0.99/invoice. Their OCR is built on 35+ years of document processing heritage, but accuracy gets mixed reviews on complex invoice formats.",
  whenYouSee: [
    "Prospect is a Sage user who found Yooz through the Sage marketplace",
    "Prospect mentions they want a 'simple, affordable' AP tool without deep vertical requirements",
    "Prospect is evaluating budget-friendly AP options and mentions unlimited users as a priority",
  ],
  weWin: [
    { area: "Invoice capture accuracy on complex formats", detail: "Yooz's OCR struggles with non-standard layouts, handwritten invoices, and multi-page documents. G2 reviews cite 'OCR technology often misreads invoices or struggles with vendor identification.' Ottimate's AI is trained on 10+ years of hospitality, grocery, and healthcare invoice data." },
    { area: "Vertical-specific workflows", detail: "Yooz is purely horizontal. No USALI compliance, no DSD handling, no Item Validation, no PHI redaction. If the prospect operates in hospitality, grocery, or healthcare, Yooz cannot match our workflow depth." },
    { area: "Reporting and analytics", detail: "Yooz consistently scores low on reporting: 'lacks advanced predictive analytical and reporting features.' Ottimate provides AP-specific dashboards, cost recovery reporting, and vertical KPIs." },
    { area: "US-based support", detail: "Yooz's HQ is in France with a smaller US office. Users report a disconnect between US and France-based teams. Ottimate is US-headquartered with dedicated support for our verticals." },
  ],
  theyWin: [
    { area: "Sage integration depth", detail: "Yooz is the only AP automation that pushes invoice images directly into Sage. Selected as Sage Intacct's 'AP Automation Preferred' partner. If the prospect is on Sage and values tight native integration over vertical depth, Yooz has a real edge." },
    { area: "Pricing simplicity", detail: "Volume-based pricing at roughly $0.99/invoice with unlimited users and no setup fees. For SMB organizations processing 200-500 invoices/month, this is genuinely affordable." },
    { area: "Quick time-to-value", detail: "Yooz markets a free 15-day trial and claims zero-template setup for 80% of invoices. For prospects who want to test before committing, this low-friction entry point is appealing." },
  ],
  trapQuestions: [
    `"What kinds of invoices are you processing? Standard vendor invoices, or do you also deal with multi-page invoices, handwritten line items, or non-standard formats? Because capture accuracy on complex documents varies a lot between tools."`,
    `"Do you need AP workflows that are built for your specific industry, or are you looking for a general-purpose tool? Because hospitality GL structures and grocery DSD invoices have requirements that generic AP tools don't handle."`,
    `"How important is reporting to your Controller or CFO? Can you pull the AP analytics you need for month-end close and board reporting without exporting to Excel?"`,
  ],
  landmine: `"Ask any AP vendor to process five of your most complex invoices, the ones with the most line items, the messiest formatting, or the trickiest GL coding. That's where the real difference between tools shows up."`,
};
