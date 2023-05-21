export interface CountryType {
  code: string;
  flag: string;
  name: string;
};

export interface LeagueType {
  id: number,
  name: string;
  type: string;
  logo: string;
  [key: string]: any;
};

export interface SeasonType {
  year: number;
  start: string;
  end: string;
  current: boolean;
  coverage: {
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

export interface DataProps {
  country: CountryType;
  league: string;
  season: string;
  club: string;
  api: string;
};