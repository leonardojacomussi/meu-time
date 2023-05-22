export interface CountryType {
  code: string;
  flag: string;
  name: string;
};

export interface LeagueType {
  id: number;
  name: string;
  type: string;
  logo: string;
  [key: string]: any;
};

export interface SeasonType {
  year: number | string;
  start: string;
  end: string;
  current?: boolean;
  coverage?: {
    fixtures: {
      events: boolean;
      lineups: boolean;
      statistics_fixtures: boolean;
      statistics_players: boolean
    };
    standings: boolean;
    players: boolean;
    top_scorers: boolean;
    top_assists: boolean;
    top_cards: boolean;
    injuries: boolean;
    predictions: boolean;
    odds: boolean;
    [key: string]: any;
  };
  [key: string]: any;
};

export interface LeagueResponse {
  league: LeagueType;
  country: CountryType;
  seasons: Array<SeasonType>;
};

export interface TeamType {
  team: {
    id: number;
    name: string;
    code: string;
    country: string;
    founded: number;
    national: boolean;
    logo: string
  };
  venue: {
    id: number;
    name: string;
    address: string;
    city: string;
    capacity: number;
    surface: string;
    image: string
  };
};

export interface DataProps {
  country: CountryType;
  league: LeagueType;
  season: SeasonType;
  team: TeamType;
  api: string;
};