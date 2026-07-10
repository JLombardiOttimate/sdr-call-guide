export default {
  finance: {
    intro: `Hey [Prospect], this is [SDR Name] calling, how are you? Ok, I'm with Ottimate -- does the name ring a bell or does it sound familiar? We work specifically with Senior Living groups. Most of the teams we talk to are spending hours each week manually keying invoices, chasing approvals, and cutting checks -- and we typically see our customers saving more than 450 hours a year and cutting over $53K in annual labor costs.`,
    discovery: [
      `Many of the groups we work with use Quickbooks, PointClickCare, or Sage Intacct. What accounting software do you all leverage today? [Perfect, we work in conjunction with ___ and have direct integrations.]`,
      `Is someone on the team manually entering payables invoices into [accounting software] today?`,
      `On a monthly basis, would you say your team is processing more or less than 500 invoices?`,
      `How many locations do you currently manage?`,
      `So today, your AP person is currently manually keying invoices into [accounting software] -- what does the invoice routing and approval journey look like once an invoice needs approval?`,
      `How is the team currently paying vendors -- mostly physical check runs, or are some vendors accepting ACH payments?`,
    ],
    recap: `Ahhh, sounds like a pretty manual process. You mentioned [recap of invoice process and pain]. Does that sound accurate, or is there something I'm missing?`,
    pitch: `A lot of our clients were doing something similar before they started working with us. In a nutshell, with just a picture/scan/email/EDI of the invoice -- any type: food/beverage, utility, rent -- all the invoice information is mapped to the appropriate GL, department, and location automatically, routed through your custom approval workflow to mirror your existing routing rules, and ultimately all that invoice data is exported directly to your [accounting software]. Since Ottimate captures all of your invoice data, your team can reconcile vendor statements in seconds and even pay vendors within a few clicks via check/ACH/virtual cards with cash back opportunities.`,
    close: `I know you probably have a lot on your plate right now, how about this... Let's set up a time where I can connect you with a Senior Living specialist to walk you through the platform and answer any questions in real time via Zoom. Shouldn't take more than 30 minutes. I'm pulling up my calendar now. Do you have availability tomorrow at [TIME] AM, or would after lunch work better?`,
  },
  nonFinance: [
    {
      id: "owner",
      label: "Owner / CEO / President",
      primaryPain: "Lack of central oversight and the risk of financial 'leakage' or fraud across multiple facilities.",
      valueHook: `"Scale your portfolio without scaling your back-office overhead while turning your AP department into a profit center through cashback rebates."`,
      sections: [
        { label: "Opener", color: "#854F0B", type: "text", content: `Hey [Owner Name], this is [SDR Name] with Ottimate. I was looking to speak with the owner -- would that be you? Perfect. I'm calling because we work with senior living operators to eliminate paper-heavy bottlenecks and turn their back-office operations from a major cost center into a profit center. Does the name Ottimate ring a bell or sound familiar?` },
        { label: "Why I'm Calling", color: "#555", type: "text", content: `Totally fair. The reason I reached out is that many senior living owners I speak with feel they lack centralized oversight across their facilities once they begin to scale. Relying on fragmented, paper-heavy processes leaves the portfolio vulnerable to margin erosion, duplicate invoices, and even check fraud.` },
        { label: "Pitch", color: "#1B7A44", type: "text", content: `Ottimate is an AI-powered accounts payable and vendor payment solution built specifically to give you complete visibility over every single property, facility, and department from a single platform, providing an instant audit trail for every dollar spent. Our AI converts vendor invoices into digital text, maps everything to your GL codes, locations, and departments, and syncs invoice data into your accounting software automatically. More importantly for your bottom line, it allows your team to scale operations without adding back-office headcount -- turning your AP department into a revenue generator with the possibility of unlocking virtual card cashback and rebate opportunities when paying vendors.\n\nMany of the Senior Living and Long-term Care Facilities we work with are using Quickbooks, PointClickCare, or Sage Intacct. Is your team currently using either Quickbooks or Sage Intacct today? [Perfect, we work in conjunction with ___ and have direct integrations.]` },
        { label: "Discovery", color: "#185FA5", type: "list", content: [
          `On a monthly basis, would you say your team is processing more or less than 500 invoices? How many locations are currently managed?`,
          `How is the team currently paying vendors -- mostly physical check cutting, or do some vendors accept ACH payments?`,
        ]},
        { label: "Recap", color: "#555", type: "text", content: `You mentioned [recap of invoice process and pain]. Does that sound accurate, or is there something I'm missing?` },
        { label: "Close", color: "#6B3FA0", type: "text", content: `A lot of our clients were doing something similar before they started working with us. They loved that Ottimate gave them a foolproof, centralized portfolio view, empowering their existing back office to handle double the volume with total accuracy -- without forcing them to add expensive overhead as they scale.\n\nI know you have a million things on your plate right now. Let's set up a quick 30-minute Zoom call where I can connect you with a Senior Living specialist to show you how we streamline these operations and unlock that automated cash back in real time. Aside from yourself, is there a CFO, Director of Finance, or corporate controller who handles the daily back-office bottlenecks and should sit in on this with you?\n\nGreat, I'm pulling up my calendar now. Do you have availability tomorrow morning around [TIME], or does early afternoon work better for you?` },
      ],
    },
    {
      id: "it-director",
      label: "IT / Technical Director",
      primaryPain: "Broken ERP integrations, constant sync errors between fragmented financial systems, and IT resources wasted on manual data backfilling or troubleshooting 'stuck' workflows.",
      valueHook: `"Future-proof your financial tech stack with a secure, API-driven AP platform that syncs with your ERP in real time, eliminating data silos and reducing IT maintenance headaches."`,
      sections: [
        { label: "Opener", color: "#854F0B", type: "text", content: `Hey [IT Director Name], this is [SDR Name] with Ottimate. I was looking to connect with the IT Director -- would that be you? Perfect. I'm calling because we work with IT Directors at senior living companies to eliminate broken ERP sync errors and reduce the IT maintenance headaches caused by fragmented financial tech stacks. Does the name Ottimate ring a bell or sound familiar?` },
        { label: "Why I'm Calling", color: "#555", type: "text", content: `Totally fair. The reason I reached out is that most IT Directors I speak with express that their teams are constantly bogged down troubleshooting stuck workflows, fixing broken data silos, or handling manual data entry that is extremely time consuming.` },
        { label: "Pitch", color: "#1B7A44", type: "text", content: `Ottimate is the best-in-class senior living and long-term care accounts payable and vendor payment automation solution designed to streamline back-office processes with real-time bidirectional integrations. Many of the Senior Living and Long-term Care Facilities we work with are using Quickbooks, PointClickCare, or Sage Intacct. Is your team currently using either Quickbooks or Sage Intacct today? [Perfect, we work in conjunction with ___ and have direct integrations.]\n\nInstead of relying on manual file transfers, flat-file exports, or third-party workarounds that frequently break, Ottimate seamlessly syncs invoice data into your accounting software -- meaning no more 'ghost entities,' zero manual data uploads required, plus enhanced compliance and security since we safeguard data using bank-grade security protocols and auto-rotating encryption keys.` },
        { label: "Discovery", color: "#185FA5", type: "list", content: [
          `How are your financial and facility management systems currently communicating with your core ERP?`,
          `That makes total sense, and maintaining those custom scripts or integrations is a constant struggle for many of the operators we speak with.`,
          `On a monthly basis, would you say your team is processing more or less than 500 invoices? How many locations are currently managed?`,
          `How is the team currently paying vendors -- mostly physical check cutting, or do some vendors accept ACH payments?`,
        ]},
        { label: "Recap", color: "#555", type: "text", content: `You mentioned [recap of invoice process and pain]. Does that sound accurate, or is there something I'm missing?` },
        { label: "Close", color: "#6B3FA0", type: "text", content: `Got it. Managing data integrity across that many environments is a massive undertaking, and when the tech stack doesn't communicate seamlessly, it eats up critical resources that should be focused on broader digital transformation.\n\nA lot of our clients were doing something similar before they started working with us. They loved that Ottimate provided a clean, scalable solution that plugs right into their existing tech stack, ensuring total data accuracy without requiring continuous IT oversight or manual data patching.\n\nI know you have a tight schedule managing the organization's infrastructure. Let's set up a quick 30-minute Zoom call where I can connect you with a Senior Living specialist to show you how seamlessly Ottimate fits into your enterprise architecture. Aside from yourself, is there a CFO, Corporate Controller, or AP manager who would benefit from sitting on the call with you?\n\nGreat, I'm pulling up my calendar now. Do you have availability tomorrow morning around [TIME], or does early afternoon work better for your schedule?` },
      ],
    },
  ],
};
