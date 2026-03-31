# SDR Call Guide

## Dev setup

- **Stack:** Vite + React (single-page app)
- **Run locally:** `npm run dev`
- **Build:** `npm run build`
- **Hosting:** Currently on GitHub Pages. Planning to move to Vercel for password protection. Not yet deployed to Vercel.
- **Repo:** `JLombardiOttimate/sdr-call-guide`

## About the maintainer

Joe is Director of Solutions Engineering. He's not a frontend developer. When making changes:

- Explain what you're doing and why in plain language before doing it
- When you create or modify files, tell Joe which files changed and what each change does
- If something requires Joe to run a command in terminal, give him the exact command and explain what it does
- Don't assume he knows React conventions, file structure patterns, or build tooling. If it matters, explain it.
- After making changes, remind Joe to run `npm run dev` to preview locally, and walk him through `git add . && git commit -m "description" && git push` when he's ready to push
- If something breaks, don't just fix it silently. Tell Joe what broke and why so he learns the pattern.

## What this app does

An internal SDR enablement tool for Ottimate's sales team. SDRs select a vertical, the role of the contact they're calling, and a buying trigger. The app then shows them exactly what to say: intro script, discovery questions, hooks, proof points, objection handling, and competitive battlecards.

### Current user flow

1. Select vertical (Hospitality, Grocery, Healthcare)
2. Select contact role (Controller, CFO, AP Manager/Clerk, Owner/GM/Ops)
3. Select buying trigger (8 triggers + "no known trigger" for discovery)
4. Tabbed interface appears with three sections:
   - **Call Guide:** Intro, discovery questions, listen-for signals, hook, pitch + proof points, recap, close
   - **Objections:** Common objections with role-specific responses
   - **Battlecards:** Competitive intel for Stampli and Ramp

### Smart features

- **Month-end close awareness:** Checks today's date. If it's the first 5 days, around the 13th-17th, or past the 25th, shows a banner reminding SDRs to consider month-end close pain. Has an A/B toggle between "callout" (standalone banner) and "inject" (language woven into the intro).
- **Graceful fallbacks:** When a script doesn't exist for a combination, shows a fallback screen with an option to load the generic script for that role.

## Reference documents

The `docs/` folder contains source material that informs the content in this app:

- **Buying trigger framework:** The 8 triggers, what they mean, which verticals and personas they map to, and discovery signals. This is the foundation of the entire app's content architecture.
- **SDR Enablement Playbook:** The full playbook with scripts organized by persona and trigger, objection handling, role-play scenarios, and quantified value stats by vertical. This is where existing script content comes from.
- **Deal analysis and meta-analysis:** Closed-won deal patterns that validate which triggers and personas actually convert. Use this for proof points and to prioritize which script gaps to fill first.

When Joe asks you to write new scripts or fill content gaps, reference these docs for tone, proof points, stats, and language patterns. Match the voice and structure of what's already in the playbook.

## Architecture principles

### Content is separate from code

All scripts, objections, battlecards, stats, proof points, and downloadable assets should live in dedicated data files under `src/content/`, completely separate from the React components that render them.

Target structure:

```
src/
  components/        # React components (layout, tabs, cards, selectors)
  content/
    scripts/         # Call guide scripts organized by role
      controller.js
      cfo.js
      ap-manager.js
      owner-ops.js
    objections.js    # All objection responses
    battlecards/     # One file per competitor
      stampli.js
      ramp.js
    stats.js         # Quantified value by vertical
    proof-points.js  # Customer stories and case studies
    resources.js     # Downloadable assets, links, one-pagers
  App.jsx
```

**This refactor hasn't happened yet.** The prototype currently has everything in a single file (`src/sdr-call-guide.jsx`). One of the first tasks is to break it apart into this structure.

### Scripts follow a consistent data shape

Every script object, regardless of role or trigger, should look like this:

