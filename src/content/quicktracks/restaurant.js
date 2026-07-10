export default {
  finance: {
    intro: `Hey [Prospect], this is [SDR Name] calling, how are you? Ok, I'm with Ottimate -- does the name ring a bell or does it sound familiar? We work with groups like B&G Foods (with 150 QSR locations) and IRMG (with 140 QSR locations). Customers usually uncover an average of $77K in duplicate invoice value per year.`,
    discovery: [
      `Just curious -- what does your process look like for identifying and catching duplicate invoices or payments?`,
      `Many of the restaurant groups we work with are using Sage Intacct, NetSuite, or R365. Is your team currently using either NetSuite or Restaurant365? [Perfect, we work in conjunction with ___ and have direct integrations.]`,
      `I'm curious -- how are invoices making their way into [accounting software]?`,
      `And how many locations are you currently managing?`,
      `Got it -- so you have team members manually keying invoices into [accounting software] for all [X] locations. Roughly how many invoices a week would you say your team is processing?`,
      `How do those invoices get routed for approval to GMs and ultimately to the finance team?`,
      `Do invoices ever get lost in the shuffle in that process?`,
      `What happens when someone is out of office?`,
      `How is the team currently paying vendors -- mostly physical check runs, or are some vendors accepting ACH payments? And what does that breakdown look like -- 50/50? 75/25?`,
    ],
    recap: `Sounds pretty manual. So today... [recap pain points] -- am I missing anything?`,
    pitch: `A lot of our clients were running the same process. What they find after implementing a system like Ottimate is that invoice lifecycle time drops from 3 days down to under 1 day, they're getting 450+ hours back a year, and the $77K in duplicates we mentioned earlier. With just an image of any invoice -- food, beverage, utilities, rent -- the invoice gets automatically coded to the correct GLs and locations, routed through your customizable approval workflow, eliminating over 90% of the manual touchpoints in a traditional AP process. Your team can reconcile vendor statements in seconds with the option to pay vendors via check, ACH, or virtual card, enabling cash back opportunities.`,
    close: `I know you probably have a lot on your plate right now, how about this... Let's set up a time where I can connect you with a restaurant specialist to walk you through the platform and answer any questions in real time via Zoom. Shouldn't take more than 30 minutes. I'm pulling up my calendar now. Do you have availability tomorrow at [TIME] AM, or would after lunch work better?`,
  },
  nonFinance: [
    {
      id: "owner",
      label: "Owner",
      primaryPain: "Inability to track real-time profitability and 'leakage' from uncaptured vendor rebates or rising costs.",
      valueHook: `"We turn your back office from a cost center into a profit center by capturing every cent of data and earning you money back on your bills."`,
      talkTrack: `Hey [Prospect Name], this is [SDR Name] with Ottimate. I'm calling because we work with multi-unit operators like B&G Foods and International Restaurant Management Group to turn their back office from a massive cost center into a profit center. Does the name Ottimate ring a bell or sound familiar?

Totally fair. The reason I reached out is that most restaurant group owners I speak with feel like they're flying blind on their true COGS until the end of the month -- or later -- when it's already too late. It's impossible to see the margin 'leakage' from rising food costs or uncaptured vendor rebates.

Ottimate is a restaurant-specific AI-powered invoice processing and vendor payment automation solution that gives you total, centralized oversight across your entire portfolio. Our AI instantly converts every single invoice into digital text and syncs invoice data right into your accounting software. Is your team manually entering invoices into Restaurant365/Quickbooks/Sage? [Perfect, we work in conjunction with ___ and have direct integrations.]

On a monthly basis, would you say your team is processing more or less than 500 invoices?

Aside from streamlining invoice processing and vendor payments, Ottimate tracks item price fluctuations when a vendor's item prices spike -- so you can protect your margins prior to paying bills.

How is the team currently paying vendors -- mostly physical check cutting, or do some vendors accept ACH payments?

Got it. So your team is burning a massive amount of time -- [recap of invoice process and pain]. Does that sound accurate, or is there something I'm missing?

A lot of our clients were doing something similar before they started working with us. They loved that Ottimate seamlessly integrated with [accounting software] and gave them total visibility into portfolio spend, allowing them to scale operations without adding expensive back-office headcount.

I know you have a million things on your plate right now. Let's set up a quick 30-minute Zoom call where I can connect you with a restaurant specialist to show you how we protect margins and unlock potential cash back in real time. Aside from yourself, is there a CFO, Director of Finance, or accounting team member who handles the daily back office and should sit in on this with you?

Great, I'm pulling up my calendar now. Do you have availability tomorrow morning around [TIME], or does right after the lunch rush work better for you?`,
    },
    {
      id: "gm",
      label: "GM / Head Chef / F&B Director",
      primaryPain: "Being 'shackled to the desk' by manual data entry, paper invoice filing, and chasing approvals.",
      valueHook: `"Stop acting as a data entry clerk; let our AI handle the paperwork so you can get back on the floor with your guests."`,
      talkTrack: `Hey [Prospect Name], this is [SDR Name] with Ottimate. I was looking to connect with the GM/Chef/F&B Director -- is that you? Perfect. I'm calling because we work with restaurant groups like B&G Foods and International Restaurant Management Group to automate the tedious paperwork in the back office. Essentially, we allow GMs and chefs to focus on what matters most rather than being shackled to the desk acting as data entry clerks. Does the name Ottimate ring a bell or sound familiar?

Totally fair. The reason I reached out is that most GMs and chefs we speak with are absolutely buried under a stack of paper invoices, chasing down missing approvals, or manually coding food and beverage costs.

Ottimate is a restaurant-specific AI platform designed to completely eliminate that headache. Instead of spending hours at a desk, users upload images of invoices -- food, beverage, utility, or rent. Our AI reads the invoice down to the line items, automatically maps them to the correct GL codes, and routes them through a streamlined customizable approval workflow.

Most of our restaurant groups use Restaurant365/Quickbooks/Sage. Is your team currently using either Quickbooks or Restaurant365? [Perfect, we work in conjunction with ___ and have direct integrations.]

How is your team currently handling invoice data entry -- is someone on the team manually entering those invoices into [accounting software] today?

On a monthly basis, would you say your team is processing more or less than 500 invoices? How many locations are currently managed?

How is the team currently paying vendors -- mostly physical check cutting, or do some vendors accept ACH payments?

Ahhh, sounds like a pretty manual process. You mentioned [recap of invoice process and pain]. Does that sound accurate, or is there something I'm missing?

A lot of our clients were doing something similar before they started working with us. They loved that Ottimate completely automated the 'paper chase,' giving them full visibility into store spend and the freedom to spend their time managing kitchen operations and the guest experience rather than doing routine data entry.

I know you have a million things on your plate running the floor. Let's set up a quick 30-minute Zoom call where I can connect you with a restaurant specialist to show you how Ottimate can help. Aside from yourself, is there a Controller, an office manager, or an accounting team member who manages the back office and should sit in on this with you?

Great, I'm pulling up my calendar now. Do you have availability tomorrow morning around [TIME], or does right after the lunch rush work better for you?`,
    },
  ],
};
