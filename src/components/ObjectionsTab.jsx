import { ROLES } from '../content/config';
import OBJECTIONS from '../content/objections';

export default function ObjectionsTab({ role }) {
  return (
    <div>
      <p style={{ fontSize: 13, color: "var(--text-faint)", marginTop: 0, marginBottom: 20, lineHeight: 1.5 }}>
        Objections reveal what the prospect really needs to hear. Responses are tailored to the role you selected ({ROLES.find(r => r.id === role)?.label}) when available.
      </p>
      {OBJECTIONS.map((obj, i) => (
        <div key={i} style={{ border: "1px solid var(--border)", borderRadius: 10, padding: "16px 18px", marginBottom: 12 }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }}>"{obj.objection}"</div>
          <div style={{ fontSize: 12, color: "var(--text-faint)", marginBottom: 12, fontStyle: "italic" }}>What they're really saying: {obj.subtext}</div>
          <div style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-body)", padding: "10px 14px", background: "var(--bg-surface-alt)", borderRadius: 8, borderLeft: "3px solid #185FA5", fontStyle: "italic" }}>
            {obj.responses[role] || obj.responses.default || Object.values(obj.responses)[0]}
          </div>
        </div>
      ))}
    </div>
  );
}
