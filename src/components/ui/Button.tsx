import React from 'react';
import { C } from '../../constants/theme';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  full?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  color = C.blue,
  full = false,
  style,
  ...props
}) => (
  <button
    onClick={onClick}
    style={{
      background: `linear-gradient(135deg, ${color}, ${color}dd)`,
      color: color === C.gold ? C.navy : C.white,
      border: "none",
      borderRadius: 8,
      padding: "10px 20px",
      fontWeight: 700,
      cursor: "pointer",
      fontSize: 14,
      width: full ? "100%" : "auto",
      display: full ? "block" : "inline-block",
      transition: "opacity 0.2s ease, transform 0.1s ease",
      ...style,
    }}
    {...props}
  >
    {children}
  </button>
);
