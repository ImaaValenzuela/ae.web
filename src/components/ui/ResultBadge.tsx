import React from 'react';
import type { MatchResult } from '../../types';

interface ResultBadgeProps {
  result: MatchResult | string;
}

export const ResultBadge: React.FC<ResultBadgeProps> = ({ result }) => {
  const isWin = result === "WIN";
  return (
    <span style={{
      background: isWin ? "#e8f5e9" : "#ffebee",
      color:      isWin ? "#2e7d32" : "#c62828",
      fontSize: 12, fontWeight: 800, padding: "2px 12px", borderRadius: 20, letterSpacing: ".5px"
    }}>
      {isWin ? "Victoria" : "Derrota"}
    </span>
  );
};
