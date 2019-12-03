import mdb from '../movieDB/mdb';
import {
  SET_NOWPLAYING,
  REMOVE_CURRENT_MOVIE,
  SET_CURRENT_MOVIE,
  SET_SEARCH_RESULTS,
  REMOVE_SEARCH_RESULTS
} from './types';

export const fetchNowPlayingMovies = () => async dispatch => {
  try {
    const res = await mdb.get('/movie/now_playing');

    dispatch({ type: SET_NOWPLAYING, payload: res.data });
  } catch (err) {}
};

export const fetchMovie = id => async dispatch => {
  try {
    const res = await mdb.get(`/movie/${id}`);

    dispatch({ type: SET_CURRENT_MOVIE, payload: res.data });
  } catch (err) {}
};

export const removeCurrentMovie = () => ({
  type: REMOVE_CURRENT_MOVIE
});

export const fetchSearchQuery = query => async dispatch => {
  try {
    const res = await mdb.get('/search/multi', { params: { query } });

    dispatch({ type: SET_SEARCH_RESULTS, payload: {results: res.data.results,query: query} });
  } catch (err) {}
};

export const removeSearchResults = () => ({
  type: REMOVE_SEARCH_RESULTS
});
