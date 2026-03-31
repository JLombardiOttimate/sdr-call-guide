import { ROLES } from '../content/config';
import OBJECTIONS from '../content/objections';

export default function ObjectionsTab({ role }) {
  return (
    <div>
      <p style={{ fontSize: 13, color: "#888", marginTop: 0, marginBottom: 20, lineHeight: 1.5 }}>
        Objections reveal what the prospect really needs to hear. Responses are tailored to the role you selected ({ROLES.find(r => r.id === role)?.label}) when available.
      </p>
      {OBJECTIONS.map((obj, i) => (
        <div key={i} style={{ border: "1px solid #e5e5e5", borderRadius: 10, padding: "16px 18px", marginBottom: 12 }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a", marginBottom: 4 }}>"{obj.objection}"</div>
          <div style={{ fontSize: 12, color: "#888", marginBottom: 12, fontStyle: "italic" }}>What they're really saying: {obj.subtext}</div>
          <div style={{ fontSize: 14, lineHeight: 1.7, color: "#333", padding: "10px 14px", background: "#f9fafb", borderRadius: 8, borderLeft: "3px solid #185FA5", fontStyle: "italic" }}>
            {obj.responses[role] || obj.responses.default || Object.values(obj.responses)[0]}
          </div>
        </div>
      ))}
    </div>
  );
}
