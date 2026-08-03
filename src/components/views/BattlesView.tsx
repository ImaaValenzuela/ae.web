import React, { useState } from 'react';
import type { Battle, Player, MatchResult } from '../../types';
import { C } from '../../constants/theme';
import { SectionHead } from '../ui/SectionHead';
import { Card } from '../ui/Card';
import { Table, TableRow } from '../ui/Table';
import { ResultBadge } from '../ui/ResultBadge';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';

interface BattlesViewProps {
  battles: Battle[];
  setBattles: React.Dispatch<React.SetStateAction<Battle[]>>;
  players: Player[];
  authenticated: boolean;
}

export const BattlesView: React.FC<BattlesViewProps> = ({ battles, setBattles, players, authenticated }) => {
  const [form, setForm] = useState({
    player: '',
    opponent: '',
    result: 'WIN' as MatchResult,
    medals: '',
    notes: ''
  });

  const addBattle = () => {
    if (!form.player || !form.opponent) return;
    const newBattle: Battle = {
      id: Date.now(),
      player: form.player,
      opponent: form.opponent,
      result: form.result,
      medals: parseInt(form.medals) || 0,
      notes: form.notes,
      date: new Date().toISOString().split('T')[0]
    };
    setBattles([newBattle, ...battles]);
    setForm({ player: '', opponent: '', result: 'WIN', medals: '', notes: '' });
  };

  const deleteBattle = (id: number) => {
    setBattles(battles.filter(b => b.id !== id));
  };

  return (
    <div>
      <SectionHead title="Historial de Batallas" sub="Registro individual de cada batalla" />

      {authenticated && (
        <Card style={{ marginBottom: 20 }}>
          <h3 style={{ margin: "0 0 14px", fontSize: 15, fontWeight: 800, color: C.navy }}>Nueva Batalla</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <Select
              value={form.player}
              onChange={e => setForm({ ...form, player: e.target.value })}
            >
              <option value="">— Jugador —</option>
              {players.map(p => (
                <option key={p.id} value={p.name}>{p.name}</option>
              ))}
            </Select>
            <Input
              placeholder="Oponente"
              value={form.opponent}
              onChange={e => setForm({ ...form, opponent: e.target.value })}
            />
            <Select
              value={form.result}
              onChange={e => setForm({ ...form, result: e.target.value as MatchResult })}
            >
              <option value="WIN">Victoria</option>
              <option value="LOSS">Derrota</option>
            </Select>
            <Input
              placeholder="Medallas"
              type="number"
              value={form.medals}
              onChange={e => setForm({ ...form, medals: e.target.value })}
            />
          </div>
          <div style={{ marginTop: 10, display: "grid", gap: 10 }}>
            <Textarea
              placeholder="Notas (opcional)"
              value={form.notes}
              onChange={e => setForm({ ...form, notes: e.target.value })}
              rows={2}
            />
            <Button onClick={addBattle} color={C.blue} full>+ Registrar Batalla</Button>
          </div>
        </Card>
      )}

      <Card>
        <Table
          heads={["Fecha", "Jugador", "Oponente", "Resultado", "Medallas", "Notas", ...(authenticated ? [""] : [])]}
          rows={battles.map(b => (
            <TableRow
              key={b.id}
              cells={[
                new Date(b.date).toLocaleDateString("es-AR"),
                <span style={{ fontWeight: 700, color: C.navy }}>{b.player}</span>,
                b.opponent,
                <ResultBadge result={b.result} />,
                <span style={{ fontWeight: 800, color: b.medals > 0 ? "#2e7d32" : "#c62828" }}>
                  {b.medals > 0 ? "+" : ""}{b.medals}
                </span>,
                <span style={{ fontSize: 12, color: C.gray }}>{b.notes || "—"}</span>,
              ]}
              onDelete={authenticated ? () => deleteBattle(b.id) : null}
            />
          ))}
        />
      </Card>
    </div>
  );
};
