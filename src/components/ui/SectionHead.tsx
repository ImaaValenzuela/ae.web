import React from 'react';
import { C } from '../../constants/theme';

interface SectionHeadProps {
  title: string;
  sub?: string;
}

export const SectionHead: React.FC<SectionHeadProps> = ({ title, sub }) => (
  <div style={{ borderLeft: `4px solid ${C.gold}`, paddingLeft: 12, marginBottom: 24 }}>
    <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: C.navy }}>{title}</h2>
    {sub && <p style={{ margin: 0, fontSize: 13, color: C.gray }}>{sub}</p>}
  </div>
);
