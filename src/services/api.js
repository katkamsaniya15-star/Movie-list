const API_KEY = "50a8b25d";
const BASE_URL = "https://www.omdbapi.com/";

export const getPopularMovies = async () => {
  // OMDB does NOT have popular movies
  // We fake it by searching a common term
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=avengers`
  );
  const data = await response.json();
  return data.Search || [];
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.Search || [];
};
