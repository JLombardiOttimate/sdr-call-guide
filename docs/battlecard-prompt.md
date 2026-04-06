# Battlecard Generation Prompt

Copy everything below the line into your battlecards generation tool. Replace `[COMPETITOR]` with the competitor name.

---

Generate a competitive battlecard for Ottimate vs. **[COMPETITOR]** in the AP automation space.

## About Ottimate

Ottimate is an AI-powered AP automation platform purpose-built for three verticals: hospitality, grocery, and healthcare. Key differentiators:

- **AI-first invoice capture:** No templates or stencils. AI trained on 10+ years of invoice data. Handles complex, multi-page, handwritten, and non-standard invoices out of the box.
- **Line-item validation:** Captures and validates at the line-item level, not just headers. Powers Item Validation in grocery and PO matching in hospitality.
- **Vertical-specific workflows:** USALI compliance and multi-property GL mapping for hospitality. DSD handling, cost file matching, and Item Validation for grocery. PHI redaction and HIPAA compliance for healthcare.
- **Multi-entity support:** Built for operators running 10-100+ locations with different GL structures, approval chains, and cost centers per entity.
- **Cost recovery:** Duplicate detection, vendor overcharge flagging, and price variance alerts that directly recover dollars.
- **VendorPay:** Check, ACH, and virtual card payments with a rebate model. Flexible vendor payment rails not tied to a single card ecosystem.

## Output format

Output a single JavaScript ES module default export. The file should be ready to save as-is with no modifications. Use this exact structure:

```javascript
export default {
  name: "[COMPETITOR]",
  tagline: "",
  overview: "",
  whenYouSee: [
    "",
    "",
    "",
  ],
  weWin: [
    { area: "", detail: "" },
    { area: "", detail: "" },
    { area: "", detail: "" },
    { area: "", detail: "" },
  ],
  theyWin: [
    { area: "", detail: "" },
    { area: "", detail: "" },
    { area: "", detail: "" },
  ],
  trapQuestions: [
    `""`,
    `""`,
    `""`,
  ],
  landmine: `""`,
};
```

## Field-by-field instructions

- **name**: The competitor's display name (e.g., "BILL", "Tipalti").
- **tagline**: One sentence that captures their positioning and where they fall short for our buyers. Keep it blunt and useful, not snarky.
- **overview**: 2-3 sentences. What the competitor does, who they target, and how they go to market. Neutral tone, just the facts.
- **whenYouSee**: 3 signals that tell an SDR this competitor is likely in the deal. Think: what the prospect says, what industry they're in, or what tools they mention.
- **weWin**: 3-5 areas where Ottimate beats this competitor. Each entry has an `area` (short label) and `detail` (1-2 sentences explaining the advantage with specifics). Anchor advantages in Ottimate's vertical depth, AI capture, line-item validation, multi-entity support, or cost recovery.
- **theyWin**: 2-3 areas where the competitor genuinely has an edge. Be honest. SDRs need to know where they'll face resistance so they can prepare. Each entry has an `area` and `detail`.
- **trapQuestions**: 3 questions an SDR can ask the prospect that naturally expose the competitor's weaknesses. Frame them as genuine discovery questions, not gotchas. Wrap each question in backtick-quoted strings using template literal syntax: `` `"question here"` ``.
- **landmine**: One thing the SDR should plant early in the conversation that makes it hard for the competitor to win later. Frame it as advice to the prospect. Wrap in backtick-quoted string using template literal syntax: `` `"statement here"` ``.

## Style rules

- **No em dashes.** Use commas, periods, or rewrite the sentence.
- **Write like a human.** This is for SDRs on the phone, not a marketing deck. Keep language conversational and direct.
- **Be specific.** Don't say "we have better AI." Say what the AI does differently (e.g., "handles multi-page DSD invoices with handwritten line items without templates").
- **Be honest in "where they win."** If they have a real advantage, say it plainly. SDRs trust battlecards that tell the truth.
- **Vertical framing.** When describing Ottimate advantages, tie them to specific vertical workflows (hospitality, grocery, healthcare) rather than generic AP automation claims.
- **Trap questions should sound natural.** They should feel like legitimate discovery questions a prospect would want to answer, not leading questions that sound rehearsed.
