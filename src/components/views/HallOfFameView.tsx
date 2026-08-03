import React from 'react';
import { MONTHLY_RANKING } from '../../constants/monthlyRankingData';
import { C } from '../../constants/theme';
import { Card } from '../ui/Card';
import { SectionHead } from '../ui/SectionHead';

export const HallOfFameView: React.FC = () => {
  const rankingWinner = MONTHLY_RANKING[0];
  const top16 = MONTHLY_RANKING.slice(0, 16);

  return (
    <div>
      {/* Hero Header */}
      <Card style={{
        background: `linear-gradient(135deg, ${C.navyDark}, #0a1128)`,
        color: C.white,
        padding: "32px 20px",
        marginBottom: 28,
        border: `1px solid ${C.gold}55`,
        boxShadow: `0 12px 30px rgba(0,0,0,0.4)`,
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <span style={{
            background: `linear-gradient(135deg, ${C.gold}, ${C.gold2})`,
            color: C.navy, fontWeight: 900, fontSize: 12, padding: "5px 14px", borderRadius: 20,
            textTransform: "uppercase", letterSpacing: 1.5, display: "inline-block", marginBottom: 12
          }}>
            Templo de Leyendas
          </span>

          <h1 style={{ margin: "0 0 10px", fontSize: "clamp(24px, 5vw, 36px)", fontWeight: 900, color: C.white }}>
            👑 Salón de la Fama — Argentina EVO
          </h1>

          <p style={{ margin: "0 auto", fontSize: 15, color: C.silver, maxWidth: 680, lineHeight: 1.6 }}>
            Homenaje permanente a los máximos guerreros del clan. Aquí se inmortalizan los campeones del <strong>Ranking Mensual</strong> y los vencedores del <strong>Torneo por Brackets</strong>.
          </p>
        </div>
      </Card>

      {/* 2 Main Trophy Showcase Cards */}
      <SectionHead title="Los Dos Grandes Trofeos Supremos" sub="Premios exclusivos entregados en cada temporada de guerra" />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 24, marginBottom: 32 }}>

        {/* Trophy 1: Monthly Ranking */}
        <Card style={{
          background: `linear-gradient(180deg, #16203a 0%, #0d1527 100%)`,
          border: `2px solid ${C.gold}`,
          boxShadow: `0 12px 28px ${C.gold}22`,
          padding: 24, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center"
        }}>
          <div style={{ position: "relative", marginBottom: 16 }}>
            <img
              src="/trophy_monthly.png"
              alt="Trofeo Rey de la Guerra Mensual"
              style={{
                width: 180, height: 180, objectFit: "contain",
                filter: "drop-shadow(0 8px 16px rgba(255, 215, 0, 0.4))"
              }}
            />
            <span style={{
              position: "absolute", bottom: -8, left: "50%", transform: "translateX(-50%)",
              background: C.gold, color: C.navy, fontWeight: 900, fontSize: 11,
              padding: "4px 12px", borderRadius: 12, textTransform: "uppercase", whiteSpace: "nowrap"
            }}>
              🥇 Campeón Mensual
            </span>
          </div>

          <h3 style={{ margin: "16px 0 6px", fontSize: 22, fontWeight: 900, color: C.white, textAlign: "center" }}>
            Copa del Rey de la Guerra 👑
          </h3>

          <p style={{ margin: "0 0 16px", fontSize: 13, color: C.silver, textAlign: "center", lineHeight: 1.5 }}>
            Otorgado al participante con más puntos acumulados en las 4 semanas de guerra de clanes del mes.
          </p>

          <div style={{
            width: "100%", background: `${C.gold}15`, border: `1px solid ${C.gold}44`,
            borderRadius: 12, padding: "14px", textAlign: "center", marginTop: "auto"
          }}>
            <p style={{ margin: 0, fontSize: 11, color: C.gold, fontWeight: 800, textTransform: "uppercase" }}>
              Ganador Actual — Edición Activa
            </p>
            <p style={{ margin: "4px 0 2px", fontSize: 20, fontWeight: 900, color: C.white }}>
              {rankingWinner.name}
            </p>
            <p style={{ margin: 0, fontSize: 13, color: C.gold, fontWeight: 800 }}>
              {rankingWinner.total.toLocaleString()} Pts • 🎫 Pase de Batalla
            </p>
          </div>
        </Card>

        {/* Trophy 2: Tournament Bracket */}
        <Card style={{
          background: `linear-gradient(180deg, #1e1b38 0%, #110e26 100%)`,
          border: `2px solid ${C.purple}`,
          boxShadow: `0 12px 28px rgba(155, 81, 224, 0.25)`,
          padding: 24, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center"
        }}>
          <div style={{ position: "relative", marginBottom: 16 }}>
            <img
              src="/trophy_tournament.png"
              alt="Trofeo Gran Campeón de Torneo"
              style={{
                width: 180, height: 180, objectFit: "contain",
                filter: "drop-shadow(0 8px 16px rgba(155, 81, 224, 0.4))"
              }}
            />
            <span style={{
              position: "absolute", bottom: -8, left: "50%", transform: "translateX(-50%)",
              background: C.purple, color: C.white, fontWeight: 900, fontSize: 11,
              padding: "4px 12px", borderRadius: 12, textTransform: "uppercase", whiteSpace: "nowrap"
            }}>
              ⚔️ Campeón Torneo
            </span>
          </div>

          <h3 style={{ margin: "16px 0 6px", fontSize: 22, fontWeight: 900, color: C.white, textAlign: "center" }}>
            Copa del Gran Campeón ⚔️
          </h3>

          <p style={{ margin: "0 0 16px", fontSize: 13, color: C.silver, textAlign: "center", lineHeight: 1.5 }}>
            Otorgado al vencedor del cuadro de playoffs directo (#1 Bracket Guerra por Pass Mini) entre los mejores 16.
          </p>

          <div style={{
            width: "100%", background: "rgba(155, 81, 224, 0.15)", border: "1px solid rgba(155, 81, 224, 0.4)",
            borderRadius: 12, padding: "14px", textAlign: "center", marginTop: "auto"
          }}>
            <p style={{ margin: 0, fontSize: 11, color: C.purple, fontWeight: 800, textTransform: "uppercase" }}>
              En Competencia — Bracket Top 16
            </p>
            <p style={{ margin: "4px 0 2px", fontSize: 18, fontWeight: 900, color: C.white }}>
              #1 Bracket Guerra por Pass Mini
            </p>
            <p style={{ margin: 0, fontSize: 13, color: C.sky, fontWeight: 800 }}>
              Premio: Pass Mini / Pass Royale 🎫
            </p>
          </div>
        </Card>

      </div>

      {/* Roster of Legends Top 16 */}
      <SectionHead title="Cuadro de Honor de Clasificados (Top 16)" sub="Jugadores clasificados a la fase final del torneo" />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12, marginBottom: 28 }}>
        {top16.map((p) => (
          <Card key={p.name} style={{ padding: 14, borderLeft: `4px solid ${p.rank === 1 ? C.gold : C.blue}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 14, fontWeight: 900, color: p.rank === 1 ? C.gold : C.navy }}>
                #{p.rank} {p.name}
              </span>
              <span style={{ fontSize: 12, fontWeight: 800, color: C.gray }}>
                {p.total.toLocaleString()} pts
              </span>
            </div>
            <div style={{ fontSize: 11, color: C.silver, marginTop: 4 }}>
              {p.rank === 1 ? "🥇 Ganador Mensual" : "🏆 Clasificado al Bracket"}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
