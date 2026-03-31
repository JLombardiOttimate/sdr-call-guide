# Healthcare Pipeline Analysis: Call Transcript Insights

**Analysis Date:** March 24, 2026
**Dataset:** 49 healthcare deals (15 closed-won, 34 closed-lost) | ~254 call transcripts
**Sales Team:** Tyler Slaughenhaupt, Erica Ross, Dakota Ray, Eric Poss, Sergio Rubio, Morgan Macko, Katie Snowberger, John Was

---

## 1. Segment Engagement & Progression

### Which segments are most engaged and progressing?

**Senior Living / Long-Term Care** is the strongest-performing segment by a wide margin. Seven of fifteen closed-won deals came from this sub-vertical, with close cycles averaging 22–47 days once the CFO engaged. These organizations share a common profile: multi-facility operations with thin AP staffing, heavy paper-based workflows, and a CFO who personally feels the pain of manual processes. Deals like Gulf Coast LTC (20 days to close), St. Dominic Village (22 days), and Wesley Manor (73 days but only 3 substantive calls) demonstrate that when the economic buyer is present early, senior living moves fast. The referral network within this segment is also self-reinforcing — Dan Wagner at St. Dominic referred Gulf Coast, and David Clement at Silverpoint referenced other senior housing operators.

**Dental / DSO** is the second most active segment, though it moves differently. Three closed-won deals (Platinum Dental, Modis Dental Partners, GastroMed) all required multi-threaded consensus across operations, finance, field practice managers, and IT. Close cycles ran longer (47–64 days) because field stakeholders needed hands-on validation. The growth-driven pain in DSOs — scaling from 15 to 45+ practices — creates urgency that's different from senior living's operational efficiency pain. DSOs buy because their current tools (usually Bill.com) can't handle multi-location GL mapping at scale.

**Community Health Centers** showed high engagement in the one deal that closed (Access Health Louisiana, 34 locations across 12 CHCs). The complexity here is extreme — 17-way allocation splits, school-based clinics, Sage Intacct integration — but when the product handled it, the deal closed in 22 days. This segment has potential but requires strong allocation capabilities as table stakes.

**Segments that stall or lose:** Hospice/Home Health (Affinity, Blue Ridge — both lost), Behavioral Health (Charlotte — lost to Continia), Biotech/Pharma (Lantern Pharma — lost, wrong segment entirely), and Property Management (Northstar — lost to Entrata). These either have unique workflow requirements Ottimate doesn't natively solve, or they're mid-ERP-migration and deprioritize point solutions.

### Win/Loss by Segment

| Segment | Won | Lost | Win Rate | Avg Close Cycle (Won) |
|---------|-----|------|----------|-----------------------|
| Senior Living / LTC | 7 | 12 | 37% | 35 days |
| Dental / DSO | 3 | 5 | 38% | 56 days |
| Community Health Centers | 1 | 2 | 33% | 22 days |
| Multi-Specialty Medical | 2 | 3 | 40% | 64 days |
| Hospice / Home Health | 0 | 3 | 0% | — |
| Behavioral Health | 0 | 2 | 0% | — |
| Radiology / Eye Care | 0 | 3 | 0% | — |
| Other (Pharma, Staffing) | 0 | 4 | 0% | — |

---

## 2. Most Common Pain Points (Especially Later-Stage Calls)

Pain points shift as deals progress. Early calls surface broad frustrations; later-stage calls reveal the specific, quantifiable problems that justify investment.

### Universal Pain Points (Mentioned in 90%+ of Deals)

**Manual invoice processing and GL coding** is the single most consistent pain point across every segment. Prospects describe physically handling paper invoices, handwriting GL codes, and manually entering data into their ERP. In later-stage calls, this pain gets quantified: Access Health's VP Finance talked about needing to hire an additional AP clerk if they couldn't automate. St. Dominic's CFO calculated his AP assistant's $55K salary against the automation cost. Silverpoint's CFO described working late nights because month-end financials were overdue.

**Approval workflow bottlenecks** appear in virtually every deal. Department heads at facilities sit on invoices. CFOs sign checks one by one. Mail goes back and forth between locations. In later-stage calls, prospects connect this to real financial impact — delayed payments trigger vendor resends (Progressive Quality Care saw 15–30 duplicate invoices per day), late fees, and damaged vendor relationships.

**Multi-location/entity complexity** is acute in deals with 5+ facilities. Each location may have separate GL structures, different approval chains, and siloed systems. Gulf Coast LTC managed 13 separate Sage 50 instances with no consolidation capability. Platinum Dental struggled to map 45 practice locations through Bill.com. This pain intensifies as organizations grow through acquisition.

