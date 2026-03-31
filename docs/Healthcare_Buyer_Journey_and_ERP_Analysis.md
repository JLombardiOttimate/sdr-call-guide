# Healthcare Buyer Journey & ERP Landscape Analysis

**Analysis Date:** March 24, 2026
**Dataset:** 49 healthcare deals (15 closed-won, 34 closed-lost) | 254 call transcripts

---

## Part 1: The Actual Buyer Journey (What Really Happens, Call by Call)

Your hypothesis about messaging misalignment is supported by the data, but the problem is more specific than "wrong messaging." The issue is that **your sales motion assumes a linear, seller-controlled journey, but healthcare buyers follow a non-linear, consensus-driven journey where the decision gate shifts between calls.** Here's what the transcripts actually show.

### The Winning Journey (Observed in 12 of 15 Closed-Won Deals)

**Stage 1: Warm Entry + Pain Validation (Call 1, Days 1–7)**

The first call in won deals is almost never a cold intro. Twelve of fifteen closed-won deals started with a warm referral, a conference connection, or an inbound from a known pain event. Gulf Coast came through Dan Wagner (a previous customer CFO). Covenant Village came through a LeadingAge conference contact. Platinum Dental came through a shared private equity relationship.

What happens on this call: The AE meets 1–2 people (usually the AP Manager + Controller or CFO). The conversation is exploratory — the prospect describes their current process, the AE asks about volume, systems, and pain. The critical signal on this call is **who's in the room and what questions they ask.** In won deals, the CFO or VP Finance attended Call 1 in 80% of cases. They asked questions about integration, timeline, and cost framework — not just "how does it work."

The prospect's mindset at this stage: *"I know I have a problem, and I'm checking whether you understand my world."* They're evaluating whether Ottimate speaks their language (senior living, multi-entity, Sage, allocation) — not evaluating features yet.

**What triggers the next call:** The AE proposes a demo with the broader team. In won deals, the AE specifically asks who else should attend and gets names. The call is scheduled before the current call ends.

---

**Stage 2: Team Demo + "Aha Moment" (Call 2, Days 7–15)**

This is the most important call in the entire journey. In won deals, the demo call expands from 2 people to 4–6. The AE brings a Solutions Engineer. The prospect brings their AP team, sometimes an IT person, sometimes the CEO.

What happens: The SE walks through Ottimate using scenarios that mirror the prospect's actual workflow. At Gulf Coast, Joseph Lombardi demonstrated invoice ingestion across 13 entities with Sage 50. At Progressive Quality Care, Brittany LeClerc showed allocation logic for 7 nursing facilities. At Platinum Dental, the demo focused on multi-location GL mapping that Bill.com couldn't handle.

The "aha moment" is visible in the transcripts. At Gulf Coast, Jamie Sanchez (AP specialist) said the equivalent of "It seems more efficient... you just have to click." At St. Dominic Village, the CFO said "it just doesn't make sense that we're sitting here pushing paper around" — and then immediately started calculating what his AP staff could do instead. At Covenant Village, Jessica Carlyle (AP) confirmed the volume estimates were accurate and started problem-solving how the cutover would work.

**The prospect's mindset shifts here from "do you understand my world?" to "could this actually work for us?"**

In lost deals, this is where the journey diverges. At Westminster Communities, the SE wasn't on the call, and Dakota had to defer three technical questions ("let me circle back"). At Riccobene, the demo was strong, but a critical requirement (month-end GL date automation) was flagged and never resolved. At Anthem Memory Care, the demo went well but the real buyer (parent company LTC) never saw it.

**What triggers the next call:** In won deals, the prospect asks about pricing, implementation timeline, or integration specifics. These are buying signals — they're mentally moving from "could this work?" to "what would it take?" The AE proposes a scoping/pricing call and schedules it on the spot.

---

**Stage 3: Scoping + Technical Validation (Call 3, Days 14–25)**

This is where the SE earns the deal. The conversation shifts from "what does Ottimate do" to "how will Ottimate work in our specific environment." Topics include: ERP integration specifics (API vs. file upload, field mapping, chart of accounts), approval workflow design (who approves what, at what dollar threshold, with what fallback), payment method setup (check vs. ACH vs. virtual card, bank account routing per entity), and implementation timeline.

