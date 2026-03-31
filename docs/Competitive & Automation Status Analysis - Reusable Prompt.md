# Reusable Prompt: Competitive Landscape & AP Automation Status Analysis

Use this prompt with any vertical's deal transcript folder. Replace `[VERTICAL]` and `[FOLDER_PATH]` with the appropriate values.

---

## The Prompt

```
I need you to analyze ALL deal analysis files (_deal_analysis.md) in the following folder structure:

- Closed Won: [FOLDER_PATH]/[VERTICAL] - Closed Won/
- Closed Lost: [FOLDER_PATH]/[VERTICAL] - Closed Lost/

For EVERY deal, read the _deal_analysis.md file and extract two data points:

### DATA POINT 1: Competitive Landscape

Categorize each deal into ONE of these buckets:

- **"Named competitor"** = A specific AP automation product or service was mentioned as being evaluated by the prospect, currently in use, or chosen over Ottimate. This includes dedicated AP automation tools like: Bill.com, Beanworks, Eden Red, Corpay, AvidXchange, Stampli, Tipalti, Docuware, Continia, MineralTree, Medius, Transcepta, Coupa (AP module), SAP Concur (AP module), Wells Fargo AP automation, Punch, PaySimply, Chrome River, Yooz, Basware, Esker, or any other tool whose primary function is automating accounts payable invoice processing, approval workflows, or vendor payments.

- **"No competition"** = The prospect was evaluating Ottimate against their current manual process (status quo). No other AP automation vendor was mentioned in the deal analysis. The prospect may use an ERP (Jonas, Sage, QuickBooks, Netsuite, Great Plains, etc.) but that does NOT count as competition — ERPs are accounting systems, not AP automation tools.

If a competitor was named, record WHICH competitor(s).

For closed-lost deals ONLY, also determine: Did the prospect actually CHOOSE the competitor over Ottimate? Or was the competitor merely mentioned but the deal was lost to inaction/budget/timing?

### DATA POINT 2: Current AP Automation Status

Categorize each deal into ONE of these buckets:

- **"Existing AP automation"** = The prospect is currently using a dedicated AP automation tool (any of the products listed above). They may be unhappy with it, but they have one deployed. Key signals: "we're currently using [tool]", "we have [tool] but...", "our current vendor is [tool]", "we switched from [tool]".

- **"No AP automation"** = The prospect has NO dedicated AP automation in place. They process invoices manually — paper, email, spreadsheets, or basic ERP data entry. Key signals: "we do everything manually", "we enter them all by hand", "we use [ERP] for everything", "paper invoices", "scan and email". IMPORTANT: Using an ERP (Jonas, Sage Intacct, QuickBooks, Netsuite, Great Plains, Dynamics, Yardi, RealPage, MRI) for basic invoice entry does NOT count as AP automation. These are accounting/ERP systems, not AP automation platforms.

- **"Aware but never adopted"** = The prospect has heard about or previously evaluated AP automation tools but never implemented one. Key signals: "we looked at [tool] last year", "we've heard about [tool]", "we evaluated [tool] but didn't move forward", "we had a demo with [tool] but...", references to past failed implementations that were abandoned.

If existing AP automation, record WHICH product.

### OUTPUT FORMAT

Produce three deliverables:

**Deliverable 1: Deal-Level Data Table**

| Company | Won/Lost | Rep | Competitor Present? | Which Competitor(s) | Lost TO Competitor? | Current AP Status | Current AP Tool |
|---------|----------|-----|--------------------|--------------------|--------------------|--------------------|-----------------|

Include ALL deals. No exceptions.

**Deliverable 2: Summary Statistics**

COMPETITIVE LANDSCAPE:
- Total deals with named competitor: X/Y (Z%)
  - Won: X/Y (Z%)
  - Lost: X/Y (Z%)
- Total deals with no competition: X/Y (Z%)
  - Won: X/Y (Z%)
  - Lost: X/Y (Z%)
- Deals actually LOST to a named competitor: X/Y (Z% of all losses)
- Deals lost to status quo/inaction: X/Y (Z% of all losses)

AP AUTOMATION STATUS:
- Existing AP automation: X/Y (Z%)
  - Won: X/Y (Z%)
  - Lost: X/Y (Z%)
- No AP automation: X/Y (Z%)
  - Won: X/Y (Z%)
  - Lost: X/Y (Z%)
- Aware but never adopted: X/Y (Z%)
  - Won: X/Y (Z%)
  - Lost: X/Y (Z%)

NAMED COMPETITOR FREQUENCY (ranked):
1. [Competitor Name]: X mentions (Y% of competitive deals)
2. [Competitor Name]: X mentions (Y% of competitive deals)
...

**Deliverable 3: Strategic Narrative (2-3 paragraphs)**

Summarize the competitive and market maturity dynamics for this vertical:
- Is this a greenfield market or a displacement market?
- Who is the primary competitive threat, and how often do they actually win?
- What does the "aware but never adopted" cohort tell us about market readiness?
- What's the implication for go-to-market strategy in this vertical?

### IMPORTANT RULES

1. Read EVERY _deal_analysis.md file. Do not skip any.
2. ERPs are NOT AP automation. Do not categorize ERP usage as "existing AP automation."
3. If a deal analysis doesn't mention competitors, categorize as "No competition" — don't assume.
4. If a deal analysis doesn't mention current tools, categorize as "No AP automation" — the default assumption for hospitality/healthcare/etc. is manual processes.
5. "Aware but never adopted" should only be used when there's explicit evidence of prior evaluation or awareness, not just because they seem sophisticated.
6. For competitive losses, distinguish between "competitor was mentioned" and "prospect chose that competitor." These are different.
```

