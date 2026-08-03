export type PlayerRole = 'Líder' | 'Co-Líder' | 'Miembro';
export type MatchResult = 'WIN' | 'LOSS';
export type DeckMeta = 'Cycle' | 'Beatdown' | 'Control' | 'Bait';
export type TabId = 'dashboard' | 'wars' | 'leaderboard' | 'decks' | 'battles' | 'tournaments' | 'halloffame';

export interface Player {
  id: number;
  name: string;
  medals: number;
  battles: number;
  wins: number;
  deck: string;
  role: PlayerRole;
}

export interface War {
  id: number;
  date: string;
  opponent: string;
  result: MatchResult;
  medals: number;
  playerCount: number;
}

export interface Deck {
  id: number;
  name: string;
  cards: string[];
  meta: DeckMeta | string;
  winRate: number;
}

export interface Battle {
  id: number;
  player: string;
  opponent: string;
  result: MatchResult;
  medals: number;
  date: string;
  notes?: string;
}

export interface Tournament {
  id: number;
  name: string;
  date: string;
  players: string[];
  winner?: string;
  prizePool: number;
}

export interface TabItem {
  id: TabId;
  label: string;
  ico: string;
}
