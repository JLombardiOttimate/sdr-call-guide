export default function Section({ title, color, children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color, marginBottom: 8 }}>{title}</div>
      {children}
    </div>
  );
}
