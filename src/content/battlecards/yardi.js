export default {
  name: "Yardi",
  tagline: "Property management ERP pushing into AP automation. New AI features, but still ERP-native and unproven.",
  overview: "Yardi is a property management ERP serving real estate, senior living, and some hospitality operators. They're actively expanding AP automation with 'Smart AP' (launched October 2025, free with Breeze Premier) and 'Virtuoso AI' agents for AP processing. Their native AP is getting more capable, but most Yardi users still layer third-party AP tools on top. AvidXchange even has a dedicated 'AvidSuite for Yardi' integration, which tells you where the native AP falls short.",
  whenYouSee: [
    "Prospect says 'we're on Yardi' or mentions Yardi Voyager or Yardi Breeze as their system",
    "Prospect operates senior living facilities, multi-family housing, or hotel-residences with a property management focus",
    "Prospect mentions 'Smart AP' or 'Yardi Virtuoso' as their new AP automation solution (launched late 2025)",
  ],
  weWin: [
    { area: "Purpose-built AP vs. ERP feature", detail: "Yardi's Smart AP adds AI invoice capture and GL coding to their ERP, but it doesn't replace dedicated AP automation. No full approval workflow engine, no duplicate detection, no vendor statement reconciliation. Most Yardi users still add third-party AP tools (AvidXchange, Stampli, Medius) on top." },
    { area: "Vertical-specific invoice intelligence", detail: "Yardi's AP is designed for property management invoices (utilities, maintenance, capital improvements). Ottimate's AI is trained on hospitality food and beverage invoices, healthcare multi-entity allocations, and grocery DSD formats that Yardi has never seen." },
    { area: "Multi-entity AP complexity", detail: "Senior living operators with 8-16 facilities need multi-entity invoice splitting, intercompany billing, and complex approval chains. Yardi handles property-level GL posting but struggles with the AP workflow complexity that comes with scale. Our closed-deal evidence confirms this gap." },
    { area: "Processing maturity", detail: "Smart AP launched October 2025. It's new and unproven at scale. Early adopter reports are positive (60% reduction in AP processing time), but Yardi's own blog acknowledges that most 'advanced' AP workflows still require their Procure to Pay Suite, which is enterprise-priced. Ottimate has 10+ years of AI training data." },
    { area: "Integration, not replacement", detail: "Ottimate integrates with Yardi. Keep Yardi for property management and GL. Add Ottimate for AP automation depth that Smart AP can't match. This 'both/and' positioning is proven: Yardi's own ecosystem includes multiple third-party AP partners." },
  ],
  theyWin: [
    { area: "Smart AP is free", detail: "Smart AP is included at no additional cost with Yardi Breeze Premier. For prospects on Breeze who need basic AP automation, the 'it's already included' argument is hard to beat. Don't try to compete on price with free." },
    { area: "ERP-native convenience", detail: "Yardi's AP lives inside the system of record. No integration setup, no data sync, no second vendor. For prospects with simple AP needs and low invoice volumes, this matters." },
    { area: "Senior living installed base", detail: "Yardi's Senior Living Suite is widely adopted with EHR integration. If a senior living operator is deeply embedded in Yardi, the switching cost for any component is high. Their Virtuoso AI platform signals they're investing in keeping customers inside the ecosystem." },
  ],
  trapQuestions: [
    `"Are you using Yardi's Smart AP or their older PayScan? Because Smart AP just launched in late 2025, so if you're evaluating it, you'd be an early adopter. How comfortable are you with that?"`,
    `"Is most of your invoice volume property-related, like utilities and maintenance, or do you also process food and beverage, medical supplies, or other non-property invoices? Because property AP and operational AP are different problems."`,
    `"Does Yardi handle your full approval workflow, multi-level routing, delegation, conditional rules by vendor or dollar amount? Or are approvals still happening over email outside the system?"`,
  ],
  landmine: `"If your AP tool is built into your property management system, ask what happens when you need to process invoices that aren't property-related. Food costs, medical supplies, corporate allocations. That's where ERP-native AP hits its ceiling and purpose-built tools take over."`,
};
