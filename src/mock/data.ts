import { DataType } from "@/interfaces";

const defaultData: DataType =  {
  country: {
    name: "Selecione um país",
    code: "",
    flag: "",
  },
  league: {
    id: 0,
    type: "Selecione uma liga",
    name: "",
    logo: "",
  },
  season: {
    year: "Selecione uma temporada",
    start: "",
    end: "",
  },
  team: {
    "team": {
      "id": 0,
      "name": "Selecione um clube",
      "code": "",
      "country": "",
      "founded": 0,
      "national": false,
      "logo": ""
    },
    "venue": {
      "id": 0,
      "name": "",
      "address": "",
      "city": "",
      "capacity": 0,
      "surface": "",
      "image": ""
    }
  },
};

export default defaultData;