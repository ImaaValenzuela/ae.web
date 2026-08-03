import type { Player, War } from '../types';

export const CLAN_TAG = "#G0V9220V";
export const API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJhYmE5ZGEyLTQ2NDgtNDE1Ny1iMTUyLTc1ZGFkMWZiZGJhZCIsImlhdCI6MTc4NTcwNzcyMCwic3ViIjoiZGV2ZWxvcGVyLzllZDA1MDg5LWUwNmMtYzcxNi02ZDBjLTAxZmRkZWU1MWI3NCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxODEuOTAuODIuMzUiXSwidHlwZSI6ImNsaWVudCJ9XX0.lUbiVY49H6sMssxAcNh6Ogy2-uluncNEreW9Q1WG0DqLY1Hpxih4M2Y5cK_Gsm-XKseFPsnJJxdHNWacDbEVbw";

export interface ClanInfo {
  tag: string;
  name: string;
  description: string;
  clanScore: number;
  clanWarTrophies: number;
  members: number;
}

export async function fetchLiveClanData(): Promise<{
  info: ClanInfo;
  players: Player[];
  wars: War[];
}> {
  const cleanTag = CLAN_TAG.replace('#', '%23');
  
  // Use local proxy defined in vite.config.ts
  const headers = {
    'Authorization': `Bearer ${API_KEY}`
  };

  const [clanRes, raceLogRes] = await Promise.all([
    fetch(`/api/clashroyale/clans/${cleanTag}`, { headers }),
    fetch(`/api/clashroyale/clans/${cleanTag}/riverracelog`, { headers })
  ]);

  if (!clanRes.ok) {
    throw new Error(`Error en la API de Clash Royale (${clanRes.status})`);
  }

  const clanData = await clanRes.json();
  const raceLogData = raceLogRes.ok ? await raceLogRes.json() : { items: [] };

  const players: Player[] = (clanData.memberList || []).map((m: any, idx: number) => ({
    id: idx + 1,
    name: m.name,
    medals: m.trophies || 0,
    battles: m.donationsReceived || 0,
    wins: m.donations || 0,
    deck: m.arena ? m.arena.name : "Competitivo",
    role: m.role === 'leader' ? 'Líder' : m.role === 'coLeader' ? 'Co-Líder' : 'Miembro'
  }));

  const wars: War[] = (raceLogData.items || []).map((item: any, idx: number) => {
    const aeStanding = item.standings ? item.standings.find((s: any) => s.clan.tag === CLAN_TAG) : null;
    const opponentStanding = item.standings ? item.standings.find((s: any) => s.clan.tag !== CLAN_TAG) : null;
    const rank = aeStanding ? aeStanding.rank : 1;
    const isWin = rank === 1;

    return {
      id: idx + 1,
      date: item.createdDate ? item.createdDate.substring(0, 10).replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3") : new Date().toISOString().substring(0, 10),
      opponent: opponentStanding ? opponentStanding.clan.name : "Rival Clan",
      result: isWin ? "WIN" : "LOSS",
      medals: aeStanding ? aeStanding.trophyChange || (isWin ? 100 : -20) : 0,
      playerCount: aeStanding && aeStanding.clan.participants ? aeStanding.clan.participants.length : 0
    };
  });

  return {
    info: {
      tag: clanData.tag,
      name: clanData.name,
      description: clanData.description,
      clanScore: clanData.clanScore,
      clanWarTrophies: clanData.clanWarTrophies,
      members: clanData.members
    },
    players,
    wars
  };
}
