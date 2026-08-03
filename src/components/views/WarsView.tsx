import React, { useState } from 'react';
import type { War, MatchResult } from '../../types';
import { C } from '../../constants/theme';
import { SectionHead } from '../ui/SectionHead';
import { Card } from '../ui/Card';
import { Table, TableRow } from '../ui/Table';
import { ResultBadge } from '../ui/ResultBadge';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';

interface WarsViewProps {
  wars: War[];
  setWars: React.Dispatch<React.SetStateAction<War[]>>;
  authenticated: boolean;
}

export const WarsView: React.FC<WarsViewProps> = ({ wars, setWars, authenticated }) => {
  const [form, setForm] = useState({
    opponent: '',
    result: 'WIN' as MatchResult,
    medals: '',
    playerCount: ''
  });

  const addWar = () => {
    if (!form.opponent || !form.playerCount) return;
    const newWar: War = {
      id: Date.now(),
      opponent: form.opponent,
      result: form.result,
      medals: parseInt(form.medals) || 0,
      playerCount: parseInt(form.playerCount) || 0,
      date: new Date().toISOString().split('T')[0]
    };
    setWars([newWar, ...wars]);
    setForm({ opponent: '', result: 'WIN', medals: '', playerCount: '' });
  };

  const deleteWar = (id: number) => {
    setWars(wars.filter(w => w.id !== id));
  };

  const winsCount = wars.filter(w => w.result === 'WIN').length;
  const lossCount = wars.length - winsCount;

  return (
    <div>
      <SectionHead title="Guerras de Clan" sub={`${winsCount}V − ${lossCount}D`} />

      {authenticated && (
        <Card style={{ marginBottom: 20 }}>
          <h3 style={{ margin: "0 0 14px", fontSize: 15, fontWeight: 800, color: C.navy }}>Registrar Guerra</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <Input
              placeholder="Nombre del rival"
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
              placeholder="Medallas (ej: 150)"
              type="number"
              value={form.medals}
              onChange={e => setForm({ ...form, medals: e.target.value })}
            />
            <Input
              placeholder="Jugadores que participaron"
              type="number"
              value={form.playerCount}
              onChange={e => setForm({ ...form, playerCount: e.target.value })}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <Button onClick={addWar} color={C.gold} full>+ Registrar Guerra</Button>
          </div>
        </Card>
      )}

      <Card>
        <Table
          heads={["Rival", "Fecha", "Resultado", "Medallas", "Jugadores", ...(authenticated ? [""] : [])]}
          rows={wars.map(w => (
            <TableRow
              key={w.id}
              cells={[
                <span style={{ fontWeight: 700, color: C.navy }}>{w.opponent}</span>,
                new Date(w.date).toLocaleDateString("es-AR"),
                <ResultBadge result={w.result} />,
                <span style={{ fontWeight: 800, color: w.medals > 0 ? "#2e7d32" : "#c62828" }}>
                  {w.medals > 0 ? "+" : ""}{w.medals}
                </span>,
                w.playerCount,
              ]}
              onDelete={authenticated ? () => deleteWar(w.id) : null}
            />
          ))}
        />
      </Card>
    </div>
  );
};