### Later-Stage Pain Points (Pricing/Scoping Calls)

**Cash flow and check-run burden** surfaces prominently in scoping and pricing calls. CFOs describe weekly check runs consuming 1–2 full days, with physical check printing, stapling to invoices, and manual signing. Silverpoint's CFO described exceeding daily wire limits because the process was so manual. Gulf Coast's operator described check runs as taking an entire day twice per month.

**Audit and compliance exposure** becomes a deciding factor in later conversations. Senior living operators need centralized invoice storage for audit readiness. St. Dominic's CFO, who had discovered a $1.1M payroll accrual error, was explicitly mandated by his board to improve financial controls. Dental DSOs raise HIPAA/PHI handling concerns. Covenant Village had experienced actual check fraud (stolen checks).

**Vendor payment visibility** — knowing where invoices stand in the approval chain, which payments have cleared, and which vendors are waiting — gets framed as a management need rather than an operational one. CFOs want this data for cash flow forecasting. AP teams want it to stop fielding vendor calls.

**Uncaptured rebates and cashback** becomes a tangible ROI lever in pricing discussions. Covenant Village was losing $5,500/year in uncaptured rebates. Platinum Dental had ~$300K in unrealized vendor rebates. This often tips the cost-neutral math that closes deals.

---

## 3. Roles That Show Up When Deals Get Serious

There's a consistent pattern in the buyer composition as deals progress from discovery to close:

### Early Calls (Discovery / Demo)
- **AP Manager or AP Clerk** — the person living the daily pain. Often the initial contact. They validate the workflow fit.
- **Controller or Director of Finance** — evaluates the product against current processes and competing alternatives.

### Mid-Cycle (Second Demo / Scoping)
- **IT Director or Systems Admin** — appears when integration questions arise (ERP connectivity, data feeds, security). Ramon Lopez at GastroMed (20-year IT veteran), Cory Sills at Covenant Village, Jordan B at Platinum Dental all entered at this stage.
- **VP of Operations** — in multi-location setups, operations leaders validate that field staff can adopt the workflow. Avi Ashwal at Progressive Quality Care championed from operations/IT.

### Late Calls (Pricing / Contract)
- **CFO or VP Finance** — the economic buyer. In every closed-won deal, the CFO was actively engaged by the pricing call. Dan Wagner (St. Dominic), Ryan Rudloff (Gulf Coast), Mark Stephens (Wesley Manor), David Clement (Silverpoint), Chee-Ah Heurtin (Access Health), Patrick Bishop (Platinum Dental) all personally validated pricing.
- **CEO or Board-Level Sponsor** — appears in the largest deals. BJ Bergeron (Gulf Coast operator/owner) co-signed. Platinum Dental's Darren Wight (CFO, distinct from Finance Director) engaged at Call 7.

### The Critical Pattern: CFO Timing

In **closed-won deals**, the CFO was actively engaged by Call 3 on average. In **closed-lost deals**, the CFO was either never engaged (11 of 34 deals), engaged too late (after pricing was presented without their input), or overruled by someone higher (CEO/board).

| CFO Engagement | Won | Lost |
|----------------|-----|------|
| Engaged by Call 3 | 12/15 (80%) | 6/34 (18%) |
| Engaged Call 4+ | 3/15 (20%) | 8/34 (24%) |
| Never engaged | 0/15 (0%) | 20/34 (59%) |

**When a deal gets serious, you'll see the CFO, an IT/systems person, and typically 4–5 distinct personas on the call.** If by Call 3 you're still only talking to the AP manager, the deal is likely stalling.

---

## 4. Exact Prospect Language

### Around Cost and Pricing

Prospects talk about cost in three distinct ways:

**Reasonableness check** — CFOs compare the price to something they already know:
- *"The price is reasonable... assuming the references check out"* — David Clement, CFO, Silverpoint Senior Living
- *"I think it's doable"* — Daniel Wagner, CFO, St. Dominic Village
- *"Doesn't scare me away or anything"* — Barry VanderGenugten, CFO, Providence Life Services (closed-lost — defensive language, not endorsement)

**Per-unit anxiety** — prospects fixate on overage charges:
- *"The $2.95 per invoice for anything over... if it falls short, it could add up pretty quickly"* — BJ Bergeron, Gulf Coast LTC
- *"Actually the $13,680 is actually $2.85 an invoice. So it's not really much more."* — Mark Stephens, CFO, Wesley Manor (self-justifying the math)

**FTE replacement math** — the strongest buying signal:
- *"Her assistant makes $55,000 a year. So this is a huge pickup."* — Daniel Wagner, CFO, St. Dominic Village
- *"If all this goes well, we'll be hiring Ottimate full time"* — Jefferson, Access Health Louisiana
- *"If we can't automate, we'll need to hire a new AP clerk"* — Chee-Ah Heurtin, VP Finance, Access Health

