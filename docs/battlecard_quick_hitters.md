# Battlecard Quick Hitters: All 14 Competitors

Add a `quickHitter` field to each battlecard file in `src/content/battlecards/`. Place it at the top of the default export object. Render it at the very top of the card view, above `tagline` and `overview`, always visible when a competitor tab is open.

## Data shape

```javascript
quickHitter: {
  headline: "One bold positioning line.",
  support: "Worth asking: one soft, curiosity-framed question the SDR can say out loud.",
},
```

## Render block

Add this to `BattlecardsTab.jsx` (or wherever the card detail view is rendered), above `tagline` and `overview`:

```jsx
{card.quickHitter && (
  <div style={{
    padding: "12px 16px",
    background: "#0F6E56",
    borderRadius: 8,
    marginBottom: 16,
  }}>
    <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>
      {card.quickHitter.headline}
    </div>
    <div style={{ fontSize: 13, color: "#d0f0e8", lineHeight: 1.6 }}>
      {card.quickHitter.support}
    </div>
  </div>
)}
```

---

## Quick hitters by file

### `stampli.js` — condensed

```javascript
quickHitter: {
  headline: "Stampli is more of an out-of-the-box solution, so it's really not specifically designed for [VERTICAL]. Ottimate is specifically designed for the needs of [VERTICAL].",
  support: "Worth asking: where they're still working around the system because it doesn't know how their industry operates.",
},
```

---

### `ramp.js` — fresh

```javascript
quickHitter: {
  headline: "Ramp is really focused on payments and corporate cards, but that means AP is an afterthought. Ottimate is best-in-class for AP workflows like yours.",
  support: "Worth asking: where the invoice side of things is still falling on the team to manage manually.",
},
```

---

### `beanworks.js` — condensed

```javascript
quickHitter: {
  headline: "Beanworks is an older platform that hasn't kept up, and their customers feel it. Ottimate was built from the ground up with AI, specifically for operators like you.",
  support: "Worth asking: where the system is still slow or clunky enough that the team has just accepted it as normal.",
},
```

---

### `avidxchange.js` — condensed

```javascript
quickHitter: {
  headline: "Avid is a big company, but they're not keeping up with AI advancements that truly save you time. For example, they can't auto-split GL codes across line items on complex invoices like we can.",
  support: "Worth asking: where their team is still touching things manually that they expected the system to handle.",
},
```

---

### `sage-intacct.js` — fresh

```javascript
quickHitter: {
  headline: "Sage is a great GL, but it was never built to be an AP automation platform. That's exactly why Sage has 40+ AP automation partners in their own marketplace.",
  support: "Worth asking: where their team is working outside of Sage, in email or spreadsheets, to manage the AP process.",
},
```

---

### `netsuite.js` — condensed

```javascript
quickHitter: {
  headline: "NetSuite is a powerful ERP, but their own implementation partners recommend adding a third-party AP tool on top. That tells you something about where the native AP falls short.",
  support: "Worth asking: where the team has had to work around NetSuite's AP, especially on complex invoices or multi-entity payment runs.",
},
```

---

### `tipalti.js` — condensed

```javascript
quickHitter: {
  headline: "Tipalti was built for global mass payments, not invoice intelligence. If your operation is in [VERTICAL], their platform wasn't designed with your workflows in mind.",
  support: "Worth asking: where they're seeing sync errors or manual workarounds between Tipalti and their accounting system.",
},
```

---

### `xtrachef.js` — fresh

```javascript
quickHitter: {
  headline: "xtraCHEF is a food cost tool that Toast acquired. It's great for recipe costing, but it was never built to be a full AP automation platform.",
  support: "Worth asking: what happens to invoices that don't fit their item master, and how much time the team spends on that manually.",
},
```

---

### `marginedge.js` — condensed

```javascript
quickHitter: {
  headline: "MarginEdge is strong on food cost analytics, but their invoice processing relies on human analysts with a 24-48 hour turnaround. Ottimate processes invoices in real time with AI.",
  support: "Worth asking: whether that processing delay has ever created problems at month-end close or when a vendor needed payment confirmed quickly.",
},
```

---

### `restaurant365.js` — condensed

```javascript
quickHitter: {
  headline: "R365 is an all-in-one restaurant platform, but AP is just one piece of a large suite. Many R365 customers add Ottimate on top specifically because the native AP doesn't go deep enough.",
  support: "Worth asking: whether they're using R365's native AP capture or the paid human entry service, and how that's working for complex invoices.",
},
```

---

### `yooz.js` — condensed

```javascript
quickHitter: {
  headline: "Yooz is a European SMB tool with solid Sage integration, but it's a horizontal platform with no workflows built for [VERTICAL]. Ottimate is purpose-built for operators like you.",
  support: "Worth asking: how accurately the system handles non-standard invoice formats and whether the team is correcting OCR errors regularly.",
},
```

---

### `yardi.js` — condensed

```javascript
quickHitter: {
  headline: "Yardi is a property management ERP, and their AP automation is a feature they recently added. It's new, unproven at scale, and not built for the invoice complexity of [VERTICAL].",
  support: "Worth asking: what happens with invoices that fall outside standard property management formats, and who handles those exceptions.",
},
```

---

### `xelix.js` — fresh

```javascript
quickHitter: {
  headline: "Xelix is an audit overlay that sits on top of an AP system. It catches problems after the fact. Ottimate catches them during processing, before payment goes out.",
  support: "Worth asking: how many duplicate or overcharge issues have been caught after payment already cleared, and what the recovery process looked like.",
},
```

---

### `floqast.js` — fresh

```javascript
quickHitter: {
  headline: "FloQast is a month-end close management tool, not AP automation. It tracks whether AP tasks got done. Ottimate actually does the AP work.",
  support: "Worth asking: if they're using FloQast for AP, what it does when an invoice needs to be captured, coded, approved, and paid. Because FloQast doesn't handle any of that.",
},
```

---

## Acceptance criteria

- [ ] `quickHitter` field added to all 14 battlecard files
- [ ] Field renders at the top of the card view, above tagline and overview
- [ ] Headline is one sentence, reads in under 5 seconds
- [ ] Support line starts with "Worth asking:" and is soft enough to say out loud on a call
- [ ] No em dashes in any field
- [ ] All 14 cards reviewed before merge