---

## Hospitality Results (March 2026)

For reference, here are the results from running this analysis on the Hospitality vertical (204 deals: 96 won, 108 lost):

### Competitive Landscape

| | Won | Lost | Total |
|---|---|---|---|
| Named competitor present | 54 / 96 (56%) | 17 / 108 (16%) | 71 / 204 (35%) |
| No competition (vs. status quo) | 42 / 96 (44%) | 91 / 108 (84%) | 133 / 204 (65%) |

Deals actually lost TO a named competitor: 8 / 108 (7.4%)
Deals lost to status quo / inaction: 100 / 108 (92.6%)

### AP Automation Status

| | Won | Lost | Total |
|---|---|---|---|
| Existing AP automation | 18 / 96 (19%) | 17 / 108 (16%) | 35 / 204 (17%) |
| No AP automation | 74 / 96 (77%) | 80 / 108 (74%) | 154 / 204 (75%) |
| Aware but never adopted | 4 / 96 (4%) | 11 / 108 (10%) | 15 / 204 (7%) |

### Top Competitors (by mention frequency)

1. Bill.com — 26 mentions (37% of competitive deals)
2. Beanworks — 19 mentions (27%)
3. Eden Red — 14 mentions (20%)
4. Coupa — 6 mentions (8%)
5. AvidXchange — 5 mentions (7%)
6. Stampli — 2 mentions (3%)
7. Punch — 1 mention (1%)

### Strategic Narrative

Hospitality is overwhelmingly a greenfield market. 75% of all deals — won and lost — involved prospects with zero AP automation in place. The primary "competitor" is not another vendor; it's the status quo of manual invoice entry, paper-based approvals, and Excel reconciliation. Only 7.4% of losses were actually to a named competitor (Eden Red won 4 of those 8, making it the only competitor with meaningful displacement capability in this vertical).

When competition does appear, Bill.com is the most frequently mentioned name but has a low actual win rate against Ottimate. Beanworks and Eden Red are more dangerous in head-to-head situations, particularly in country clubs and golf properties where they have established footholds. The "aware but never adopted" cohort (7% of pipeline) represents warm re-engagement opportunities — these prospects already understand the value proposition but faced timing or budget barriers that may have since resolved.

The go-to-market implication is clear: the Hospitality sales motion should lead with education and demand creation ("why AP automation") rather than competitive displacement ("why Ottimate vs. X"). The 92.6% status-quo loss rate means the biggest lever is urgency creation — quantified ROI models, check fraud risk, audit findings — not feature comparison.
