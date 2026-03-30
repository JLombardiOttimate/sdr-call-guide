import { useState } from "react";

/* ───────── DATA: VERTICALS, ROLES, TRIGGERS ───────── */

const VERTICALS = [
  { id: "hospitality", label: "Hospitality", icon: "🏨" },
  { id: "grocery", label: "Grocery", icon: "🛒" },
  { id: "healthcare", label: "Healthcare", icon: "🏥" },
];

const ROLES = [
  { id: "controller", label: "Controller", sub: "Primary target · 50% win rate" },
  { id: "cfo", label: "CFO", sub: "Financial buyer · 60% win rate" },
  { id: "ap_manager", label: "AP Manager / Clerk", sub: "Secondary champion · 40% win rate" },
  { id: "owner_ops", label: "Owner / GM / Ops", sub: "Economic buyer · 70% win rate when engaged" },
];

const TRIGGERS = [
  { id: "generic", label: "No known trigger", sub: "Use when you don't know the trigger yet", tag: "DISCOVERY", color: "#6B7280" },
  { id: "staff_turnover", label: "Staff loss or turnover", sub: "AP person left, team can't keep up", tag: "MOST COMMON", color: "#D85A30" },
  { id: "growth", label: "Growth event", sub: "Acquisitions, new locations, new entities", tag: "HIGH IMPACT", color: "#185FA5" },
  { id: "audit", label: "Audit or compliance pressure", sub: "External deadline forcing the fix", tag: "FORCING FUNCTION", color: "#534AB7" },
  { id: "erp", label: "ERP migration", sub: "Already changing systems, natural on-ramp", tag: "ON-RAMP", color: "#0F6E56" },
  { id: "month_close", label: "Month-end close pain", sub: "Overtime, errors, frustration at the limit", tag: "EMOTIONAL", color: "#854F0B" },
  { id: "vendor_friction", label: "Vendor payment friction", sub: "Late fees, missed discounts, margin leakage", tag: "FINANCIAL", color: "#D85A30" },
  { id: "new_leader", label: "New financial leader", sub: "Arrives with conviction, looking for a vendor", tag: "CHAMPION-LED", color: "#185FA5" },
  { id: "competitor_frustration", label: "Frustration with current solution", sub: "Price, service, or features not cutting it", tag: "DISPLACEMENT", color: "#534AB7" },
];

/* ───────── DATA: OBJECTIONS ───────── */

const OBJECTIONS = [
  {
    objection: "We already automate our AP.",
    subtext: "They don't think you can help.",
    responses: {
      controller: `"That's great. Most controllers I talk to have some level of automation. The question is whether it's saving you money or just saving you time. 50% of finance teams say their current AP tools deliver little to no cost savings. Is your current system catching duplicate invoices, flagging vendor overcharges, and giving you real-time spend visibility?"`,
      cfo: `"Good. That tells me you already see the value of automating AP. The question is whether your current tool is protecting margin or just moving paper faster. 50% of finance teams say their AP tools deliver little to no cost savings. Is your system catching cost leaks before payment?"`,
      ap_manager: `"That's good to hear. A lot of AP teams I talk to have some automation but still spend most of their day on exceptions, coding errors, and chasing approvals. Is that the case for you, or is your tool handling most of that?"`,
    },
  },
  {
    objection: "We don't have the budget right now.",
    subtext: "They don't see enough value yet.",
    responses: {
      controller: `"I totally get that. Here's the thing: Ottimate typically pays for itself. Our customers catch an average of $136K per month in duplicate invoices alone. If we can show you where your AP process is leaking money, the conversation shifts from 'can we afford this' to 'can we afford not to.' Would 20 minutes be worth it to just look at the numbers?"`,
      cfo: `"I understand. Budgets are tight. What we're hearing from CFOs is that AP automation isn't a cost line, it's a margin protection tool. Would 20 minutes be worth it to see the math for your operation?"`,
      ap_manager: `"I hear you. Most AP teams feel that way. What if I told you this could free up 20+ hours a week for your team? Would it be worth 20 minutes to explore that, and maybe loop in your Controller to see the cost side?"`,
    },
  },
  {
    objection: "We're happy with our current vendor.",
    subtext: "They don't see a reason to switch.",
    responses: {
      default: `"I hear that a lot. You might be happy with the tool, but is it catching cost leaks and duplicates? 50% of teams say their current tools deliver little to no cost savings. That's the gap. Would 20 minutes be worth it to see if there's money on the table you're missing?"`,
    },
  },
  {
    objection: "We have too much on our plate right now.",
    subtext: "Timing feels wrong.",
    responses: {
      default: `"I totally understand. Here's my thought: if your AP process is eating up time and resources, that's exactly why now might be the right time. What if we could free up 20+ hours a week for your team? It'd only take 20 minutes to explore."`,
    },
  },
  {
    objection: "Your solution seems complex.",
    subtext: "They're afraid of implementation pain.",
    responses: {
      default: `"Actually, it's the opposite. Our implementation is designed to be fast and low-pain. Average onboarding is 4-6 weeks. Most of our customers see ROI in 90 days. We handle the heavy lifting; your team just validates. Would 20 minutes to walk through the implementation process help?"`,
    },
  },
  {
    objection: "Send me an email / some info.",
    subtext: "They want to get off the phone.",
    responses: {
      default: `"Happy to. So I send you something relevant, can I ask one quick question? [Insert trigger-specific question]. That way I can make sure what I send actually applies to your situation instead of a generic overview."`,
    },
  },
];

/* ───────── DATA: COMPETITOR BATTLECARDS ───────── */