### Around Errors and Manual Processes

Prospects describe their manual pain with visceral, emotional language:

**Frustration and overwhelm:**
- *"Everything's manual. I'm used to having a team, every process is just whip it out... and I'm like, this didn't get done. What is this?"* — David Clement, CFO, Silverpoint
- *"So I worked till late last night and I got half of them out... because the other day, the CEO was like, did you get them out?"* — David Clement, Silverpoint
- *"I'm one person... one week I'm doing payroll and the following week I'm catching up on everything AP"* — Debra Skaggs, AP Director, Wesley Manor
- *"It just doesn't make sense. This day and age, we've got so much technology that we can take advantage of and we're sitting here pushing paper around."* — Daniel Wagner, CFO, St. Dominic Village

**Specific process breakdowns:**
- *"We're missing invoices. I constantly have to have people physically go in and look at every location. You're supposed to get an invoice every month. Do you have 12 invoices?"* — Julie Ellis, Controller, United Methodist Communities
- *"Why are we doing all this extra work? I mean, this is mind numbing."* — David Clement, CFO, Silverpoint (on payroll invoice workarounds)
- *"One invoice... doctor office one and doctor office two... they take half and half, we issue two checks"* — Carolina Maqueira, Controller, GastroMed (on manual allocation)
- *"Vendor resend duplicates 15–30/day due to payment delays"* — Progressive Quality Care

### Around Reporting and Visibility

**The "black box" problem:**
- *"There's like four people have access to our accounting package. And so no one looks at the accounting until you send it on the fifteenth or seventeenth."* — David Clement, CFO, Silverpoint
- *"All of the information is held in Square Nine today and it's not really siloed or separated"* — Kimberly Kling, Sr. Director of Finance, Covenant Village
- *"Knowing where invoice approvals stand — are our department heads sitting on invoices? Are they just taking their time? What's causing the lag?"* — BJ Bergeron, Gulf Coast LTC

**Audit and compliance anxiety:**
- *"Paper stacking up with the physical storage... it can lead to audit delays"* — BJ Bergeron, Gulf Coast LTC
- *"She's very much into digitizing invoices. So we're not having to pull, go through files and all that kind of stuff."* — Daniel Wagner, St. Dominic Village

---

## 5. Objection Patterns and Stalled Deals

### Primary Objections (Ranked by Frequency)

**1. "Not the right time" / Competing priorities (19 of 34 lost deals)**

This is the most common objection and it takes several forms:
- **ERP migration in flight:** 8 deals stalled because the prospect was mid-migration to Sage Intacct, Netsuite, Acumatica, or Workday. Ottimate got sequenced as "after we finish the ERP." Examples: Vitana (Netsuite go-live), Desert Recovery (Sage), Providence Life (Intacct), Westminster (Acumatica).
- **Organizational instability:** New CFO/controller arriving, M&A activity, or leadership turnover froze decisions. Eden Hill was being acquired. Riccobene lost their controller, assistant controller, and CFO within 2 months. Children's Home Network got a new CFO who deprioritized the evaluation.
- **Year-end / audit freeze:** Anthem Memory Care's auditor (Deloitte) explicitly vetoed new technology changes until audit completion. Several others cited year-end close as a reason to delay.

**Typical language:** *"Not a good time... we'll revisit in 6–8 months"* — repeated across Epoch, Riccobene, Preston County. *"Everything's been put on the back burner"* — Blue Ridge Hospice CFO.

**2. Economic buyer never engaged (20 of 34 lost deals)**

This isn't an objection prospects raise — it's a structural failure. The pattern: Ottimate builds enthusiasm with the AP team or controller, presents pricing, and then learns that someone higher (CFO, CEO, board) needs to approve. That person either never appears or kills the deal.

Examples:
- Diamond Braces: Nimrata (Finance/AP) was the only contact. CEO Marsha objected to $52K cost without ever hearing the business case. Nimrata's solution was to send the recording to Marsha.
- Anthem Memory Care: Alondra (Controller) verbally committed November 26. By December 11, CEO Trey had overridden her decision in favor of Coupa.
- United Methodist Memorial Home: Allison (Executive Finance) was identified as the buyer but "ghosted." Matt Wallach noted: *"Usually when she doesn't talk, it means another option is favored."*

**3. "We need to see ROI" / No business case built (14 of 34 lost deals)**

Prospects didn't say "your product is too expensive" — they said they couldn't justify the spend internally without a clear ROI model. In 14 deals, no ROI analysis was ever delivered to the economic buyer.

