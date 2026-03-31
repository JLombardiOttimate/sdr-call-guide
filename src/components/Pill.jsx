export default function Pill({ label, active, onClick, color }) {
  return (
    <button onClick={onClick} style={{
      fontFamily: "inherit", fontSize: 13, fontWeight: 600, padding: "8px 16px",
      borderRadius: 8, cursor: "pointer", border: active ? `2px solid ${color || "#1a1a1a"}` : "1px solid #ddd",
      background: active ? (color ? color + "0D" : "#f5f5f5") : "#fff",
      color: active ? (color || "#1a1a1a") : "#888", transition: "all 0.15s",
    }}>{label}</button>
  );
}