const BATTLECARDS = {
  stampli: {
    name: "Stampli",
    tagline: "Good at collaboration, weak on vertical depth",
    overview: "Stampli positions itself as a communication-centric AP platform. Strong on approver collaboration features and a clean UI. They sell across industries without deep vertical specialization.",
    whenYouSee: [
      "Prospect mentions they want better approval workflows or collaboration between approvers",
      "Prospect is in a general vertical (not hospitality, grocery, or healthcare specifically)",
      "Deal 1 in the meta-analysis: Stampli was present alongside Tipalti in a senior living deal",
    ],
    weWin: [
      { area: "Vertical depth", detail: "Stampli is horizontal. We have purpose-built workflows for hospitality (USALI, multi-property GL), grocery (Item Validation, DSD, cost file matching), and healthcare (PHI redaction, HIPAA compliance). They can't match this." },
      { area: "AI-first capture", detail: "Ottimate uses AI from day one with no templates or stencils. Stampli relies more on structured data ingestion. For complex, variable invoices (especially grocery DSD), our capture is more accurate out of the box." },
      { area: "Line-item detail", detail: "We capture and validate at the line-item level. This is what powers Item Validation in grocery and PO matching in hospitality. Stampli's line-item capabilities are thinner." },
      { area: "Cost recovery", detail: "Our duplicate detection and vendor overcharge flagging directly recover dollars. Stampli focuses more on workflow speed, not cost identification." },
    ],
    theyWin: [
      { area: "Collaboration UX", detail: "Stampli's approval interface is clean and built around conversation threads on invoices. If the prospect's primary pain is approver communication, they'll like what they see." },
      { area: "Broad ERP support", detail: "Stampli integrates with a wide range of ERPs including some niche ones. If the prospect is on an unusual ERP, check our integration list first." },
      { area: "Brand recognition", detail: "Stampli has strong marketing presence and may already be on the prospect's shortlist. Don't dismiss them. Acknowledge and redirect to vertical fit." },
    ],
    trapQuestions: [
      `"Is your AP tool built for [vertical] specifically, or is it a general-purpose platform? Because the workflows in [vertical] are different from what a horizontal tool is designed for."`,
      `"When you look at your invoices, are you validating at the line-item level, or just at the header? Because that's where the cost leaks hide."`,
      `"Does your current system catch duplicate invoices and vendor overcharges before payment, or is that something your team does manually?"`,
    ],
    landmine: `"One thing to pressure-test with any vendor: ask them to show you how they handle [vertical-specific workflow]. If they can't demo that natively, it's because they don't have it."`,
  },
  ramp: {
    name: "Ramp",
    tagline: "Corporate card company expanding into AP. Different product, different fit.",
    overview: "Ramp started as a corporate card and spend management platform. They've added AP automation as a feature within their broader suite. They lead with 'free software' positioning and target tech-forward, growth-stage companies. They're expanding into mid-market and increasingly showing up in our deals.",
    whenYouSee: [
      "Prospect mentions corporate cards, spend management, or 'free' AP tools",
      "Prospect is tech-forward or startup-adjacent in their thinking",
      "McCaffreys deal: Ramp appeared but was never actively neutralized. This is a growing threat.",
    ],
    weWin: [
      { area: "Purpose-built AP vs. bolted-on AP", detail: "Ramp's AP is a feature inside a card product. Ours is a purpose-built AP automation platform with 10+ years of AI training data. For multi-entity operators with complex GL structures, the depth difference shows up fast." },
      { area: "Multi-entity complexity", detail: "Ramp is built for single-entity companies. When you have 15 properties with different GL structures, approval chains, and cost centers, Ramp's AP module doesn't hold up. This is our strongest wedge." },
      { area: "Vertical workflows", detail: "Same as Stampli: USALI compliance, PHI redaction, Item Validation, DSD handling. Ramp has none of this. They don't know what a DSD invoice looks like." },
      { area: "Invoice capture quality", detail: "Our AI handles complex, multi-page, handwritten, and non-standard invoices (especially restaurant and grocery). Ramp's capture is optimized for clean, standard corporate invoices." },
      { area: "Vendor payment flexibility", detail: "VendorPay handles check, ACH, and virtual card with a rebate model. Ramp's payment rails are tied to their corporate card ecosystem. If the prospect's vendors don't accept cards, Ramp's value proposition shrinks." },
    ],
    theyWin: [
      { area: "Price (perception)", detail: "Ramp leads with 'free software.' It's compelling at first glance. The reality is their revenue comes from card interchange, so 'free' means you're paying through card adoption. But the SDR needs to be prepared for this objection." },
      { area: "Spend management breadth", detail: "If the prospect wants corporate cards + expense management + AP in one platform, Ramp's bundled pitch is appealing. We don't do corporate cards." },
      { area: "Modern UI / brand", detail: "Ramp has a slick product and strong brand with tech companies. Don't trash the product. Acknowledge it and redirect to fit." },
    ],
    trapQuestions: [
      `"How many entities or properties are you running? Because that's where the complexity of AP really shows up, and not every tool handles multi-entity GL mapping natively."`,
      `"Are your vendors card-friendly, or do most of them require check and ACH? That matters because some 'free' AP tools only work well if your vendors accept card payments."`,
      `"When you think about AP automation, are you looking for something that bolts onto your card program, or a standalone system that's built specifically for [vertical] invoice workflows?"`,
    ],
    landmine: `"Ask any vendor you're evaluating to demo a multi-entity invoice with split GL coding across three cost centers. If they can't do it live, they can't do it at all."`,
  },
};

/* ───────── DATA: MONTH CLOSE LOGIC ───────── */

function isMonthCloseWindow() {
  const day = new Date().getDate();
  if (day <= 5) return { active: true, phase: "beginning" };
  if (day >= 13 && day <= 17) return { active: true, phase: "mid-month" };
  if (day >= 25) return { active: true, phase: "end" };
  return { active: false, phase: null };
}

