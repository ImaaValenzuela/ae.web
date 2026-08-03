import React from 'react';
import type { PlayerRole } from '../../types';
import { C } from '../../constants/theme';

interface RoleBadgeProps {
  role: PlayerRole | string;
}

export const RoleBadge: React.FC<RoleBadgeProps> = ({ role }) => {
  const map: Record<string, [string, string]> = {
    "Líder": [C.gold, "#5a3a00"],
    "Co-Líder": [C.blue, C.white],
    "Miembro": [C.light, C.blue]
  };
  const [bg, fg] = map[role] || [C.light, C.blue];
  return (
    <span style={{ background: bg, color: fg, fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, letterSpacing: ".3px" }}>
      {role}
    </span>
  );
};
