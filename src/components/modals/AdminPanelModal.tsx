import React, { useState } from 'react';
import type { Player, PlayerRole } from '../../types';
import { C } from '../../constants/theme';
import { Icon } from '../ui/Icon';
import { RoleBadge } from '../ui/RoleBadge';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';

interface AdminPanelModalProps {
  isOpen: boolean;
  onClose: () => void;
  players: Player[];
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
  onResetAllData: () => void;
}

export const AdminPanelModal: React.FC<AdminPanelModalProps> = ({
  isOpen,
  onClose,
  players,
  setPlayers,
  onResetAllData
}) => {
  const [newPlayer, setNewPlayer] = useState({
    name: "",
    medals: "",
    battles: "",
    wins: "",
    deck: "Hog Cycle",
    role: "Miembro" as PlayerRole
  });

  if (!isOpen) return null;

  const addPlayer = () => {
    if (!newPlayer.name) return;
    const playerToAdd: Player = {
      id: Date.now(),
      name: newPlayer.name,
      medals: parseInt(newPlayer.medals) || 0,
      battles: parseInt(newPlayer.battles) || 0,
      wins: parseInt(newPlayer.wins) || 0,
      deck: newPlayer.deck,
      role: newPlayer.role
    };
    setPlayers([...players, playerToAdd]);
    setNewPlayer({ name: "", medals: "", battles: "", wins: "", deck: "Hog Cycle", role: "Miembro" });
  };

  const handleEditPlayer = (player: Player) => {
    const name = window.prompt("Nuevo nombre:", player.name);
    if (name && name.trim()) {
      setPlayers(players.map(x => x.id === player.id ? { ...x, name: name.trim() } : x));
    }
  };

  const handleDeletePlayer = (id: number) => {
    setPlayers(players.filter(x => x.id !== id));
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(10,22,40,.75)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        padding: 16,
      }}
    >
      <div style={{ background: C.surface, borderRadius: 16, width: "100%", maxWidth: 600, maxHeight: "90vh", overflow: "auto", boxShadow: "0 24px 48px rgba(0,0,0,.3)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", borderBottom: `1px solid ${C.border}`, background: C.navy, borderRadius: "16px 16px 0 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Icon name="shield" size={22} color={C.gold} />
            <span style={{ fontWeight: 900, fontSize: 18, color: C.white }}>Panel Admin — Argentina Evo</span>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: C.gray }}>
            <Icon name="x" size={22} color={C.white} />
          </button>
        </div>
        <div style={{ padding: 24, display: "grid", gap: 24 }}>
          {/* Add player */}
          <div>
            <h3 style={{ margin: "0 0 14px", color: C.navy, fontWeight: 800 }}>Agregar Jugador</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <Input
                placeholder="Nombre"
                value={newPlayer.name}
                onChange={e => setNewPlayer({ ...newPlayer, name: e.target.value })}
              />
              <Select
                value={newPlayer.role}
                onChange={e => setNewPlayer({ ...newPlayer, role: e.target.value as PlayerRole })}
              >
                <option value="Líder">Líder</option>
                <option value="Co-Líder">Co-Líder</option>
                <option value="Miembro">Miembro</option>
              </Select>
              <Input
                placeholder="Medallas iniciales"
                type="number"
                value={newPlayer.medals}
                onChange={e => setNewPlayer({ ...newPlayer, medals: e.target.value })}
              />
              <Input
                placeholder="Batallas jugadas"
                type="number"
                value={newPlayer.battles}
                onChange={e => setNewPlayer({ ...newPlayer, battles: e.target.value })}
              />
              <Input
                placeholder="Victorias"
                type="number"
                value={newPlayer.wins}
                onChange={e => setNewPlayer({ ...newPlayer, wins: e.target.value })}
              />
              <Input
                placeholder="Mazo principal"
                value={newPlayer.deck}
                onChange={e => setNewPlayer({ ...newPlayer, deck: e.target.value })}
              />
            </div>
            <div style={{ marginTop: 8 }}>
              <Button onClick={addPlayer} color={C.blue} full>Agregar Jugador</Button>
            </div>
          </div>

          {/* Players list */}
          <div>
            <h3 style={{ margin: "0 0 14px", color: C.navy, fontWeight: 800 }}>Jugadores ({players.length})</h3>
            <div style={{ display: "grid", gap: 8 }}>
              {players.map(p => (
                <div key={p.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: C.light, padding: "10px 14px", borderRadius: 8 }}>
                  <div>
                    <span style={{ fontWeight: 700, color: C.navy }}>{p.name}</span>
                    <span style={{ marginLeft: 8 }}><RoleBadge role={p.role} /></span>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{ fontWeight: 700, color: C.gold }}>{p.medals.toLocaleString()} 🏅</span>
                    <button
                      onClick={() => handleEditPlayer(p)}
                      style={{ background: "none", border: "none", cursor: "pointer", color: C.blue }}
                      title="Editar nombre"
                    >
                      <Icon name="edit" size={15} />
                    </button>
                    <button
                      onClick={() => handleDeletePlayer(p.id)}
                      style={{ background: "none", border: "none", cursor: "pointer", color: "#ef5350" }}
                      title="Eliminar jugador"
                    >
                      <Icon name="trash" size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Danger zone */}
          <div style={{ borderTop: `1px solid #ffcdd2`, paddingTop: 16 }}>
            <p style={{ margin: "0 0 8px", fontSize: 13, color: "#c62828", fontWeight: 600 }}>Zona de peligro</p>
            <Button
              onClick={() => {
                if (window.confirm("¿Borrar TODOS los datos? Esta acción es irreversible.")) {
                  onResetAllData();
                }
              }}
              color="#c62828"
              full
            >
              Limpiar todos los datos
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
