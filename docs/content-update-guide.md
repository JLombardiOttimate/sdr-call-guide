# SDR Call Guide: Content Update Process

This guide walks you through how to prepare content updates for the SDR Call Guide app. You don't need to touch code. Instead, you'll use an LLM (Claude, Gemini, ChatGPT) to generate properly formatted content, then hand it off to someone with repo access to add it to the app.

---

## Quick reference: what lives where

| Content type | What it is | Where SDRs see it |
|---|---|---|
| Call scripts | Intro, discovery questions, pitch points, close | "Call Guide" tab |
| Objections | Objection + role-specific responses | "Objections" tab |
| Battlecards | Competitive positioning per vendor | "Battlecards" tab |
| Resources | Customer stories, one-pagers, videos, links | "Content" tab |

---

## Before you start

You'll need to know which combination you're targeting. Here are the valid options:

**Verticals:** Hospitality, Grocery, Healthcare

**Roles:**
- Controller
- CFO
- AP Manager/Clerk
- Owner/GM/Ops

**Triggers:**
- No known trigger (generic/discovery)
- Staff loss / AP turnover
- Month-end close breaking point
- Audit / compliance pressure
- Vendor payment friction / margin leakage
- Frustration with current solution
- Growth event
- New financial leader

---

## 1. Updating or adding call scripts

### What a script includes

Each script is built for a specific **role + trigger** combination and has content for each vertical. A complete script has these sections:

| Section | What it is | Example |
|---|---|---|
| **Intro** | The opening line (15-20 seconds). One version per vertical. | "Hey [name], this is [rep] from Ottimate. We work with hotel groups like [reference] who were dealing with..." |
| **Discovery questions** | 3-5 open-ended questions to uncover pain. Can be universal or per-vertical. | "Walk me through what happens when an invoice comes in at one of your properties." |
| **Listen-for signals** | Keywords or phrases that indicate the trigger is real. | "behind on close, overtime, backlogs, manual entry" |
| **Recap** | Transition statement after discovery, before the pitch. | "So it sounds like [pain points]. That's exactly what we help with." |
| **Pitch points** | 2-4 proof points or features. One set per vertical. | "We work with groups like Pacifica Hotels who process 7,000+ invoices a month..." |
| **Close** | The ask. Can be universal or per-vertical. | "Would it make sense to set up 15 minutes later this week to show you how this works for [vertical] groups?" |

### How to prepare a new script

Copy the prompt below into your LLM. Fill in the bracketed fields before running it.

```
I need to write an SDR cold call script for Ottimate, an AI-powered AP automation
platform. Ottimate serves three verticals: hospitality, grocery, and healthcare.

Write a script for this combination:
- Role: [ROLE - e.g., Controller]
- Trigger: [TRIGGER - e.g., Staff loss / AP turnover]

The script needs these sections. Write each one separately:

1. INTRO (one version for each vertical: hospitality, grocery, healthcare)
   - 15-20 seconds max
   - Open with the prospect's world and pain, not Ottimate features
   - Sound like a real person, not a marketing deck
   - Reference the specific trigger naturally

2. DISCOVERY QUESTIONS (3-5 questions)
   - Open-ended, not yes/no
   - Designed to uncover the pain behind the trigger
   - If the questions differ by vertical, write separate sets for each

3. LISTEN-FOR SIGNALS
   - Keywords or phrases the SDR should listen for that confirm the trigger is real

4. RECAP
   - A 1-2 sentence bridge from discovery to pitch
   - Include a placeholder like [insert pain points they mentioned]

5. PITCH POINTS (one set for each vertical: hospitality, grocery, healthcare)
   - 2-4 bullet points per vertical
   - Lead with outcomes and proof, not features
   - Reference real customer results when possible (e.g., "groups like Pacifica Hotels
     who process 7,000+ invoices a month")

6. CLOSE
   - A soft ask for next steps
   - If the close differs by vertical, write separate versions

Constraints:
- No em dashes. Use commas, periods, or rewrite.
- Write like a human having a conversation, not reading from a script.
- Triggers first, product second. Every line should connect to the prospect's situation.
- Keep it brief. This is a cold call, not a presentation.
```

### What to hand off

Send the finished output to your repo contact with:
- The **role** and **trigger** it's for
- The **script content** (all 6 sections)
- Whether this is a **new script** or an **update to an existing one**

---

## 2. Updating or adding battlecards

