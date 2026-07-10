export default {
  finance: {
    intro: `Hey [Prospect], this is [SDR Name] calling, how are you? Ok, I'm with Ottimate -- does the name ring a bell or does it sound familiar? We work with hotel groups like WHG Companies and Nivea Hospitality. Before Ottimate, our hoteliers were spending an enormous amount of time on manual invoice processing. On average, hotel customers get 450 hours back a year and save $53K+ in annual labor costs.`,
    discovery: [
      `Quick question -- what does your process look like for identifying and catching duplicate invoices or payments?`,
      `Many of the hotel operators we work with are using M3, Aptech PVNG, Sage Intacct, or NetSuite. Is your team using either M3, Aptech, or Intacct? [Perfect, we work in conjunction with ___ and have direct integrations.]`,
      `I'm curious -- how are invoices making their way into [accounting software]?`,
      `And how many total locations are you currently managing?`,
      `Got it -- so you have team members manually keying invoices into [accounting software] for all [X] locations. Roughly how many a week would you say are coming through?`,
      `How do those invoices get routed for approval to GMs and ultimately to the finance team?`,
      `Do invoices ever get lost in the shuffle in that process?`,
      `What happens when someone is out of office?`,
      `How is the team currently paying vendors -- mostly physical check runs, or are some vendors accepting ACH payments? And what does that breakdown look like -- 50/50? 75/25?`,
    ],
    recap: `Sounds pretty manual. You mentioned [recap pain points] -- am I missing anything?`,
    pitch: `A lot of our hotel clients were experiencing something similar before learning about Ottimate. With just an image of any invoice -- food, beverage, utilities, rent -- the invoice gets automatically coded to the correct GL, department, and location, routed through your customizable approval workflow, then seamlessly syncs into your [accounting software] as if someone entered it manually. Since we're capturing all of your invoice data, your team can reconcile vendor statements in seconds and pay vendors within a few clicks via check, ACH, or virtual card, enabling cash back opportunities.`,
    close: `I know you probably have a lot on your plate right now, how about this... Let's set up a time where I can connect you with a hotel specialist to walk you through the platform and answer any questions in real time via Zoom. Shouldn't take more than 30 minutes. I'm pulling up my calendar now. Do you have availability tomorrow at [TIME] AM, or would after lunch work better?`,
  },
  nonFinance: [
    {
      id: "owner-gm",
      label: "Owner / General Manager",
      primaryPain: "Inability to scale the portfolio without a proportional increase in back-office overhead and loss of margin control.",
      valueHook: `"Transform your AP from a cost center into a profit center by using AI to maintain central oversight while earning money back on every bill you pay."`,
      talkTrack: `Hey [Prospect Name], this is [SDR Name] with Ottimate. I was looking to speak with the owner -- would that be you? Perfect. I'm calling because we work with hospitality groups like WHG Companies and Nivea Hospitality to turn their back-office operations from a heavy cost center into a profit center. Does the name Ottimate ring a bell or sound familiar?

Totally fair. The reason I reached out is that most hotel owners find it nearly impossible to maintain central oversight and protect their margins across multiple properties without seeing their back-office overhead skyrocket as they scale.

Ottimate is a hotel-specific AI solution that gives your team complete visibility into every single location and department in your portfolio from one single platform. Our AI instantly converts invoice data into digital text and seamlessly syncs right into your accounting software. Most of the hotel groups we work with are using M3, Aptech PVNG, Sage Intacct, or NetSuite. Is your team manually entering invoices into M3/Aptech/Sage Intacct? [Perfect, we work in conjunction with ___ and have direct integrations.]

On a monthly basis, would you say your team is processing more or less than 500 invoices?

How is your team currently maintaining oversight on unexpected vendor price increases and managing invoice approvals across your properties?

That makes total sense, and that manual data entry bottleneck is exactly what we hear. Ottimate provides users with dashboards to monitor spend across properties, instantly identifying cost creep on items and goods -- so your team can keep vendors compliant and protect your margins in real time.

How is the team currently paying vendors -- mostly physical check cutting, or do some vendors accept ACH payments?

Ahhh, sounds like a pretty manual process. You mentioned [recap of invoice process and pain]. Does that sound accurate, or is there something I'm missing?

I know you have a million things on your plate right now. Let's set up a quick 30-minute Zoom call where I can connect you with a hotel specialist to show you how Ottimate can help make life simpler. Aside from yourself, is there a CFO, Director of Finance, or corporate controller who handles the back office and should sit in on this with you?

Great, I'm pulling up my calendar now. Do you have availability tomorrow morning around [TIME], or does right after lunch work better for you?`,
    },
    {
      id: "operations",
      label: "Operations Manager",
      primaryPain: "Lack of 'at-the-backdoor' visibility into unit-of-measure errors and price creep from broadline vendors.",
      valueHook: `"Automate your invoice auditing to catch every vendor overcharge and pack-size error before a single dollar leaves the bank."`,
      talkTrack: `Hey [Prospect Name], this is [SDR Name] with Ottimate. I was looking to connect with the Operations Manager -- is that you? Perfect. I'm calling because we work with operations teams at hospitality groups like WHG Companies and Nivea Hospitality to streamline and automate invoice processing and vendor payments, eliminating administrative bottlenecks and the manual 'paper chase' that slows down operations. Does the name Ottimate ring a bell or sound familiar?

Totally fair. The reason I reached out is that most operations directors I speak with find it incredibly difficult to maintain standardized workflows across multiple properties. Property managers and department heads get bogged down by administrative friction -- manually tracking down missing invoices, handling paper routing for approvals, and dealing with vendor-related issues.

Ottimate is a hotel-specific AI-powered accounts payable automation solution built to completely streamline invoice processing and vendor payments. Instead of your teams being stuck at a desk doing data entry, they simply snap a photo of any invoice -- whether food/beverage, utilities, or rent. Our AI instantly converts that image into digital text and automatically maps invoice data to your accounting software, with customizable approval workflows.

Many of the hotel groups we work with are using M3, Aptech PVNG, Sage Intacct, or NetSuite. Is your team manually entering invoices into M3/Aptech/Sage Intacct? [Perfect, we work in conjunction with ___ and have direct integrations.]

On a monthly basis, would you say your team is processing more or less than 500 invoices?

How is the team currently paying vendors -- mostly physical check cutting, or do some vendors accept ACH payments?

Ahhh, sounds like a pretty manual process. You mentioned [recap of invoice process and pain]. Does that sound accurate, or is there something I'm missing?

Got it. A lot of our clients were doing something similar before they started working with us. They loved that Ottimate helps protect margins and frees up the team's time to focus on daily operations rather than manual data entry and vendor-related issues.

I know you have a million things on your plate keeping things running smoothly -- let's set up a quick 30-minute Zoom call where I can connect you with a hotel specialist to show you how Ottimate can help. Aside from yourself, is there a Corporate Controller or AP manager who should sit in on this with you?

Great, I'm pulling up my calendar now. Do you have availability tomorrow morning around [TIME], or does early afternoon work better for you?`,
    },
  ],
};
