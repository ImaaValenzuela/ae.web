import type { Player, War, Deck, Battle, Tournament } from '../types';

export const C = {
  navy:    "#0a1628",
  navyDark:"#060d19",
  blue:    "#1565c0",
  blue2:   "#1e88e5",
  sky:     "#42a5f5",
  purple:  "#9b51e0",
  gold:    "#f9a825",
  gold2:   "#ffd54f",
  white:   "#f4f8ff",
  silver:  "#cfd8dc",
  gray:    "#90a4ae",
  light:   "#e3eaf6",
  surface: "#ffffff",
  border:  "#b8cce8",
} as const;

export const DEFAULT_PLAYERS: Player[] = [
  { id: 1, name: "ッ ᴘ ɪ ɴ ᴏ ッ", medals: 14000, battles: 520, wins: 410, deck: "Spirit Square", role: "Co-Líder" },
  { id: 2, name: "IL Anderagram", medals: 14000, battles: 200, wins: 392, deck: "Spirit Square", role: "Miembro" },
  { id: 3, name: "ENLTD 愛 222", medals: 14000, battles: 160, wins: 462, deck: "Spirit Square", role: "Co-Líder" },
  { id: 4, name: "MARCOS⚡蒂²³", medals: 14000, battles: 390, wins: 592, deck: "Spirit Square", role: "Líder" },
  { id: 5, name: "Tizi", medals: 13507, battles: 320, wins: 26, deck: "Spirit Square", role: "Miembro" },
  { id: 6, name: "enzo cuenta 2", medals: 14000, battles: 680, wins: 48, deck: "Spirit Square", role: "Miembro" },
  { id: 7, name: "Æ ❘ GDA ✰德⁷⁷", medals: 14000, battles: 400, wins: 871, deck: "Spirit Square", role: "Co-Líder" },
  { id: 8, name: "dripzen", medals: 14000, battles: 800, wins: 1287, deck: "Spirit Square", role: "Co-Líder" },
  { id: 9, name: "COFLA 24cm", medals: 14000, battles: 80, wins: 177, deck: "Spirit Square", role: "Miembro" },
  { id: 10, name: "Æ❘ MĀLD1TO♣CÖN3", medals: 14000, battles: 272, wins: 350, deck: "Spirit Square", role: "Co-Líder" },
  { id: 11, name: "Combatiente", medals: 14000, battles: 440, wins: 625, deck: "Spirit Square", role: "Miembro" },
  { id: 12, name: "Mateo Gamer pro", medals: 14000, battles: 0, wins: 0, deck: "Spirit Square", role: "Miembro" },
  { id: 13, name: "CARP Ivánn43", medals: 14000, battles: 0, wins: 0, deck: "Spirit Square", role: "Miembro" },
  { id: 14, name: "Ferri29", medals: 14000, battles: 480, wins: 530, deck: "Spirit Square", role: "Co-Líder" },
  { id: 15, name: "Martin LF", medals: 14000, battles: 80, wins: 112, deck: "Spirit Square", role: "Miembro" },
  { id: 16, name: "Tomi.C", medals: 14000, battles: 400, wins: 301, deck: "Spirit Square", role: "Miembro" },
  { id: 17, name: "﷼AXEL﷼", medals: 14000, battles: 240, wins: 90, deck: "Spirit Square", role: "Miembro" },
  { id: 18, name: "jdjd", medals: 14000, battles: 440, wins: 414, deck: "Spirit Square", role: "Miembro" },
  { id: 19, name: "berskha", medals: 14000, battles: 440, wins: 340, deck: "Spirit Square", role: "Miembro" },
  { id: 20, name: "SEP I KingPR", medals: 14000, battles: 400, wins: 10, deck: "Spirit Square", role: "Co-Líder" },
  { id: 21, name: "ogarvro-_DY", medals: 14000, battles: 120, wins: 224, deck: "Spirit Square", role: "Miembro" },
  { id: 22, name: "Fxcund!!nho", medals: 14000, battles: 280, wins: 62, deck: "Spirit Square", role: "Miembro" },
  { id: 23, name: "David", medals: 14000, battles: 360, wins: 214, deck: "Spirit Square", role: "Miembro" },
  { id: 24, name: "Lucas", medals: 14000, battles: 80, wins: 132, deck: "Spirit Square", role: "Miembro" },
  { id: 25, name: "Alex del 14", medals: 13981, battles: 400, wins: 76, deck: "Spirit Square", role: "Miembro" },
  { id: 26, name: "SUPA!", medals: 13964, battles: 280, wins: 340, deck: "Spirit Square", role: "Miembro" },
  { id: 27, name: "COFLA_23cm", medals: 13939, battles: 560, wins: 1105, deck: "Spirit Square", role: "Miembro" },
  { id: 28, name: "ElBig Crow GnCs", medals: 13918, battles: 240, wins: 104, deck: "Spirit Square", role: "Miembro" },
  { id: 29, name: "™Reyes—YT", medals: 13852, battles: 200, wins: 176, deck: "Spirit Square", role: "Miembro" },
  { id: 30, name: "Tenés Un Pucho?", medals: 13560, battles: 360, wins: 235, deck: "Spirit Square", role: "Miembro" },
  { id: 31, name: "Carol :3", medals: 13501, battles: 80, wins: 10, deck: "Spirit Square", role: "Miembro" },
  { id: 32, name: "CAL ⭐Leoo/LopZ⭐", medals: 13500, battles: 240, wins: 118, deck: "Spirit Square", role: "Miembro" },
  { id: 33, name: "⭐$felipe$⭐", medals: 13243, battles: 400, wins: 367, deck: "Little Prince's Tavern", role: "Miembro" },
  { id: 34, name: "Valhala", medals: 13211, battles: 120, wins: 110, deck: "Little Prince's Tavern", role: "Miembro" },
  { id: 35, name: "KhaoZ", medals: 13141, battles: 40, wins: 257, deck: "Little Prince's Tavern", role: "Miembro" },
  { id: 36, name: "M A R I A N O ⭐", medals: 13124, battles: 240, wins: 232, deck: "Little Prince's Tavern", role: "Miembro" },
  { id: 37, name: "launtrax", medals: 13081, battles: 0, wins: 0, deck: "Little Prince's Tavern", role: "Miembro" },
  { id: 38, name: "? ? ? ? ? ? ?", medals: 13055, battles: 520, wins: 646, deck: "Little Prince's Tavern", role: "Miembro" },
  { id: 39, name: "⊛ Æ♥︎Ŭ5AGʻII ⊛", medals: 13039, battles: 320, wins: 584, deck: "Little Prince's Tavern", role: "Miembro" },
  { id: 40, name: "DuroDeGanar", medals: 13000, battles: 400, wins: 326, deck: "Little Prince's Tavern", role: "Miembro" },
  { id: 41, name: "\"MADERNITY\"", medals: 13000, battles: 0, wins: 0, deck: "Little Prince's Tavern", role: "Miembro" },
  { id: 42, name: "Daira", medals: 12658, battles: 440, wins: 76, deck: "Ultimate Clash Pit", role: "Miembro" },
  { id: 43, name: "mustafa", medals: 12505, battles: 320, wins: 251, deck: "Ultimate Clash Pit", role: "Miembro" },
  { id: 44, name: "TheKing", medals: 12500, battles: 40, wins: 94, deck: "Ultimate Clash Pit", role: "Miembro" },
  { id: 45, name: "agus pro", medals: 11918, battles: 200, wins: 92, deck: "Summit of Heroes", role: "Co-Líder" },
  { id: 46, name: "mati", medals: 11118, battles: 160, wins: 591, deck: "Musketeer Street", role: "Miembro" },
  { id: 47, name: "Æ ❘ NACHO⚡阿", medals: 11095, battles: 0, wins: 0, deck: "Musketeer Street", role: "Miembro" },
  { id: 48, name: "Riki xd", medals: 10364, battles: 280, wins: 67, deck: "Lumberlove Cabin", role: "Miembro" }
];

