export default {
  finance: {
    intro: `Hey [Prospect], this is [SDR Name] calling, how are you? Ok, I'm with Ottimate -- does the name ring a bell or does it sound familiar? We help DSOs like Peak Dental and Gen4 Dental Services. Our customers usually save $82K per year in labor by reducing their invoice lifecycle time, while also uncovering $84K in credits annually related to refunds, adjustments, and overcharge corrections.`,
    discovery: [
      `Many of the Dental Groups and DSOs we work with are using Microsoft Dynamics, Sage Intacct, or NetSuite. Is your team currently using either NetSuite or Sage Intacct today? [Perfect, we work in conjunction with ___ and have direct integrations.]`,
      `Is someone on the team manually entering those invoices into [accounting software] today?`,
      `On a monthly basis, would you say your team is processing more or less than 500 invoices?`,
      `How many locations are currently managed?`,
      `How is the team currently paying vendors -- mostly physical check cutting, or do some vendors accept ACH payments?`,
    ],
    recap: `Ahhh, sounds like a pretty manual process. You mentioned [recap of invoice process and pain]. Does that sound accurate, or is there something I'm missing?`,
    pitch: `A lot of our clients were doing something similar before they started working with us. In a nutshell, with just a picture/scan/email/EDI of the invoice -- any type: dental supplies, utility, rent -- all the invoice information is mapped to your [accounting software] automatically with customizable approval workflows. Since Ottimate captures all of your invoice data, your team can reconcile vendor statements in seconds and even pay vendors within a few clicks via check/ACH/virtual cards with cash back opportunities.`,
    close: `I know you probably have a lot on your plate right now, how about this... Let's set up a time where I can connect you with a Dental Group and DSO specialist to walk you through the platform and answer any questions in real time via Zoom. Shouldn't take more than 30 minutes. I'm pulling up my calendar now. Do you have availability tomorrow at [TIME] AM, or would after lunch work better?`,
  },
  nonFinance: [
    {
      id: "owner",
      label: "Owner / CEO",
      primaryPain: "Inability to scale the DSO due to technical debt and lack of central oversight over spending at individual office locations.",
      valueHook: `"Scale your DSO without ballooning your administrative headcount by using AI to maintain total visibility over every office's spend while earning cashback on your bills."`,
      sections: [
        { label: "Opener", color: "#854F0B", type: "text", content: `Hey [Owner/CEO Name], this is [SDR Name] with Ottimate. How are you? Perfect. I'm calling because we work with multi-location dental groups and DSOs to eliminate the administrative bottlenecks and turn back-office operations from a heavy cost center into a profit center. Does the name Ottimate ring a bell or sound familiar?` },
        { label: "Why I'm Calling", color: "#555", type: "text", content: `Totally fair. The reason I reached out is that most DSO senior leaders I speak with find that as they acquire new practices, their back-office processes start to lag under a mountain of technical debt. Relying on manual or partially automated workflows leads to double-entry errors, a total lack of central oversight over office-level spend, and a back office that balloons in headcount every time you add a new location.` },
        { label: "Pitch", color: "#1B7A44", type: "text", content: `Ottimate is the best-in-class Dental Group accounts payable and vendor payment automation solution built specifically to help scale your DSO without that increasing administrative overhead. Ottimate gives your executive team total, centralized oversight of every single practice and entity in your entire portfolio from one single platform. Our AI automatically handles header and line-item data capture with total accuracy, mapping it directly to your accounting software.\n\nMany of the Dental Groups and DSOs we work with are using Microsoft Dynamics, Sage Intacct, or NetSuite. Is your team currently using either NetSuite or Sage Intacct today? [Perfect, we work in conjunction with ___ and have direct integrations.]` },
        { label: "Discovery", color: "#185FA5", type: "list", content: [
          `How is your team currently maintaining centralized oversight on invoice routing and supply costs across your locations?`,
          `How many locations are currently managed?`,
          `On a monthly basis, would you say your team is processing more or less than 500 invoices?`,
          `Since Ottimate tracks your dental supply and lab spend in real time, the platform instantly identifies exponential cost creep from vendors -- so you can protect your margins while you scale.`,
          `How is the team currently paying vendors -- mostly physical check cutting, or do some vendors accept ACH payments? When your team pays bills through Ottimate, users are able to unlock virtual card cashback and rebate opportunities on vendor payments you're already making.`,
        ]},
        { label: "Recap", color: "#555", type: "text", content: `You mentioned [recap of invoice process and pain]. Does that sound accurate, or is there something I'm missing?` },
        { label: "Close", color: "#6B3FA0", type: "text", content: `Got it. A lot of our clients were doing something similar before they started working with us. They loved that Ottimate gave them a foolproof, centralized portfolio view, empowering their existing back office to handle double or triple the acquisition volume with total precision -- without forcing the team to add expensive administrative headcount as they scale.\n\nI know you have a million things on your plate right now. Let's set up a quick 30-minute Zoom call where I can connect you with a DSO specialist to show you how Ottimate can streamline these operations and unlock that automated cash back in real time. Aside from yourself, is there a CFO, Director of Finance, or corporate controller who would benefit from sitting in on the call with you?\n\nGreat, I'm pulling up my calendar now. Do you have availability tomorrow morning around [TIME], or does early afternoon work better for your schedule?` },
      ],
    },
    {
      id: "it-director",
      label: "IT / Technical Director",
      primaryPain: "Tech stacks that don't 'talk' to each other -- specifically between procurement tools like Dentira and the ERP -- and failed implementations with legacy providers like Tipalti, Bill, or Stampli.",
      valueHook: `"Achieve a true dual-sync between your procurement and accounting systems to eliminate manual intervention and failed payment runs."`,
      sections: [
        { label: "Opener", color: "#854F0B", type: "text", content: `Hey [IT/Technical Director Name], this is [SDR Name] with Ottimate. I was looking to connect with the IT Director -- is that you? Perfect. I'm calling because we work with IT Directors at DSOs to eliminate the headache of fragmented dental tech stacks and failed implementations with legacy payment platforms. Does the name Ottimate ring a bell or sound familiar?` },
        { label: "Why I'm Calling", color: "#555", type: "text", content: `Totally fair. The reason I reached out is that many growing DSOs are completely outgrowing legacy platforms like Tipalti, Bill, or Stampli -- or have suffered from failed implementations because those platforms simply can't handle multi-location management properly. Operators have expressed frustration when working with platforms completely isolated from your ERP, forcing your IT team to build manual workarounds or dealing with failed payment runs.` },
        { label: "Pitch", color: "#1B7A44", type: "text", content: `Ottimate is the best-in-class accounts payable and vendor payment automation solution built specifically to achieve a true, touchless invoice processing and payment experience. Ottimate allows users to bulk upload batch files of invoices with zero human intervention -- our AI automatically handles document separation and line-item extraction, supporting robust multi-dimensional GL mapping down to the specific location and department, while also automating two-way and three-way PO matching directly with platforms like Dentira or your native ERP for enhanced data integrity.\n\nMany of the Dental Groups and DSOs we work with are using Microsoft Dynamics, Sage Intacct, or NetSuite. Is your team currently using either NetSuite or Sage Intacct today? [Perfect, we work in conjunction with ___ and have direct integrations.]` },
        { label: "Discovery", color: "#185FA5", type: "list", content: [
          `From an infrastructure standpoint, how are your practice-level procurement tools currently communicating with your core ERP like Sage Intacct or NetSuite? Is the team using a platform like Dentira?`,
          `That makes total sense, and managing those broken sync workflows or manual data exports is exactly the IT headache we hear about.`,
          `On a monthly basis, would you say your team is processing more or less than 500 invoices? How many locations are currently managed?`,
          `Managing data integrity across that many offices is a massive undertaking, and when your financial systems don't talk to each other seamlessly, it eats up critical IT resources that should be focused on scaling the DSO.`,
          `How is the team currently paying vendors -- mostly physical check cutting, or do some vendors accept ACH payments?`,
        ]},
        { label: "Recap", color: "#555", type: "text", content: `From what you mentioned -- [recap of invoice process and pain]. Does that sound accurate, or is there something I'm missing?` },
        { label: "Close", color: "#6B3FA0", type: "text", content: `Many IT directors we speak with were in that exact same boat before partnering with us. They loved that Ottimate provided a highly scalable, API-driven fit that dropped right into their existing tech stack, ensuring an automated audit trail without requiring continuous IT maintenance or troubleshooting.\n\nI know you have a tight schedule managing the organization's infrastructure and security. Let's set up a quick 30-minute Zoom call where I can connect you with a Dental Group and DSO specialist to show how Ottimate can help. Aside from yourself, is there a CFO, Corporate Controller, or an AP Manager who is currently dealing with these manual workarounds and should sit in on this with you?\n\nGreat, I'm pulling up my calendar now. Do you have availability tomorrow morning around [TIME], or does early afternoon work better for your schedule?` },
      ],
    },
  ],
};
