export default [
  {
    objection: "We already automate our AP.",
    subtext: "They don't think you can help.",
    responses: {
      controller: `"That's great. Most controllers I talk to have some level of automation. The question is whether it's saving you money or just saving you time. 50% of finance teams say their current AP tools deliver little to no cost savings. Is your current system catching duplicate invoices, flagging vendor overcharges, and giving you real-time spend visibility?"`,
      cfo: `"Good. That tells me you already see the value of automating AP. The question is whether your current tool is protecting margin or just moving paper faster. 50% of finance teams say their AP tools deliver little to no cost savings. Is your system catching cost leaks before payment?"`,
      ap_manager: `"That's good to hear. A lot of AP teams I talk to have some automation but still spend most of their day on exceptions, coding errors, and chasing approvals. Is that the case for you, or is your tool handling most of that?"`,
    },
  },
  {
    objection: "We don't have the budget right now.",
    subtext: "They don't see enough value yet.",
    responses: {
      controller: `"I totally get that. Here's the thing: Ottimate typically pays for itself. Our customers catch an average of $136K per month in duplicate invoices alone. If we can show you where your AP process is leaking money, the conversation shifts from 'can we afford this' to 'can we afford not to.' Would 20 minutes be worth it to just look at the numbers?"`,
      cfo: `"I understand. Budgets are tight. What we're hearing from CFOs is that AP automation isn't a cost line, it's a margin protection tool. Would 20 minutes be worth it to see the math for your operation?"`,
      ap_manager: `"I hear you. Most AP teams feel that way. What if I told you this could free up 20+ hours a week for your team? Would it be worth 20 minutes to explore that, and maybe loop in your Controller to see the cost side?"`,
    },
  },
  {
    objection: "We're happy with our current vendor.",
    subtext: "They don't see a reason to switch.",
    responses: {
      default: `"I hear that a lot. You might be happy with the tool, but is it catching cost leaks and duplicates? 50% of teams say their current tools deliver little to no cost savings. That's the gap. Would 20 minutes be worth it to see if there's money on the table you're missing?"`,
    },
  },
  {
    objection: "We have too much on our plate right now.",
    subtext: "Timing feels wrong.",
    responses: {
      default: `"I totally understand. Here's my thought: if your AP process is eating up time and resources, that's exactly why now might be the right time. What if we could free up 20+ hours a week for your team? It'd only take 20 minutes to explore."`,
    },
  },
  {
    objection: "Your solution seems complex.",
    subtext: "They're afraid of implementation pain.",
    responses: {
      default: `"Actually, it's the opposite. Our implementation is designed to be fast and low-pain. Average onboarding is 4-6 weeks. Most of our customers see ROI in 90 days. We handle the heavy lifting; your team just validates. Would 20 minutes to walk through the implementation process help?"`,
    },
  },
  {
    objection: "Send me an email / some info.",
    subtext: "They want to get off the phone.",
    responses: {
      default: `"Happy to. So I send you something relevant, can I ask one quick question? [Insert trigger-specific question]. That way I can make sure what I send actually applies to your situation instead of a generic overview."`,
    },
  },
];