export const DEFAULT_WARS: War[] = [
  { id: 1, date: "2026-07-27", opponent: "CRAXK", result: "WIN", medals: 20, playerCount: 94 },
  { id: 2, date: "2026-07-20", opponent: "CRAXK", result: "WIN", medals: 20, playerCount: 78 },
  { id: 3, date: "2026-07-13", opponent: "CRAXK", result: "LOSS", medals: 10, playerCount: 59 },
  { id: 4, date: "2026-07-06", opponent: "AMERICAN BULLS", result: "LOSS", medals: -100, playerCount: 66 },
  { id: 5, date: "2026-06-29", opponent: "AMERICAN BULLS", result: "LOSS", medals: -20, playerCount: 62 },
  { id: 6, date: "2026-06-22", opponent: "AMERICAN BULLS", result: "LOSS", medals: -20, playerCount: 54 },
  { id: 7, date: "2026-06-15", opponent: "AMERICAN BULLS", result: "LOSS", medals: -20, playerCount: 47 },
  { id: 8, date: "2026-06-08", opponent: "AMERICAN BULLS", result: "LOSS", medals: -20, playerCount: 44 },
  { id: 9, date: "2026-06-01", opponent: "GREEK WARRIORS", result: "LOSS", medals: -50, playerCount: 143 },
  { id: 10, date: "2026-05-25", opponent: "GREEK WARRIORS", result: "LOSS", medals: -20, playerCount: 120 }
];

