export interface MonthlyPlayer {
  rank: number;
  name: string;
  s1: number;
  s2: number;
  s3: number;
  s4: number;
  total: number;
  qualifies: boolean;
  winsPass: boolean;
}

export const MONTHLY_RANKING: MonthlyPlayer[] = [
  { rank: 1, name: "enzo cuenta 2", s1: 3400, s2: 3400, s3: 3400, s4: 3300, total: 13500, qualifies: true, winsPass: true },
  { rank: 2, name: "Tizi", s1: 3300, s2: 3600, s3: 3300, s4: 3000, total: 13200, qualifies: true, winsPass: false },
  { rank: 3, name: "MARCOS⚡蒂²³", s1: 3150, s2: 3100, s3: 3300, s4: 3600, total: 13150, qualifies: true, winsPass: false },
  { rank: 4, name: "ENLTD 愛 222", s1: 3300, s2: 3150, s3: 3300, s4: 3300, total: 13050, qualifies: true, winsPass: false },
  { rank: 5, name: "SEP/LUCASTCOGE·", s1: 3350, s2: 3000, s3: 3100, s4: 3300, total: 12750, qualifies: true, winsPass: false },
  { rank: 6, name: "SEP I KingPR", s1: 3400, s2: 3100, s3: 3400, s4: 2650, total: 12550, qualifies: true, winsPass: false },
  { rank: 7, name: "ッ ᴘ ɪ ɴ ᴏ ッ", s1: 3150, s2: 3300, s3: 2950, s4: 2950, total: 12350, qualifies: true, winsPass: false },
  { rank: 8, name: "dripzen", s1: 3500, s2: 3400, s3: 2450, s4: 2500, total: 11850, qualifies: true, winsPass: false },
  { rank: 9, name: "SUPA!", s1: 2900, s2: 2700, s3: 2950, s4: 2900, total: 11450, qualifies: true, winsPass: false },
  { rank: 10, name: "Ferri29", s1: 2750, s2: 3400, s3: 2050, s4: 2450, total: 10650, qualifies: true, winsPass: false },
  { rank: 11, name: "agus pro", s1: 2200, s2: 2850, s3: 2600, s4: 2950, total: 10600, qualifies: true, winsPass: false },
  { rank: 12, name: "M4LDIT0兎BΣΠDIT0", s1: 2400, s2: 3000, s3: 2200, s4: 2350, total: 9950, qualifies: true, winsPass: false },
  { rank: 13, name: "USAG1⊛ILMĀLD1TŐ", s1: 1700, s2: 2900, s3: 2500, s4: 2250, total: 9350, qualifies: true, winsPass: false },
  { rank: 14, name: "IL Anderagram", s1: 2500, s2: 800, s3: 2400, s4: 3400, total: 9100, qualifies: true, winsPass: false },
  { rank: 15, name: "ElBig Crow GnCs", s1: 1800, s2: 2500, s3: 2200, s4: 2500, total: 9000, qualifies: true, winsPass: false },
  { rank: 16, name: "mustafa", s1: 2550, s2: 1650, s3: 2500, s4: 2250, total: 8950, qualifies: true, winsPass: false },
  { rank: 17, name: "KhaoZ", s1: 200, s2: 2600, s3: 2550, s4: 3400, total: 8750, qualifies: false, winsPass: false },
  { rank: 18, name: "⭐$felipe$⭐", s1: 0, s2: 2600, s3: 2750, s4: 3150, total: 8500, qualifies: false, winsPass: false },
  { rank: 19, name: "Carol :3", s1: 2700, s2: 1600, s3: 2400, s4: 1600, total: 8300, qualifies: false, winsPass: false },
  { rank: 20, name: "CARP Ivánn43", s1: 2500, s2: 1450, s3: 2000, s4: 2400, total: 8350, qualifies: false, winsPass: false },
  { rank: 21, name: "? ? ? ? ? ? ?", s1: 1600, s2: 1750, s3: 2000, s4: 2700, total: 8050, qualifies: false, winsPass: false },
  { rank: 22, name: "mati", s1: 1900, s2: 2000, s3: 2000, s4: 1900, total: 7800, qualifies: false, winsPass: false },
  { rank: 23, name: "™Reyes—YT", s1: 2150, s2: 1300, s3: 2100, s4: 1300, total: 6850, qualifies: false, winsPass: false },
  { rank: 24, name: "Fxcund!!nho", s1: 1200, s2: 1800, s3: 1800, s4: 2050, total: 6850, qualifies: false, winsPass: false },
  { rank: 25, name: "\"MADERNITY\"", s1: 2450, s2: 2500, s3: 1350, s4: 200, total: 6500, qualifies: false, winsPass: false },
  { rank: 26, name: "Tenés Un Pucho?", s1: 1000, s2: 1000, s3: 1700, s4: 2800, total: 6500, qualifies: false, winsPass: false },
  { rank: 27, name: "Daira", s1: 500, s2: 2750, s3: 1550, s4: 1250, total: 6050, qualifies: false, winsPass: false },
  { rank: 28, name: "COFLA_23cm", s1: 0, s2: 0, s3: 3350, s4: 2350, total: 5700, qualifies: false, winsPass: false },
  { rank: 29, name: "CAL ⭐Leoo/LopZ⭐", s1: 200, s2: 1000, s3: 1400, s4: 2600, total: 5200, qualifies: false, winsPass: false },
  { rank: 30, name: "COFLA 24cm", s1: 0, s2: 0, s3: 2800, s4: 2200, total: 5000, qualifies: false, winsPass: false },
  { rank: 31, name: "nacho", s1: 1900, s2: 1200, s3: 1850, s4: 0, total: 4950, qualifies: false, winsPass: false },
  { rank: 32, name: "Riki xd", s1: 0, s2: 2200, s3: 1500, s4: 1500, total: 5200, qualifies: false, winsPass: false },
  { rank: 33, name: "TheKing", s1: 0, s2: 1800, s3: 1900, s4: 900, total: 4600, qualifies: false, winsPass: false },
  { rank: 34, name: "DuroDeGanar", s1: 900, s2: 1250, s3: 1800, s4: 700, total: 4650, qualifies: false, winsPass: false },
  { rank: 35, name: "痛みを知れ", s1: 1750, s2: 1200, s3: 1400, s4: 0, total: 4350, qualifies: false, winsPass: false },
  { rank: 36, name: "Alex del 14", s1: 0, s2: 0, s3: 1350, s4: 3000, total: 4350, qualifies: false, winsPass: false },
  { rank: 37, name: "berskha", s1: 0, s2: 0, s3: 2300, s4: 2600, total: 4900, qualifies: false, winsPass: false },
  { rank: 38, name: "M A R I A N O ⭐", s1: 600, s2: 700, s3: 1300, s4: 700, total: 3300, qualifies: false, winsPass: false },
  { rank: 39, name: "Combatiente", s1: 0, s2: 0, s3: 0, s4: 3300, total: 3300, qualifies: false, winsPass: false },
  { rank: 40, name: "OSEDAX•FH", s1: 800, s2: 1600, s3: 600, s4: 0, total: 3000, qualifies: false, winsPass: false },
  { rank: 41, name: "tizi8910", s1: 2100, s2: 700, s3: 0, s4: 0, total: 2800, qualifies: false, winsPass: false },
  { rank: 42, name: "LA MATRACA", s1: 1600, s2: 600, s3: 500, s4: 0, total: 2700, qualifies: false, winsPass: false },
  { rank: 43, name: "MalditoMaKee", s1: 900, s2: 800, s3: 1000, s4: 0, total: 2700, qualifies: false, winsPass: false },
  { rank: 44, name: "ʚ♡ɞRataEmoʚ♡ɞ", s1: 0, s2: 2600, s3: 0, s4: 0, total: 2600, qualifies: false, winsPass: false },
  { rank: 45, name: "﷼AXEL﷼", s1: 0, s2: 0, s3: 0, s4: 2250, total: 2250, qualifies: false, winsPass: false },
  { rank: 46, name: "DanteL", s1: 600, s2: 600, s3: 1000, s4: 0, total: 2200, qualifies: false, winsPass: false },
  { rank: 47, name: "jdjd", s1: 0, s2: 0, s3: 700, s4: 1200, total: 1900, qualifies: false, winsPass: false },
  { rank: 48, name: "David", s1: 0, s2: 0, s3: 0, s4: 1950, total: 1950, qualifies: false, winsPass: false },
  { rank: 49, name: "Lucca", s1: 0, s2: 800, s3: 800, s4: 0, total: 1600, qualifies: false, winsPass: false },
  { rank: 50, name: "Tomi.C", s1: 0, s2: 0, s3: 0, s4: 1500, total: 1500, qualifies: false, winsPass: false },
  { rank: 51, name: "Martin LF", s1: 0, s2: 0, s3: 0, s4: 1450, total: 1450, qualifies: false, winsPass: false },
  { rank: 52, name: "santi", s1: 0, s2: 1300, s3: 0, s4: 0, total: 1300, qualifies: false, winsPass: false },
  { rank: 53, name: "Valhala", s1: 0, s2: 0, s3: 0, s4: 1100, total: 1100, qualifies: false, winsPass: false },
  { rank: 54, name: "launtrax", s1: 0, s2: 0, s3: 0, s4: 800, total: 800, qualifies: false, winsPass: false },
  { rank: 55, name: "cross", s1: 600, s2: 0, s3: 0, s4: 0, total: 600, qualifies: false, winsPass: false },
  { rank: 56, name: "納奎亞斯", s1: 600, s2: 0, s3: 0, s4: 0, total: 600, qualifies: false, winsPass: false },
  { rank: 57, name: "lucho Díazjija", s1: 0, s2: 0, s3: 500, s4: 0, total: 500, qualifies: false, winsPass: false },
  { rank: 58, name: "Lucas", s1: 0, s2: 0, s3: 0, s4: 500, total: 500, qualifies: false, winsPass: false },
  { rank: 59, name: "ogarvro-_DY", s1: 0, s2: 0, s3: 0, s4: 200, total: 200, qualifies: false, winsPass: false },
  { rank: 60, name: "championhs", s1: 0, s2: 100, s3: 0, s4: 0, total: 100, qualifies: false, winsPass: false }
];
