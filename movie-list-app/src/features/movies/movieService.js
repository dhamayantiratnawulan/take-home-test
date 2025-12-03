const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export const movieService = {
  searchMovies: async (keyword, page = 1) => {
    const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${keyword}&page=${page}`);
    const data = await res.json();
    return data;
  },

  getMovieDetail: async (id) => {
    const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
    const data = await res.json();
    return data;
  },
};
