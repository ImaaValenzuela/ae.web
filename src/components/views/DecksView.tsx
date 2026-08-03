import React, { useState } from 'react';
import type { Deck, DeckMeta } from '../../types';
import { C } from '../../constants/theme';
import { SectionHead } from '../ui/SectionHead';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';

interface DecksViewProps {
  decks: Deck[];
  setDecks: React.Dispatch<React.SetStateAction<Deck[]>>;
  authenticated: boolean;
}

export const DecksView: React.FC<DecksViewProps> = ({ decks, setDecks, authenticated }) => {
  const [form, setForm] = useState({
    name: '',
    cards: '',
    meta: 'Cycle' as DeckMeta,
    winRate: ''
  });

  const addDeck = () => {
    if (!form.name || !form.cards) return;
    const newDeck: Deck = {
      id: Date.now(),
      name: form.name,
      cards: form.cards.split(',').map(c => c.trim()).filter(Boolean),
      meta: form.meta,
      winRate: parseInt(form.winRate) || 0
    };
    setDecks([...decks, newDeck]);
    setForm({ name: '', cards: '', meta: 'Cycle', winRate: '' });
  };

  const deleteDeck = (id: number) => {
    setDecks(decks.filter(d => d.id !== id));
  };

  const metaColors: Record<string, string> = {
    Cycle: C.blue2,
    Beatdown: "#e53935",
    Control: "#7b1fa2",
    Bait: "#2e7d32",
  };

  return (
    <div>
      <SectionHead title="Mazos Recomendados" sub="Mazos oficiales del clan para guerras" />

      {authenticated && (
        <Card style={{ marginBottom: 20 }}>
          <h3 style={{ margin: "0 0 14px", fontSize: 15, fontWeight: 800, color: C.navy }}>Agregar Mazo</h3>
          <div style={{ display: "grid", gap: 10 }}>
            <Input
              placeholder="Nombre del mazo"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
            <Textarea
              placeholder="Cartas separadas por comas (ej: Hog Rider, Ice Spirit, ...)"
              value={form.cards}
              onChange={e => setForm({ ...form, cards: e.target.value })}
              rows={2}
            />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <Select
                value={form.meta}
                onChange={e => setForm({ ...form, meta: e.target.value as DeckMeta })}
              >
                <option value="Cycle">Cycle</option>
                <option value="Beatdown">Beatdown</option>
                <option value="Control">Control</option>
                <option value="Bait">Bait</option>
              </Select>
              <Input
                placeholder="Win rate % (ej: 62)"
                type="number"
                value={form.winRate}
                onChange={e => setForm({ ...form, winRate: e.target.value })}
              />
            </div>
            <Button onClick={addDeck} color={C.blue} full>+ Agregar Mazo</Button>
          </div>
        </Card>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
        {decks.map(deck => (
          <Card key={deck.id} style={{ position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <div>
                <h4 style={{ margin: 0, fontSize: 17, fontWeight: 900, color: C.navy }}>{deck.name}</h4>
                <span
                  style={{
                    background: metaColors[deck.meta] || C.blue,
                    color: C.white,
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "2px 10px",
                    borderRadius: 20,
                    display: "inline-block",
                    marginTop: 4,
                  }}
                >
                  {deck.meta}
                </span>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ margin: 0, fontSize: 22, fontWeight: 900, color: C.gold }}>{deck.winRate}%</p>
                <p style={{ margin: 0, fontSize: 11, color: C.gray }}>Win rate</p>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: authenticated ? 12 : 0 }}>
              {deck.cards.map((c, i) => (
                <span
                  key={i}
                  style={{
                    background: C.light,
                    color: C.navy,
                    fontSize: 12,
                    fontWeight: 600,
                    padding: "3px 10px",
                    borderRadius: 8,
                    border: `1px solid ${C.border}`,
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
            {authenticated && (
              <button
                onClick={() => deleteDeck(deck.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#ef5350",
                  position: "absolute",
                  top: 16,
                  right: 16,
                }}
                title="Eliminar Mazo"
              >
                <Icon name="trash" size={15} />
              </button>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};
