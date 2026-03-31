import { useState } from "react";

const PASSCODE = "ottimate2024";
const STORAGE_KEY = "sdr-auth";

export default function PasswordGate({ children }) {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(STORAGE_KEY) === "true");
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === PASSCODE) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setAuthed(true);
    } else {
      setError(true);
      setInput("");
    }
  };

  if (authed) return children;

  const font = "'DM Sans', 'Helvetica Neue', sans-serif";

  return (
    <div style={{ fontFamily: font, display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: 20 }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <div style={{ width: "100%", maxWidth: 360, textAlign: "center" }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: "#854F0B", textTransform: "uppercase", marginBottom: 4 }}>Ottimate SDR</div>
        <div style={{ fontSize: 22, fontWeight: 700, color: "#1a1a1a", lineHeight: 1.2, marginBottom: 32 }}>Call Guide</div>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            placeholder="Enter password"
            autoFocus
            style={{
              fontFamily: "inherit", fontSize: 15, width: "100%", padding: "12px 16px",
              border: error ? "1px solid #D85A30" : "1px solid #d4d4d4", borderRadius: 8,
              outline: "none", boxSizing: "border-box", marginBottom: 12,
            }}
          />
          {error && <div style={{ fontSize: 13, color: "#D85A30", marginBottom: 12 }}>Incorrect password. Try again.</div>}
          <button type="submit" style={{
            fontFamily: "inherit", fontSize: 14, fontWeight: 600, width: "100%",
            padding: "12px 16px", background: "#1a1a1a", color: "#fff", border: "none",
            borderRadius: 8, cursor: "pointer",
          }}>Continue</button>
        </form>
      </div>
    </div>
  );
}
