export default {
  generic: {
    intro: {
      hospitality: `"Hi [Name], this is [SDR] from Ottimate. We build AP automation for hospitality operators and we typically get pulled in during ERP projects or when the finance team is hitting a wall with their current setup. Are you involved in evaluating anything on the AP or finance tech side right now?"`,
      grocery: `"Hi [Name], this is [SDR] from Ottimate. We work with grocery operators on AP automation, and we usually come up when IT and finance are trying to reduce the manual touchpoints around invoices. Are you part of any finance tech conversations happening right now?"`,
      healthcare: `"Hi [Name], this is [SDR] from Ottimate. We work with healthcare groups on AP automation, and we often get introduced during ERP migrations or when finance is trying to close compliance gaps. Are you involved in any of those conversations at your org right now?"`,
    },
    discovery: [
      "Are you currently involved in any finance or accounting system evaluations?",
      "What ERP or accounting system is the finance team on? Any changes planned?",
      "If finance came to you tomorrow and said they needed a new AP tool, what would their integration requirements look like?",
      "Who on the finance side is owning the AP requirements? Is that the Controller or CFO?",
    ],
    listenFor: "ERP migration, system evaluation, integration, implementation, NetSuite, Sage, QuickBooks, R365, Jonas, change management, IT steering committee",
    recap: `"It sounds like [insert pain point]. Does that sound right, or what am I missing?"`,
    pitch: {
      hospitality: [
        `We're live in multi-property hospitality groups running 50-plus locations. The integration with Jonas, R365, and similar systems is pre-built. IT teams typically don't have to build anything from scratch.`,
        `Pacifica Hotels runs over 7,000 invoices a month through Ottimate. The implementation was managed without a heavy IT lift on their side.`,
      ],
      grocery: [
        `We work with high-volume grocery operators like Heritage Grocers Group. The finance team gets what they need, and the integration footprint is manageable for IT.`,
        `Our AI capture doesn't rely on templates, so there's no ongoing maintenance burden for IT when vendors change their invoice formats.`,
      ],
      healthcare: [
        `We're live in DSO and senior living groups with multi-entity structures. PHI redaction is built into the platform, so IT isn't managing a separate compliance layer.`,
        `For healthcare groups on multi-entity ERP setups, our integration is pre-built and the implementation timeline is typically measured in weeks, not months.`,
      ],
    },
    close: `"The best next step is usually a 20-minute call with one of our experts who can walk through the integration and implementation specifics. Would it make sense to loop in your Controller or CFO so we're talking to the full group at once?"`,
  },

  competitor_frustration: {
    intro: {
      hospitality: `"Hi [Name], this is [SDR] from Ottimate. We work with hospitality operators who are re-evaluating their AP setup, and IT is usually part of that conversation because of the integration requirements. Is that something on your radar right now?"`,
      grocery: `"Hi [Name], this is [SDR] from Ottimate. We hear from grocery operators pretty often that their AP tool isn't keeping up with their volume. When that happens, IT usually gets pulled into the replacement process. Is that where you are?"`,
      healthcare: `"Hi [Name], this is [SDR] from Ottimate. A lot of healthcare groups we talk to are in the middle of re-evaluating AP automation, and IT is always part of vetting a replacement. Is that a conversation happening at your org?"`,
    },
    discovery: [
      "Are you currently running an AP automation tool? What system is it?",
      "Has finance flagged any issues with the current tool that are creating IT headaches?",
      "If you were switching AP platforms, what would your integration and security review process look like?",
      "Who's leading the evaluation on the finance side?",
    ],
    listenFor: "switching, replacement, evaluation, not happy with, support issues, integration problems, the finance team keeps asking",
    recap: `"Got it, so [insert what they said about the current tool or evaluation status]. The good news is migration from most platforms is something we've done before. The AE can walk through exactly what that looks like on the IT side."`,
    pitch: {
      hospitality: [
        `When hospitality operators switch to Ottimate, we handle the data migration and integration setup. IT teams at groups like EOS Hospitality didn't have to manage the cutover themselves.`,
        `There's no template setup or stencil configuration required on the IT side. The AI handles invoice variation, which removes a lot of the ongoing maintenance burden.`,
      ],
      grocery: [
        `Grocery operators switching from other platforms typically go live faster than expected because we don't require a training data build. The AI is already trained on invoice formats in your vertical.`,
        `Heritage Grocers Group moved to Ottimate and the IT footprint was straightforward. Finance got what they needed without a long IT engagement.`,
      ],
      healthcare: [
        `Healthcare groups switching to Ottimate get PHI redaction and HIPAA compliance built in. IT doesn't have to layer a separate compliance solution on top.`,
        `For DSO and senior living groups moving off another platform, we handle multi-entity configuration during implementation so IT isn't rebuilding GL structures.`,
      ],
    },
    close: `"I'd keep this conversation at a high level for now and get our AE involved. They do a 20-minute technical call with IT specifically to walk through the integration, security review, and implementation timeline. Want to find a time that works for you and whoever on the finance team is leading this?"`,
  },

  growth: {
    intro: {
      hospitality: `"Hi [Name], this is [SDR] from Ottimate. I saw that [company] recently [opened new properties / acquired / expanded] and we work with hospitality IT teams who are scaling their finance tech stack alongside that growth. Is that on your radar?"`,
      grocery: `"Hi [Name], this is [SDR] from Ottimate. Grocery operators adding locations or volume usually find their AP process starts to strain the systems underneath it. Are you seeing that on the IT side?"`,
      healthcare: `"Hi [Name], this is [SDR] from Ottimate. Healthcare groups growing through acquisition or new locations often need to scale their AP infrastructure. Is that a project you're involved in?"`,
    },
    discovery: [
      "How many entities or locations is IT supporting today, and where is that headed?",
      "As the org adds locations, are you being asked to scale finance systems in parallel?",
      "Is there a roadmap conversation happening about AP or finance automation?",
      "Who's driving that conversation on the finance side?",
    ],
    listenFor: "adding locations, new entities, acquisition, scaling, system can't keep up, IT roadmap, finance has been asking",
    recap: `"So you're [insert growth context]. That's exactly when we tend to get introduced, because the finance team usually needs infrastructure that can scale without a new IT project every time they add an entity."`,
    pitch: {
      hospitality: [
        `Ottimate is built for multi-entity hospitality operators. Adding a new property doesn't require a new implementation. It's a configuration, not a project.`,
        `Operators like Pacifica Hotels process over 7,000 invoices a month across multiple properties. The platform scaled with them without an IT rebuild.`,
      ],
      grocery: [
        `Grocery operators adding locations need AP infrastructure that handles the volume increase without requiring a new integration build each time.`,
        `Heritage Grocers Group runs high-volume multi-location AP through Ottimate. The system scaled without adding IT overhead.`,
      ],
      healthcare: [
        `DSO and senior living groups adding locations can spin up new entities in Ottimate without custom IT work. Multi-entity GL mapping is built in.`,
        `Healthcare groups growing through acquisition can consolidate AP across new entities quickly. The implementation model is designed for that pattern.`,
      ],
    },
    close: `"The integration and scalability questions are best answered by our AE in a short technical call. I'd suggest looping in your Controller or CFO so the business and technical sides are aligned from the first conversation. Does that work?"`,
  },
};
