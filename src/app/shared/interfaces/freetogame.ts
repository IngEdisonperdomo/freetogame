export interface FreetogameI {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: GenreI;
  platform: PlatformI;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

export enum GenreI {
  Action = 'Action',
  ActionGame = 'Action Game',
  ActionRPG = 'Action RPG',
  Arpg = 'ARPG',
  BattleRoyale = 'Battle Royale',
  CardGame = 'Card Game',
  Fantasy = 'Fantasy',
  Fighting = 'Fighting',
  GenreMMORPG = ' MMORPG',
  MMORPG = 'MMORPG',
  Mmo = 'MMO',
  Mmoarpg = 'MMOARPG',
  Moba = 'MOBA',
  Racing = 'Racing',
  Shooter = 'Shooter',
  Social = 'Social',
  Sports = 'Sports',
  Strategy = 'Strategy',
}

export enum PlatformI {
  PCWindows = 'PC (Windows)',
  PCWindowsWebBrowser = 'PC (Windows), Web Browser',
  WebBrowser = 'Web Browser',
}
