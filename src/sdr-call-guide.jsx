import { useState } from "react";
import { VERTICALS, ROLES, TRIGGERS, isMonthCloseWindow } from "./content/config";
import { getScript } from "./content/scripts";
import Pill from "./components/Pill";
import CallGuideTab from "./components/CallGuideTab";
import ObjectionsTab from "./components/ObjectionsTab";
import BattlecardsTab from "./components/BattlecardsTab";

export default function SDRCallGuide() {
  const [step, setStep] = useState(0);
  const [vertical, setVertical] = useState(null);
  const [role, setRole] = useState(null);
  const [trigger, setTrigger] = useState(null);
  const [tab, setTab] = useState("guide");
  const [monthCloseMode, setMonthCloseMode] = useState("banner");
  const [selectedCompetitor, setSelectedCompetitor] = useState("stampli");
  const monthClose = isMonthCloseWindow();

  const reset = () => { setStep(0); setVertical(null); setRole(null); setTrigger(null); setTab("guide"); };
  const script = (step === 3 && vertical && role && trigger) ? getScript(role, trigger, vertical) : null;

  const font = "'DM Sans', 'Helvetica Neue', sans-serif";

  return (
    <div style={{ fontFamily: font, color: "#1a1a1a", maxWidth: 720, margin: "0 auto", padding: "0 0 40px" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ borderBottom: "1px solid #e5e5e5", paddingBottom: 16, marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: "#854F0B", textTransform: "uppercase", marginBottom: 4 }}>Ottimate SDR</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#1a1a1a", lineHeight: 1.2 }}>Call Guide</div>
        </div>
        {step > 0 && <button onClick={reset} style={{ background: "none", border: "1px solid #d4d4d4", borderRadius: 6, padding: "6px 14px", fontSize: 13, fontWeight: 500, cursor: "pointer", color: "#666", fontFamily: "inherit" }}>Start over</button>}
      </div>

      {/* Progress */}
      <div style={{ display: "flex", gap: 6, marginBottom: 28 }}>
        {["Vertical", "Contact", "Trigger", "Call guide"].map((label, i) => (
          <div key={i} style={{ flex: 1, textAlign: "center" }}>
            <div style={{ height: 3, borderRadius: 2, marginBottom: 6, background: i <= step ? "#1a1a1a" : "#e5e5e5", transition: "background 0.3s" }} />
            <div style={{ fontSize: 11, fontWeight: 500, color: i <= step ? "#1a1a1a" : "#aaa" }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Month close banner (selection steps) */}
      {monthClose.active && step < 3 && (
        <div style={{ background: "#FFF8EB", border: "1px solid #F5C775", borderRadius: 8, padding: "10px 14px", marginBottom: 20, fontSize: 13, color: "#854F0B", display: "flex", alignItems: "flex-start", gap: 8, lineHeight: 1.5 }}>
          <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>📅</span>
          <span><strong>Month-end close is top of mind right now.</strong> Consider leading with Trigger 5 (month-end close pain) or weaving it into your opener.</span>
        </div>
      )}

      {/* Step 0: Vertical */}
      {step === 0 && (
        <div>
          <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>What vertical are you calling into?</h2>
          <p style={{ fontSize: 13, color: "#888", marginBottom: 16, marginTop: 0 }}>This tailors proof points, stats, and language to their industry.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {VERTICALS.map(v => (
              <button key={v.id} onClick={() => { setVertical(v.id); setStep(1); }} style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", border: "1px solid #e0e0e0", borderRadius: 10, padding: "16px 18px", cursor: "pointer", textAlign: "left", transition: "all 0.15s", fontFamily: "inherit" }} onMouseEnter={e => { e.currentTarget.style.borderColor = "#1a1a1a"; }} onMouseLeave={e => { e.currentTarget.style.borderColor = "#e0e0e0"; }}>
                <span style={{ fontSize: 28 }}>{v.icon}</span>
                <span style={{ fontSize: 16, fontWeight: 600 }}>{v.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 1: Role */}
      {step === 1 && (
        <div>
          <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>Who are you speaking to?</h2>
          <p style={{ fontSize: 13, color: "#888", marginBottom: 16, marginTop: 0 }}>The role of the person you're calling.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {ROLES.map(r => (
              <button key={r.id} onClick={() => { setRole(r.id); setStep(2); }} style={{ background: "#fff", border: "1px solid #e0e0e0", borderRadius: 10, padding: "14px 18px", cursor: "pointer", textAlign: "left", transition: "all 0.15s", fontFamily: "inherit" }} onMouseEnter={e => { e.currentTarget.style.borderColor = "#1a1a1a"; }} onMouseLeave={e => { e.currentTarget.style.borderColor = "#e0e0e0"; }}>
                <div style={{ fontSize: 15, fontWeight: 600 }}>{r.label}</div>
                <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{r.sub}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Trigger */}
      {step === 2 && (
        <div>
          <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>What's the buying trigger?</h2>
          <p style={{ fontSize: 13, color: "#888", marginBottom: 16, marginTop: 0 }}>Pick what you believe is driving this prospect. If you don't know, start with "No known trigger."</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {TRIGGERS.map(t => (
              <button key={t.id} onClick={() => { setTrigger(t.id); setStep(3); setTab("guide"); }} style={{ background: "#fff", border: "1px solid #e0e0e0", borderRadius: 10, padding: "14px 18px", cursor: "pointer", textAlign: "left", transition: "all 0.15s", fontFamily: "inherit" }} onMouseEnter={e => { e.currentTarget.style.borderColor = "#1a1a1a"; }} onMouseLeave={e => { e.currentTarget.style.borderColor = "#e0e0e0"; }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                  <span style={{ fontSize: 15, fontWeight: 600 }}>{t.label}</span>
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase", color: t.color, background: t.color + "14", padding: "2px 6px", borderRadius: 4 }}>{t.tag}</span>
                </div>
                <div style={{ fontSize: 12, color: "#888" }}>{t.sub}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Tabbed content */}
      {step === 3 && (
        <div>
          {/* Selection summary pills */}
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            {[VERTICALS.find(v => v.id === vertical)?.label, ROLES.find(r => r.id === role)?.label, TRIGGERS.find(t => t.id === trigger)?.label].map((l, i) => (
              <span key={i} style={{ fontSize: 12, fontWeight: 600, background: "#f5f5f5", color: "#555", padding: "4px 10px", borderRadius: 20 }}>{l}</span>
            ))}
          </div>

          {/* Tab bar */}
          <div style={{ display: "flex", gap: 6, marginBottom: 24, borderBottom: "1px solid #e5e5e5", paddingBottom: 12 }}>
            <Pill label="📋 Call guide" active={tab === "guide"} onClick={() => setTab("guide")} />
            <Pill label="🛡 Objections" active={tab === "objections"} onClick={() => setTab("objections")} />
            <Pill label="⚔️ Battlecards" active={tab === "battlecards"} onClick={() => setTab("battlecards")} />
          </div>

          {tab === "guide" && <CallGuideTab script={script} role={role} trigger={trigger} monthClose={monthClose} monthCloseMode={monthCloseMode} setMonthCloseMode={setMonthCloseMode} onLoadGeneric={() => setTrigger("generic")} />}
          {tab === "objections" && <ObjectionsTab role={role} />}
          {tab === "battlecards" && <BattlecardsTab selectedCompetitor={selectedCompetitor} setSelectedCompetitor={setSelectedCompetitor} />}
        </div>
      )}
    </div>
  );
}
