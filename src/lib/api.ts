import axios from "axios";

export default axios.create({
  baseURL: "https://api-football-v1.p.rapidapi.com/v3/",
  headers: {
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
  },
});