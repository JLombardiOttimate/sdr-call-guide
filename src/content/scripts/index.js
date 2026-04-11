import controller from './controller';
import cfo from './cfo';
import ap_manager from './ap-manager';
import owner_ops from './owner-ops';
import it_leader from './it-leader';

const SCRIPTS = { controller, cfo, ap_manager, owner_ops, it_leader };

export function getScript(role, trigger, vertical) {
  const r = SCRIPTS[role];
  if (!r) return null;
  const s = r[trigger] || r["generic"];
  if (!s) return null;
  return {
    intro: s.intro?.[vertical] || "",
    discovery: (Array.isArray(s.discovery) ? s.discovery : s.discovery?.[vertical]) || [],
    listenFor: s.listenFor || "",
    recap: s.recap || "",
    pitch: s.pitch?.[vertical] || [],
    close: (typeof s.close === "string" ? s.close : s.close?.[vertical]) || "",
  };
}
