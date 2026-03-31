import { BATTLECARDS } from '../content/battlecards';
import Section from './Section';
import Pill from './Pill';

export default function BattlecardsTab({ selectedCompetitor, setSelectedCompetitor }) {
  const card = BATTLECARDS[selectedCompetitor];
  const accentColor = selectedCompetitor === "stampli" ? "#D85A30" : "#185FA5";

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        <Pill label="Stampli" active={selectedCompetitor === "stampli"} onClick={() => setSelectedCompetitor("stampli")} color="#D85A30" />
        <Pill label="Ramp" active={selectedCompetitor === "ramp"} onClick={() => setSelectedCompetitor("ramp")} color="#185FA5" />
      </div>
      {card && (
        <div>
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#1a1a1a", marginBottom: 4 }}>vs. {card.name}</div>
            <div style={{ fontSize: 14, color: "#888", fontStyle: "italic" }}>{card.tagline}</div>
          </div>

          <div style={{ fontSize: 14, lineHeight: 1.7, color: "#444", marginBottom: 20, padding: "12px 16px", background: "#fafafa", borderRadius: 8 }}>{card.overview}</div>

          <Section title="When you see them" color={accentColor}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {card.whenYouSee.map((w, i) => (
                <div key={i} style={{ fontSize: 13, lineHeight: 1.6, color: "#555", padding: "6px 12px", background: "#f9fafb", borderRadius: 6 }}>{w}</div>
              ))}
            </div>
          </Section>

          <Section title="Where we win" color="#0F6E56">
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {card.weWin.map((w, i) => (
                <div key={i} style={{ padding: "10px 14px", background: "#E1F5EE", borderRadius: 8, borderLeft: "3px solid #0F6E56" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#0F6E56", marginBottom: 4 }}>{w.area}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.6, color: "#085041" }}>{w.detail}</div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Where they win (be prepared)" color="#854F0B">
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {card.theyWin.map((w, i) => (
                <div key={i} style={{ padding: "10px 14px", background: "#FAEEDA", borderRadius: 8, borderLeft: "3px solid #854F0B" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#854F0B", marginBottom: 4 }}>{w.area}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.6, color: "#633806" }}>{w.detail}</div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Questions that expose the gap" color="#534AB7">
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {card.trapQuestions.map((q, i) => (
                <div key={i} style={{ fontSize: 14, lineHeight: 1.7, color: "#333", padding: "10px 14px", background: "#EEEDFE", borderRadius: 8, fontStyle: "italic" }}>{q}</div>
              ))}
            </div>
          </Section>

          <Section title="Landmine (plant this early)" color="#A32D2D">
            <div style={{ fontSize: 14, lineHeight: 1.7, color: "#791F1F", padding: "12px 16px", background: "#FCEBEB", borderRadius: 8, borderLeft: "3px solid #A32D2D", fontStyle: "italic" }}>{card.landmine}</div>
          </Section>
        </div>
      )}
    </div>
  );
}
