import React from 'react';
import { C } from '../../constants/theme';

export const Footer: React.FC = () => {
  return (
    <footer style={{ background: C.navy, color: C.gray, textAlign: "center", padding: "16px 16px", fontSize: 12 }}>
      <span style={{ color: C.gold, fontWeight: 700 }}>Argentina Evo</span> · War Manager · Panel Admin disponible vía botón superior
    </footer>
  );
};
