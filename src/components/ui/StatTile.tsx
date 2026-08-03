import React from 'react';
import { C } from '../../constants/theme';

interface StatTileProps {
  label: string;
  value: string | number;
  accent?: string;
}

export const StatTile: React.FC<StatTileProps> = ({ label, value, accent }) => (
  <div style={{ background: C.light, borderRadius: 12, padding: "16px 20px", flex: 1, minWidth: 120 }}>
    <p style={{ margin: 0, fontSize: 12, color: C.gray, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".5px" }}>{label}</p>
    <p style={{ margin: 0, fontSize: 26, fontWeight: 900, color: accent || C.navy, lineHeight: 1.2 }}>{value}</p>
  </div>
);
