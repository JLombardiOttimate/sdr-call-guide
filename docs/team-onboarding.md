# SDR Call Guide: Team Contributor Guide

This guide covers everything you need to contribute content to the SDR Call Guide app. You do not need to touch code. Your job is to prepare the content. The repo contact (Joe Lombardi) handles getting it live.

---

## What is the SDR Call Guide?

The SDR Call Guide is an internal web tool for our SDR team. An SDR picks the vertical, the role of the person they're calling, and a buying trigger, and the app shows them exactly what to say: intro script, discovery questions, objection responses, competitive battlecards, and customer story resources.

**The app lives at:** https://jlombardiottimate.github.io/sdr-call-guide/

**Password:** ottimate2024

---

## What can be updated

| Content type | What SDRs see | Where in the app |
|---|---|---|
| Call scripts | Intro, discovery questions, pitch points, close | "Call Guide" tab |
| Battlecards | Competitive positioning per vendor | "Battlecards" tab |
| Objections | Common pushbacks with role-specific responses | "Objections" tab |
| Resources | Customer story PDFs, videos, one-pagers, links | "Content" tab |

---

## How the process works

**Step 1: Decide what to update.**
Pick a content type from the table above and go to that section below.

**Step 2: Generate the content using an AI tool.**
Each section has a ready-to-use prompt. Copy it into Claude, ChatGPT, or Gemini. Fill in the bracketed fields, run it, and review the output.

**Step 3: Review before sending.**
Check that the output:
- Sounds like a real person talking, not a marketing deck
- Has no em dashes (the long dash that looks like this -- between words). Use commas or periods instead.
- Leads with the prospect's situation, not Ottimate features
- Is brief. Cold call openers: 15-20 seconds. Voicemails: under 30 seconds.

**Step 4: Hand off to Joe.**
Send the content to Joe Lombardi via Slack or email. Include the content type, whether it's new or an update, and the full output. He'll format it, add it to the app, and push it live. The app updates automatically within a few minutes.

**Turnaround:**
- Battlecards, objections, resources: Same day
- Call scripts: Allow a day (multiple sections and per-vertical content)

---

## Calling options

The app supports every combination of these three selections:

**Verticals:** Hospitality, Grocery, Healthcare

**Roles:** Controller, CFO, AP Manager/Clerk, Owner/GM/Ops

**Triggers:**
- No known trigger (generic / discovery call)
- Staff loss / AP turnover
- Month-end close breaking point
- Audit / compliance pressure
- Vendor payment friction / margin leakage
- Frustration with current solution
- Growth event
- New financial leader

---

## 1. Call scripts

A call script is the full talk track for a specific role + trigger combination, with content customized for all three verticals.

### What's already built

| Role | Triggers with scripts |
|---|---|
| Controller | Generic, Staff turnover, Month-end close |
| CFO | Generic, Vendor friction |
| AP Manager | Generic only |
| Owner/Ops | Generic only |

Every script above covers all 3 verticals (Hospitality, Grocery, Healthcare).

### What's missing (top gaps to fill)

- Controller: Growth, Audit, ERP migration, New leader, Competitor frustration, Vendor friction
- CFO: Staff turnover, Growth, Audit, Month-end close, New leader, Competitor frustration
- AP Manager: All triggers beyond generic
- Owner/Ops: All triggers beyond generic

### What a complete script includes

| Section | What it is |
|---|---|
| Intro | 15-20 second opening line, one version per vertical |
| Discovery questions | 3-5 open-ended questions tied to the trigger |
| Listen-for signals | Keywords that confirm the trigger is real |
| Recap | 1-2 sentence bridge from discovery to pitch |
| Pitch points | 2-4 proof points, one set per vertical, outcomes first |
| Close | Soft ask for next steps |

### AI prompt for a new call script

Copy the prompt below into Claude, Gemini, or ChatGPT. Fill in the bracketed fields.

