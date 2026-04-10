export default function Pill({ label, active, onClick, color }) {
  return (
    <button onClick={onClick} style={{
      fontFamily: "inherit", fontSize: 13, fontWeight: 600, padding: "8px 16px",
      borderRadius: 8, cursor: "pointer",
      border: active ? `2px solid ${color || "var(--text-primary)"}` : "1px solid var(--border-mid)",
      background: active ? (color ? color + "0D" : "var(--bg-raised)") : "var(--bg-page)",
      color: active ? (color || "var(--text-primary)") : "var(--text-faint)",
      transition: "all 0.15s",
    }}>{label}</button>
  );
}