### What a battlecard includes

Each battlecard covers one competitor and has these sections:

| Section | What it is | Example |
|---|---|---|
| **Name** | Competitor name | "Stampli" |
| **Tagline** | One-line competitive positioning | "Good at collaboration, weak on vertical depth" |
| **Overview** | 2-3 sentences on who they are and what they do | "Stampli is a communication-centric AP platform..." |
| **When you see them** | 2-3 signals that a prospect is looking at this vendor | "Prospect mentions approval workflows or approver collaboration" |
| **Where we win** | 3-5 competitive advantages, each with a headline and detail | Area: "Vertical depth" / Detail: "Ottimate has purpose-built workflows for hospitality (USALI), grocery (Item Validation), healthcare (PHI redaction)..." |
| **Where they win** | 2-3 honest strengths of the competitor | Area: "Collaboration UX" / Detail: "Clean approval interface with conversation threads on every invoice" |
| **Trap questions** | 2-3 questions that expose the competitor's weakness | "Can you show me how your system handles USALI-compliant GL mapping across 15 properties?" |
| **Landmine** | One high-impact question or insight to plant early | "Ask any vendor to demo multi-entity invoice with split GL coding across three cost centers. If they can't do it live, they can't do it at all." |

### How to prepare a new battlecard

Copy the prompt below into your LLM. Fill in the competitor name before running it.

```
Generate a competitive battlecard for Ottimate vs. [COMPETITOR] in the AP automation space.

About Ottimate:
Ottimate is an AI-powered AP automation platform purpose-built for three verticals:
hospitality, grocery, and healthcare. Key differentiators:

- AI-first invoice capture: No templates or stencils. AI trained on 10+ years of invoice
  data. Handles complex, multi-page, handwritten, and non-standard invoices.
- Line-item validation: Captures and validates at the line-item level, not just headers.
  Powers Item Validation in grocery and PO matching in hospitality.
- Vertical-specific workflows: USALI compliance and multi-property GL mapping for
  hospitality. DSD handling, cost file matching, and Item Validation for grocery.
  PHI redaction and HIPAA compliance for healthcare.
- Multi-entity support: Built for operators running 10-100+ locations with different GL
  structures, approval chains, and cost centers per entity.
- Cost recovery: Duplicate detection, vendor overcharge flagging, and price variance
  alerts that directly recover dollars.
- VendorPay: Check, ACH, and virtual card payments with a rebate model.

Write the battlecard with these sections:

1. NAME - Competitor name
2. TAGLINE - One-line competitive positioning (keep it honest and specific)
3. OVERVIEW - 2-3 sentences: what they do, who they target, how they position
4. WHEN YOU SEE THEM - 2-3 signals that a prospect is evaluating this vendor
5. WHERE WE WIN - 3-5 advantages. For each, provide:
   - Area (short headline)
   - Detail (1-2 sentences explaining the advantage)
6. WHERE THEY WIN - 2-3 honest competitor strengths. For each:
   - Area (short headline)
   - Detail (1-2 sentences acknowledging the strength)
7. TRAP QUESTIONS - 2-3 discovery questions that expose gaps in the competitor
8. LANDMINE - One high-impact question or insight to plant early in the conversation

Constraints:
- No em dashes. Use commas, periods, or rewrite.
- Be honest. SDRs need the truth, including where the competitor is strong.
- Be specific. Reference actual features, not generic claims.
- Write for an SDR who has 30 seconds to scan this before a call.
```

### What to hand off

Send the finished output to your repo contact with:
- The **competitor name**
- The **full battlecard content** (all 8 sections)
- Whether this is a **new battlecard** or an **update to an existing one**

**Battlecards currently in the app (14):** Stampli, Ramp, AvidXchange, Beanworks, FloQast, MarginEdge, NetSuite, Restaurant365, Sage Intacct, Tipalti, Xelix, xtraCHEF, Yardi, Yooz

---

## 3. Updating or adding objections

### What an objection entry includes

| Section | What it is | Example |
|---|---|---|
| **Objection** | What the prospect says | "We already automate our AP." |
| **Subtext** | What they really mean | "They have a solution but may not realize its limitations." |
| **Responses** | Role-specific comeback (or a default for all roles) | Controller: "Totally fair. Out of curiosity, does your current system handle line-item validation, or is it mostly header-level capture?" |

### How to prepare a new objection

Copy the prompt below into your LLM. Fill in the objection before running it.

