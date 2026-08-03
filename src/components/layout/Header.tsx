import React from 'react';
import type { TabId, TabItem } from '../../types';
import { C } from '../../constants/theme';
import { Icon, type IconName } from '../ui/Icon';

const tabs: TabItem[] = [
  { id: "leaderboard", label: "Ranking Mensual 🏆", ico: "crown" },
  { id: "tournaments", label: "Torneo Bracket ⚔️",  ico: "zap" },
  { id: "halloffame",  label: "Salón de la Fama 👑", ico: "star" },
  { id: "wars",        label: "Guerras 🔒",         ico: "swords" },
  { id: "decks",       label: "Mazos 🔒",           ico: "target" },
  { id: "battles",     label: "Batallas 🔒",        ico: "book" },
];

interface HeaderProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  authenticated: boolean;
  onAdminClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  authenticated,
  onAdminClick,
}) => {
  return (
    <header style={{ background: C.navy, position: "sticky", top: 0, zIndex: 50, boxShadow: "0 2px 12px rgba(0,0,0,.3)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 12px" }}>

        {/* Top bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0 8px" }}>
          {/* Logo area */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 38, height: 38, background: `linear-gradient(135deg, ${C.gold}, ${C.gold2})`,
              borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 900, fontSize: 15, color: C.navy, letterSpacing: 1,
            }}>AE</div>
            <div>
              <p style={{ margin: 0, fontWeight: 900, fontSize: 16, color: C.white, lineHeight: 1.1 }}>Argentina EVO</p>
              <p style={{ margin: 0, fontSize: 10, color: C.gold, letterSpacing: 0.8 }}>PASE DE BATALLA 🎫 #G0V9220V</p>
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <button
              onClick={onAdminClick}
              style={{
                background: authenticated ? `${C.gold}22` : "transparent",
                border: `1px solid ${authenticated ? C.gold : C.blue}`,
                color: authenticated ? C.gold : C.sky,
                borderRadius: 8, padding: "5px 12px", fontSize: 12, fontWeight: 700, cursor: "pointer",
                display: "flex", alignItems: "center", gap: 5,
              }}
            >
              <Icon name="lock" size={13} color={authenticated ? C.gold : C.sky} />
              {authenticated ? "Admin ✓" : "Admin"}
            </button>
          </div>
        </div>

        {/* Nav tabs (Mobile First Scrollable) */}
        <nav style={{
          display: "flex", gap: 4, overflowX: "auto", paddingBottom: 2,
          WebkitOverflowScrolling: "touch", msOverflowStyle: "none", scrollbarWidth: "none"
        }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => onTabChange(t.id)}
              style={{
                display: "flex", alignItems: "center", gap: 6, padding: "8px 12px",
                background: "none", border: "none", cursor: "pointer", whiteSpace: "nowrap",
                borderBottom: activeTab === t.id ? `3px solid ${C.gold}` : "3px solid transparent",
                color: activeTab === t.id ? C.gold : C.silver,
                fontWeight: activeTab === t.id ? 800 : 500, fontSize: 13,
                transition: "all .15s",
              }}
            >
              <Icon name={t.ico as IconName} size={15} color={activeTab === t.id ? C.gold : C.gray} />
              {t.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};
