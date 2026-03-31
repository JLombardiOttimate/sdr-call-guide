# **Hospitality Pipeline Analysis: Call Transcript Insights**

**Analysis Date:** March 24, 2026 **Dataset:** 204 hospitality deals (96 closed-won, 108 closed-lost) | ~878 call transcripts **Sales Team:** Tyler Slaughenhaupt, Katie Snowberger, James Ludwig, Sergio Rubio, Eric Poss, Morgan Macko, Shaheen Axtle, John Was

---

## **1. Segment Engagement & Progression**

### **Which segments are most engaged and progressing?**

**Country Clubs / Private Clubs** is the strongest-performing segment by a wide margin. Approximately 55 of 96 closed-won deals came from this sub-vertical, with close cycles averaging 30–90 days once the Controller or CFO engaged. These organizations share a common profile: member-driven governance structures with thin finance staffing, heavy paper-based workflows, and a Controller who personally feels the pain of manual GL coding. Deals like Rio Verde Country Club (5 days to close), Sarasota National Golf Club (31 days), and Carmel Country Club (2 calls) demonstrate that when the economic buyer is present early, country clubs move fast. The referral network within this segment is also self-reinforcing — TrueClub partnership discounts accelerate pricing conversations, and club controllers frequently reference peers at neighboring clubs.

**Hotels / Multi-Property Hospitality** is the second most active segment, though it moves differently. Deals like Concord Hospitality Enterprises (27 calls over 6 months), Radiate Hospitality (6 calls, 62 days), and Sree Hotels (4 calls) all required multi-threaded consensus across property accounting, corporate finance, IT infrastructure, and operations. Close cycles ran longer (60–180 days) because multi-property stakeholders needed hands-on validation of intercompany allocations and property-level GL mapping. The growth-driven pain in hotel management companies — scaling from 5 to 100+ properties — creates urgency that's different from country clubs' operational efficiency pain. Hotels buy because their current document management systems can't handle multi-property invoice routing and statement reconciliation at scale.

**Restaurants / Multi-Unit Food Service** showed high engagement in several deals that closed (Acme Hospitality, Noi Due Carne pipeline). The complexity here is acute — high-volume invoice fluctuation (200–600 invoices per week at Equator Coffees), vendor quality inconsistency from small artisan suppliers, and rapid location growth (2–3 new locations per year). When the product handled the data entry burden, deals closed. This segment has potential but requires strong OCR accuracy and multi-entity GL mapping as table stakes.

**Segments that stall or lose:** Casinos (Elite Casino Resorts, Clearwater River Casino — both lost due to PO matching gaps and complex procurement workflows), Quick-Service Restaurant chains (SeoulSpice — lost, pricing sensitivity at low invoice volumes), Breweries/Brewpubs (Los Angeles Ale Works — single call, no follow-up), and Pet Hospitality (Wag Hotels — lost, 9-month ghost after strong discovery). These either have unique workflow requirements Ottimate doesn't natively solve (PO matching for casinos, EDI for large food distributors), or they lack the invoice volume to justify the cost.

### **Win/Loss by Segment**

| Segment | Won | Lost | Win Rate | Avg Close Cycle (Won) |
| ----- | ----- | ----- | ----- | ----- |
| Country Clubs / Private Clubs | 55 | 52 | 51% | 52 days |
| Hotels / Multi-Property | 12 | 18 | 40% | 95 days |
| Restaurants / Multi-Unit | 10 | 16 | 38% | 68 days |
| Golf Clubs (Public/Semi-Private) | 8 | 9 | 47% | 45 days |
| Resorts / Casinos | 4 | 7 | 36% | 78 days |
| Specialty (Coffee, Bakery, Events) | 5 | 3 | 63% | 55 days |
| Other (Zoos, Pet Hotels, Staffing) | 2 | 3 | 40% | — |

---

## **2. Most Common Pain Points (Especially Later-Stage Calls)**

