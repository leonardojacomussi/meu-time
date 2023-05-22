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

export interface DataType {
  country: CountryType;
  league: LeagueType;
  season: SeasonType;
  team: TeamType;
};

export interface StatisticsType {
  biggest: {
    goals: {
      against: {
        away: number | null;
        home: number | null;
      };
      for: {
        away: number | null;
        home: number | null;
      }
    };
    loses: {
      away: string | null;
      home: string | null;
    };
    streak: {
      draws: number | null;
      loses: number | null;
      wins: number | null;
    };
    wins: {
      away: string | null;
      home: string | null;
    }
  };
  cards: {
    red: {
      [key: string]: {
        percentage: string | null;
        total: number | null;
      };
    };
    yellow: {
      [key: string]: {
        percentage: string | null;
        total: number | null;
      };
    };
  };
  clean_sheet: {
    away: number | null;
    home: number | null;
    total: number | null;
  };
  failed_to_score: {
    away: number | null;
    home: number | null;
    total: number | null;
  };
  fixtures: {
    draws: {
      away: number;
      home: number;
      total: number;
    };
    loses: {
      away: number;
      home: number;
      total: 4
    };
    played: {
      away: number;
      home: number;
      total: number;
    };
    wins: {
      away: number;
      home: number;
      total: number;
    }
  };
  form: string;
  goals: {
    against: {
      average: {
        away: string;
        home: string;
        total: string;
      };
      minute: {
        [key: string]: {
          percentage: string | null;
          total: number | null;
        };
      };
      total: {
        away: number | null;
        home: number | null;
        total: number | null;
      }
    };
    for: {
      average: {
        away: string | null;
        home: string | null;
        total: string | null;
      };
      minute: {
        [key: string]: {
          percentage: string | null;
          total: number | null;
        };
      };
      total: {
        away: number | null;
        home: number | null;
        total: number | null;
      };
    };
  };
  league: {
    country: string;
    flag: string;
    id: number;
    logo: string;
    name: string;
    season: number
  };
  lineups: [
    {
      formation: string;
      played: number;
    },
    {
      formation: string;
      played: number
    }
  ];
  penalty: {
    missed: {
      percentage: string | null;
      total: number | null;
    };
    scored: {
      percentage: string | null;
      total: number | null;
    };
    total: number | null
  };
  team: {
    id: number;
    logo: string;
    name: string;
  },
  [key: string]: any;
}

export interface PlayerType {
  player: {
    id: number;
    name: string | null;
    firstname: string | null;
    lastname: string | null;
    age: number,
    birth: {
      date: string | null;
      place: string | null;
      country: string | null;
    },
    nationality: string | null;
    height: string | null;
    weight: string | null;
    injured: boolean;
    photo: string | null;
  },
  statistics: Array<{
    team: {
      id: number | null;
      name: string | null;
      logo: string | null;
    },
    league: {
      id: number | null;
      name: string | null;
      country: string | null;
      logo: string | null;
      flag: string | null;
      season: number | string | null;
    },
    games: {
      appearences: number | null;
      lineups: number | null;
      minutes: number | null;
      number: number | null;
      position: string | null;
      rating: string | null;
      captain: boolean;
    },
    substitutes: {
      in: number | null;
      out: number | null;
      bench: number | null;
    },
    shots: {
      total: number | null;
      on: number | null;
    },
    goals: {
      total: number | null;
      conceded: number | null;
      assists: number | null;
      saves: number | null;
    },
    passes: {
      total: number | null;
      key: number | null;
      accuracy: number | null;
    },
    tackles: {
      total: number | null;
      blocks: number | null;
      interceptions: number | null;
    },
    duels: {
      total: number | null;
      won: number | null;
    },
    dribbles: {
      attempts: number | null;
      success: number | null;
      past: number | null;
    },
    fouls: {
      drawn: number | null;
      committed: number | null;
    },
    cards: {
      yellow: number | null;
      yellowred: number | null;
      red: number | null;
    },
    penalty: {
      won: number | null;
      commited: number | null;
      scored: number | null;
      missed: number | null;
      saved: number | null;
    }
  }>
}