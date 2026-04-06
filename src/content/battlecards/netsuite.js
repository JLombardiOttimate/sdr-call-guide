export default {
  name: "NetSuite AP",
  tagline: "Strong ERP, weak native AP. Even their own partners recommend third-party AP tools.",
  overview: "Oracle NetSuite is a cloud ERP serving 43,000+ organizations. AP capabilities are included in the base platform (Bill Capture for OCR, SuiteApprovals for workflows, SuiteBanking for payments). But NetSuite's own implementation partners openly recommend third-party AP tools, and their new 'Intelligent Payment Automation' is powered by BILL, a third-party AP provider, effectively admitting native payments were insufficient.",
  whenYouSee: [
    "Prospect says 'we're on NetSuite' or mentions NetSuite as their ERP",
    "Prospect is PE-backed and mentions 'platform standardization' or 'fund-level mandate' (PE-bundled NetSuite is a deal-killer signal)",
    "Prospect mentions SquareWorks or another NetSuite-native AP SuiteApp",
  ],
  weWin: [
    { area: "Multi-page invoice handling", detail: "NetSuite's Bill Capture is single-invoice focused and struggles with multi-page documents. One hospitality prospect said 'I just don't think the technology is quite there' after testing NetSuite on food supplier invoices spanning 5-10 pages. Ottimate handles these natively." },
    { area: "Payment orchestration", detail: "NetSuite requires a separate payment run per bank account, and you have to manually route vendors to the correct bank. One prospect noted 'Netsuite requires that you do a payment run per bank account. You have to send multiple bank files.' Ottimate consolidates payments across multiple banks in one run." },
    { area: "Approval workflow flexibility", detail: "NetSuite's SuiteApprovals requires scripting or expensive consultants for anything beyond basic dollar-threshold rules. Conditional routing by vendor, GL account, or department needs SuiteFlow customization at $150-350/hour. Ottimate offers this out of the box." },
    { area: "Vertical-specific workflows", detail: "No NetSuite SuiteSuccess edition exists for hospitality, grocery, or healthcare AP. No food cost validation, no DSD handling, no USALI compliance, no PHI redaction. Ottimate is purpose-built for these verticals." },
    { area: "Vendor statement reconciliation", detail: "NetSuite has no automated vendor statement matching. When we demoed this to one prospect, she said 'That happens a lot,' confirming the pain is real but unaddressed in NetSuite." },
  ],
  theyWin: [
    { area: "ERP-native convenience", detail: "NetSuite AP lives inside the system of record. No integration, no data sync, no second vendor. For prospects with simple AP needs and low volume, this matters." },
    { area: "PE-level bundling", detail: "PE-backed organizations often purchase NetSuite with bundled AP as part of platform standardization. When the AP decision is made at the fund level, not the local finance team, it's nearly impossible to override. If you hear 'AP is bundled into our NetSuite contract,' this deal is likely not winnable." },
    { area: "SquareWorks (embedded AP)", detail: "SquareWorks is a purpose-built AP tool that lives inside NetSuite. One prospect chose it specifically because 'the invoice lived in Netsuite.' When the AP tool is embedded in the ERP, the 'fewer vendors' argument is hard to beat." },
  ],
  trapQuestions: [
    `"Is AP automation bundled into your NetSuite contract, or will that be a separate buying decision? Because if it's bundled, the decision may already be made above your team."`,
    `"How many bank accounts do you run payment batches through? If you're doing separate payment runs per bank, that's a process Ottimate can consolidate into one."`,
    `"When you get a complex invoice, like a 10-page food distributor invoice, does NetSuite's Bill Capture handle that accurately? Or does someone still have to manually enter line items?"`,
  ],
  landmine: `"Here's a good test for any ERP's native AP: ask how it handles a multi-entity invoice where each line item codes to a different subsidiary, department, and GL account, all in one approval workflow. If it requires custom scripting, that's a sign the native AP wasn't built for your complexity."`,
};
