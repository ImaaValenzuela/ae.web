import React, { useState } from 'react';
import { MONTHLY_RANKING } from '../../constants/monthlyRankingData';
import { C } from '../../constants/theme';
import { SectionHead } from '../ui/SectionHead';
import { Card } from '../ui/Card';
import { StatTile } from '../ui/StatTile';
import { Input } from '../ui/Input';

type WeekFilter = 'total' | 's1' | 's2' | 's3' | 's4';

export const LeaderboardView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filterWeek, setFilterWeek] = useState<WeekFilter>('total');

  // Filter players based on search query
  const filteredPlayers = MONTHLY_RANKING.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // Dynamic sorting if filtered by specific week
  const sortedPlayers = [...filteredPlayers].sort((a, b) => {
    if (filterWeek === 's1') return b.s1 - a.s1;
    if (filterWeek === 's2') return b.s2 - a.s2;
    if (filterWeek === 's3') return b.s3 - a.s3;
    if (filterWeek === 's4') return b.s4 - a.s4;
    return a.rank - b.rank; // Default is monthly total rank
  });

  const winner = MONTHLY_RANKING[0];
  const top8Cutoff = MONTHLY_RANKING[7];
  const grandTotal = MONTHLY_RANKING.reduce((acc, p) => acc + p.total, 0);

  return (
    <div>
      {/* Hero Header */}
      <Card style={{
        background: `linear-gradient(135deg, ${C.navyDark}, ${C.navy})`,
        color: C.white,
        padding: "32px 24px",
        marginBottom: 28,
        border: `1px solid ${C.gold}44`,
        boxShadow: `0 8px 24px ${C.navy}66`,
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span style={{
              background: `linear-gradient(135deg, ${C.gold}, ${C.gold2})`,
              color: C.navy, fontWeight: 900, fontSize: 12, padding: "4px 10px", borderRadius: 20,
              textTransform: "uppercase", letterSpacing: 1
            }}>
              Resultados Finales del Mes
            </span>
            <span style={{ color: C.sky, fontSize: 13, fontWeight: 700 }}>Clash Royale War Log</span>
          </div>

          <h1 style={{ margin: "0 0 8px", fontSize: 32, fontWeight: 900, color: C.white, letterSpacing: -0.5 }}>
            🏆 Ranking Mensual por el Pase de Batalla 🎫
          </h1>

          <p style={{ margin: 0, fontSize: 15, color: C.silver, maxWidth: 800, lineHeight: 1.5 }}>
            Sumatoria oficial de las 4 guerras del mes. El <strong>1.º puesto</strong> gana un <strong>Pase de Batalla 🎫</strong> y los <strong>mejores 8 clasifican al Torneo de Clanes ⚔️</strong>.
          </p>
        </div>
      </Card>

      {/* Top 3 Podium */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 28 }}>
        {/* #1 Winner */}
        <Card style={{
          background: `linear-gradient(135deg, #fff9e6, #fff3cc)`,
          border: `2px solid ${C.gold}`,
          position: "relative",
          boxShadow: `0 8px 20px ${C.gold}33`,
          padding: 20
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{
              width: 44, height: 44, background: `linear-gradient(135deg, ${C.gold}, ${C.gold2})`,
              borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 900, fontSize: 20, color: C.navy, boxShadow: `0 4px 10px ${C.gold}66`
            }}>
              🥇
            </div>
            <span style={{
              background: `${C.gold}`, color: C.navy, fontWeight: 900, fontSize: 11,
              padding: "4px 10px", borderRadius: 12, display: "flex", alignItems: "center", gap: 4
            }}>
              🎫 Pase de Batalla
            </span>
          </div>
          <h3 style={{ margin: "14px 0 4px", fontSize: 20, fontWeight: 900, color: C.navy }}>
            {winner.name}
          </h3>
          <p style={{ margin: "0 0 10px", fontSize: 24, fontWeight: 900, color: C.gold }}>
            {winner.total.toLocaleString()} <span style={{ fontSize: 13, color: C.gray, fontWeight: 600 }}>Puntos Totales</span>
          </p>

          <div style={{ fontSize: 12, color: C.navy, fontWeight: 700, display: "flex", gap: 8 }}>
            <span>S1: {winner.s1}</span> • <span>S2: {winner.s2}</span> • <span>S3: {winner.s3}</span> • <span>S4: {winner.s4}</span>
          </div>
        </Card>

        {/* #2 Player */}
        <Card style={{ padding: 20, border: `1px solid ${C.border}`, background: C.surface }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{
              width: 40, height: 40, background: "#e0e6ed", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 900, fontSize: 18, color: C.navy
            }}>
              🥈
            </div>
            <span style={{ background: `${C.blue}15`, color: C.blue2, fontWeight: 800, fontSize: 11, padding: "3px 8px", borderRadius: 12 }}>
              🏆 Clasificado
            </span>
          </div>
          <h3 style={{ margin: "12px 0 4px", fontSize: 18, fontWeight: 800, color: C.navy }}>
            {MONTHLY_RANKING[1].name}
          </h3>
          <p style={{ margin: "0 0 8px", fontSize: 22, fontWeight: 900, color: C.navy }}>
            {MONTHLY_RANKING[1].total.toLocaleString()} <span style={{ fontSize: 12, color: C.gray, fontWeight: 500 }}>Pts</span>
          </p>
          <div style={{ fontSize: 12, color: C.gray }}>
            S1: {MONTHLY_RANKING[1].s1} | S2: {MONTHLY_RANKING[1].s2} | S3: {MONTHLY_RANKING[1].s3} | S4: {MONTHLY_RANKING[1].s4}
          </div>
        </Card>

        {/* #3 Player */}
        <Card style={{ padding: 20, border: `1px solid ${C.border}`, background: C.surface }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{
              width: 40, height: 40, background: "#f5e1d3", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 900, fontSize: 18, color: "#a85d26"
            }}>
              🥉
            </div>
            <span style={{ background: `${C.blue}15`, color: C.blue2, fontWeight: 800, fontSize: 11, padding: "3px 8px", borderRadius: 12 }}>
              🏆 Clasificado
            </span>
          </div>
          <h3 style={{ margin: "12px 0 4px", fontSize: 18, fontWeight: 800, color: C.navy }}>
            {MONTHLY_RANKING[2].name}
          </h3>
          <p style={{ margin: "0 0 8px", fontSize: 22, fontWeight: 900, color: C.navy }}>
            {MONTHLY_RANKING[2].total.toLocaleString()} <span style={{ fontSize: 12, color: C.gray, fontWeight: 500 }}>Pts</span>
          </p>
          <div style={{ fontSize: 12, color: C.gray }}>
            S1: {MONTHLY_RANKING[2].s1} | S2: {MONTHLY_RANKING[2].s2} | S3: {MONTHLY_RANKING[2].s3} | S4: {MONTHLY_RANKING[2].s4}
          </div>
        </Card>
      </div>

      {/* Stat Tiles */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14, marginBottom: 28 }}>
        <StatTile label="Líder del Mes 🥇" value={winner.name} accent={C.gold} />
        <StatTile label="Corte Top 8 (#8) 🏆" value={`${top8Cutoff.total.toLocaleString()} Pts`} />
        <StatTile label="Sumatoria Clan" value={`${(grandTotal / 1000).toFixed(1)}k Pts`} />
        <StatTile label="Participantes" value={`${MONTHLY_RANKING.length} Jugadores`} />
      </div>

      {/* Controls & Filter */}
      <SectionHead title="Tabla de Posiciones Mensual" sub="Puntos acumulados de las 4 semanas de guerra de clanes" />

      <Card style={{ marginBottom: 20, padding: 16 }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 14 }}>
          {/* Search bar */}
          <div style={{ maxWidth: 300, width: "100%" }}>
            <Input
              placeholder="Buscar jugador por nombre..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ margin: 0 }}
            />
          </div>

          {/* Week Filters */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <button
              onClick={() => setFilterWeek('total')}
              style={{
                padding: "8px 14px", borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: "pointer",
                background: filterWeek === 'total' ? C.navy : "transparent",
                color: filterWeek === 'total' ? C.gold : C.navy,
                border: `1px solid ${filterWeek === 'total' ? C.navy : C.border}`
              }}
            >
              General (4 Semanas)
            </button>

            <button
              onClick={() => setFilterWeek('s1')}
              style={{
                padding: "8px 12px", borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: "pointer",
                background: filterWeek === 's1' ? C.blue : "transparent",
                color: filterWeek === 's1' ? C.white : C.navy,
                border: `1px solid ${filterWeek === 's1' ? C.blue : C.border}`
              }}
            >
              Semana 1
            </button>

            <button
              onClick={() => setFilterWeek('s2')}
              style={{
                padding: "8px 12px", borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: "pointer",
                background: filterWeek === 's2' ? C.blue : "transparent",
                color: filterWeek === 's2' ? C.white : C.navy,
                border: `1px solid ${filterWeek === 's2' ? C.blue : C.border}`
              }}
            >
              Semana 2
            </button>

            <button
              onClick={() => setFilterWeek('s3')}
              style={{
                padding: "8px 12px", borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: "pointer",
                background: filterWeek === 's3' ? C.blue : "transparent",
                color: filterWeek === 's3' ? C.white : C.navy,
                border: `1px solid ${filterWeek === 's3' ? C.blue : C.border}`
              }}
            >
              Semana 3
            </button>

            <button
              onClick={() => setFilterWeek('s4')}
              style={{
                padding: "8px 12px", borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: "pointer",
                background: filterWeek === 's4' ? C.blue : "transparent",
                color: filterWeek === 's4' ? C.white : C.navy,
                border: `1px solid ${filterWeek === 's4' ? C.blue : C.border}`
              }}
            >
              Semana 4 (Final)
            </button>
          </div>
        </div>
      </Card>

      {/* Main Ranking Table */}
      <Card style={{ overflow: "hidden", padding: 0 }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: 14 }}>
            <thead>
              <tr style={{ background: C.navy, color: C.white, borderBottom: `2px solid ${C.blue}` }}>
                <th style={{ padding: "14px 16px", width: 60, textAlign: "center" }}>Pos</th>
                <th style={{ padding: "14px 16px" }}>Jugador</th>
                <th style={{ padding: "14px 16px", textAlign: "right" }}>Semana 1</th>
                <th style={{ padding: "14px 16px", textAlign: "right" }}>Semana 2</th>
                <th style={{ padding: "14px 16px", textAlign: "right" }}>Semana 3</th>
                <th style={{ padding: "14px 16px", textAlign: "right" }}>Semana 4</th>
                <th style={{ padding: "14px 16px", textAlign: "right" }}>Total Puntos</th>
                <th style={{ padding: "14px 16px", textAlign: "center" }}>Premio / Estado</th>
              </tr>
            </thead>
            <tbody>
              {sortedPlayers.map((p) => {
                const isWinner = p.winsPass;
                const isQual = p.qualifies;

                return (
                  <tr
                    key={p.name}
                    style={{
                      borderBottom: `1px solid ${C.border}`,
                      background: isWinner
                        ? "linear-gradient(90deg, #fff9e6, #ffffff)"
                        : isQual
                        ? "#f4f8ff"
                        : "transparent"
                    }}
                  >
                    {/* Position */}
                    <td style={{ padding: "12px 16px", textAlign: "center", fontWeight: 800, color: isWinner ? C.gold : C.navy }}>
                      {p.rank === 1 ? "🥇" : p.rank === 2 ? "🥈" : p.rank === 3 ? "🥉" : `#${p.rank}`}
                    </td>

                    {/* Name */}
                    <td style={{ padding: "12px 16px", fontWeight: isWinner || isQual ? 800 : 600, color: C.navy }}>
                      {p.name}
                    </td>

                    {/* Week scores */}
                    <td style={{ padding: "12px 16px", textAlign: "right", color: p.s1 > 0 ? C.navy : C.gray }}>
                      {p.s1 ? p.s1.toLocaleString() : "-"}
                    </td>
                    <td style={{ padding: "12px 16px", textAlign: "right", color: p.s2 > 0 ? C.navy : C.gray }}>
                      {p.s2 ? p.s2.toLocaleString() : "-"}
                    </td>
                    <td style={{ padding: "12px 16px", textAlign: "right", color: p.s3 > 0 ? C.navy : C.gray }}>
                      {p.s3 ? p.s3.toLocaleString() : "-"}
                    </td>
                    <td style={{ padding: "12px 16px", textAlign: "right", color: p.s4 > 0 ? C.navy : C.gray }}>
                      {p.s4 ? p.s4.toLocaleString() : "-"}
                    </td>

                    {/* Total points */}
                    <td style={{ padding: "12px 16px", textAlign: "right", fontWeight: 900, fontSize: 15, color: isWinner ? C.gold : C.navy }}>
                      {p.total.toLocaleString()}
                    </td>

                    {/* Status Badge */}
                    <td style={{ padding: "12px 16px", textAlign: "center" }}>
                      {isWinner ? (
                        <span style={{
                          background: `linear-gradient(135deg, ${C.gold}, ${C.gold2})`,
                          color: C.navy, fontWeight: 900, fontSize: 11, padding: "4px 10px", borderRadius: 12,
                          boxShadow: `0 2px 6px ${C.gold}44`, whiteSpace: "nowrap"
                        }}>
                          🎫 Ganador Pase
                        </span>
                      ) : isQual ? (
                        <span style={{
                          background: `${C.blue}15`, color: C.blue2, border: `1px solid ${C.blue}44`,
                          fontWeight: 800, fontSize: 11, padding: "4px 10px", borderRadius: 12,
                          whiteSpace: "nowrap"
                        }}>
                          🏆 Clasificado Torneo
                        </span>
                      ) : (
                        <span style={{ color: C.gray, fontSize: 12 }}>-</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
