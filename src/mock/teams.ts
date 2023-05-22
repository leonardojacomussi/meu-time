import { TeamType } from "@/interfaces";

const teams: Array<TeamType> = [
  {
    "team": {
      "id": 33,
      "name": "Manchester United",
      "code": "MUN",
      "country": "England",
      "founded": 1878,
      "national": false,
      "logo": "https://media.api-sports.io/football/teams/33.png"
    },
    "venue": {
      "id": 556,
      "name": "Old Trafford",
      "address": "Sir Matt Busby Way",
      "city": "Manchester",
      "capacity": 76212,
      "surface": "grass",
      "image": "https://media.api-sports.io/football/venues/556.png"
    }
  },
  {
    "team": {
      "id": 34,
      "name": "Newcastle",
      "code": "NEW",
      "country": "England",
      "founded": 1892,
      "national": false,
      "logo": "https://media.api-sports.io/football/teams/34.png"
    },
    "venue": {
      "id": 562,
      "name": "St. James' Park",
      "address": "St. James' Street",
      "city": "Newcastle upon Tyne",
      "capacity": 52389,
      "surface": "grass",
      "image": "https://media.api-sports.io/football/venues/562.png"
    }
  },
];

export default teams;