- Marquee Dental: Jeffrey Rooks explicitly asked for dollar savings analysis, setting a 60-day deadline. The ROI model was never completed. Eight months of silence followed.
- Campus Eye Group: Price objection ("afraid about annual fee") left unaddressed without financial justification.
- Ciena Healthcare: *"Is that worth spending money on a third system to increase efficiency?"* — Jbhola asked this directly and never received a quantified answer.
- Bradford Health Services: Wilson said *"The next thing is going to be for us to start to sell it to leadership above me"* — but no business case was provided for him to use internally.

**4. Competitive loss to unified platforms (5 of 34 lost deals)**

When prospects chose a competitor, it was almost always a unified platform rather than another AP automation point solution:
- **Coupa** won Anthem Memory Care and Family Healthcare. In both cases, the customer preferred a single-vendor approach.
- **Continia** won Charlotte Behavioral Health, recommended by the ERP implementation partner (Opal/Microsoft).
- **Netsuite native AP** won Vitana once their ERP went live.
- **Entrata native AP** won Northstar Management at a 29% lower cost.
- **Bill.com** won Affinity Home Hospice on speed: *"The main reason is the capture time... when you have an invoice, you upload it, they are right there. But like you guys, it's like 8 to 24 hours."*

**5. Product-market fit gaps (5 of 34 lost deals)**

Specific feature gaps that killed deals:
- **PO ingestion/matching:** Westminster Communities needed two-way PO matching with Acumatica; Ottimate couldn't support it.
- **Complex allocation templates:** Charlotte Behavioral Health needed automatic recognition of building + vendor combinations for pre-defined allocation routing. Ottimate offered CSV workarounds.
- **Invoice capture speed:** Affinity Home Hospice needed real-time OCR; Ottimate's 8–24 hour processing window was a dealbreaker.
- **Multi-entity bank routing:** Libertana needed to assign payment methods to 200+ new vendors per week; Ottimate's vendor outreach model conflicted with their workflow.

### Stall Patterns

**The silent death:** 12 of 34 lost deals had 5+ month gaps between the last substantive call and the eventual loss. Marquee Dental (8 months), Vitana (7 months), St. Joseph's (8.5 months), and Envision Radiology (9 months) all died from inaction rather than active rejection. The pattern: a promising demo or scoping call, a vague next step, and then silence.

**The deferred "yes":** 6 deals used language like "let's revisit after [event]" — after the ERP goes live, after the new CFO settles in, after the building project starts, after audit season. None of these deferred commitments converted.

**The champion who couldn't sell internally:** In 15 lost deals, the operational champion (AP manager, controller) was enthusiastic but couldn't get budget approval. They lacked either the authority or the internal business case materials to advocate effectively. Bradford's Wilson said it plainly: *"The next thing is going to be for us to start to sell it to leadership above me"* — and then had nothing to hand them.

---

## 6. Key Strategic Takeaways

**Senior Living is the beachhead.** This segment has the highest volume of deals, the fastest close cycles when CFOs engage early, and a natural referral network between operators. The pain is acute (thin staffing, paper-heavy, audit pressure) and the buying process is simpler (typically CFO + AP Director, not a 10-person committee).

**DSO deals require field validation.** Every dental deal that closed required a practice manager or field operations person to sign off. Lori Yant at Modis was openly skeptical until Call 6 — her acceptance was the turning point. Build field validation into the deal plan from the start.

**CFO engagement by Call 3 is the single strongest predictor of winning.** 80% of won deals had CFO engagement by Call 3. 59% of lost deals never engaged the CFO at all. This should be a hard qualification gate.

**The ROI gap is killing deals.** Fourteen lost deals had no ROI model delivered. The won deals that closed fastest all had clear FTE math: St. Dominic's $55K salary replacement, Silverpoint's 17 hours/week reclaimed, Platinum's $5.1K/month in rebates. Build the ROI model before the pricing call, not after.

**ERP migrations are the #1 external blocker.** Eight deals lost to "we're implementing [Sage/Netsuite/Workday/Acumatica] first." The counter-positioning needs to be stronger: Ottimate complements the ERP, doesn't compete with it, and can actually accelerate the migration by automating AP before the cutover.

**Unified platform competitors are a real threat.** Coupa, Continia, and native ERP AP modules won 5 deals. The winning message was "one vendor" and "all-in-one." Ottimate's counter needs to emphasize specialization advantage — healthcare-specific allocation logic, multi-entity support, and faster time-to-value versus configuring a generic platform.

---

*Analysis based on review of all available deal analysis files and sampling of 40+ individual call transcripts across pricing, scoping, demo, and close calls.*
