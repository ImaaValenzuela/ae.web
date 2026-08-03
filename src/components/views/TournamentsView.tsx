import React, { useState } from 'react';
import { MONTHLY_RANKING, type MonthlyPlayer } from '../../constants/monthlyRankingData';
import { C } from '../../constants/theme';
import { Card } from '../ui/Card';
import { SectionHead } from '../ui/SectionHead';

interface Match {
  id: string;
  round: 'r16' | 'qf' | 'sf' | 'f';
  player1: MonthlyPlayer | null;
  player2: MonthlyPlayer | null;
  winner: MonthlyPlayer | null;
  score1?: number;
  score2?: number;
}

export const TournamentsView: React.FC = () => {
  const top16 = MONTHLY_RANKING.slice(0, 16);
  const [activeTab, setActiveTab] = useState<'r16' | 'qf' | 'sf' | 'f'>('r16');

  // Standard initial seed setup for 16-player bracket:
  // M1: 1 vs 16 | M2: 8 vs 9 | M3: 4 vs 13 | M4: 5 vs 12
  // M5: 2 vs 15 | M6: 7 vs 10 | M7: 3 vs 14 | M8: 6 vs 11
  const initialMatches: Match[] = [
    // Octavos
    { id: 'm1', round: 'r16', player1: top16[0], player2: top16[15], winner: null },
    { id: 'm2', round: 'r16', player1: top16[7], player2: top16[8], winner: null },
    { id: 'm3', round: 'r16', player1: top16[3], player2: top16[12], winner: null },
    { id: 'm4', round: 'r16', player1: top16[4], player2: top16[11], winner: null },
    { id: 'm5', round: 'r16', player1: top16[1], player2: top16[14], winner: null },
    { id: 'm6', round: 'r16', player1: top16[6], player2: top16[9], winner: null },
    { id: 'm7', round: 'r16', player1: top16[2], player2: top16[13], winner: null },
    { id: 'm8', round: 'r16', player1: top16[5], player2: top16[10], winner: null },

    // Cuartos
    { id: 'qf1', round: 'qf', player1: null, player2: null, winner: null },
    { id: 'qf2', round: 'qf', player1: null, player2: null, winner: null },
    { id: 'qf3', round: 'qf', player1: null, player2: null, winner: null },
    { id: 'qf4', round: 'qf', player1: null, player2: null, winner: null },

    // Semis
    { id: 'sf1', round: 'sf', player1: null, player2: null, winner: null },
    { id: 'sf2', round: 'sf', player1: null, player2: null, winner: null },

    // Final
    { id: 'f1', round: 'f', player1: null, player2: null, winner: null },
  ];

  const [matches, setMatches] = useState<Match[]>(initialMatches);

  const selectWinner = (matchId: string, player: MonthlyPlayer) => {
    setMatches(prev => {
      const next = [...prev];
      const matchIndex = next.findIndex(m => m.id === matchId);
      if (matchIndex === -1) return prev;

      next[matchIndex] = { ...next[matchIndex], winner: player };

      // Propagate winner to next rounds
      // R16 -> QF
      if (matchId === 'm1') next.find(m => m.id === 'qf1')!.player1 = player;
      if (matchId === 'm2') next.find(m => m.id === 'qf1')!.player2 = player;
      if (matchId === 'm3') next.find(m => m.id === 'qf2')!.player1 = player;
      if (matchId === 'm4') next.find(m => m.id === 'qf2')!.player2 = player;
      if (matchId === 'm5') next.find(m => m.id === 'qf3')!.player1 = player;
      if (matchId === 'm6') next.find(m => m.id === 'qf3')!.player2 = player;
      if (matchId === 'm7') next.find(m => m.id === 'qf4')!.player1 = player;
      if (matchId === 'm8') next.find(m => m.id === 'qf4')!.player2 = player;

      // QF -> SF
      if (matchId === 'qf1') next.find(m => m.id === 'sf1')!.player1 = player;
      if (matchId === 'qf2') next.find(m => m.id === 'sf1')!.player2 = player;
      if (matchId === 'qf3') next.find(m => m.id === 'sf2')!.player1 = player;
      if (matchId === 'qf4') next.find(m => m.id === 'sf2')!.player2 = player;

      // SF -> F
      if (matchId === 'sf1') next.find(m => m.id === 'f1')!.player1 = player;
      if (matchId === 'sf2') next.find(m => m.id === 'f1')!.player2 = player;

      return [...next];
    });
  };

  const finalWinner = matches.find(m => m.id === 'f1')?.winner;

  const renderMatchCard = (m: Match) => {
    return (
      <Card key={m.id} style={{ padding: 12, marginBottom: 12, borderLeft: `4px solid ${C.blue}` }}>
        {/* Player 1 */}
        <div
          onClick={() => m.player1 && selectWinner(m.id, m.player1)}
          style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "8px 10px", borderRadius: 6, cursor: m.player1 ? "pointer" : "default",
            background: m.winner?.name === m.player1?.name ? `${C.gold}22` : C.light,
            border: m.winner?.name === m.player1?.name ? `1px solid ${C.gold}` : "1px solid transparent",
            marginBottom: 6
          }}
        >
          <span style={{ fontSize: 13, fontWeight: m.winner?.name === m.player1?.name ? 900 : 700, color: C.navy }}>
            {m.player1 ? `#${m.player1.rank} ${m.player1.name}` : "Por definir"}
          </span>
          {m.winner?.name === m.player1?.name && <span style={{ fontSize: 12 }}>👑</span>}
        </div>

        {/* Player 2 */}
        <div
          onClick={() => m.player2 && selectWinner(m.id, m.player2)}
          style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "8px 10px", borderRadius: 6, cursor: m.player2 ? "pointer" : "default",
            background: m.winner?.name === m.player2?.name ? `${C.gold}22` : C.light,
            border: m.winner?.name === m.player2?.name ? `1px solid ${C.gold}` : "1px solid transparent",
          }}
        >
          <span style={{ fontSize: 13, fontWeight: m.winner?.name === m.player2?.name ? 900 : 700, color: C.navy }}>
            {m.player2 ? `#${m.player2.rank} ${m.player2.name}` : "Por definir"}
          </span>
          {m.winner?.name === m.player2?.name && <span style={{ fontSize: 12 }}>👑</span>}
        </div>
      </Card>
    );
  };

  return (
    <div>
      {/* Hero Header */}
      <Card style={{
        background: `linear-gradient(135deg, ${C.navyDark}, ${C.navy})`,
        color: C.white,
        padding: "32px 20px",
        marginBottom: 24,
        border: `1px solid ${C.gold}44`,
        boxShadow: `0 8px 24px ${C.navy}66`,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
          <span style={{
            background: `linear-gradient(135deg, ${C.purple || '#9b51e0'}, #6f42c1)`,
            color: C.white, fontWeight: 900, fontSize: 12, padding: "4px 10px", borderRadius: 20,
            textTransform: "uppercase", letterSpacing: 1
          }}>
            Torneo Oficial de Clanes
          </span>
          <span style={{ color: C.gold, fontSize: 13, fontWeight: 700 }}>Pass Mini 🎫</span>
        </div>

        <h1 style={{ margin: "0 0 8px", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 900, color: C.white }}>
          #1 Bracket Guerra por Pass Mini 🏆
        </h1>

        <p style={{ margin: 0, fontSize: 14, color: C.silver, maxWidth: 780, lineHeight: 1.5 }}>
          Torneo de eliminatoria directa entre los <strong>mejores 16 participantes</strong> del ranking mensual. Toca en cada enfrentamiento para elegir o simular a los ganadores de cada ronda.
        </p>
      </Card>

      {/* Final Winner Card */}
      {finalWinner && (
        <Card style={{
          background: `linear-gradient(135deg, #fff9e6, #fff0c2)`,
          border: `2px solid ${C.gold}`,
          padding: 24, marginBottom: 28, textAlign: "center",
          boxShadow: `0 10px 24px ${C.gold}44`
        }}>
          <span style={{ fontSize: 32 }}>🏆</span>
          <h2 style={{ margin: "8px 0 4px", fontSize: 24, fontWeight: 900, color: C.navy }}>
            ¡{finalWinner.name} es el Gran Campeón del Bracket!
          </h2>
          <p style={{ margin: 0, fontSize: 14, color: C.navy, fontWeight: 700 }}>
            Ganador absoluto del <strong>Pass Mini / Pass Royale 🎫</strong>
          </p>
        </Card>
      )}

      {/* Round Switcher Tabs (Mobile-First) */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20, overflowX: "auto", paddingBottom: 4 }}>
        <button
          onClick={() => setActiveTab('r16')}
          style={{
            padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 800, cursor: "pointer",
            background: activeTab === 'r16' ? C.navy : C.light,
            color: activeTab === 'r16' ? C.gold : C.navy,
            border: `1px solid ${activeTab === 'r16' ? C.navy : C.border}`
          }}
        >
          Octavos (16 Jugadores)
        </button>
        <button
          onClick={() => setActiveTab('qf')}
          style={{
            padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 800, cursor: "pointer",
            background: activeTab === 'qf' ? C.navy : C.light,
            color: activeTab === 'qf' ? C.gold : C.navy,
            border: `1px solid ${activeTab === 'qf' ? C.navy : C.border}`
          }}
        >
          Cuartos de Final
        </button>
        <button
          onClick={() => setActiveTab('sf')}
          style={{
            padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 800, cursor: "pointer",
            background: activeTab === 'sf' ? C.navy : C.light,
            color: activeTab === 'sf' ? C.gold : C.navy,
            border: `1px solid ${activeTab === 'sf' ? C.navy : C.border}`
          }}
        >
          Semifinales
        </button>
        <button
          onClick={() => setActiveTab('f')}
          style={{
            padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 800, cursor: "pointer",
            background: activeTab === 'f' ? C.navy : C.light,
            color: activeTab === 'f' ? C.gold : C.navy,
            border: `1px solid ${activeTab === 'f' ? C.navy : C.border}`
          }}
        >
          Gran Final 🥇
        </button>
      </div>

      {/* Match List for Active Tab */}
      <SectionHead
        title={
          activeTab === 'r16' ? "Octavos de Final (Llave de 16)"
          : activeTab === 'qf' ? "Cuartos de Final"
          : activeTab === 'sf' ? "Semifinales"
          : "Gran Final por el Pass Mini"
        }
        sub="Haz clic sobre el nombre del ganador para avanzar de ronda"
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14, marginBottom: 32 }}>
        {matches.filter(m => m.round === activeTab).map(renderMatchCard)}
      </div>

      {/* Bracket Full Desktop Visual Scroll */}
      <Card style={{ padding: 20, overflowX: "auto" }}>
        <h4 style={{ margin: "0 0 16px", fontSize: 16, fontWeight: 800, color: C.navy }}>
          Vista de Árbol Completo del Torneo
        </h4>

        <div style={{ display: "flex", gap: 24, minWidth: 800 }}>
          {/* R16 column */}
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 800, fontSize: 12, color: C.gray, textTransform: "uppercase", marginBottom: 12 }}>Octavos</p>
            {matches.filter(m => m.round === 'r16').map(renderMatchCard)}
          </div>

          {/* QF column */}
          <div style={{ flex: 1, paddingTop: 30 }}>
            <p style={{ fontWeight: 800, fontSize: 12, color: C.gray, textTransform: "uppercase", marginBottom: 12 }}>Cuartos</p>
            {matches.filter(m => m.round === 'qf').map(renderMatchCard)}
          </div>

          {/* SF column */}
          <div style={{ flex: 1, paddingTop: 60 }}>
            <p style={{ fontWeight: 800, fontSize: 12, color: C.gray, textTransform: "uppercase", marginBottom: 12 }}>Semis</p>
            {matches.filter(m => m.round === 'sf').map(renderMatchCard)}
          </div>

          {/* F column */}
          <div style={{ flex: 1, paddingTop: 90 }}>
            <p style={{ fontWeight: 800, fontSize: 12, color: C.gold, textTransform: "uppercase", marginBottom: 12 }}>Final 🎫</p>
            {matches.filter(m => m.round === 'f').map(renderMatchCard)}
          </div>
        </div>
      </Card>
    </div>
  );
};
