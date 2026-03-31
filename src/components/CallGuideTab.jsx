import Section from './Section';
import ScriptBlock from './ScriptBlock';
import { MONTH_CLOSE_INJECT } from '../content/config';

export default function CallGuideTab({ script, role, trigger, monthClose, monthCloseMode, setMonthCloseMode, onLoadGeneric }) {
  if (!script) {
    return (
      <div style={{ textAlign: "center", padding: "40px 20px", color: "#888" }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>🚧</div>
        <div style={{ fontSize: 15, fontWeight: 600, color: "#555", marginBottom: 6 }}>Script not yet built for this combination</div>
        <div style={{ fontSize: 13, lineHeight: 1.5 }}>Use the "No known trigger" script for this role as a starting point.</div>
        <button onClick={onLoadGeneric} style={{ marginTop: 16, background: "#1a1a1a", color: "#fff", border: "none", borderRadius: 8, padding: "10px 20px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Load generic script</button>
      </div>
    );
  }

  return (
    <div>
      {monthClose.active && trigger !== "month_close" && (
        <div style={{ background: "#FFF8EB", border: "1px solid #F5C775", borderRadius: 10, padding: "14px 16px", marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#854F0B" }}>📅 Month-end close timing</div>
            <div style={{ display: "flex", gap: 4, background: "#F5E6C8", borderRadius: 6, padding: 2 }}>
              {["banner", "inject"].map(m => (
                <button key={m} onClick={() => setMonthCloseMode(m)} style={{ fontSize: 11, fontWeight: 600, fontFamily: "inherit", padding: "3px 10px", borderRadius: 4, cursor: "pointer", border: "none", background: monthCloseMode === m ? "#fff" : "transparent", color: monthCloseMode === m ? "#854F0B" : "#B8860B88", boxShadow: monthCloseMode === m ? "0 1px 3px rgba(0,0,0,0.1)" : "none" }}>
                  {m === "banner" ? "Callout" : "Inject"}
                </button>
              ))}
            </div>
          </div>
          {monthCloseMode === "banner" ? (
            <p style={{ fontSize: 13, color: "#854F0B", margin: 0, lineHeight: 1.5 }}>Month-end close is top of mind right now. Consider weaving Trigger 5 into your conversation or asking: <em>"How did last close go for your team?"</em></p>
          ) : (
            <p style={{ fontSize: 13, color: "#854F0B", margin: 0, lineHeight: 1.5, fontStyle: "italic" }}>Injected language appears highlighted in your intro below.</p>
          )}
        </div>
      )}

      {/* Intro */}
      <Section title="Intro" color="#185FA5">
        <ScriptBlock text={script.intro} />
        {monthClose.active && trigger !== "month_close" && monthCloseMode === "inject" && MONTH_CLOSE_INJECT[role] && (
          <div style={{ background: "#FFF8EB", borderLeft: "3px solid #F5C775", padding: "8px 12px", marginTop: 8, borderRadius: "0 6px 6px 0", fontSize: 14, fontStyle: "italic", color: "#854F0B", lineHeight: 1.6 }}>{MONTH_CLOSE_INJECT[role]}</div>
        )}
      </Section>

      {/* Discovery */}
      <Section title="Discovery questions" color="#0F6E56">
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {script.discovery.map((q, i) => (<div key={i} style={{ fontSize: 14, lineHeight: 1.6, color: "#333", padding: "8px 12px", background: "#f9fafb", borderRadius: 6, borderLeft: "3px solid #0F6E5633" }}>{q}</div>))}
        </div>
      </Section>

      {/* Listen For (only if populated) */}
      {script.listenFor && <Section title="Listen for" color="#534AB7"><div style={{ fontSize: 13, color: "#534AB7", fontStyle: "italic", lineHeight: 1.6, padding: "8px 12px", background: "#EEEDFE", borderRadius: 6 }}>{script.listenFor}</div></Section>}

      {/* Recap */}
      {script.recap && <Section title="Recap (use after discovery)" color="#6B7280"><ScriptBlock text={script.recap} /></Section>}

      {/* Pitch */}
      <Section title="Pitch + proof points" color="#854F0B">
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {script.pitch.map((p, i) => (<div key={i} style={{ fontSize: 14, lineHeight: 1.6, color: "#333", padding: "8px 12px", background: "#FFFDF5", borderRadius: 6, borderLeft: "3px solid #854F0B33" }}>{p}</div>))}
        </div>
      </Section>

      {/* Close */}
      <Section title="Close" color="#1a1a1a"><ScriptBlock text={script.close} /></Section>
    </div>
  );
}
