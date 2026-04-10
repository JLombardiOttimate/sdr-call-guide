import { BATTLECARDS } from '../content/battlecards';
import Section from './Section';
import Pill from './Pill';

const competitors = Object.keys(BATTLECARDS);

export default function BattlecardsTab({ selectedCompetitor, setSelectedCompetitor }) {
  const card = BATTLECARDS[selectedCompetitor];
  const accentColor = "#185FA5";

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
        {competitors.map(key => (
          <Pill key={key} label={BATTLECARDS[key].name} active={selectedCompetitor === key} onClick={() => setSelectedCompetitor(key)} />
        ))}
      </div>
      {card && (
        <div>
          {card.quickHitter && (
            <div style={{
              padding: "12px 16px",
              background: "#0F6E56",
              borderRadius: 8,
              marginBottom: 16,
            }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>
                {card.quickHitter.headline}
              </div>
              <div style={{ fontSize: 13, color: "#d0f0e8", lineHeight: 1.6 }}>
                {card.quickHitter.support}
              </div>
            </div>
          )}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>vs. {card.name}</div>
            <div style={{ fontSize: 14, color: "var(--text-faint)", fontStyle: "italic" }}>{card.tagline}</div>
          </div>

          <div style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: 20, padding: "12px 16px", background: "var(--bg-surface)", borderRadius: 8 }}>{card.overview}</div>

          <Section title="When you see them" color={accentColor}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {card.whenYouSee.map((w, i) => (
                <div key={i} style={{ fontSize: 13, lineHeight: 1.6, color: "var(--text-muted)", padding: "6px 12px", background: "var(--bg-surface-alt)", borderRadius: 6 }}>{w}</div>
              ))}
            </div>
          </Section>

          <Section title="Where we win" color="#0F6E56">
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {card.weWin.map((w, i) => (
                <div key={i} style={{ padding: "10px 14px", background: "var(--teal-bg)", borderRadius: 8, borderLeft: "3px solid #0F6E56" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#0F6E56", marginBottom: 4 }}>{w.area}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.6, color: "var(--teal-text)" }}>{w.detail}</div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Where they win (be prepared)" color="#854F0B">
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {card.theyWin.map((w, i) => (
                <div key={i} style={{ padding: "10px 14px", background: "var(--gold-bg)", borderRadius: 8, borderLeft: "3px solid #854F0B" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#854F0B", marginBottom: 4 }}>{w.area}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.6, color: "var(--gold-text)" }}>{w.detail}</div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Questions that expose the gap" color="#534AB7">
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {card.trapQuestions.map((q, i) => (
                <div key={i} style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-body)", padding: "10px 14px", background: "var(--purple-bg)", borderRadius: 8, fontStyle: "italic" }}>{q}</div>
              ))}
            </div>
          </Section>

          <Section title="Landmine (plant this early)" color="#A32D2D">
            <div style={{ fontSize: 14, lineHeight: 1.7, color: "var(--red-text)", padding: "12px 16px", background: "var(--red-bg)", borderRadius: 8, borderLeft: "3px solid #A32D2D", fontStyle: "italic" }}>{card.landmine}</div>
          </Section>
        </div>
      )}
    </div>
  );
}
