import React from 'react';
import { C } from '../../constants/theme';

interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({ children, style = {} }) => (
  <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "20px 24px", ...style }}>
    {children}
  </div>
);
