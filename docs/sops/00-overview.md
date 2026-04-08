# SOP: How the SDR Call Guide Gets Updated

## What is the SDR Call Guide?

The SDR Call Guide is a web-based internal tool that gives our SDR team the exact language they need before every call. An SDR selects a vertical, the role of the person they're calling, and a buying trigger, and the app shows them:

- **Call scripts** with an intro, discovery questions, pitch points, and close
- **Objection responses** tailored to the prospect's role
- **Competitive battlecards** with positioning against 14 vendors
- **Content and resources** like customer story PDFs, one-pagers, and videos

The app is live at our GitHub Pages site and updates automatically when changes are pushed to the repository.

## What content can be updated?

| Content type | What it is | Where SDRs see it | SOP |
|---|---|---|---|
| Call scripts | Role + trigger-specific talk tracks | "Call Guide" tab | See: SOP - Updating Call Scripts |
| Battlecards | Competitive positioning per vendor | "Battlecards" tab | See: SOP - Updating Battlecards |
| Objections | Common pushbacks + role-specific responses | "Objections" tab | See: SOP - Updating Objections |
| Content/Resources | PDFs, one-pagers, videos, links | "Content" tab | See: SOP - Updating Content and Resources |

## How updates work

You do not need access to the code repository or any technical tools. Here's the process:

### Step 1: Decide what you want to update

Pick the content type from the table above and open the corresponding SOP. Each SOP tells you exactly what information is needed and gives you a ready-to-use prompt for an AI tool.

### Step 2: Prepare the content using an AI tool

Each SOP includes a prompt you can copy into Claude, Gemini, ChatGPT, or any other LLM. The prompt is pre-loaded with Ottimate context (our verticals, differentiators, tone) so the output matches our style.

Review the output before submitting. Check that:
- It sounds like a real person talking, not a marketing deck
- There are no em dashes (the long dash that looks like --). Use commas or periods instead.
- Triggers and pain come first, product features come second
- Scripts are brief (cold call openers: 15-20 seconds, voicemails: under 30 seconds)

### Step 3: Hand off to your repo contact

Send the finished content to your repo contact (currently Joe Lombardi) via Slack or email. Include:
- The **content type** (script, battlecard, objection, or resource)
- Whether this is **new content** or an **update to existing content**
- The **prepared content** from Step 2
- Any **files** (PDFs, etc.) if submitting resources

### Step 4: Content goes live

Your repo contact will format the content, add it to the app, and push it to the live site. The app updates automatically within a few minutes of a push.

**Typical turnaround:**
- Battlecards, objections, resources: Same day
- Call scripts: Allow a day (they have more sections and per-vertical content)

## Current content inventory

### Verticals
Hospitality, Grocery, Healthcare

### Roles
Controller, CFO, AP Manager/Clerk, Owner/GM/Ops

### Triggers
1. No known trigger (generic/discovery)
2. Staff loss / AP turnover
3. Month-end close breaking point
4. Audit / compliance pressure
5. Vendor payment friction / margin leakage
6. Frustration with current solution
7. Growth event
8. New financial leader

### Scripts built
- Controller: Generic, Staff turnover, Month-end close (all 3 verticals)
- CFO: Generic, Vendor friction (all 3 verticals)
- AP Manager: Generic (all 3 verticals)
- Owner/Ops: Generic (all 3 verticals)

### Battlecards built (14)
Stampli, Ramp, AvidXchange, Beanworks, FloQast, MarginEdge, NetSuite, Restaurant365, Sage Intacct, Tipalti, Xelix, xtraCHEF, Yardi, Yooz

### Objections built (6)
1. "We already automate our AP."
2. "We don't have the budget right now."
3. "We're happy with our current vendor."
4. "We have too much on our plate right now."
5. "Your solution seems complex."
6. "Send me an email / some info."

### Content/Resources
16 customer story PDFs across Hospitality, Grocery, Healthcare, and General

## Tips for getting good AI output

- **Be specific about the vertical.** "Hospitality" covers hotels, restaurants, golf clubs, senior living. Tell the AI which sub-segment you're targeting.
- **Include real customer names and stats** when you have them. The AI can weave them into scripts and battlecards.
- **Review the output for tone.** It should sound like a person talking, not a brochure. If it reads too formal, ask the AI to rewrite it more conversationally.
- **Check for em dashes.** Our style guide doesn't allow them. If you see any, ask the AI to remove them.
- **Iterate.** If the first output isn't right, tell the AI what to change. "Make the intro shorter," "Add a question about month-end close," "The tone is too aggressive, soften it."