```
I need to write an SDR cold call script for Ottimate, an AI-powered AP automation
platform. Ottimate serves three verticals: hospitality, grocery, and healthcare.

Write a script for this combination:
- Role: [ROLE - e.g., Controller]
- Trigger: [TRIGGER - e.g., Staff loss / AP turnover]

The script needs these sections. Write each one separately:

1. INTRO (one version for each vertical: hospitality, grocery, healthcare)
   - 15-20 seconds max when spoken aloud
   - Open with the prospect's world and pain, not Ottimate features
   - Sound like a real person, not a marketing deck
   - Reference the specific trigger naturally

2. DISCOVERY QUESTIONS (3-5 questions)
   - Open-ended, not yes/no
   - Designed to uncover the pain behind the trigger
   - If questions differ by vertical, write separate sets for each

3. LISTEN-FOR SIGNALS
   - Keywords or phrases the SDR should listen for that confirm the trigger is real

4. RECAP
   - A 1-2 sentence bridge from discovery to pitch
   - Include a placeholder like [insert pain points they mentioned]

5. PITCH POINTS (one set for each vertical: hospitality, grocery, healthcare)
   - 2-4 bullet points per vertical
   - Lead with outcomes and proof, not features
   - Reference real customer results when possible
   - Hospitality: USALI compliance, multi-property GL mapping, approval routing
   - Grocery: Item Validation, DSD handling, cost file matching, vendor overcharge detection
   - Healthcare: PHI redaction, HIPAA compliance, multi-entity support for DSO and senior living

6. CLOSE
   - A soft ask for next steps
   - If the close differs by vertical, write separate versions

Constraints:
- No em dashes. Use commas, periods, or rewrite.
- Write like a human having a conversation, not reading from a script.
- Triggers first, product second.
- Keep it brief. This is a cold call, not a presentation.
```

### What to hand off to Joe

- Which role and trigger this script is for
- New script or update to an existing one?
- All 6 sections from the AI output (reviewed and approved)
- Any specific customer names, stats, or language you want included

---

## 2. Battlecards

A battlecard is the competitive reference card SDRs see when a prospect is evaluating a specific vendor.

### What's already built (14 competitors)

Stampli, Ramp, AvidXchange, Beanworks, FloQast, MarginEdge, NetSuite, Restaurant365, Sage Intacct, Tipalti, Xelix, xtraCHEF, Yardi, Yooz

### What a complete battlecard includes

| Section | What it is |
|---|---|
| Name | Competitor name |
| Tagline | One-line competitive positioning, honest and specific |
| Overview | 2-3 sentences: what they do, who they target |
| When you see them | 2-3 signals a prospect is evaluating this vendor |
| Where we win | 3-5 advantages, each with a headline and 1-2 sentence explanation |
| Where they win | 2-3 honest competitor strengths (SDRs need the truth) |
| Trap questions | 2-3 questions that expose the competitor's weakness |
| Landmine | One high-impact question to plant early in the conversation |

### AI prompt for a new battlecard

Copy the prompt below into Claude, Gemini, or ChatGPT. Replace [COMPETITOR] with the vendor name.

```
Generate a competitive battlecard for Ottimate vs. [COMPETITOR] in the AP automation space.

About Ottimate:
Ottimate is an AI-powered AP automation platform purpose-built for hospitality, grocery,
and healthcare. Key differentiators:
- AI-first invoice capture: No templates or stencils. AI trained on 10+ years of invoice
  data. Handles complex, multi-page, handwritten, and non-standard invoices.
- Line-item validation: Captures and validates at the line-item level, not just headers.
- Vertical-specific workflows: USALI compliance and multi-property GL mapping for
  hospitality. DSD handling, cost file matching, and Item Validation for grocery.
  PHI redaction and HIPAA compliance for healthcare.
- Multi-entity support: Built for operators running 10-100+ locations.
- Cost recovery: Duplicate detection, vendor overcharge flagging, price variance alerts.
- VendorPay: Check, ACH, and virtual card payments with a rebate model.

Write the battlecard with these sections:

1. NAME
2. TAGLINE - One-line competitive positioning (honest and specific)
3. OVERVIEW - 2-3 sentences: what they do, who they target, how they position
4. WHEN YOU SEE THEM - 2-3 signals that a prospect is evaluating this vendor
5. WHERE WE WIN - 3-5 advantages. For each: Area (short headline) + Detail (1-2 sentences)
6. WHERE THEY WIN - 2-3 honest competitor strengths. For each: Area + Detail
7. TRAP QUESTIONS - 2-3 questions that expose the competitor's weaknesses
8. LANDMINE - One high-impact question or insight to plant early

Constraints:
- No em dashes. Use commas, periods, or rewrite.
- Be honest. SDRs need the truth, including where the competitor is strong.
- Be specific. Reference actual features, not generic claims.
- Write for an SDR who has 30 seconds to scan this before a call.
```

### What to hand off to Joe

- Competitor name
- New battlecard or update to existing?
- All 8 sections (reviewed and approved)
- Any deal context or real intel from a specific competitive situation (makes the card stronger)

---

## 3. Objections

Objections are the common pushbacks SDRs hear on calls, with role-specific responses.

### What's already built (6)

1. "We already automate our AP."
2. "We don't have the budget right now."
3. "We're happy with our current vendor."
4. "We have too much on our plate right now."
5. "Your solution seems complex."
6. "Send me an email / some info."

### What a complete objection entry includes

