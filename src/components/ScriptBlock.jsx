export default function ScriptBlock({ text }) {
  return <div style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-body)", fontStyle: "italic", padding: "10px 14px", background: "var(--bg-surface)", borderRadius: 8, border: "1px solid var(--border-light)" }}>{text}</div>;
}