In won deals, every technical question raised in this call got answered — either live or within 48 hours. At Gulf Coast, Joseph Lombardi walked through the Sage 50 file upload method and confirmed it would work for 13 separate entities. At Access Health Louisiana, Brittany confirmed that 17-way allocation splits could be automated. At Covenant Village, the MatrixCare integration was scoped and de-risked.

**The prospect's mindset here: "I believe it could work. Now prove it won't break."**

In lost deals, this is where unresolved requirements become fatal. Riccobene's Holly Lupo said month-end GL automation was "the biggest deciding factor on whether we move forward or not" — and it was never resolved across 6 months. Westminster's Virginia asked about PO ingestion API support for Acumatica, and Dakota couldn't answer. Charlotte Behavioral Health needed template-driven allocation routing, and Ottimate offered a CSV workaround instead.

**What triggers the next call:** The AE proposes pricing. In won deals, the CFO is already engaged or explicitly scheduled for the pricing call. In lost deals, the AE presents pricing to the controller or AP manager and hopes they'll carry it upward.

---

**Stage 4: Pricing + ROI Justification (Call 4, Days 20–35)**

This is the call where deals are won or lost — not because of price, but because of **who hears the price and what context surrounds it.**

In every closed-won deal, the CFO or VP Finance was on the pricing call. At Gulf Coast, BJ Bergeron (CEO/operator) said the number was "in the ballpark of what I was thinking." At Silverpoint, David Clement said "the price is reasonable." At St. Dominic Village, Daniel Wagner immediately did the FTE math: "Her assistant makes $55,000 a year. So this is a huge pickup."

The winning pattern on pricing calls: the AE presents three numbers together — the subscription cost, the cashback/rebate opportunity, and the net effective cost. At Covenant Village, Erica Ross showed that monthly cashback of $301–$460 offset the existing Paymerang cost, making Ottimate essentially cost-neutral with added automation. At Gulf Coast, Dakota showed $11,782/year in virtual card rebates against a $47,988 subscription, netting to $36,206.

In lost deals, pricing was presented without this context. At Marquee Dental, Jeffrey Rooks explicitly asked for a dollar savings analysis and set a 60-day deadline — the ROI model was never completed. At Diamond Braces, the $52K price was relayed to the CEO by the AP contact, without any business case attached. The CEO rejected it based on cost alone.

**The prospect's mindset: "Is this worth the money, the disruption, and my political capital to push through?"**

**What triggers the next call:** In won deals, the prospect asks about contract terms, implementation start dates, or who their CSM will be. These are close signals. In lost deals, the prospect says "let me share this internally" and goes quiet.

---

**Stage 5: Contract + Implementation Alignment (Calls 5–7, Days 30–47)**

In won deals, this stage is almost administrative. The decision has already been made emotionally and financially by Call 4. What remains is SOW review, implementation scheduling, and sometimes a final "executive alignment" call.

At Covenant Village, Calls 6 and 7 were SOW review and timeline discussion — no new objections, no new stakeholders, just logistics. At Gulf Coast, the deal closed 3 days after the pricing call. At St. Dominic Village, Dakota offered an aggressive year-end discount (19% off annual + doubled cashback basis points) and Wagner signed within the week.

**The close is a non-event in won deals.** If it feels like a high-drama moment, the deal wasn't properly built.

---

### Where Lost Deals Diverge (The Three Failure Gates)

**Gate 1: Technical Knockout (Calls 2–3)**
The prospect raises a must-have requirement that can't be answered live. If it's not resolved within 72 hours, the deal enters a death spiral. Riccobene (month-end GL), Westminster (PO ingestion), Charlotte Behavioral (allocation templates), and Affinity Hospice (OCR speed) all died here. **This is the most controllable failure mode — it's a sales execution problem, not a market problem.**