Pain points shift as deals progress. Early calls surface broad frustrations with paper and manual processes; later-stage calls reveal the specific, quantifiable problems that justify investment.

### **Universal Pain Points (Mentioned in 90%+ of Deals)**

**Manual invoice data entry and GL coding** is the single most consistent pain point across every segment. Prospects describe physically handling paper invoices, hand-coding GL accounts, and manually entering data into their ERP. In later-stage calls, this pain gets quantified: Equator Coffees' Controller described their process as *"almost 100 percent data entry for most things"* — two full-time AP staff processing 400–500 invoices per week and still *"perennially late."* Country Club of Peoria's Controller said plainly: *"We need to enter them all manually. I do all that."* Discovery Land's Director of Financial Accounting opened with: *"I'm so far behind I think I'm winning"* — a joke that captured the universal backlog.

**Approval workflow bottlenecks** appear in virtually every deal. Department heads at clubs sit on invoices. Chefs code food invoices but don't return them promptly. GMs at hotels approve slowly during busy seasons. In later-stage calls, prospects connect this to real financial impact — Concord Hospitality described approvers sitting on invoices *"three, four days before they actually get approved. It's delaying our books. It's delaying the ability to pay vendors in a timely fashion."* Denver Country Club's Controller described the seasonal crunch: *"when they're stressed out and when the course is crowded and all of that, the last thing they want to do is sit down at their desk and be coding signing approving invoices."*

**Multi-location/entity complexity** is acute in deals with 3+ properties or entities. Each location may have separate GL structures, different approval chains, and siloed systems. Concord Hospitality managed intercompany allocations manually, with controllers building out AR modules at month-end. Radiate Hospitality struggled with intercompany invoice allocation across 11 hotels. Equator Coffees needed multi-location GL coding that Bill.com couldn't provide. This pain intensifies as organizations grow through acquisition or new builds.

### **Later-Stage Pain Points (Pricing/Scoping Calls)**

**Statement reconciliation and month-end close burden** surfaces prominently in scoping and pricing calls. Controllers describe month-end as consuming 5–10 days just for vendor statement reconciliation at Concord Hospitality. Country Club of Peoria's Controller had no electronic vendor feeds — everything was manual. Equator Coffees described reconciliation with key suppliers as a constant drain alongside the 400–500 invoices per week.

**Audit and compliance exposure** becomes a deciding factor in later conversations. Country Club of Peoria's Controller revealed that a board-level system audit had specifically recommended AP automation — *"they told them until you can lower her workload, you're not going to get it in the time you want it."* Carmel Country Club's CFO described a $100K check theft from the mail. Bay Head Yacht Club experienced multiple stolen checks requiring stop-payments and positive pay compliance. Boca Woods' CFO referenced a prior failed implementation with Eden Red that delivered $2–3K in rebates against a $50K projection.

**Check fraud and payment security** gets framed as both a financial and operational risk in later conversations. CFOs want digital payments to eliminate mail fraud. AP teams want it to stop the weekly check-run marathon — printing, stapling, signing, and mailing physical checks.

**Virtual card rebates and cost-neutral math** becomes a tangible ROI lever in pricing discussions. Rio Verde Country Club's GM calculated that *"basically, we're going to make money by doing this."* Sarasota National's GM noted it *"looks cost neutral to me."* Boca Woods' CFO was more skeptical, having been burned before: *"We went through that with Eden Red. And that was the big selling feature for them. We never came anywhere near what they estimated."*

---

## **3. Roles That Show Up When Deals Get Serious**

There's a consistent pattern in the buyer composition as deals progress from discovery to close:

### **Early Calls (Discovery / Demo)**

* **Controller or AP Manager** — the person living the daily pain. Often the initial contact. They validate the workflow fit and articulate the manual burden.
* **Director of Finance or Accounting** — evaluates the product against current processes and competing alternatives. In country clubs, this is often the sole finance employee.

### **Mid-Cycle (Second Demo / Scoping)**

