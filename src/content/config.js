export const VERTICALS = [
  { id: "hospitality", label: "Hospitality", icon: "🏨" },
  { id: "grocery", label: "Grocery", icon: "🛒" },
  { id: "healthcare", label: "Healthcare", icon: "🏥" },
];

export const ROLES = [
  { id: "controller", label: "Controller", sub: "Primary target · 50% win rate" },
  { id: "cfo", label: "CFO", sub: "Financial buyer · 60% win rate" },
  { id: "ap_manager", label: "AP Manager / Clerk", sub: "Secondary champion · 40% win rate" },
  { id: "owner_ops", label: "Owner / GM / Ops", sub: "Economic buyer · 70% win rate when engaged" },
  { id: "it_leader", label: "IT / Technical", sub: "Lateral influencer · integration and security focus" },
];

export const TRIGGERS = [
  { id: "generic", label: "No known trigger", sub: "Use when you don't know the trigger yet", tag: "DISCOVERY", color: "#6B7280" },
  { id: "staff_turnover", label: "Staff loss or turnover", sub: "AP person left, team can't keep up", tag: "MOST COMMON", color: "#D85A30" },
  { id: "growth", label: "Growth event", sub: "Acquisitions, new locations, new entities", tag: "HIGH IMPACT", color: "#185FA5" },
  // { id: "audit", label: "Audit or compliance pressure", sub: "External deadline forcing the fix", tag: "FORCING FUNCTION", color: "#534AB7" },
  // { id: "erp", label: "ERP migration", sub: "Already changing systems, natural on-ramp", tag: "ON-RAMP", color: "#0F6E56" },
  { id: "month_close", label: "Month-end close pain", sub: "Overtime, errors, frustration at the limit", tag: "EMOTIONAL", color: "#854F0B" },
  { id: "vendor_friction", label: "Vendor payment friction / Margin pressure", sub: "Late fees, missed discounts, margin leakage", tag: "FINANCIAL", color: "#D85A30" },
  { id: "new_leader", label: "New financial leader", sub: "Arrives with conviction, looking for a vendor", tag: "CHAMPION-LED", color: "#185FA5" },
  { id: "competitor_frustration", label: "Frustration with current solution", sub: "Price, service, or features not cutting it", tag: "DISPLACEMENT", color: "#534AB7" },
];

export function isMonthCloseWindow() {
  const day = new Date().getDate();
  if (day <= 5) return { active: true, phase: "beginning" };
  if (day >= 13 && day <= 17) return { active: true, phase: "mid-month" };
  if (day >= 25) return { active: true, phase: "end" };
  return { active: false, phase: null };
}

export const MONTH_CLOSE_INJECT = {
  controller: `And given where we are in the month, your team is probably right in the middle of close or just getting over one. That makes this even more relevant.`,
  cfo: `With month-end close either just behind you or right around the corner, the cash flow and cost visibility question is top of mind right now.`,
  ap_manager: `I know this time of month is brutal for AP teams. If you're in the middle of close or just coming out of one, this is probably hitting close to home.`,
  owner_ops: `And with month-end close timing, your finance team is probably stretched thin right now, which makes the efficiency conversation even more timely.`,
};