**Gate 2: Champion Power Gap (Calls 3–5)**
The person you're selling to can't actually buy. They need their CFO, their CEO, their parent company, or their board to approve. If the economic buyer never appears on a call, the deal is dead — it just doesn't know it yet. Anthem Memory Care (parent company LTC), Diamond Braces (CEO Marsha), United Methodist Memorial Home (Allison "ghosted"), and 17 other lost deals all failed here. **This is a qualification problem — you're investing time in deals where the buyer isn't in the room.**

**Gate 3: External Timing Block (Any Stage)**
ERP migrations, auditor vetoes, organizational turnover, and budget freezes. Anthem's Deloitte auditors vetoed new technology. Riccobene lost their controller and assistant controller. Eight deals stalled because of active ERP migrations. **This is the least controllable — but it is predictable. Ask about these blockers on Call 1.**

---

### The Messaging Misalignment

Based on the transcripts, here's where your current messaging likely misses:

**What you're probably leading with:** Feature-led positioning. "Ottimate automates AP with AI-powered invoice capture, approval workflows, and vendor payments."

**What the prospect is thinking on Call 1:** "Do you understand that I have 13 separate Sage instances and nobody can see across them?" or "Do you know what it's like to have one AP person alternating between payroll and invoices every other week?"

**What the prospect needs to hear on Call 1:** Proof that you've solved their exact problem for someone exactly like them. Gulf Coast closed in 20 days because Dan Wagner (a CFO they trusted) said "these guys solved this for me." Platinum closed because GPS Dental (same PE fund) was a reference.

**What the prospect is thinking on Call 4 (pricing):** "Can I justify this to my board/CEO with a 30-second explanation?" They need a one-sentence ROI narrative: "This saves us one FTE and pays for itself in rebates" or "This cuts our month-end close by 2 days and eliminates our audit exposure."

**What they're not thinking about on any call:** Your AI capabilities, your OCR accuracy rates, or your platform architecture. These are table stakes that get validated during the demo. They never appear as decision drivers in any transcript.

---

## Part 2: The ERP Landscape in Healthcare

### The Dominant Systems

**Sage Intacct** is the most prevalent ERP across your healthcare pipeline by a significant margin. It appeared in 15–18 of 49 deals — both as the current system and as the ERP prospects are migrating toward. In senior living, community health, and multi-specialty medical, Sage Intacct is the default mid-market choice. Access Health Louisiana, St. Croix Health, Gulf Coast (migrating from Sage 50), and Silverpoint all run or are moving to Intacct. The good news: Ottimate's Intacct integration is mature and was a positive factor in multiple closed-won deals. The risk: 5 deals stalled specifically because the prospect was mid-Intacct-migration and didn't want to add another system during cutover.

**Sage 50 (formerly Peachtree)** appeared in 4–5 deals, predominantly in senior living organizations running multi-entity setups. Gulf Coast LTC had 13 separate Sage 50 instances (alongside a Sage 100 instance) — one per nursing home — with no consolidation capability. This is the sweet spot for Ottimate: Sage 50 lacks native multi-entity AP automation, and the pain of managing separate instances is visceral. Every Sage 50 deal that reached pricing closed (4 of 4).

**QuickBooks** appeared in 8–10 deals, making it the second most common ERP in the pipeline after Sage Intacct. It spans multiple segments: GastroMed (multi-specialty medical, 4 QB Enterprise instances), Cor Medical Centers (18 QB instances across 14+ locations), Elev8 Center NJ (single-entity), Diamond Braces, Lantern Pharma, Preston County, and several others. Elev8 closed quickly — the QB approval add-on had already failed them. GastroMed closed because Ottimate's allocation engine solved the multi-instance QB complexity that no competitor could. QBO organizations tend to be simpler deals with shorter cycles, but multi-instance QB shops (like GastroMed and Cor Medical) have acute pain comparable to Sage 50 multi-entity setups.

**PCC/PointClickCare** appeared in 4 deals as the primary EMR/financial system for senior living communities. St. Dominic Village (won) and Wesley Manor (won) both ran PCC, as did Trinity Woods (lost) and St. Joseph's Elder Services (lost). PCC is a healthcare-specific clinical and financial platform dominant in skilled nursing and senior living. The 50% win rate reflects the segment dynamics more than the ERP — when the CFO engaged, these deals closed; when they didn't, the deals stalled. PCC integration capability is a relevant qualifier in the senior living vertical.

