import controller from './controller';
import cfo from './cfo';
import ap_manager from './ap-manager';
import owner_ops from './owner-ops';

const SCRIPTS = { controller, cfo, ap_manager, owner_ops };

export function getScript(role, trigger, vertical) {
  const r = SCRIPTS[role];
  if (!r) return null;
  const s = r[trigger] || r["generic"];
  if (!s) return null;
  return { intro: s.intro?.[vertical] || "", discovery: s.discovery || [], listenFor: s.listenFor || "", hook: s.hook?.[vertical] || "", pitch: s.pitch?.[vertical] || [], close: s.close || "" };
}
