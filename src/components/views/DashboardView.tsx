import React from 'react';
import type { Player, War } from '../../types';
import { C } from '../../constants/theme';
import { SectionHead } from '../ui/SectionHead';
import { StatTile } from '../ui/StatTile';
import { Card } from '../ui/Card';
import { Table, TableRow } from '../ui/Table';
import { ResultBadge } from '../ui/ResultBadge';

interface DashboardViewProps {
  players: Player[];
  wars: War[];
}

export const DashboardView: React.FC<DashboardViewProps> = ({ players, wars }) => {
  const sorted = [...players].sort((a, b) => b.medals - a.medals);
  const wins = wars.filter(w => w.result === "WIN").length;
  const wr = wars.length ? Math.round((wins / wars.length) * 100) : 0;
  const totalMedals = players.reduce((s, p) => s + p.medals, 0);
  const lastWars = [...wars].slice(0, 5);

  return (
    <div>
      <SectionHead title="Bienvenido, Argentina Evo" sub="Panel general del clan" />

      {/* Stats */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
        <StatTile label="Medallas Totales" value={totalMedals.toLocaleString()} accent={C.gold} />
        <StatTile label="Win Rate Clan" value={`${wr}%`} accent={C.blue} />
        <StatTile label="Guerras Jugadas" value={wars.length} accent={C.navy} />
        <StatTile label="Miembros" value={players.length} accent={C.blue2} />
      </div>

      {/* Top 3 */}
      <Card style={{ marginBottom: 20 }}>
        <h3 style={{ margin: "0 0 16px", fontSize: 16, fontWeight: 800, color: C.navy }}>Top 3 Jugadores</h3>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {sorted.slice(0, 3).map((p, i) => (
            <div
              key={p.id}
              style={{
                flex: 1,
                minWidth: 120,
                background: i === 0 ? `linear-gradient(135deg, ${C.gold}22, ${C.gold}44)` : C.light,
                border: `1px solid ${i === 0 ? C.gold : C.border}`,
                borderRadius: 12,
                padding: "14px 16px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 22, marginBottom: 4 }}>{["🥇", "🥈", "🥉"][i]}</div>
              <p style={{ margin: 0, fontWeight: 800, color: C.navy, fontSize: 14 }}>{p.name}</p>
              <p style={{ margin: 0, fontWeight: 700, color: C.gold, fontSize: 18 }}>{p.medals.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Last Wars */}
      <Card>
        <h3 style={{ margin: "0 0 16px", fontSize: 16, fontWeight: 800, color: C.navy }}>Últimas Guerras</h3>
        <Table
          heads={["Rival", "Fecha", "Resultado", "Medallas"]}
          rows={lastWars.map(w => (
            <TableRow
              key={w.id}
              cells={[
                <span style={{ fontWeight: 700, color: C.navy }}>{w.opponent}</span>,
                new Date(w.date).toLocaleDateString("es-AR"),
                <ResultBadge result={w.result} />,
                <span style={{ fontWeight: 800, color: w.medals > 0 ? "#2e7d32" : "#c62828" }}>
                  {w.medals > 0 ? "+" : ""}{w.medals}
                </span>,
              ]}
            />
          ))}
        />
      </Card>
    </div>
  );
};