```
I need to write an objection response for Ottimate's SDR team. Ottimate is an AI-powered
AP automation platform serving hospitality, grocery, and healthcare.

The objection is: "[THE OBJECTION]"

Write:

1. OBJECTION - The exact words a prospect would say
2. SUBTEXT - One sentence interpreting what the prospect really means
3. RESPONSES - Write a response for each of these roles. Each response should be
   2-3 sentences, conversational, and end with a question that reopens the conversation:
   - Controller
   - CFO
   - AP Manager
   - Default (for any other role)

Constraints:
- No em dashes.
- Sound like a real person. Not salesy, not defensive.
- Acknowledge the objection before pivoting.
- End each response with an open-ended question.
```

### What to hand off

Send the finished output to your repo contact with:
- The **objection text**
- The **subtext**
- The **role-specific responses**

**Objections currently in the app (6):**
1. "We already automate our AP."
2. "We don't have the budget right now."
3. "We're happy with our current vendor."
4. "We have too much on our plate right now."
5. "Your solution seems complex."
6. "Send me an email / some info."

---

## 4. Adding content and resources

### What a resource entry includes

Resources appear in the "Content" tab, organized by vertical. These can be any downloadable or linkable asset: customer story PDFs, one-pagers, consensus/demo videos, ROI calculators, product pages, or anything else you want SDRs to have at their fingertips.

| Field | What it is | Example |
|---|---|---|
| **Title** | Customer or asset name | "Pacifica Hotels" or "Ottimate for Hospitality - One-Pager" |
| **Sub-vertical** | Specific segment within the vertical | "Hotels", "DSO", "Restaurants", "Golf/Country Clubs", "Grocery", "Senior Living" |
| **Metric or description** | One-line proof point or summary | "7,000+ invoices/mo, manual GL coding bottleneck" |
| **Type** | What kind of asset this is | "case-study", "one-pager", "video", "website" |
| **Vertical** | Which vertical tab it appears under | Hospitality, Grocery, Healthcare, or General |
| **URL or file** | Link to the asset or the file itself | A PDF, a link to a Vidyard/Loom video, a product page URL |

### How to submit new content

No LLM needed for this one. Just fill out this template and send it to your repo contact:

```
RESOURCE SUBMISSION

Title: [Customer/asset name]
Type: [case-study / one-pager / video / website]
Vertical: [Hospitality / Grocery / Healthcare / General]
Sub-vertical: [e.g., Hotels, DSO, Restaurants, Golf/Country Clubs]
Metric or description: [One-line summary or proof point]
URL or file: [Paste a link, or attach the PDF/file]

Notes: [Any additional context]
```

If you're submitting a PDF (customer story, one-pager), attach the file. Your repo contact will add it to the app and set up the link.

If you're submitting a video or external link, just provide the URL.

**Sub-verticals currently in use:** Hotels, Restaurants, Golf/Country Clubs, Grocery, DSO, Senior Living

**Content currently in the app:** 16 resources across all verticals (mostly customer story PDFs)

---

## Handoff process

Once you've prepared your content using the steps above:

1. **Send it to your repo contact** (currently Joe Lombardi) via Slack, email, or however your team communicates.
2. **Include the content type** (script, battlecard, objection, or resource) in the subject/message.
3. **Attach any files** (PDFs, videos) if submitting resources.
4. Your repo contact will format the content for the app, commit it, and push it live. The app updates automatically via GitHub Pages within a few minutes of the push.

### Turnaround

- **Battlecards, objections, resources:** These are straightforward to add. Usually same-day.
- **Call scripts:** These are more complex (multiple sections, per-vertical content). Allow a day for formatting and review.

---

## Tips for getting good LLM output

- **Be specific about the vertical.** "Hospitality" covers hotels, restaurants, golf clubs, senior living. Tell the LLM which sub-segment you're targeting.
- **Include real customer names and stats** when you have them. The LLM can weave them into scripts and battlecards.
- **Review the output for tone.** It should sound like a person talking, not a brochure. If it reads too formal, ask the LLM to rewrite it more conversationally.
- **Check for em dashes.** Our style guide doesn't allow them. If you see any (the long dash that looks like this: ---), ask the LLM to remove them.
- **Iterate.** If the first output isn't right, tell the LLM what to change. "Make the intro shorter," "Add a question about month-end close," "The tone is too aggressive, soften it."
