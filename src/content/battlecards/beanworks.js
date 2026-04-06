export default {
  name: "Beanworks / Quadient",
  tagline: "Legacy AP tool entrenched in clubs. Slow, clunky, and losing customers to us.",
  overview: "Beanworks is an AP automation platform now owned by Quadient (acquired 2021 for $100M). It also powers Sage APA, a white-label version sold through Sage's marketplace. Historically strong in hospitality, especially country clubs and golf clubs. Shows up as the incumbent in roughly 27% of competitive hospitality deals. Core capabilities are invoice capture, approval workflows, and basic payments, but performance and feature gaps are well-documented by prospects who've switched.",
  whenYouSee: [
    "Prospect is a country club, golf club, or resort that mentions 'Beanworks' or 'Quadient' as their current AP tool",
    "Prospect mentions 'Sage APA' or 'Sage AP Automation' (this IS Beanworks, white-labeled through Sage's channel)",
    "Prospect complains about slow system performance, clunky reconciliation, or unresponsive support on their current AP tool",
  ],
  weWin: [
    { area: "System performance", detail: "Beanworks is consistently described as 'sluggish' and 'rough' by users. One prospect reported invoices not loading for 3 days, with 30-second page load times. Ottimate processes invoices in real-time with no latency issues at scale." },
    { area: "Reconciliation workflow", detail: "One CFO who switched to Ottimate said having to 'flip back and forth between Beanworks to find an invoice to double check against the check is a big fat waste of time.' Ottimate keeps everything in one workflow." },
    { area: "Statement reconciliation", detail: "Beanworks has no automated vendor statement matching. Ottimate reconciles vendor statements against invoices automatically. This feature alone has been called our 'fan favorite' by corporate AP teams." },
    { area: "Payment flexibility", detail: "Beanworks has limited payment orchestration and no ACH optimization. Ottimate's VendorPay handles check, ACH, and virtual card with a rebate model. For clubs still cutting 200+ checks a month, this is immediate ROI." },
    { area: "Support responsiveness", detail: "Multiple Beanworks users report slow support: one prospect submitted a ticket a month prior and received a response unrelated to the question. Ottimate provides hands-on, responsive support." },
  ],
  theyWin: [
    { area: "Club vertical relationships", detail: "Beanworks has deep historical relationships with country club and golf club CFOs. They know the space and have a large installed base. Don't underestimate the power of the existing relationship." },
    { area: "Contract lock-in", detail: "Beanworks uses annual contracts that create switching friction. If the prospect's contract runs through year-end, expect a delayed timeline. Plan your engagement around renewal dates." },
    { area: "Sage channel distribution", detail: "As the engine behind Sage APA, Beanworks gets distribution through Sage's marketplace and VAR network. Prospects on Sage may discover Sage APA before they discover Ottimate." },
  ],
  trapQuestions: [
    `"When you need to look up an invoice to reconcile against a check, how many clicks and how many systems does that take? Because that workflow should be instant, not a scavenger hunt."`,
    `"How fast does your current AP system load? If you're waiting 10-20 seconds per page, multiply that by every invoice your team touches in a day."`,
    `"Does your current tool reconcile vendor statements automatically, or is someone on your team spending hours manually matching what you paid against what the vendor says you owe?"`,
  ],
  landmine: `"Ask any AP vendor to load a page with 50 invoices in front of you during the demo. If it takes more than 2 seconds, imagine what that feels like 100 times a day for your AP team."`,
};
