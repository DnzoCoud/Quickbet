import axios from "axios";

const apiKey = process.env.TMDB_API_KEY;
const baseURL = process.env.TMDB_BASE_URL;

export const tmdbClient = axios.create({
  baseURL,
  params: {
    api_key: apiKey,
  },
});

export default tmdbClient;