* **IT Director or Systems Administrator** — appears when integration questions arise (ERP connectivity, network security, DMS replacement). Andrew Switala at Concord Hospitality (Sr. Director of Network Administration), Trey Smith at Discovery Land (CIO), and Kelly Johnson at Discovery Land (Director, Data Systems) all entered at this stage.
* **VP of Operations or Regional Director** — in multi-property setups, operations leaders validate that field staff can adopt the workflow. Ferdinand Widjaja at Radiate Hospitality championed from regional finance; Cathryn Andrews at Concord Hospitality drove operations accounting.

### **Late Calls (Pricing / Contract)**

* **CFO or VP Finance** — the economic buyer. In every closed-won deal, the CFO or equivalent was actively engaged by the pricing call. Rick Cooke (Boca Woods CFO), Stephanie Anderson (Carmel Country Club CFO), Courtney Hunt (Denver Country Club Controller), David Eales (Admiral's Cove), and Robin Graff (Indian Wells GM) all personally validated pricing.
* **General Manager or Owner** — appears in the largest deals. Anthony Paino (Rio Verde GM/COO) co-signed same-day. BJ Bergeron-equivalent roles at multi-property companies (Concord's SVP of Accounting, Scott Ness) engaged at contract stage. Board approval required at member-owned clubs like Boca Woods and Raintree.

### **The Critical Pattern: Economic Buyer Timing**

In **closed-won deals**, the CFO or economic buyer was actively engaged by Call 3 on average. In **closed-lost deals**, the economic buyer was either never engaged (estimated 67% of lost deals based on detailed analysis), engaged too late (after pricing was presented without their input), or overruled by someone higher (board, ownership group).

| Economic Buyer Engagement | Won | Lost |
| ----- | ----- | ----- |
| Engaged by Call 3 | ~77/96 (80%) | ~19/108 (18%) |
| Engaged Call 4+ | ~19/96 (20%) | ~26/108 (24%) |
| Never engaged | 0/96 (0%) | ~63/108 (58%) |

**When a deal gets serious, you'll see the CFO/Controller, an IT/systems person, and typically 4–5 distinct personas on the call.** Boca Woods' final team demo had 6 attendees: CFO, AP staff, Assistant Controller, Purchaser, and POA manager. If by Call 3 you're still only talking to the AP clerk or a single controller, the deal is likely stalling.

---

## **4. Exact Prospect Language**

### **Around Cost and Pricing**

Prospects talk about cost in three distinct ways:

**Pleasantly surprised** — Controllers and CFOs compare the price to something they already expected:

* *"I thought I was going to be dramatically more expensive."* — Stephanie Anderson, CFO, Carmel Country Club
* *"Yeah, that looks great. It's actually much lower than I was kind of, I wasn't really sure what to expect to come in at really, but yeah, not this low."* — Courtney Hunt, Controller, Denver Country Club
* *"When you break it down by month, it's only a 1,000 dollars, right? It's not that much compared to what I'm paying my staff to run them."* — Jorge Covarrubias, Controller, Metropolitan Club SF (closed-lost — rationalizing the math but couldn't get budget approval)

**Per-unit and overage anxiety** — prospects fixate on cost structure and volume thresholds:

* *"A dollar 74 per invoice, honestly seems high to me if I were to be quite honest, however, I've never actually sat and done the math on what is it taking right now."* — Eric, Corporate Director of Finance, Scarlett Hotel Group
* *"I am questioning the 42,000 invoices though because I mean just doing a quick calculation that's like 300 a month which I don't know whether or not that's where we're at."* — Jorge Covarrubias, Controller, Metropolitan Club SF

**Cost-neutral / rebate math** — the strongest buying signal:

* *"So basically, we're going to make money by doing this."* — Anthony Paino, GM/COO, Rio Verde Country Club
* *"Looks cost neutral to me."* — Darrell Wilde, GM/COO, Sarasota National Golf Club
* *"I estimated between, what I am currently spending about 12,000. So that is a savings on top of it right there that I can present to the board."* — Peggy Tregear, Controller, Avalon Yacht Club
* *"We went through that with Eden Red... We never came anywhere near what they estimated."* — Rick Cooke, CFO, Boca Woods Country Club (skepticism from prior failed rebate promise)

### **Around Errors and Manual Processes**

Prospects describe their manual pain with visceral, operational language:

**Frustration and overwhelm:**

* *"It's an area where it just never seems like we can get in front of it or be caught up. It's just sort of perennially late."* — Joshua, Director of Finance, Equator Coffees
* *"I'm so far behind I think I'm winning."* — Tom Cullen, Director of Financial Accounting, Discovery Land
* *"I am the queen of efficiency and Encore is not making it very efficient."* — Stephanie Anderson, CFO, Carmel Country Club
* *"We just had one here that was like almost 100 grand that somebody took obviously took out of our either from the... because it was in the city had to have taken it because we dropped it at the post office."* — Stephanie Anderson, CFO, Carmel Country Club (on check theft)

**Specific process breakdowns:**

* *"It's pretty much almost 100 percent data entry for most things."* — Maggie Moticka, Controller, Equator Coffees
* *"We need to enter them all manually. I do all that."* — Mary Mercer, Controller, Country Club of Peoria
* *"Three, four days before they actually get approved. It's delaying our books. It's delaying the ability to pay vendors in a timely fashion."* — Tyler Slaughenhaupt describing Concord Hospitality's approval bottleneck
* *"We've got some vendors that are really good at sending you their invoices, some are medium and some are terrible."* — Equator Coffees team (on vendor invoice quality)
* *"Duplicates and eating my hair out."* — Milin Patel, Owner/Operator, 90Jonquil Hospitality (on duplicate invoice detection)

### **Around Reporting and Visibility**

**The "black box" problem:**

* *"Until you can lower her workload, you're not going to get it in the time you want it."* — Board auditor's finding, Country Club of Peoria (AP consuming all capacity for financial reporting)
* *"When they're stressed out and when the course is crowded and all of that, the last thing they want to do is sit down at their desk and be coding signing approving invoices."* — Denver Country Club reference (on seasonal visibility gaps)
* *"I like Power BI stuff because it's on SQL but process wise, I'd like it to report wise, all kinds of stuff. I like to be able to dump stuff and manipulate it."* — Stephanie Anderson, CFO, Carmel Country Club

**Audit and compliance anxiety:**

* *"We had a system audit a couple of years ago and that was one of the recommendations was to automate payables."* — Mary Mercer, Controller, Country Club of Peoria
* *"That was a whole thing last week two weeks ago."* — Bay Head Yacht Club (on check fraud requiring stop-payments and positive pay)
* *"I'd like to see how easy it is for them to get in and out of there and do what they need to do to approve, you know, payments because some of them are not so technically advanced."* — Rick Cooke, CFO, Boca Woods Country Club

---

## **5. Objection Patterns and Stalled Deals**

### **Primary Objections (Ranked by Frequency)**

**1. "Not the right time" / Competing priorities (estimated 50+ of 108 lost deals)**

This is the most common objection and it takes several forms:

* **ERP migration or system transition in flight:** Multiple deals stalled because the prospect was mid-migration to Jonas, Sage Intacct, Netsuite, or transitioning from outsourced accounting firms. Equator Coffees had Bill.com limitations but was evaluating a full Netsuite reconfiguration. MasMex's CFO said: *"My external accounting firm that we've been using... we're going to be rolling off of them at the end of July"* — deferring Ottimate to August at the earliest.
* **Organizational instability:** New Controller/CFO arriving, M&A activity, or leadership turnover froze decisions. Metropolitan Club SF's Controller said: *"We're just turning around a period of mismanagement... I don't see this happening right this moment."* New board installations at member-owned clubs created conservative spending postures.
* **Budget cycle misalignment:** Fairfield Glade's Assistant Controller noted they had *"Beanworks paid through the end of the year"* — sunk cost in a current vendor creating a natural delay. Multiple clubs cited fiscal year timing and finance committee cycles as blockers.

**Typical language:** *"It's going to be probably August before we really dig in"* — Kelly Knybel, CFO, MasMex. *"At this point, I really don't know... we're talking about new budget season which is pretty much like 10 months from now"* — Jorge Covarrubias, Metropolitan Club SF.

**2. Economic buyer never engaged (estimated 63 of 108 lost deals)**

This isn't an objection prospects raise — it's a structural failure. The pattern: Ottimate builds enthusiasm with the Controller or AP Manager, presents pricing, and then learns that someone higher (CFO, GM, Board, Owner) needs to approve. That person either never appears or kills the deal.

Examples:

* Magnolia Hospitality Services: Single 22-minute discovery call with Adam Kipple (President), then a 2-minute voicemail. No follow-up. Deal died from inaction.
* Beacon Hill Country Club: Mike Meissner (GM) was the only contact through 5 calls. No finance leader ever engaged. Deal went silent after a check-in in October 2025.
* Pita Jungle: Kenny Holmes (Dir HR/Systems) was the primary contact but lacked budget authority. Tom (CFO-equivalent) was mentioned but never engaged directly.

**3. "No clear ROI" / Business case never built (estimated 30+ of 108 lost deals)**

Prospects didn't say "your product is too expensive" — they said they couldn't justify the spend internally. Jackmont Hospitality's Administrator said it directly: *"The $1.31 cost right here isn't, from my perspective, isn't sufficient savings for our current operations"* and *"I don't see a true cost savings for us — it looks like a wash."* Without quantified FTE savings or rebate projections tied to their specific invoice volumes, the deal died.

* Scarlett Hotel Group: Eric acknowledged *"A dollar 74 per invoice honestly seems high to me... however, I've never actually sat and done the math on what is it taking right now."* The ROI model was never completed for him.
* Indianapolis Zoo: Tom Metz liked everything *"with the exception of the fact that you cannot do POS"* — but also noted the discount deadline was *"a little quicker than I would want."* No business case bridged the gap.

**4. Competitive loss to incumbent platforms or bundled solutions (estimated 12 of 108 lost deals)**

When prospects chose a competitor, it was almost always an incumbent vendor with an existing relationship rather than a competing AP automation point solution:

* **Wells Fargo native AP** won Caribe Royale. N. Seddon said: *"If we didn't have Wells Fargo and we had another banking organization that did not offer a product as part of their service package, then I would definitely see the viability of this."*
* **Eden Red / Beanworks** retained Fairfield Glade and Country Club of Darien because of existing contracts and NorthStar ERP integration.
* **Continia / ERP-native AP** won deals where the ERP implementation partner recommended a bundled solution.
* **Punch** won at least one restaurant deal as a direct software competitor.
* **Internal hire** beat Ottimate at San Francisco Golf Club — they chose to hire a person rather than buy software.

**5. Product-market fit gaps (estimated 8 of 108 lost deals)**

Specific feature gaps that killed deals:

* **PO matching:** Elite Casino Resorts needed two-way PO matching with their procurement system; Ottimate's PO capabilities were demonstrated but didn't fully meet casino procurement complexity.
* **EDI vendor ingestion:** HCI Hospitality needed automated handling of bakery vendor EDI feeds (Bimbo, Flowers Bakery — 3–5 weekly invoices × 40 locations); Ottimate couldn't replace the Restaurant 365 EDI pipeline.
* **Invoice capture speed:** Similar to healthcare, some prospects expected real-time OCR rather than batch processing windows.
* **POS integration:** Indianapolis Zoo needed POS integration that Ottimate doesn't offer.

### **Stall Patterns**

**The silent death:** The dominant pattern in hospitality losses. An estimated 78% of lost deals had significant gaps (3+ months) between the last substantive call and the eventual loss. Morton Golf Management (9-month gap after strong May calls), AKA Hotels (6-month silence after August demo), Wag Hotels (9-month ghost after strong discovery), and Clearwater River Casino (196-day gap) all died from inaction rather than active rejection. The pattern: a promising demo or scoping call, a vague next step, and then silence.

**The deferred "yes":** Multiple deals used language like "let's revisit after [event]" — after the budget cycle, after the new board settles in, after the ERP goes live, after busy season ends. Metropolitan Club SF deferred to *"new budget season which is pretty much like 10 months from now."* MasMex deferred to *"probably August."* Fairfield Glade deferred to *"end of the year"* when Beanworks expired. Few of these deferred commitments converted.

**The champion who couldn't sell internally:** In a significant portion of lost deals, the operational champion (Controller, AP Manager, Director of Finance) was enthusiastic but couldn't get budget approval from the GM, Board, or Owner. Metropolitan Club SF's Controller had staff support — *"I did share this with my staff and they seem to like it because that's going to be a huge help for them"* — but a new conservative board and recent mismanagement recovery made the CFO unwilling to advocate upward. Fairfield Glade's Assistant Controller admitted: *"I've never been in charge of making these kinds of calls. I've always been kind of, you know, had to deal with the repercussions."*

---

## **6. Key Strategic Takeaways**

**Country Clubs are the beachhead.** This segment has the highest volume of deals, the fastest close cycles when Controllers engage early, and a natural referral network between club professionals. The pain is acute (thin staffing, paper-heavy, board audit pressure) and the buying process is simpler (typically Controller + GM, not a 10-person committee). The TrueClub partnership discount further accelerates pricing conversations.

**Hotel deals require multi-property validation.** Every hotel deal that closed required property-level accounting staff, corporate finance, and IT to sign off. Concord Hospitality needed 27 calls across 6 months to align all stakeholders. Build multi-property validation into the deal plan from the start, and expect intercompany allocation capabilities to be scrutinized.

**Economic buyer engagement by Call 3 is the single strongest predictor of winning.** 80% of won deals had CFO/GM engagement by Call 3. An estimated 58% of lost deals never engaged the economic buyer at all. This should be a hard qualification gate — if the Controller can't get the GM or CFO on a call by the third meeting, the deal needs to be re-qualified or deprioritized.

**The ROI gap is killing deals.** Numerous lost deals had no ROI model delivered to the economic buyer. The won deals that closed fastest all had clear cost-neutral or cost-positive math: Rio Verde's "we're going to make money," Sarasota National's "looks cost neutral," Avalon Yacht Club's $12K current spend comparison. Build the ROI model before the pricing call, not after. And be cautious with rebate projections — Boca Woods' CFO had been burned by Eden Red's unrealistic estimates, making him deeply skeptical of cashback promises.

**System transitions and budget cycles are the #1 external blocker.** Deals lost to "we're implementing a new ERP," "we're rolling off our accounting firm," or "our budget cycle starts in 10 months." The counter-positioning needs to be stronger: Ottimate complements the ERP, doesn't compete with it, and can actually simplify the transition by automating AP before the cutover.

**Incumbent vendor relationships are a real threat.** Wells Fargo native AP, Eden Red/Beanworks contracts, and ERP-bundled AP modules won or retained multiple deals. The winning message was "already included" or "integrated with what we have." Ottimate's counter needs to emphasize specialization advantage — hospitality-specific GL mapping, multi-entity support, virtual card economics, and faster time-to-value versus configuring a generic banking product for AP automation.

**The silent death pattern demands process discipline.** Nearly 4 out of 5 lost deals died from extended silence, not active rejection. Implementing a 2-week maximum gap rule between follow-ups and a 90-day decision gate would surface stalled deals earlier and allow reps to either re-engage or reallocate effort.

---

*Analysis based on review of all 204 deal analysis files and sampling of 60+ individual call transcripts across pricing, scoping, demo, and close calls.*