const MONTH_CLOSE_INJECT = {
  controller: `And given where we are in the month, your team is probably right in the middle of close or just getting over one. That makes this even more relevant.`,
  cfo: `With month-end close either just behind you or right around the corner, the cash flow and cost visibility question is top of mind right now.`,
  ap_manager: `I know this time of month is brutal for AP teams. If you're in the middle of close or just coming out of one, this is probably hitting close to home.`,
  owner_ops: `And with month-end close timing, your finance team is probably stretched thin right now, which makes the efficiency conversation even more timely.`,
};

/* ───────── DATA: SCRIPTS (same as before, trimmed for clarity) ───────── */

const SCRIPTS = {
  controller: {
    generic: {
      intro: { hospitality: `"Hi [Name], this is [SDR] from Ottimate. We work with a lot of hospitality controllers, and I had a quick question: do you ever come in on Monday morning and find that half your invoices still aren't coded?"`, grocery: `"Hi [Name], this is [SDR] from Ottimate. We work with a lot of grocery controllers, and I had a quick question: do you ever come in on Monday morning and find that half your invoices still aren't coded?"`, healthcare: `"Hi [Name], this is [SDR] from Ottimate. We work with a lot of healthcare controllers, and I had a quick question: do you ever come in on Monday morning and find that half your invoices still aren't coded?"` },
      discovery: ["Walk me through what happens when an invoice comes in today. What does that workflow look like?", "How many hours is your team spending on month-end close right now?", "In an ideal world, what would you prefer to have your team working on that would really move the lever for the business?", "What's the one thing about your AP process that keeps you up at night?"],
      listenFor: "Listen for trigger signals, then pivot to the appropriate trigger script.",
      hook: { hospitality: `"Based on what I see with hospitality operators at your scale, there's typically $143K a month in duplicate invoices and $1.7M a year in total duplicate exposure that nobody catches."`, grocery: `"Based on my research, grocers your size are unknowingly overcharged about 5% on invoices. One of our customers found $4.9 million in cost discrepancies in their first year alone."`, healthcare: `"Our healthcare customers catch an average of $136K per month in duplicate invoices and save $1.2M a year in invoice lifecycle management."` },
      pitch: { hospitality: ["B&G Food cut their weekly AP workload by 90%, from 50 hours down to 4.", "NorthStone Country Club has 90% of their invoices automatically coded.", "Your cost centers, approval chains, and property-level visibility are all native to the platform."], grocery: ["Estevez Markets runs invoice digitization in about 1 hour a day across 10 locations.", "Heritage Grocers Group reduced processing time by 70% across 115 stores.", "We handle direct store delivery workflows, cost file validation, and receiver matching."], healthcare: ["Gen4 Dental, a 103-site DSO, handles 6,000+ invoices a month with a lean team.", "West Harbor Healthcare cut AP time by 80%.", "We're the only AP platform with automatic PHI Redaction, HIPAA-compliant storage, and an Invoice Trust Score."] },
      close: `"Would it make sense to spend 20 minutes with someone on our team who can show you what this looks like for a [vertical] operation like yours?"`,
    },
    staff_turnover: {
      intro: { hospitality: `"Hi [Name], this is [SDR] from Ottimate. I noticed [company] is hiring for an AP role. I know how tough that is right now. How is the team handling the workload while that position is open?"`, grocery: `"Hi [Name], this is [SDR] from Ottimate. I noticed [company] is hiring for an AP role. I know how tough that is right now. How is the team handling the workload while that position is open?"`, healthcare: `"Hi [Name], this is [SDR] from Ottimate. I noticed [company] is hiring for an AP role. I know how tough that is right now. How is the team handling the workload while that position is open?"` },
      discovery: ["Have you had any turnover on your AP team in the last 12 months? What happened to the workload when that person left?", "How long has the position been open? How are you covering it?", "How long does it take to train a new AP person on your coding and approval process?", "What made you start thinking about this now, as opposed to six months ago?"],
      listenFor: `"Hired," "open position," "turnover," "we can't find," "can't keep up," "stretched"`,
      hook: { hospitality: `"What I'm hearing from a lot of controllers right now is that the staffing problem isn't going away. Our hospitality customers identify $143K per month in duplicate invoices. When you're short-staffed, those slip through even faster."`, grocery: `"What I'm hearing from a lot of controllers right now is that the staffing problem isn't going away. Grocers of your size are unknowingly overcharged about 5% on invoices. With a lean team, nobody has time to check."`, healthcare: `"What I'm hearing from a lot of controllers right now is that the staffing problem isn't going away. Healthcare organizations lose an average of $136K per month in duplicate invoices, and with a 7% duplicate rate, that exposure grows fast when you're understaffed."` },
      pitch: { hospitality: ["B&G Food cut their weekly AP workload by 90%, from about 50 hours a week down to 4.", "NorthStone Country Club has 90% of their invoices automatically coded.", "Your team gets to dig out of the busy work and focus on what moves the needle."], grocery: ["Estevez Markets got their AP workload down to about 1 hour a day across 10 locations.", "Heritage Grocers Group reduced processing time by 70% across 115 stores.", "We handle DSD workflows, cost file validation, and receiver matching, so your lean team doesn't have to manually check every invoice."], healthcare: ["Gen4 Dental, a 103-site DSO, handles 6,000+ invoices a month with a lean team, no new hires.", "West Harbor Healthcare cut AP time by 80%.", "You can continue to scale without increasing the lift on your already taxed team."] },
      close: `"Would it make sense to spend 20 minutes with someone on our team who can show you exactly how [proof point customer] did this, and what it would look like for [their company]?"`,
    },
    month_close: {
      intro: { hospitality: `"Hi [Name], this is [SDR] from Ottimate. I work with a lot of hospitality controllers, and this time of month I hear the same thing: month-end close is eating people alive. Is that something you're dealing with right now?"`, grocery: `"Hi [Name], this is [SDR] from Ottimate. I work with a lot of grocery controllers, and this time of month I hear the same thing: month-end close is eating people alive. Is that something you're dealing with right now?"`, healthcare: `"Hi [Name], this is [SDR] from Ottimate. I work with a lot of healthcare controllers, and this time of month I hear the same thing: month-end close is eating people alive. Is that something you're dealing with right now?"` },
      discovery: ["Walk me through the last 48 hours of your most recent month-end close. How many people were involved, and how many of those hours were overtime?", "What's the biggest bottleneck that slows the close down: coding, approvals, or chasing missing invoices?", "If you could wave a magic wand and fix one thing about your current month-end close process, what would it be?"],
      listenFor: `"Nightmare," "worked the weekend," "it's a mess," "we're always late"`,
      hook: { hospitality: `"Do you ever find yourself working weekends just to close the books? The Club at Admirals Cove was in that exact spot. Their invoices took about 24 hours to process. After Ottimate, that dropped to under 5 minutes."`, grocery: `"Our grocery customers save an average of 450 hours a year on AP. Heritage Grocers Group, running 115 stores, cut processing time by 70%."`, healthcare: `"Gen4 Dental shaved a full day off their month-end AP close across 103 sites. Internal questions that took 1 to 2 days to resolve now take minutes."` },
      pitch: { hospitality: ["Lazy Bear went from 12-15 hours a week on AP down to about 2 hours.", "The Club at Ravenna saw an 80% reduction in invoice processing time."], grocery: ["Estevez Markets processes AP in about 1 hour a day across 10 locations.", "We handle DSD workflows, cost file validation, and receiver matching during end-of-month close."], healthcare: ["Gen4 processes an invoice from beginning to end, including payment proof, in a few hours instead of days."] },
      close: `"Would it make sense to spend 20 minutes looking at how we could take a day or two off your close? Our team can model it based on your actual volume."`,
    },
    audit: {
      intro: { hospitality: `"Hi [Name], this is [SDR] from Ottimate. I work with a lot of hospitality controllers who've been dealing with audit findings around AP documentation. It's more common than you'd think. Has that come up for your team recently?"`, grocery: `"Hi [Name], this is [SDR] from Ottimate. I work with a lot of grocery controllers who've been dealing with audit findings around AP documentation. Has that come up for your team recently?"`, healthcare: `"Hi [Name], this is [SDR] from Ottimate. I work with a lot of healthcare controllers who've been dealing with audit findings around AP documentation. Has that come up for your team recently?"` },
      discovery: ["When was your last audit? Did anything come back around AP documentation or approval controls?", "Is there a high-level mandate to fix this, or is it more of a 'we should get to this' situation?", "If an auditor asked you to pull every invoice and approval record for a vendor over the last 18 months, how long would that take?"],
      listenFor: `"Auditors flagged," "board is asking," "got written up," "compliance deadline," "HIPAA concern"`,
      hook: { hospitality: `"Our hospitality customers maintain complete audit trails automatically. Every invoice, every approval, every GL code change is tracked and reportable in seconds, not days."`, grocery: `"Grocers are under increasing margin pressure, and auditors are paying closer attention to AP controls. Our Cost File Validation catches line-level discrepancies that manual processes miss."`, healthcare: `"Invoices with PHI expose you to HIPAA violations with fines up to $2M a year. Ottimate is the only AP platform with automatic PHI Redaction, audit controls, and invoice trust scoring."` },
      pitch: { hospitality: ["A hospitality operator with 50 locations went from 'we can't find that approval' to 'we can pull the audit trail in 30 seconds.'"], grocery: ["A 115-store grocery group eliminated 'we don't know why that was coded that way' in their audits."], healthcare: ["A DSO with PHI across 1,000+ invoices monthly now has automated redaction and HIPAA compliance built in. Zero audit findings on AP controls."] },
      close: `"Would it make sense to spend 20 minutes showing you exactly how we build this into the platform, so you can close out these audit findings permanently?"`,
    },
  },
  cfo: {
    generic: {
      intro: { hospitality: `"Hi [Name], this is [SDR] from Ottimate. I work with CFOs at similar-sized hospitality operations, and in this economy, I'm curious: how are you handling accounts payable to ensure it's not a cost sink?"`, grocery: `"Hi [Name], this is [SDR] from Ottimate. I work with CFOs at similar-sized grocery operations, and in this economy, I'm curious: how are you handling accounts payable to ensure it's not a cost sink?"`, healthcare: `"Hi [Name], this is [SDR] from Ottimate. I work with CFOs at similar-sized healthcare operations, and in this economy, I'm curious: how are you handling accounts payable to ensure it's not a cost sink?"` },
      discovery: ["What's your current AP cycle time, invoice in to payment out?", "Do you have visibility into duplicate invoices, vendor overcharges, or early pay discounts you're missing?", "If I told you there was typically $100K-$500K sitting in your AP process that you're not seeing, would that be material?"],
      listenFor: "Listen for cost, margin, and cash flow language. CFOs buy on financial impact, not time savings.",
      hook: { hospitality: `"Based on what I see with hospitality operators at your scale, there's typically $143K a month in duplicate invoices that slip through approval. That's $1.7M a year in leakage."`, grocery: `"Grocers typically don't catch 5% overcharges on invoices. That's not human error, that's vendor behavior. One of our customers found $4.9M in cost discrepancies in year one."`, healthcare: `"Healthcare organizations lose an average of $136K a month to duplicate invoices alone."` },
      pitch: { hospitality: ["A 50-property restaurant group caught $143K a month in duplicates. Their cash position improved by $1.2M in the first 90 days."], grocery: ["A 115-store grocer caught $4.9M in cost discrepancies in year one. Not just time savings: cost recovery."], healthcare: ["A 103-site dental DSO caught $136K+ a month in duplicates and improved cash position by $800K in 90 days."] },
      close: `"Would it make sense to spend 20 minutes with our team to model the cost recovery for your specific operation?"`,
    },
    vendor_friction: {
      intro: { hospitality: `"Hi [Name], this is [SDR] from Ottimate. In the current economy, tracking any possible money leakage is critical. Where in your AP process is money leaking that you haven't addressed yet?"`, grocery: `"Hi [Name], this is [SDR] from Ottimate. In the current economy, tracking any possible money leakage is critical. Where in your AP process is money leaking that you haven't addressed yet?"`, healthcare: `"Hi [Name], this is [SDR] from Ottimate. In the current economy, tracking any possible money leakage is critical. Where in your AP process is money leaking that you haven't addressed yet?"` },
      discovery: ["In AP specifically, what would a 2-3% improvement in cost spend look like to your P&L?", "Are you currently getting any vendor discounts, or is that a blind spot?", "Have you had any AP-related write-offs, adjustments, or audit findings in the last 12 months?"],
      listenFor: `"Margin pressure," "cost leaks," "vendor issues," "duplicate payments," "missed discounts"`,
      hook: { hospitality: `"A 50-property group found $1.7M a year in duplicate invoices they were missing. That went straight to the bottom line."`, grocery: `"A grocer caught $4.9M in vendor overcharges. That's not new revenue. That's pure margin recovery."`, healthcare: `"A DSO recovered $136K a month in duplicates. The highest-margin initiative they've had all year."` },
      pitch: { hospitality: ["B&G Food went from missing $143K a month to catching nearly every duplicate. That's $1.7M a year to your EBITDA."], grocery: ["Heritage Grocers, 115 stores, now processes AP in a quarter of the time AND catches cost errors."], healthcare: ["Gen4 Dental cut AP processing time by 80% while improving cost accuracy. EBITDA improvement was their focus."] },
      close: `"Would it make sense to spend 20 minutes showing you the cost recovery model? We can use your own invoice volume."`,
    },
  },
  ap_manager: {
    generic: {
      intro: { hospitality: `"Hi [Name], this is [SDR] from Ottimate. I work with a lot of AP teams at hospitality companies. If you think back to last month's close, how often were you scrambling to get things in?"`, grocery: `"Hi [Name], this is [SDR] from Ottimate. I work with a lot of AP teams at grocery companies. If you think back to last month's close, how often were you scrambling?"`, healthcare: `"Hi [Name], this is [SDR] from Ottimate. I work with a lot of AP teams at healthcare companies. If you think back to last month's close, how often were you scrambling?"` },
      discovery: ["Walk me through your day. How much time is spent on data entry, coding, and approval routing?", "What's the biggest bottleneck in your process today?", "What would you do with 10 more hours a week if they appeared magically?", "Who do you report to, a Controller or CFO? Would they be interested in this too?"],
      listenFor: "Listen for workload pain and identify who they report to. Bridge to the decision maker.",
      hook: { hospitality: `"Most AP teams at restaurants and hotels spend 80-90% of their time on coding and data entry. One hospitality group went from 50 hours a week down to 4."`, grocery: `"Grocers are drowning in direct store delivery invoices. One grocer went from 1-2 days on AP down to 1 hour a day."`, healthcare: `"Healthcare AP teams are buried in invoices with special requirements. One DSO cut invoicing time by 80%."` },
      pitch: { hospitality: ["B&G Food cut AP workload by 90%. What took 50 hours a week now takes 4."], grocery: ["Estevez Markets got AP down to 1 hour a day across 10 locations."], healthcare: ["Gen4 Dental handles 6,000+ invoices a month with a lean team. Cut processing time by 80%."] },
      close: `"Would it make sense to spend 20 minutes so you can see what this looks like? And it might be worth looping in your Controller/CFO too."`,
    },
  },
  owner_ops: {
    generic: {
      intro: { hospitality: `"Hi [Name], this is [SDR] from Ottimate. I work with a lot of hospitality operators, and something I've noticed: they often have a general feeling that something is off with their AP workflows, but can't put their finger on it. Does that ever happen to you?"`, grocery: `"Hi [Name], this is [SDR] from Ottimate. I work with a lot of grocery operators. They often feel something's off with AP but can't pin it down. Does that ever happen to you?"`, healthcare: `"Hi [Name], this is [SDR] from Ottimate. I work with a lot of healthcare operators. They often sense something's off with AP but can't pin it down. Does that resonate?"` },
      discovery: ["What's keeping you up at night operationally: staffing, costs, growth?", "If your back office ran 10x more efficiently, where would that capital go?", "Who manages your AP function today? Are they stretched?"],
      listenFor: "Owners think big picture. Listen for growth, margin, and competitive language. Close fast.",
      hook: { hospitality: `"The operators who are winning right now are automating AP so they can redeploy staff to guest experience and revenue. They're not hiring more AP people. They're automating them."`, grocery: `"Grocers are margin-squeezed. The smart ones are catching cost leaks through AP automation. One 115-store group recovered $4.9M in cost visibility in year one."`, healthcare: `"DSOs that automate AP can scale revenue without scaling support costs. That's pure leverage for EBITDA."` },
      pitch: { hospitality: ["A restaurant group automated AP and went from 50 hours a week to 4. They redirected capacity to revenue management."], grocery: ["A 115-store grocer cut AP processing by 70% and recovered $4.9M in cost leakage."], healthcare: ["A DSO with 103 sites handles 6,000+ invoices a month with less staff than before."] },
      close: `"Would it make sense to spend 20 minutes with someone on our team who can show you what this looks like and how it impacts your model?"`,
    },
  },
};