```javascript
{
  trigger: "staff_turnover",
  vertical: "hospitality",       // or "all" for universal
  intro: "...",
  discovery: ["...", "..."],
  listenFor: "...",
  hook: "...",
  pitch: ["...", "..."],
  close: "...",
  monthCloseInject: "...",       // optional: language for close windows
  proofPoints: ["ref_id"],       // optional: references to proof-points.js
  resources: ["ref_id"],         // optional: references to downloadable assets
}
```

Adding a new script means adding an object to an array. No component changes needed.

### Fallback logic

When looking up a script for a given role + trigger + vertical:

1. Look for exact match (role + trigger + vertical)
2. Fall back to role + trigger with vertical "all"
3. Fall back to role + "generic" trigger
4. Show "not yet built" state with option to load generic

Never show a blank screen.

### Mobile-friendly

SDRs may use this on their phone before a call. No horizontal scrolling, no tiny tap targets, no content that needs a wide screen.

## Current content inventory

### Scripts built

| Role | Trigger | Verticals |
|---|---|---|
| Controller | Generic (no trigger) | Hospitality, Grocery, Healthcare |
| Controller | Staff turnover | Hospitality, Grocery, Healthcare |
| Controller | Month-end close | Hospitality, Grocery, Healthcare |
| Controller | Audit/compliance | Hospitality, Grocery, Healthcare |
| CFO | Generic (no trigger) | Hospitality, Grocery, Healthcare |
| CFO | Vendor friction | Hospitality, Grocery, Healthcare |
| AP Manager | Generic (no trigger) | Hospitality, Grocery, Healthcare |
| Owner/Ops | Generic (no trigger) | Hospitality, Grocery, Healthcare |

### Scripts NOT yet built (priority gaps)

- Controller: growth, ERP migration, new leader, competitor frustration, vendor friction
- CFO: staff turnover, growth, audit, ERP migration, month-end close, new leader, competitor frustration
- AP Manager: all triggers beyond generic
- Owner/Ops: all triggers beyond generic

### Objections built (6)

1. "We already automate our AP." (role-specific: controller, cfo, ap_manager)
2. "We don't have the budget right now." (role-specific: controller, cfo, ap_manager)
3. "We're happy with our current vendor." (universal)
4. "We have too much on our plate right now." (universal)
5. "Your solution seems complex." (universal)
6. "Send me an email / some info." (universal)

### Battlecards built (2)

- Stampli
- Ramp

### Not yet built

- Battlecards: BILL, Tipalti, AvidXchange, Coupa
- Downloadable one-pagers or leave-behinds
- Case study links
- Email sequence templates
- Voicemail scripts
- Senior Living as its own vertical (currently grouped under Healthcare)
- DSO as its own vertical (currently grouped under Healthcare)

## Feature roadmap

### Tier 1: Next iteration

- Refactor content into separate data files (the architecture change described above)
- Password protection (Vercel deployment when ready, or client-side gate as interim)
- Fill highest-priority script gaps
- Downloadable resources tab: PDFs, one-pagers, case study links organized by vertical and trigger

### Tier 2: Near-term

- Battlecards for BILL, Tipalti, AvidXchange
- Email templates (trigger-based follow-ups, same filtering as call guide)
- Voicemail scripts (under 30 seconds, by trigger)
- Senior Living and DSO as separate verticals

### Tier 3: Future

- Search across all content
- Favorites / recently used combinations
- Content versioning (last updated timestamps)
- Analytics on which combinations get used most

## Constraints

- **No em dashes.** Use commas, periods, or rewrite the sentence.
- **Write like a human.** SDR scripts need to sound like a real person talking, not a marketing deck.
- **Triggers first, product second.** Every script opens with the prospect's world, not Ottimate features.
- **Honest positioning.** Battlecards include "where they win" because SDRs need the truth.
- **Keep scripts brief.** Cold call openers: 15-20 seconds. Voicemails: under 30 seconds. Emails: 4-6 sentences.
- **React + Vite only.** No additional frameworks unless Joe specifically approves.
- **Tailwind is fine** for styling if it simplifies things. Inline styles are also fine. Whatever keeps it readable.
