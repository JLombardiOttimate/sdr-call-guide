export default {
  finance: {
    intro: `Hey [Prospect], this is [SDR Name] calling, how are you? Ok, I'm with Ottimate -- does the name ring a bell or does it sound familiar? We work with country clubs such as The Club at Ravenna, NorthStone Country Club, and The Club at Admirals Cove, who are saving about 6 to 7 hours per week on invoice coding and approvals. Customers usually uncover an average of $77K in duplicate invoice value per year.`,
    discovery: [
      `Many of the golf and country clubs we work with use Jonas, Clubessential, or Northstar. Is your team currently using either Jonas, Clubessential, or Northstar? [Perfect, we work in conjunction with ___ and have direct integrations.]`,
      `I'm curious -- how are you getting invoices into your accounting software today?`,
      `On a monthly basis, would you say your team is processing more or less than 500 invoices?`,
      `How is the team currently paying vendors -- mostly physical check cutting, or do some vendors accept ACH payments?`,
    ],
    recap: `Ahhh, sounds like a pretty manual process. You mentioned [recap of invoice process and pain]. Does that sound accurate, or is there something I'm missing?`,
    pitch: `A lot of our clients were doing something similar before they started working with us. In a nutshell, with just a picture/scan/email/EDI of the invoice -- any type: food/beverage, utility, rent -- all the invoice information is mapped to your [accounting software] automatically with customizable approval workflows. Since Ottimate captures all of your invoice data, your team can reconcile vendor statements in seconds and even pay vendors within a few clicks via check/ACH/virtual cards with cash back opportunities.`,
    close: `I know you probably have a lot on your plate right now, how about this... Let's set up a time where I can connect you with a country club specialist to walk you through the platform and answer any questions in real time via Zoom. Shouldn't take more than 30 minutes. I'm pulling up my calendar now. Do you have availability tomorrow at [TIME] AM, or would after lunch work better?`,
  },
  nonFinance: [
    {
      id: "gm",
      label: "General Manager",
      primaryPain: "Manual administrative bottlenecks and chasing paper approvals across the property that delay the monthly close.",
      valueHook: `"Stop acting as a courier for paper invoices; let our AI handle the data entry and approval 'chase' so you can focus on member experience."`,
      sections: [
        { label: "Opener", color: "#854F0B", type: "text", content: `Hey [GM Name], this is [SDR Name] with Ottimate. I was looking to connect with the General Manager -- would that be you? Perfect. I'm calling because we work with country clubs like The Club at Ravenna, NorthStone Country Club, and The Club at Admirals Cove to automate the tedious paperwork in the back office. Does the name Ottimate ring a bell or sound familiar?` },
        { label: "Why I'm Calling", color: "#555", type: "text", content: `Totally fair. The reason I reached out is that most GMs I speak with are completely tired of being chained to their desks chasing department heads for paper approvals and hunting down missing vendor invoices just to close the monthly books.` },
        { label: "Pitch", color: "#1B7A44", type: "text", content: `Ottimate is a country club-specific AI-powered accounts payable and vendor payment automation solution. Instead of a manual paper chase, your team can simply snap a photo of any invoice -- whether food/beverage or pro shop merchandise. Our AI instantly converts it to digital text, codes it to your exact GL, and routes it through a customizable approval workflow, seamlessly syncing invoice data into your accounting software as if you manually entered it yourself.` },
        { label: "Discovery", color: "#185FA5", type: "list", content: [
          `Many of the golf and country clubs we work with use Jonas, Clubessential, or Northstar. Is your team currently using either Jonas, Clubessential, or Northstar? [Perfect, we work in conjunction with ___ and have direct integrations.]`,
          `Is someone on the team manually entering those invoices into [accounting software] today?`,
          `Across all departments, would you say the team is processing more or less than 500 invoices a month?`,
          `How is the team currently paying vendors -- mostly physical check cutting, or do some vendors accept ACH payments?`,
        ]},
        { label: "Recap", color: "#555", type: "text", content: `Got it. So processing that many invoices means your department heads and accounting team are burning a massive amount of time on data entry and manual check cutting just to keep their heads above water. You mentioned [recap of invoice process and pain]. Does that sound accurate, or is there something I'm missing?` },
        { label: "Close", color: "#6B3FA0", type: "text", content: `A lot of our clients were doing something similar before they started working with us. They loved that Ottimate took the administrative burden completely off their plates, giving them a streamlined workflow that lets them focus on improving the club and serving members rather than doing routine data entry and chasing physical signatures.\n\nI know you have a million things on your plate right now keeping the property running. Let's set up a quick 30-minute Zoom call where I can connect you with a country club specialist to show you exactly how Ottimate can help. Aside from yourself, is there a Controller, Club Accountant, or bookkeeper who would benefit from sitting on the call with you?\n\nGreat, I'm pulling up my calendar now. Do you have availability tomorrow morning around [TIME], or does right after the lunch rush work better for you?` },
      ],
    },
    {
      id: "dept-head",
      label: "Department Head (F&B or Head Pro)",
      primaryPain: "Being overcharged by vendors or receiving incorrect pack sizes that ruin departmental food or merchandise cost targets.",
      valueHook: `"Gain visibility and oversight into departmental spend and hold vendors accountable to already agreed-upon pricing."`,
      sections: [
        { label: "Opener", color: "#854F0B", type: "text", content: `Hey [Department Head Name], this is [SDR Name] with Ottimate. I was looking to connect with the [Department Title] -- is that you? Perfect. I'm calling because we work with country clubs like The Club at Ravenna, NorthStone Country Club, and The Club at Admirals Cove to put an end to vendor overcharges and eliminate the back-office paperwork that keeps you off the floor and off the course. Does the name Ottimate ring a bell or sound familiar?` },
        { label: "Why I'm Calling", color: "#555", type: "text", content: `Totally fair. The reason I reached out is that most [Department Title]s I speak with are pulling their hair out over vendor-related issues -- rising merchandise prices and human error that completely ruin departmental budgets.` },
        { label: "Pitch", color: "#1B7A44", type: "text", content: `Ottimate is a country club-specific AI-powered accounts payable and vendor payment automation solution built to give you total visibility over your departmental spend, allowing your team to hold vendors accountable to your agreed-upon pricing. Instead of manual data entry, you just upload invoices to Ottimate. Our AI automatically reads every line item, maps it to your specific GL codes and departments, and routes them through customizable approval workflows prior to syncing directly into your accounting software.` },
        { label: "Discovery", color: "#185FA5", type: "list", content: [
          `Many of the golf and country clubs we work with use Jonas, Clubessential, or Northstar. Is your team currently using either Jonas, Clubessential, or Northstar? [Perfect, we work in conjunction with ___ and have direct integrations.]`,
          `Is someone on the team manually entering those invoices into [accounting software] today?`,
          `On a monthly basis, would you say your team is processing more or less than 500 invoices?`,
          `How is the team currently paying vendors -- mostly physical check cutting, or do some vendors accept ACH payments?`,
          `How is your department currently tracking vendor price fluctuations and managing invoice data entry before it goes to the back office?`,
        ]},
        { label: "Close", color: "#6B3FA0", type: "text", content: `That makes total sense. A lot of our clients were doing something similar before they started working with us. They loved that Ottimate gives them real-time visibility into their spend and the freedom to focus on member services, tournament operations, or kitchen management rather than administrative desk work.\n\nI know you have a million things on your plate right now. Let's set up a quick 30-minute Zoom call where I can connect you with a country club specialist to show you how we streamline these approvals and protect your departmental margins in real time. Aside from yourself, is there a Controller, a GM, or an AP person who would benefit from sitting in on this call with you?\n\nGreat, I'm pulling up my calendar now. Do you have availability tomorrow morning around [TIME], or does later in the afternoon work better for you?` },
      ],
    },
  ],
};