**MatrixCare** appeared in 3 deals as the primary ERP/EMR for senior living communities. Covenant Village and Progressive Quality Care both ran MatrixCare Enterprise Financials. This is a healthcare-specific ERP, and Ottimate's integration with it was a differentiator — competing AP automation tools don't natively connect to MatrixCare.

**NetSuite** appeared in 5 deals and was a **100% deal-blocker.** Vitana Pediatric Orthodontic Partners went live on NetSuite and immediately stopped the Ottimate evaluation because NetSuite's native AP module was "good enough." Lantern Pharma was also migrating to NetSuite. Libertana runs NetSuite as their core ERP (with CorePay for payments) and the deal died on vendor onboarding workflow friction. Blue Ridge Hospice uses NetSuite with a multi-subsidiary structure and the deal died on budget constraints and HIPAA compliance roadmap gaps. Charlotte Behavioral Health was evaluating NetSuite vs. Business Central as part of their ERP selection. When a prospect says "we're going to NetSuite" or is already on it, the deal is high-risk unless you can position Ottimate as a complement to NetSuite's weak AP automation.

**Microsoft Dynamics (Business Central / GP / NAV)** appeared in 4 deals. Charlotte Behavioral Health ran Business Central and chose Continia — a Dynamics-native AP solution recommended by their ERP implementation partner (Opal). Providence Life Services was migrating from Great Plains to Sage Intacct. Bradford Health Services runs Great Plains. This is a difficult competitive position: when the ERP partner recommends a solution, Ottimate is fighting against a trusted advisor relationship.

**Acumatica** appeared in 3 deals and was problematic. Westminster Communities ran Acumatica and the deal died because Ottimate couldn't support PO ingestion through Acumatica's API. Eden Hill was also an Acumatica shop. The API limitations with Acumatica are a real product gap.

**Yardi** appeared in 2 deals — The Pointes and Epoch Senior Living — both closed-lost. Yardi is a property management ERP, and these deals sit at the intersection of healthcare and property management. Neither progressed past early stages.

**MIP (Abila/Community Brands)** appeared in 1 deal — Children's Home Network — which was lost when the new CFO deprioritized the evaluation. MIP is a nonprofit-specific ERP, and the prospect was exploring a full ERP replacement (Oracle/SAP) rather than bolt-on AP automation.

### ERP Distribution by Deal Outcome

| ERP System | Closed-Won | Closed-Lost | Win Rate | Notes |
|-----------|-----------|------------|----------|-------|
| Sage Intacct | 7 | 8–11 | ~37% | Strong integration; migration timing is the risk |
| QuickBooks | 2–3 | 6–7 | ~30% | High volume; multi-instance shops have acute pain |
| Sage 50 | 4 | 0 | 100% | Perfect fit — no native AP automation |
| PCC/PointClickCare | 2 | 2 | 50% | Healthcare-specific; win rate tracks CFO engagement |
| NetSuite | 0 | 5 | 0% | Native AP module + bundled licensing kills deals |
| MatrixCare | 2 | 1 | 67% | Healthcare-specific differentiator |
| Dynamics (BC/GP) | 0 | 4 | 0% | Continia wins in this ecosystem |
| Acumatica | 0 | 3 | 0% | API gaps block deals |
| Yardi | 0 | 2 | 0% | Property management crossover; early-stage losses |
| Workday | 0 | 2 | 0% | Enterprise — likely wrong segment |
| MIP | 0 | 1 | 0% | Nonprofit ERP; prospect wanted full ERP replacement |

### Incumbent AP/Payment Tools (Competitors, Not ERPs)

These are the tools Ottimate displaces — they sit on top of the ERP and handle invoice capture, payment execution, or both. They're important to track separately because the competitive dynamic is different: with an ERP, Ottimate needs to integrate; with these tools, Ottimate needs to replace.

