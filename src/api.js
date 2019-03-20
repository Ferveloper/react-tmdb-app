const BASE_URL = 'https://api.themoviedb.org/3';
const DISCOVER_PATH = '/discover/movie';
const SEARCH_PATH = '/search/movie';
const MOVIE_PATH = '/movie';
const API_KEY = '687ccf3a676569dd642e0706e30a6dae';
const LANGUAGE = 'es-ES';

const api = {

  discover : async function(page) {
    const response = await fetch(`${BASE_URL}${DISCOVER_PATH}?api_key=${API_KEY}&language=${LANGUAGE}&page=${page}&sort_by=popularity.desc`);
    const { results } = await response.json();
    return results;
  },

  search : async function(query, page) {
    if (query === '') return '';
    const response = await fetch(`${BASE_URL}${SEARCH_PATH}?api_key=${API_KEY}&language=${LANGUAGE}&query=${query}&page=${page}`);
    const { results } = await response.json();
    return results;
  },

  movie : async function(id) {
    const response = await fetch(`${BASE_URL}${MOVIE_PATH}/${id}?api_key=${API_KEY}&language=${LANGUAGE}`);
    const movie = await response.json();
    return movie;
  }

}

export default api;