export const DEFAULT_DECKS: Deck[] = [
  { id: 1, name: "AE War Meta Hog Cycle 2.6", cards: ["Hog Rider","Ice Spirit","Cannon","Fireball","Skeletons","Ice Golem","The Log","Musketeer"], meta: "Cycle", winRate: 64 },
  { id: 2, name: "AE Beatdown Golem NightWitch", cards: ["Golem","Night Witch","Baby Dragon","Lumberjack","Mega Minion","Tornado","Lightning","Zap"], meta: "Beatdown", winRate: 59 },
  { id: 3, name: "AE Control Pekka BridgeSpam", cards: ["P.E.K.K.A","Bandit","Royal Ghost","Battle Ram","Electro Wizard","Poison","Zap","Magic Archer"], meta: "Control", winRate: 62 },
  { id: 4, name: "AE Bait Goblin Barrel 3.3", cards: ["Goblin Barrel","Princess","Knight","Goblin Gang","Rocket","Ice Spirit","The Log","Inferno Tower"], meta: "Bait", winRate: 61 }
];

export const DEFAULT_BATTLES: Battle[] = [
  { id: 1, player: "MARCOS⚡蒂²³", opponent: "CRAXK Leader", result: "WIN", medals: 100, date: "2026-07-27", notes: "Victoria clave de 4 mazos en River Race" },
  { id: 2, player: "ENLTD 愛 222", opponent: "AMERICAN BULLS Co", result: "WIN", medals: 100, date: "2026-07-27", notes: "Ataque directo a barco enemigo" },
  { id: 3, player: "dripzen", opponent: "Greek Elite", result: "WIN", medals: 100, date: "2026-07-26", notes: "Batalla de duelo ganada 2-0" }
];

export const DEFAULT_TOURNAMENTS: Tournament[] = [
  { id: 1, name: "Copa Argentina EVO 2026", date: "2026-07-25", players: ["MARCOS⚡蒂²³", "ENLTD 愛 222", "dripzen", "ッ ᴘ ɪ ɴ ᴏ ッ", "Ferri29"], winner: "MARCOS⚡蒂²³", prizePool: 5000 }
];
