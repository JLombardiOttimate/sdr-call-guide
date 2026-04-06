const base = import.meta.env.BASE_URL + "customer-stories/";

export default {
  hospitality: [
    { title: "Hampton Golf", subVertical: "Golf/Country Clubs", metric: "6,000-9,000 invoices/mo across 30+ clubs", type: "case-study", url: base + "Hampton Golf X Ottimate .pdf" },
    { title: "Nivea Hospitality (M3)", subVertical: "Hotels", metric: "~500 invoices/mo, invoices getting lost in the shuffle", type: "case-study", url: base + "Nivea Hospitality_M3 Customer Story.pdf" },
    { title: "Nivea Hospitality", subVertical: "Hotels", metric: "~500 invoices/mo, missed payments from manual process", type: "case-study", url: base + "[Customer Story] Nivea Hospitality.pdf" },
    { title: "Pacifica Hotels", subVertical: "Hotels", metric: "7,000+ invoices/mo, manual GL coding bottleneck", type: "case-study", url: base + "Ottimate x Pacifica Hotels  (1).pdf" },
    { title: "Prime Steak Concepts", subVertical: "Restaurants", metric: "4,000+ invoices/mo, missed early payment discounts", type: "case-study", url: base + "Prime Steak Concepts X Ottimate  (2).pdf" },
    { title: "EOS Hospitality", subVertical: "Hotels", metric: "20,000+ invoices/mo, paper-driven process", type: "case-study", url: base + "EOS X Ottimate (1).pdf" },
    { title: "Admiral Cove", subVertical: "Golf/Country Clubs", metric: "99.7% faster processing, 24 hrs to under 5 min", type: "case-study", url: base + "Ottimate_Admiral_Cove_2025 (2).pdf" },
    { title: "EHS", subVertical: "Restaurants", metric: "40 hrs/restaurant reduced to 5-10 hrs with Ottimate", type: "case-study", url: base + "EHS X Ottimate (2).pdf" },
    { title: "FIXE", subVertical: "Restaurants", metric: "32,000 invoices/mo, eliminated manual email workflows", type: "case-study", url: base + "FIXE_Tech Focus Customer Story.pdf" },
  ],
  grocery: [
    { title: "Heritage Grocers Group", subVertical: "Grocery", metric: "50-70% faster processing, 75,000 invoices/mo", type: "case-study", url: base + "Customer-Story-Heritage-Grocers-Group_Grocery.pdf" },
    { title: "Estevez Markets", subVertical: "Grocery", metric: "6,000-7,000 invoices/mo, eliminated data entry errors", type: "case-study", url: base + "Estevez Markets X Ottimate (2).pdf" },
  ],
  healthcare: [
    { title: "Gen4 Dental", subVertical: "DSO", metric: "6,000+ invoices/mo, replaced Bill.com", type: "case-study", url: base + "Ottimate X Gen4 Dental Case Study (2).pdf" },
    { title: "Peak Dental", subVertical: "DSO", metric: "3,000+ invoices/mo, 70+ practices", type: "case-study", url: base + "Peak Dental (5).pdf" },
    { title: "West Harbor Healthcare", subVertical: "Senior Living", metric: "15-20 hrs/wk saved on manual coding", type: "case-study", url: base + "[Customer Story] West Harbor Healthcare.pdf" },
  ],
  general: [
    { title: "EHS", subVertical: "Restaurants", metric: "40 hrs/restaurant reduced to 5-10 hrs with Ottimate", type: "case-study", url: base + "EHS X Ottimate (2).pdf" },
    { title: "FIXE (Tech Focus)", subVertical: "Restaurants", metric: "32,000 invoices/mo, tech-driven AP automation", type: "case-study", url: base + "FIXE_Tech Focus Customer Story.pdf" },
    { title: "FIXE (Accounting)", subVertical: "Restaurants", metric: "32,000 invoices/mo, eliminated manual email workflows", type: "case-study", url: base + "[Customer Story] FIXE_Accouting & Bookkeeping.pdf" },
  ],
};