function getScript(role, trigger, vertical) {
  const r = SCRIPTS[role];
  if (!r) return null;
  const s = r[trigger] || r["generic"];
  if (!s) return null;
  return { intro: s.intro?.[vertical] || "", discovery: s.discovery || [], listenFor: s.listenFor || "", hook: s.hook?.[vertical] || "", pitch: s.pitch?.[vertical] || [], close: s.close || "" };
}

/* ───────── COMPONENTS ───────── */

function Section({ title, color, children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color, marginBottom: 8 }}>{title}</div>
      {children}
    </div>
  );
}

function ScriptBlock({ text }) {
  return <div style={{ fontSize: 15, lineHeight: 1.7, color: "#222", fontStyle: "italic", padding: "10px 14px", background: "#fafafa", borderRadius: 8, border: "1px solid #eee" }}>{text}</div>;
}

function Pill({ label, active, onClick, color }) {
  return (
    <button onClick={onClick} style={{
      fontFamily: "inherit", fontSize: 13, fontWeight: 600, padding: "8px 16px",
      borderRadius: 8, cursor: "pointer", border: active ? `2px solid ${color || "#1a1a1a"}` : "1px solid #ddd",
      background: active ? (color ? color + "0D" : "#f5f5f5") : "#fff",
      color: active ? (color || "#1a1a1a") : "#888", transition: "all 0.15s",
    }}>{label}</button>
  );
}

