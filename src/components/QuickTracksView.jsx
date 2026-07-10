import { useState } from "react";
import { QUICK_VERTICALS, getQuickTrackData, INTRO_APPROACHES, PAIN_POINTS } from "../content/quicktracks";

const GROUPS = ["Retail", "Hospitality", "Healthcare"];

function SectionCard({ label, color, children }) {
  return (
    <div style={{ background: "var(--bg-raised)", border: "1px solid var(--border-mid)", borderRadius: 10, padding: "16px 18px", marginBottom: 12 }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: color || "var(--text-faint)", marginBottom: 10 }}>{label}</div>
      {children}
    </div>
  );
}

function ScriptText({ text }) {
  return <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: "var(--text-primary)" }}>{text}</p>;
}

function HowToStartModal({ onClose }) {
  const font = "'DM Sans', 'Helvetica Neue', sans-serif";
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }} onClick={onClose}>
      <div style={{ background: "var(--bg-page)", borderRadius: 12, padding: 24, maxWidth: 480, width: "100%", maxHeight: "80vh", overflowY: "auto", fontFamily: font }} onClick={e => e.stopPropagation()}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>How to Start</div>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 20, color: "var(--text-faint)", lineHeight: 1, padding: "0 4px" }}>×</button>
        </div>
        {Object.values(INTRO_APPROACHES).map(approach => (
          <div key={approach.label} style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)", marginBottom: 2 }}>{approach.label}</div>
            <div style={{ fontSize: 11, color: "var(--text-faint)", marginBottom: 12 }}>{approach.subtitle}</div>
            {approach.lines.map((line, i) => (
              <div key={i} style={{ background: "var(--bg-raised)", border: "1px solid var(--border-mid)", borderRadius: 8, padding: "12px 14px", marginBottom: 8, fontSize: 13, lineHeight: 1.6, color: "var(--text-primary)", fontStyle: "italic" }}>
                {line}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function PainPointsSection() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginTop: 24 }}>
      <button onClick={() => setOpen(o => !o)} style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "1px solid var(--border-mid)", borderRadius: 8, padding: "10px 14px", cursor: "pointer", fontFamily: "inherit", fontSize: 13, fontWeight: 600, color: "var(--text-muted)", width: "100%" }}>
        <span style={{ fontSize: 15 }}>{open ? "▾" : "▸"}</span>
        Pain Point Reference
      </button>
      {open && (
        <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
          {PAIN_POINTS.map((pp, i) => (
            <div key={i} style={{ background: "var(--bg-raised)", border: "1px solid var(--border-mid)", borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start", flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: 160 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "var(--red-text)", marginBottom: 3 }}>{pp.pain}</div>
                  <div style={{ fontSize: 12, color: "var(--text-faint)", lineHeight: 1.5 }}>{pp.desc}</div>
                </div>
                <div style={{ fontSize: 12, color: "var(--text-faint)", flexShrink: 0, paddingTop: 2 }}>→</div>
                <div style={{ flex: 1, minWidth: 160 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "var(--teal-text)", marginBottom: 3 }}>{pp.solution}</div>
                  <div style={{ fontSize: 12, color: "var(--text-faint)", lineHeight: 1.5 }}>{pp.solutionDesc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function FinanceTrack({ track }) {
  return (
    <div>
      <SectionCard label="Intro" color="#854F0B">
        <ScriptText text={track.intro} />
      </SectionCard>
      <SectionCard label="Discovery" color="#185FA5">
        <ol style={{ margin: 0, padding: "0 0 0 18px", display: "flex", flexDirection: "column", gap: 10 }}>
          {track.discovery.map((q, i) => (
            <li key={i} style={{ fontSize: 14, lineHeight: 1.6, color: "var(--text-primary)" }}>{q}</li>
          ))}
        </ol>
      </SectionCard>
      <SectionCard label="Recap" color="#555">
        <ScriptText text={track.recap} />
      </SectionCard>
      <SectionCard label="Pitch" color="#1B7A44">
        <ScriptText text={track.pitch} />
      </SectionCard>
      <SectionCard label="Close" color="#6B3FA0">
        <ScriptText text={track.close} />
      </SectionCard>
    </div>
  );
}

function NonFinanceTrack({ track }) {
  const paragraphs = track.talkTrack.split("\n\n").filter(Boolean);
  return (
    <div>
      <div style={{ display: "flex", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 200, background: "var(--gold-bg)", border: "1px solid var(--gold-border)", borderRadius: 10, padding: "14px 16px" }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "var(--gold-text)", marginBottom: 6 }}>Primary Pain</div>
          <div style={{ fontSize: 13, lineHeight: 1.5, color: "var(--text-primary)" }}>{track.primaryPain}</div>
        </div>
        <div style={{ flex: 1, minWidth: 200, background: "var(--teal-bg)", border: "1px solid var(--teal-border)", borderRadius: 10, padding: "14px 16px" }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "var(--teal-text)", marginBottom: 6 }}>Value Hook</div>
          <div style={{ fontSize: 13, lineHeight: 1.5, color: "var(--text-primary)", fontStyle: "italic" }}>{track.valueHook}</div>
        </div>
      </div>
      <SectionCard label="Talk Track" color="#185FA5">
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {paragraphs.map((p, i) => (
            <p key={i} style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: "var(--text-primary)" }}>{p}</p>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}

export default function QuickTracksView() {
  const [step, setStep] = useState(0);
  const [verticalId, setVerticalId] = useState(null);
  const [persona, setPersona] = useState(null);
  const [roleId, setRoleId] = useState(null);
  const [showHowToStart, setShowHowToStart] = useState(false);

  const vertConfig = QUICK_VERTICALS.find(v => v.id === verticalId);
  const vertData = vertConfig ? getQuickTrackData(verticalId) : null;
  const hasNonFinance = (vertData?.nonFinance?.length ?? 0) > 0;

  const track = step >= 3
    ? persona === "finance"
      ? vertData?.finance
      : vertData?.nonFinance?.find(r => r.id === roleId)
    : null;

  const reset = () => { setStep(0); setVerticalId(null); setPersona(null); setRoleId(null); };

  const font = "'DM Sans', 'Helvetica Neue', sans-serif";
  const btnBase = { background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" };

  return (
    <div style={{ fontFamily: font }}>
      {showHowToStart && <HowToStartModal onClose={() => setShowHowToStart(false)} />}

      {/* Subheader row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {step > 0 && (
            <button onClick={reset} style={{ ...btnBase, border: "1px solid var(--border-input)", borderRadius: 6, padding: "6px 14px", fontSize: 13, fontWeight: 500, color: "var(--text-muted)" }}>
              Start over
            </button>
          )}
          {step > 1 && (
            <button onClick={() => { setStep(s => s - 1); if (step === 2) setPersona(null); if (step === 3) setRoleId(null); }} style={{ ...btnBase, border: "1px solid var(--border-input)", borderRadius: 6, padding: "6px 14px", fontSize: 13, fontWeight: 500, color: "var(--text-muted)" }}>
              Back
            </button>
          )}
        </div>
        <button onClick={() => setShowHowToStart(true)} style={{ ...btnBase, border: "1px solid var(--border-input)", borderRadius: 6, padding: "6px 14px", fontSize: 13, fontWeight: 500, color: "var(--text-muted)" }}>
          How to Start
        </button>
      </div>

      {/* Selection breadcrumb */}
      {step > 0 && (
        <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}>
          {[
            vertConfig?.label,
            persona === "finance" ? "Finance" : persona === "nonfinance" ? "Non-Finance" : null,
            roleId ? vertData?.nonFinance?.find(r => r.id === roleId)?.label : null,
          ].filter(Boolean).map((l, i) => (
            <span key={i} style={{ fontSize: 12, fontWeight: 600, background: "var(--bg-raised)", color: "var(--text-muted)", padding: "4px 10px", borderRadius: 20 }}>{l}</span>
          ))}
        </div>
      )}

      {/* Step 0: Vertical */}
      {step === 0 && (
        <div>
          <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4, color: "var(--text-primary)", marginTop: 0 }}>Which vertical are you calling into?</h2>
          <p style={{ fontSize: 13, color: "var(--text-faint)", marginBottom: 20, marginTop: 0 }}>Select an industry to get the simplified talk track.</p>
          {GROUPS.map(group => {
            const items = QUICK_VERTICALS.filter(v => v.group === group);
            return (
              <div key={group} style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 8 }}>{group}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {items.map(v => (
                    <button key={v.id} onClick={() => { setVerticalId(v.id); setStep(1); }} style={{ display: "flex", alignItems: "center", gap: 12, background: "var(--bg-page)", border: "1px solid var(--border-mid)", borderRadius: 10, padding: "14px 18px", cursor: "pointer", textAlign: "left", fontFamily: "inherit", transition: "all 0.15s" }} onMouseEnter={e => e.currentTarget.style.borderColor = "var(--hover-border)"} onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border-mid)"}>
                      <span style={{ fontSize: 26 }}>{v.icon}</span>
                      <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>{v.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Step 1: Persona */}
      {step === 1 && (
        <div>
          <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4, color: "var(--text-primary)", marginTop: 0 }}>Who are you speaking to?</h2>
          <p style={{ fontSize: 13, color: "var(--text-faint)", marginBottom: 20, marginTop: 0 }}>Finance contacts focus on process and cost. Non-finance contacts focus on time and control.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <button onClick={() => { setPersona("finance"); setStep(3); }} style={{ background: "var(--bg-page)", border: "1px solid var(--border-mid)", borderRadius: 10, padding: "16px 18px", cursor: "pointer", textAlign: "left", fontFamily: "inherit", transition: "all 0.15s" }} onMouseEnter={e => e.currentTarget.style.borderColor = "var(--hover-border)"} onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border-mid)"}>
              <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", marginBottom: 3 }}>Finance</div>
              <div style={{ fontSize: 12, color: "var(--text-faint)" }}>Controller, CFO, AP Manager, Director of Finance</div>
            </button>
            {hasNonFinance && (
              <button onClick={() => { setPersona("nonfinance"); setStep(2); }} style={{ background: "var(--bg-page)", border: "1px solid var(--border-mid)", borderRadius: 10, padding: "16px 18px", cursor: "pointer", textAlign: "left", fontFamily: "inherit", transition: "all 0.15s" }} onMouseEnter={e => e.currentTarget.style.borderColor = "var(--hover-border)"} onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border-mid)"}>
                <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", marginBottom: 3 }}>Non-Finance</div>
                <div style={{ fontSize: 12, color: "var(--text-faint)" }}>Owner, GM, Operations, Department Head, IT Director</div>
              </button>
            )}
            {!hasNonFinance && (
              <div style={{ border: "1px dashed var(--border-mid)", borderRadius: 10, padding: "16px 18px", opacity: 0.5 }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", marginBottom: 3 }}>Non-Finance</div>
                <div style={{ fontSize: 12, color: "var(--text-faint)" }}>Talk tracks not yet available for this vertical</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Step 2: Role (non-finance only) */}
      {step === 2 && persona === "nonfinance" && (
        <div>
          <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4, color: "var(--text-primary)", marginTop: 0 }}>Which role are you calling?</h2>
          <p style={{ fontSize: 13, color: "var(--text-faint)", marginBottom: 20, marginTop: 0 }}>Each role gets a different opener and value hook.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {vertData.nonFinance.map(r => (
              <button key={r.id} onClick={() => { setRoleId(r.id); setStep(3); }} style={{ background: "var(--bg-page)", border: "1px solid var(--border-mid)", borderRadius: 10, padding: "14px 18px", cursor: "pointer", textAlign: "left", fontFamily: "inherit", transition: "all 0.15s" }} onMouseEnter={e => e.currentTarget.style.borderColor = "var(--hover-border)"} onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border-mid)"}>
                <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", marginBottom: 3 }}>{r.label}</div>
                <div style={{ fontSize: 12, color: "var(--text-faint)", lineHeight: 1.4 }}>{r.primaryPain}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Track display */}
      {step === 3 && track && (
        <div>
          {persona === "finance" ? <FinanceTrack track={track} /> : <NonFinanceTrack track={track} />}
          <PainPointsSection />
        </div>
      )}
    </div>
  );
}
