export default {
  name: "AvidXchange",
  tagline: "Legacy AP platform strong in real estate and senior living. Weak on line-item intelligence and EDI.",
  overview: "AvidXchange is a dedicated AP automation and payment platform, recently taken private by TPG and Corpay for $2.2B. Revenue of $439M with 240+ ERP integrations and a payment network of 965,000+ suppliers. They target real estate, healthcare, construction, and mid-market organizations. They also have 'AvidSuite for Yardi,' a purpose-built Yardi integration. Their biggest vulnerabilities are slow customer support, payment processing delays, and an inability to handle complex multi-line invoices with automatic GL coding.",
  whenYouSee: [
    "Prospect says 'we're on Avid' or 'AvidXchange' as their current AP tool, especially in senior living or healthcare",
    "Prospect is on Yardi and mentions 'AvidSuite' or has AvidXchange layered on top of their property management system",
    "Prospect mentions being locked into an AP contract but frustrated with manual GL coding and payment delays",
  ],
  weWin: [
    { area: "Line-item GL intelligence", detail: "AvidXchange cannot automatically split GL codes across line items on complex invoices. One prospect said 'this is something that Avid said they absolutely can do for us and they absolutely could not' about multi-line item GL splitting. Ottimate's AI handles 30-120+ line item invoices with automatic GL coding per line." },
    { area: "EDI vendor integration", detail: "AvidXchange has limited EDI feeds for broadline vendors. As one of our reps put it: 'EDI is typically a big one that jumps out to groups in hospitality because it's something not a lot of automation systems do out there today. Avid doesn't do it.' Ottimate integrates 150+ major vendors with real-time electronic feeds." },
    { area: "Invoice capture accuracy", detail: "AvidXchange uses human 'indexers' for data entry, and users report frequent errors: invoices misrouted to exception queues, incorrect coding, and missed line-item descriptions. Ottimate's AI captures line-item detail without human indexing." },
    { area: "Vertical-specific workflows", detail: "AvidXchange is horizontal. No USALI compliance, no food cost validation, no DSD handling, no Item Validation, no PHI redaction. For hospitality, grocery, and healthcare operators, our vertical depth is the differentiator." },
    { area: "Payment reliability", detail: "AvidXchange users consistently report payment processing delays that damage vendor relationships. Ottimate's VendorPay processes check, ACH, and virtual card payments reliably with real-time status tracking." },
  ],
  theyWin: [
    { area: "Lower per-invoice cost", detail: "AvidXchange typically comes in at $0.88-$1.40/invoice vs. Ottimate's higher price point. One prospect cited '$3,500/month with Avid' vs. '$6,000/month with Ottimate.' You need a clear ROI story to overcome this gap." },
    { area: "Payment network scale", detail: "AvidPay Network connects 965,000+ suppliers and converts 40%+ of checks to e-payments. For organizations processing thousands of payments monthly, the vendor adoption rate on their network is a real advantage." },
    { area: "Contract lock-in", detail: "AvidXchange uses annual contracts with exit clauses that create switching friction. One prospect said 'we need to better understand our Avid exit clause.' Expect delayed timelines. Plan your engagement around contract renewal dates." },
  ],
  trapQuestions: [
    `"How many line items are on your typical invoice? Because some AP tools capture the header but can't automatically code each line item to the right GL account. If you're manually coding 30-120 lines per invoice, that's where the real cost is hiding."`,
    `"Are your broadline vendors (food distributors, supply companies) sending invoices electronically through EDI, or is your AP team still scanning paper and PDFs? Because that's one of the biggest time differences between AP tools."`,
    `"When Avid processes a payment, how often do your vendors tell you they didn't receive it on time? Because payment delays create vendor friction that shows up in your costs, not your AP metrics."`,
  ],
  landmine: `"Ask any AP vendor to process one of your most complex invoices, the one with 50+ line items and multiple GL accounts, and show you how each line gets coded automatically. If they need a human indexer to do it, you're paying for manual labor wrapped in software."`,
};