| Section | What it is |
|---|---|
| The objection | What the prospect says, word for word |
| Subtext | One sentence on what they really mean |
| Responses | Role-specific response for Controller, CFO, AP Manager, and a Default for other roles |

Each response: 2-3 sentences, acknowledges the objection first, pivots, ends with an open-ended question.

### AI prompt for a new objection

Copy the prompt below. Replace [THE OBJECTION] with the exact pushback you want to handle.

```
I need to write an objection response for Ottimate's SDR team. Ottimate is an AI-powered
AP automation platform serving hospitality, grocery, and healthcare.

Key differentiators to weave in where relevant:
- AI-first invoice capture (no templates, trained on 10+ years of data)
- Line-item validation, not just header-level
- Vertical-specific workflows (USALI for hospitality, Item Validation for grocery,
  PHI redaction for healthcare)
- Multi-entity support for 10-100+ locations
- Cost recovery through duplicate detection and overcharge flagging

The objection is: "[THE OBJECTION]"

Write:
1. OBJECTION - The exact words a prospect would say
2. SUBTEXT - One sentence interpreting what the prospect really means
3. RESPONSES - Write a response for each of these roles:
   - Controller (accuracy, compliance, close timelines)
   - CFO (cost, visibility, strategic value)
   - AP Manager (daily workload, efficiency, reducing frustration)
   - Default (general response for any other role)

   Each response should be 2-3 sentences, conversational, acknowledge the objection first,
   and end with an open-ended question.

Constraints:
- No em dashes. Use commas, periods, or rewrite.
- Sound like a real person on a phone call, not a salesperson reading from a script.
```

### What to hand off to Joe

- The objection (exact wording)
- New objection or update to an existing one?
- Subtext + all role-specific responses (reviewed and approved)
- Any deal context (real-world situations make responses more specific)

---

## 4. Resources and content

Resources are the assets in the "Content" tab: customer story PDFs, one-pagers, videos, and links SDRs can share with prospects.

### What's already in the app (16 resources)

- Hospitality (9): Hampton Golf, Nivea Hospitality, Pacifica Hotels, Prime Steak Concepts, EOS Hospitality, Admiral Cove, EHS, FIXE
- Grocery (2): Heritage Grocers Group, Estevez Markets
- Healthcare (3): Gen4 Dental, Peak Dental, West Harbor Healthcare
- General (3): EHS, FIXE variations

### Supported content types

| Type | Examples |
|---|---|
| case-study | Customer story PDFs |
| one-pager | Vertical overviews, product summaries, leave-behinds |
| video | Demo videos, consensus videos, testimonials (Vidyard, Loom, YouTube) |
| website | Product pages, ROI calculators, external links |

### Sub-verticals currently in use

Hotels, Restaurants, Golf/Country Clubs, Grocery, DSO, Senior Living

### How to submit a resource (no AI needed)

Fill out this template and send it to Joe with any attached files.

```
RESOURCE SUBMISSION

Title: [Customer or asset name]
Type: [case-study / one-pager / video / website]
Vertical: [Hospitality / Grocery / Healthcare / General]
Sub-vertical: [e.g., Hotels, DSO, Restaurants, Golf/Country Clubs]
Metric or description: [One-line summary or headline stat]
URL or file: [Paste a link, or note that you're attaching a file]

Notes: [Any additional context]
```

Submit one template per resource. A resource can appear under multiple verticals if relevant (just note that in the Notes field).

---

## Writing rules

Every piece of content in the app follows these rules. Check your AI output against all five before sending.

1. **No em dashes.** The long dash that looks like -- between words. Use a comma, period, or rewrite the sentence.
2. **Sound like a human.** Scripts need to sound like a real person talking, not a marketing deck or a press release.
3. **Triggers first, product second.** Every script opens in the prospect's world. Pain before pitch.
4. **Keep it brief.** Cold call openers: 15-20 seconds. Voicemails: under 30 seconds. Emails: 4-6 sentences.
5. **Honest positioning.** Battlecards include "where they win" because SDRs need the truth to handle real conversations.

---

## Tips for working with AI tools

- **Be specific about sub-vertical.** "Hospitality" covers hotels, restaurants, golf clubs, senior living. Tell the AI which segment you're targeting.
- **Include real customer names and stats.** The AI can weave them in. Examples: Pacifica Hotels (7,000+ invoices/mo), Heritage Grocers Group, Gen4 Dental.
- **Review for tone.** If it reads too formal, tell the AI: "Rewrite this to sound more like a real person talking on the phone."
- **Check for em dashes.** If you see any, tell the AI: "Remove all em dashes. Use commas or periods instead."
- **Iterate.** First output not quite right? Tell the AI what to change. "Make the intro shorter." "Add a question about month-end close." "The close is too aggressive, soften it."