| Tool | Category | Deals Encountered | Outcome When Present | Notes |
|------|----------|-------------------|---------------------|-------|
| Bill.com | AP Automation + Payments | 8 | Won 3, Lost 2 | Most common incumbent/competitor. Prospects outgrow it at scale (multi-location GL mapping breaks). Affinity Hospice chose Bill.com over Ottimate on OCR speed. Vitana stayed with Bill.com bundled into NetSuite. |
| Stampli/Stampley | AP Automation | 3 | Won 2, Lost 0 | Evaluated at Access Health LA, St. Croix, and Affinity Hospice. Can't handle multi-entity allocation or EDI ingestion. Affinity left Stampli for MineralTree (HIPAA), then chose Bill.com. |
| Beanworks | AP Automation | 3 | Won 1, Lost 1 | Progressive QC replaced it (lacked payment automation). UM Memorial Home stayed with it. Envision Radiology had it but deal stalled. |
| DSSI | GPO/Broadline AP | 3 | Won 0, Lost 0 (to other factors) | Handles broadline vendor invoices (food service, medical supplies) only. Ciena, Providence, Epoch all had DSSI but manual processes for non-broadline. Not a direct competitor — covers a different invoice category. |
| Coupa | Procurement + AP (Unified) | 2 | Lost 2 | Won Anthem Memory Care and MedProcure (same parent org). "All-in-one platform" positioning beat Ottimate's point solution story. |
| MineralTree | AP Automation | 2 | Won 1, Lost 0 | Evaluated at Access Health LA (couldn't handle allocation). Incumbent at Affinity Hospice (switched from Stampli for HIPAA). |
| Concur | Expense/AP | 2 | Won 0, Lost 0 (to other factors) | Incumbent at Family Healthcare and Tiburcio Vásquez. Both lost to ERP consolidation, not to Concur defending. |
| Paymerang | Payment-Only (Virtual Card) | 2 | Won 2 | Covenant Village was paying ~$14K/year. Ottimate displaced it by bundling payments + AP automation + better cashback. |
| Continia | Dynamics-Native AP | 1 | Lost 1 | Won Charlotte Behavioral Health via ERP partner recommendation. Only threatens Dynamics ecosystem deals. |
| Tipalti | AP Automation + Payments | 1 | Won 1 | GastroMed mentioned Tipalti was unresponsive during their evaluation. Won by default. |
| AvidXchange | AP Automation + Payments | 1 | Lost 1 | Incumbent at Northstar Management; displaced by Entrata's native AP module when prospect switched ERPs. |
| Square Nine | Document Management | 2 | Won 2 | Used for invoice storage/routing at United Methodist Communities and Covenant Village. Not AP automation — more of a document capture tool that prospects outgrow. |

**Key takeaway:** When Ottimate is displacing Bill.com, Paymerang, Beanworks, or Square Nine, the win rate is high — these tools have clear capability gaps that prospects already feel. The real competitive threat comes from unified platforms (Coupa) and ERP-native solutions (Continia, NetSuite AP) where the prospect prefers consolidation over best-of-breed.

### What This Means for Pipeline Conversion

**Sage 50 is your highest-conversion ERP target.** With a 100% win rate (4 of 4), Sage 50 has no native AP automation, so the value proposition is unambiguous. If a prospect is on Sage 50 with multiple entities, they are almost certainly in pain and Ottimate is a natural fit.

**Sage Intacct is your volume play but needs careful timing.** It's the most common system in your pipeline (15–18 deals), and your integration works well. But you need to qualify hard on migration status. If they're mid-migration, the deal should be parked and re-engaged 60 days post-go-live, not abandoned.

**PCC and MatrixCare are healthcare-specific differentiators.** PCC appeared in 4 deals with a 50% win rate that tracks CFO engagement — when the CFO was present, these closed. MatrixCare (67% win rate) is even stronger because competing AP tools don't natively integrate with it. Both represent defensible niches in senior living.

**QuickBooks is high-volume but inconsistent.** At 8–10 deals it's the second most common ERP, but the ~30% win rate reflects a mix of deal types. Multi-instance QB shops (like GastroMed with 4 instances, or Cor Medical with 18) have acute pain and convert well. Single-entity QB shops are smaller, faster deals but harder to justify the investment.

**NetSuite, Dynamics, Acumatica, Yardi, Workday, and MIP are danger zones.** Together they accounted for 17 lost deals and 0 wins. NetSuite's native AP is "good enough" for most mid-market buyers. Dynamics shops get steered to Continia by their implementation partners. Acumatica has API limitations that create technical knockouts. Yardi and Workday signal wrong-segment prospects (property management and enterprise, respectively). Unless you have a specific competitive play for these ERPs, they're poor qualification targets.

**MatrixCare deserves a dedicated go-to-market motion.** It's healthcare-specific, competitors don't integrate with it, and two of three deals that reached pricing closed. If you can build MatrixCare-specific case studies, integration docs, and conference presence, this could be a defensible niche.

### ERP-Driven Qualification Framework

Based on the data, here's how ERP should factor into deal qualification:

**Green Light (High Conversion):** Sage 50 (100% win rate), MatrixCare (67%), PCC/PointClickCare (50% — wins track CFO engagement). Proceed aggressively; these convert reliably when they reach pricing with the economic buyer present.

**Yellow Light (Qualify Carefully):** Sage Intacct (37% — confirm migration status: if live, proceed; if migrating, park and re-engage 60 days post-go-live). QuickBooks (~30% — qualify on multi-instance complexity and invoice volume; multi-location QB shops convert well, single-entity shops are smaller and less consistent).

**Red Light (Likely Loss):** NetSuite (0% — native AP module bundled, especially PE-backed), Dynamics BC/GP (0% — Continia wins via ERP partner recommendation), Acumatica (0% — PO ingestion product gap), Yardi (0% — property management crossover, wrong segment), Workday (0% — enterprise, above Ottimate's sweet spot), MIP (0% — nonprofit ERP, prospect wanted full ERP replacement). Qualify hard on Call 1. If the ERP partner is recommending a competing AP solution, deprioritize immediately.

---

## Part 3: Connecting the Dots — Why Pipeline Isn't Converting

The buyer journey and ERP data together tell a clear story about your pipeline-to-MRR conversion problem:

**1. You're spending cycles on deals that can't close.** Seventeen lost deals were on ERPs where Ottimate has a 0% win rate — NetSuite (5), Dynamics (4), Acumatica (3), Yardi (2), Workday (2), and MIP (1). Many of these overlapped with active ERP migrations, compounding the problem. When you add deals that were mid-ERP-migration on otherwise viable ERPs, roughly 20 of 34 lost deals (59%) were fundamentally unqualifiable or severely timing-blocked. If you eliminate these from pipeline, your effective win rate on qualified deals climbs from 31% to well above 50%.

**2. The CFO isn't hearing the pitch.** In 20 of 34 lost deals, the economic buyer was never engaged. Your AEs are building relationships with AP managers and controllers who love the product but can't sign the check. The fix isn't better messaging — it's a hard gate: "No pricing call without CFO confirmed."

**3. Technical requirements are killing deals slowly.** Unresolved must-have requirements hung for months in multiple deals (Riccobene: 6 months, Marquee: 8 months). The SE needs to resolve any "deciding factor" requirement within 72 hours, or the deal should be escalated or parked.

**4. The ROI case isn't being made.** Fourteen lost deals had no ROI model delivered. The won deals that closed fastest all featured the prospect doing the math themselves — because the AE gave them the inputs. Build the ROI model before the pricing call: current FTE cost, current processing cost per invoice, Ottimate cost per invoice, cashback offset, net savings.

**5. Your best segment (senior living on Sage 50, MatrixCare, or PCC) is underweighted in pipeline.** Four of four Sage 50 deals closed. Two of three MatrixCare deals closed. Two of four PCC deals closed (and the wins tracked CFO engagement perfectly). Seven of nineteen senior living deals closed overall. This is where the product-market fit is strongest, the sales cycles are shortest, and the referral network is most active. Tilting pipeline generation toward senior living operators on Sage 50, MatrixCare, or PCC — and away from NetSuite/Dynamics/Acumatica shops — would materially improve conversion.

---

*This analysis is based on review of all 49 deal analysis files and detailed reading of 40+ individual call transcripts across all deal stages.*
