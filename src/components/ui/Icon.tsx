import React from 'react';

export const ICO = {
  trophy:  "M6 9H4.5a2.5 2.5 0 010-5H6M18 9h1.5a2.5 2.5 0 000-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.29 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.29 17 22M18 2H6v7a6 6 0 0012 0V2z",
  swords:  "M14.5 17.5L3 6V3h3l11.5 11.5M13 19l2-2M3 21l7-7M20.5 3.5l-7 7M22 21l-7-7",
  users:   "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M9 7a4 4 0 100 8 4 4 0 000-8z",
  target:  "M12 22a10 10 0 100-20 10 10 0 000 20zM12 18a6 6 0 100-12 6 6 0 000 12zM12 14a2 2 0 100-4 2 2 0 000 4z",
  book:    "M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20V2H6.5A2.5 2.5 0 004 4.5v15z",
  zap:     "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  lock:    "M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2zM7 11V7a5 5 0 0110 0v4",
  trash:   "M3 6h18M19 6l-1 14H6L5 6M10 11v6M14 11v6M9 6V4h6v2",
  edit:    "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z",
  plus:    "M12 5v14M5 12h14",
  x:       "M18 6L6 18M6 6l12 12",
  menu:    "M3 12h18M3 6h18M3 18h18",
  shield:  "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  crown:   "M2 20h20M5 20V10l7-7 7 7v10",
  star:    "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
} as const;

export type IconName = keyof typeof ICO;

interface IconProps {
  d?: string;
  name?: IconName;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

export const Icon: React.FC<IconProps> = ({ d, name, size = 18, color = "currentColor", style = {} }) => {
  const pathData = name ? ICO[name] : d || "";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <path d={pathData} />
    </svg>
  );
};
