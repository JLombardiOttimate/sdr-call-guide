# SOP: Updating Objections

## What is an objection entry?

An objection entry appears in the "Objections" tab of the SDR Call Guide. Each entry shows the objection a prospect might say, what they really mean (the subtext), and a role-specific response the SDR can use to handle it.

## When to use this SOP

- You want to add a response for a new objection SDRs are hearing
- You want to update or improve responses to an existing objection
- You want to add role-specific responses where only a default exists

## What you'll need to provide

Each objection entry has 3 parts:

### 1. The objection

The exact words a prospect would say. Write it the way a real person would say it on a call.

**Example:** "We already automate our AP."

### 2. The subtext

One sentence interpreting what the prospect really means. This helps the SDR understand the real concern behind the objection.

**Example:** "They have a solution in place but may not realize its limitations compared to a vertical-specific platform."

### 3. Role-specific responses

A 2-3 sentence response for each role. Each response should:
- Acknowledge the objection first (don't be defensive)
- Pivot to a relevant point
- End with an open-ended question that reopens the conversation

**Roles to write for:**
- **Controller** - focused on accuracy, compliance, close timelines
- **CFO** - focused on cost, visibility, strategic value
- **AP Manager** - focused on daily workload, efficiency, frustration
- **Default** - a general response for any other role

You don't have to write all four. If the response is the same regardless of role, just write a Default response.

**Example (Controller response):**
> "Totally fair. Out of curiosity, does your current system handle line-item validation, or is it mostly header-level capture? The reason I ask is that a lot of the controllers we work with thought they had automation until they realized how much manual cleanup was still happening at the line-item level."

## Objections that already exist (6)

1. "We already automate our AP."
2. "We don't have the budget right now."
3. "We're happy with our current vendor."
4. "We have too much on our plate right now."
5. "Your solution seems complex."
6. "Send me an email / some info."

## How to prepare a new objection using an AI tool

Copy the prompt below into Claude, Gemini, or ChatGPT. Replace the bracketed field with the objection before running it.

---

**Prompt to copy:**

```
I need to write an objection response for Ottimate's SDR team. Ottimate is an AI-powered
AP automation platform serving three verticals: hospitality, grocery, and healthcare.

Key differentiators to weave into responses where relevant:
- AI-first invoice capture (no templates, trained on 10+ years of data)
- Line-item validation, not just header-level
- Vertical-specific workflows (USALI for hospitality, Item Validation for grocery,
  PHI redaction for healthcare)
- Multi-entity support for 10-100+ locations
- Cost recovery through duplicate detection and overcharge flagging
- VendorPay with virtual card rebates

The objection is: "[THE OBJECTION]"

Write:

1. OBJECTION - The exact words a prospect would say
2. SUBTEXT - One sentence interpreting what the prospect really means
3. RESPONSES - Write a response for each of these roles:
   - Controller (cares about accuracy, compliance, close timelines)
   - CFO (cares about cost, visibility, strategic value)
   - AP Manager (cares about daily workload, efficiency, reducing frustration)
   - Default (general response for any other role)

   Each response should be:
   - 2-3 sentences
   - Conversational, not salesy or defensive
   - Acknowledge the objection before pivoting
   - End with an open-ended question that reopens the conversation

Constraints:
- No em dashes. Use commas, periods, or rewrite.
- Sound like a real person. Not aggressive, not passive.
- The response should feel like something you'd actually say on a phone call.
```

---

## What to hand off

Send the following to your repo contact (currently Joe Lombardi):

1. **The objection:** The exact wording
2. **New or update:** Is this a new objection or updating responses on an existing one?
3. **The content:** Subtext + role-specific responses from the AI output (reviewed and approved by you)
4. **Context (optional):** If this objection came from a specific deal or call, include what happened. Real context makes the response better.

**Typical turnaround:** Same day. Objections are simple to add.
