import { useState } from 'react';
import resources from '../content/resources';
import Pill from './Pill';

const SUB_VERTICAL_COLORS = {
  "Hotels": "#185FA5",
  "Restaurants": "#B44D12",
  "Golf/Country Clubs": "#0F6E56",
  "Grocery": "#6B21A8",
  "DSO": "#0369A1",
  "Senior Living": "#9333EA",
};

const VERTICALS = [
  { id: "hospitality", label: "Hospitality" },
  { id: "grocery", label: "Grocery" },
  { id: "healthcare", label: "Healthcare" },
  { id: "general", label: "General" },
];

export default function ResourcesTab({ selectedVertical }) {
  const initialVertical = VERTICALS.find(v => v.id === selectedVertical) ? selectedVertical : "general";
  const [activeVertical, setActiveVertical] = useState(initialVertical);

  const items = resources[activeVertical] || [];

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        {VERTICALS.map(v => (
          <Pill key={v.id} label={v.label} active={activeVertical === v.id} onClick={() => setActiveVertical(v.id)} />
        ))}
      </div>

      {items.length === 0 ? (
        <div style={{ fontSize: 14, color: "#888", padding: "20px 0" }}>No resources available for this vertical yet.</div>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 12,
        }}>
          {items.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                gap: 10,
                padding: "14px 14px",
                background: "#fff",
                border: "1px solid #e0e0e0",
                borderRadius: 10,
                transition: "all 0.15s",
                cursor: "pointer",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#1a1a1a"; e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#e0e0e0"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <polyline points="9 15 12 18 15 15" />
              </svg>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a", lineHeight: 1.3 }}>{item.title}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
                  <span style={{
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: 0.6,
                    color: "#666",
                    textTransform: "uppercase",
                  }}>Case Study</span>
                  {(() => {
                    const tagColor = SUB_VERTICAL_COLORS[item.subVertical] || "#555";
                    return (
                      <span style={{
                        display: "inline-block",
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: 0.6,
                        color: tagColor,
                        background: tagColor + "14",
                        padding: "2px 6px",
                        borderRadius: 4,
                      }}>{item.subVertical}</span>
                    );
                  })()}
                </div>
                {item.metric && (
                  <div style={{ fontSize: 12, color: "#777", lineHeight: 1.4, marginTop: 4 }}>{item.metric}</div>
                )}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