/* ───────── MAIN APP ───────── */

export default function SDRCallGuide() {
  const [step, setStep] = useState(0);
  const [vertical, setVertical] = useState(null);
  const [role, setRole] = useState(null);
  const [trigger, setTrigger] = useState(null);
  const [tab, setTab] = useState("guide");
  const [monthCloseMode, setMonthCloseMode] = useState("banner");
  const [selectedCompetitor, setSelectedCompetitor] = useState("stampli");
  const monthClose = isMonthCloseWindow();

  const reset = () => { setStep(0); setVertical(null); setRole(null); setTrigger(null); setTab("guide"); };
  const script = (step === 3 && vertical && role && trigger) ? getScript(role, trigger, vertical) : null;

  const font = "'DM Sans', 'Helvetica Neue', sans-serif";

  return (
    <div style={{ fontFamily: font, color: "#1a1a1a", maxWidth: 720, margin: "0 auto", padding: "0 0 40px" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ borderBottom: "1px solid #e5e5e5", paddingBottom: 16, marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: "#854F0B", textTransform: "uppercase", marginBottom: 4 }}>Ottimate SDR</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#1a1a1a", lineHeight: 1.2 }}>Call Guide</div>
        </div>
        {step > 0 && <button onClick={reset} style={{ background: "none", border: "1px solid #d4d4d4", borderRadius: 6, padding: "6px 14px", fontSize: 13, fontWeight: 500, cursor: "pointer", color: "#666", fontFamily: "inherit" }}>Start over</button>}
      </div>

      {/* Progress */}
      <div style={{ display: "flex", gap: 6, marginBottom: 28 }}>
        {["Vertical", "Contact", "Trigger", "Call guide"].map((label, i) => (
          <div key={i} style={{ flex: 1, textAlign: "center" }}>
            <div style={{ height: 3, borderRadius: 2, marginBottom: 6, background: i <= step ? "#1a1a1a" : "#e5e5e5", transition: "background 0.3s" }} />
            <div style={{ fontSize: 11, fontWeight: 500, color: i <= step ? "#1a1a1a" : "#aaa" }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Month close banner (selection steps) */}
      {monthClose.active && step < 3 && (
        <div style={{ background: "#FFF8EB", border: "1px solid #F5C775", borderRadius: 8, padding: "10px 14px", marginBottom: 20, fontSize: 13, color: "#854F0B", display: "flex", alignItems: "flex-start", gap: 8, lineHeight: 1.5 }}>
          <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>📅</span>
          <span><strong>Month-end close is top of mind right now.</strong> Consider leading with Trigger 5 (month-end close pain) or weaving it into your opener.</span>
        </div>
      )}

      {/* Step 0: Vertical */}
      {step === 0 && (
        <div>
          <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>What vertical are you calling into?</h2>
          <p style={{ fontSize: 13, color: "#888", marginBottom: 16, marginTop: 0 }}>This tailors proof points, stats, and language to their industry.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {VERTICALS.map(v => (
              <button key={v.id} onClick={() => { setVertical(v.id); setStep(1); }} style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", border: "1px solid #e0e0e0", borderRadius: 10, padding: "16px 18px", cursor: "pointer", textAlign: "left", transition: "all 0.15s", fontFamily: "inherit" }} onMouseEnter={e => { e.currentTarget.style.borderColor = "#1a1a1a"; }} onMouseLeave={e => { e.currentTarget.style.borderColor = "#e0e0e0"; }}>
                <span style={{ fontSize: 28 }}>{v.icon}</span>
                <span style={{ fontSize: 16, fontWeight: 600 }}>{v.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 1: Role */}
      {step === 1 && (
        <div>
          <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>Who are you speaking to?</h2>
          <p style={{ fontSize: 13, color: "#888", marginBottom: 16, marginTop: 0 }}>The role of the person you're calling.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {ROLES.map(r => (
              <button key={r.id} onClick={() => { setRole(r.id); setStep(2); }} style={{ background: "#fff", border: "1px solid #e0e0e0", borderRadius: 10, padding: "14px 18px", cursor: "pointer", textAlign: "left", transition: "all 0.15s", fontFamily: "inherit" }} onMouseEnter={e => { e.currentTarget.style.borderColor = "#1a1a1a"; }} onMouseLeave={e => { e.currentTarget.style.borderColor = "#e0e0e0"; }}>
                <div style={{ fontSize: 15, fontWeight: 600 }}>{r.label}</div>
                <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{r.sub}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Trigger */}
      {step === 2 && (
        <div>
          <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>What's the buying trigger?</h2>
          <p style={{ fontSize: 13, color: "#888", marginBottom: 16, marginTop: 0 }}>Pick what you believe is driving this prospect. If you don't know, start with "No known trigger."</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {TRIGGERS.map(t => (
              <button key={t.id} onClick={() => { setTrigger(t.id); setStep(3); setTab("guide"); }} style={{ background: "#fff", border: "1px solid #e0e0e0", borderRadius: 10, padding: "14px 18px", cursor: "pointer", textAlign: "left", transition: "all 0.15s", fontFamily: "inherit" }} onMouseEnter={e => { e.currentTarget.style.borderColor = "#1a1a1a"; }} onMouseLeave={e => { e.currentTarget.style.borderColor = "#e0e0e0"; }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                  <span style={{ fontSize: 15, fontWeight: 600 }}>{t.label}</span>
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase", color: t.color, background: t.color + "14", padding: "2px 6px", borderRadius: 4 }}>{t.tag}</span>
                </div>
                <div style={{ fontSize: 12, color: "#888" }}>{t.sub}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Tabbed content */}
      {step === 3 && (
        <div>
          {/* Selection summary pills */}
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            {[VERTICALS.find(v => v.id === vertical)?.label, ROLES.find(r => r.id === role)?.label, TRIGGERS.find(t => t.id === trigger)?.label].map((l, i) => (
              <span key={i} style={{ fontSize: 12, fontWeight: 600, background: "#f5f5f5", color: "#555", padding: "4px 10px", borderRadius: 20 }}>{l}</span>
            ))}
          </div>

          {/* Tab bar */}
          <div style={{ display: "flex", gap: 6, marginBottom: 24, borderBottom: "1px solid #e5e5e5", paddingBottom: 12 }}>
            <Pill label="📋 Call guide" active={tab === "guide"} onClick={() => setTab("guide")} />
            <Pill label="🛡 Objections" active={tab === "objections"} onClick={() => setTab("objections")} />
            <Pill label="⚔️ Battlecards" active={tab === "battlecards"} onClick={() => setTab("battlecards")} />
          </div>

          {/* TAB: Call Guide */}
          {tab === "guide" && script && (
            <div>
              {monthClose.active && trigger !== "month_close" && (
                <div style={{ background: "#FFF8EB", border: "1px solid #F5C775", borderRadius: 10, padding: "14px 16px", marginBottom: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#854F0B" }}>📅 Month-end close timing</div>
                    <div style={{ display: "flex", gap: 4, background: "#F5E6C8", borderRadius: 6, padding: 2 }}>
                      {["banner", "inject"].map(m => (
                        <button key={m} onClick={() => setMonthCloseMode(m)} style={{ fontSize: 11, fontWeight: 600, fontFamily: "inherit", padding: "3px 10px", borderRadius: 4, cursor: "pointer", border: "none", background: monthCloseMode === m ? "#fff" : "transparent", color: monthCloseMode === m ? "#854F0B" : "#B8860B88", boxShadow: monthCloseMode === m ? "0 1px 3px rgba(0,0,0,0.1)" : "none" }}>
                          {m === "banner" ? "Callout" : "Inject"}
                        </button>
                      ))}
                    </div>
                  </div>
                  {monthCloseMode === "banner" ? (
                    <p style={{ fontSize: 13, color: "#854F0B", margin: 0, lineHeight: 1.5 }}>Month-end close is top of mind right now. Consider weaving Trigger 5 into your conversation or asking: <em>"How did last close go for your team?"</em></p>
                  ) : (
                    <p style={{ fontSize: 13, color: "#854F0B", margin: 0, lineHeight: 1.5, fontStyle: "italic" }}>Injected language appears highlighted in your intro below.</p>
                  )}
                </div>
              )}
              <Section title="Intro" color="#185FA5">
                <ScriptBlock text={script.intro} />
                {monthClose.active && trigger !== "month_close" && monthCloseMode === "inject" && MONTH_CLOSE_INJECT[role] && (
                  <div style={{ background: "#FFF8EB", borderLeft: "3px solid #F5C775", padding: "8px 12px", marginTop: 8, borderRadius: "0 6px 6px 0", fontSize: 14, fontStyle: "italic", color: "#854F0B", lineHeight: 1.6 }}>{MONTH_CLOSE_INJECT[role]}</div>
                )}
              </Section>
              <Section title="Discovery questions" color="#0F6E56">
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {script.discovery.map((q, i) => (<div key={i} style={{ fontSize: 14, lineHeight: 1.6, color: "#333", padding: "8px 12px", background: "#f9fafb", borderRadius: 6, borderLeft: "3px solid #0F6E5633" }}>{q}</div>))}
                </div>
              </Section>
              {script.listenFor && <Section title="Listen for" color="#534AB7"><div style={{ fontSize: 13, color: "#534AB7", fontStyle: "italic", lineHeight: 1.6, padding: "8px 12px", background: "#EEEDFE", borderRadius: 6 }}>{script.listenFor}</div></Section>}
              <Section title="Hook" color="#D85A30"><ScriptBlock text={script.hook} /></Section>
              <Section title="Pitch + proof points" color="#854F0B">
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {script.pitch.map((p, i) => (<div key={i} style={{ fontSize: 14, lineHeight: 1.6, color: "#333", padding: "8px 12px", background: "#FFFDF5", borderRadius: 6, borderLeft: "3px solid #854F0B33" }}>{p}</div>))}
                </div>
              </Section>
              <Section title="Close" color="#1a1a1a"><ScriptBlock text={script.close} /></Section>
              <Section title="Recap (use after discovery)" color="#6B7280"><ScriptBlock text={`"Sounds like what I'm hearing is that you're currently struggling with [insert pain points]. Does that sound right, or what am I missing?"`} /></Section>
            </div>
          )}
          {tab === "guide" && !script && (
            <div style={{ textAlign: "center", padding: "40px 20px", color: "#888" }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>🚧</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#555", marginBottom: 6 }}>Script not yet built for this combination</div>
              <div style={{ fontSize: 13, lineHeight: 1.5 }}>Use the "No known trigger" script for this role as a starting point.</div>
              <button onClick={() => setTrigger("generic")} style={{ marginTop: 16, background: "#1a1a1a", color: "#fff", border: "none", borderRadius: 8, padding: "10px 20px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Load generic script</button>
            </div>
          )}

          {/* TAB: Objections */}
          {tab === "objections" && (
            <div>
              <p style={{ fontSize: 13, color: "#888", marginTop: 0, marginBottom: 20, lineHeight: 1.5 }}>
                Objections reveal what the prospect really needs to hear. Responses are tailored to the role you selected ({ROLES.find(r => r.id === role)?.label}) when available.
              </p>
              {OBJECTIONS.map((obj, i) => (
                <div key={i} style={{ border: "1px solid #e5e5e5", borderRadius: 10, padding: "16px 18px", marginBottom: 12 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a", marginBottom: 4 }}>"{obj.objection}"</div>
                  <div style={{ fontSize: 12, color: "#888", marginBottom: 12, fontStyle: "italic" }}>What they're really saying: {obj.subtext}</div>
                  <div style={{ fontSize: 14, lineHeight: 1.7, color: "#333", padding: "10px 14px", background: "#f9fafb", borderRadius: 8, borderLeft: "3px solid #185FA5", fontStyle: "italic" }}>
                    {obj.responses[role] || obj.responses.default || Object.values(obj.responses)[0]}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB: Battlecards */}
          {tab === "battlecards" && (
            <div>
              <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
                <Pill label="Stampli" active={selectedCompetitor === "stampli"} onClick={() => setSelectedCompetitor("stampli")} color="#D85A30" />
                <Pill label="Ramp" active={selectedCompetitor === "ramp"} onClick={() => setSelectedCompetitor("ramp")} color="#185FA5" />
              </div>
              {(() => {
                const card = BATTLECARDS[selectedCompetitor];
                if (!card) return null;
                const accentColor = selectedCompetitor === "stampli" ? "#D85A30" : "#185FA5";
                return (
                  <div>
                    {/* Header */}
                    <div style={{ marginBottom: 20 }}>
                      <div style={{ fontSize: 20, fontWeight: 700, color: "#1a1a1a", marginBottom: 4 }}>vs. {card.name}</div>
                      <div style={{ fontSize: 14, color: "#888", fontStyle: "italic" }}>{card.tagline}</div>
                    </div>

                    {/* Overview */}
                    <div style={{ fontSize: 14, lineHeight: 1.7, color: "#444", marginBottom: 20, padding: "12px 16px", background: "#fafafa", borderRadius: 8 }}>{card.overview}</div>

                    {/* When you see them */}
                    <Section title="When you see them" color={accentColor}>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        {card.whenYouSee.map((w, i) => (
                          <div key={i} style={{ fontSize: 13, lineHeight: 1.6, color: "#555", padding: "6px 12px", background: "#f9fafb", borderRadius: 6 }}>{w}</div>
                        ))}
                      </div>
                    </Section>

                    {/* Where we win */}
                    <Section title="Where we win" color="#0F6E56">
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        {card.weWin.map((w, i) => (
                          <div key={i} style={{ padding: "10px 14px", background: "#E1F5EE", borderRadius: 8, borderLeft: "3px solid #0F6E56" }}>
                            <div style={{ fontSize: 13, fontWeight: 700, color: "#0F6E56", marginBottom: 4 }}>{w.area}</div>
                            <div style={{ fontSize: 13, lineHeight: 1.6, color: "#085041" }}>{w.detail}</div>
                          </div>
                        ))}
                      </div>
                    </Section>

                    {/* Where they win */}
                    <Section title="Where they win (be prepared)" color="#854F0B">
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        {card.theyWin.map((w, i) => (
                          <div key={i} style={{ padding: "10px 14px", background: "#FAEEDA", borderRadius: 8, borderLeft: "3px solid #854F0B" }}>
                            <div style={{ fontSize: 13, fontWeight: 700, color: "#854F0B", marginBottom: 4 }}>{w.area}</div>
                            <div style={{ fontSize: 13, lineHeight: 1.6, color: "#633806" }}>{w.detail}</div>
                          </div>
                        ))}
                      </div>
                    </Section>

                    {/* Trap questions */}
                    <Section title="Questions that expose the gap" color="#534AB7">
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        {card.trapQuestions.map((q, i) => (
                          <div key={i} style={{ fontSize: 14, lineHeight: 1.7, color: "#333", padding: "10px 14px", background: "#EEEDFE", borderRadius: 8, fontStyle: "italic" }}>{q}</div>
                        ))}
                      </div>
                    </Section>

                    {/* Landmine */}
                    <Section title="Landmine (plant this early)" color="#A32D2D">
                      <div style={{ fontSize: 14, lineHeight: 1.7, color: "#791F1F", padding: "12px 16px", background: "#FCEBEB", borderRadius: 8, borderLeft: "3px solid #A32D2D", fontStyle: "italic" }}>{card.landmine}</div>
                    </Section>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
