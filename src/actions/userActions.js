import mdb from '../movieDB/mdb';
import uuid from 'uuid/v4';

import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_USER,
  SET_LISTS,
  SET_WATCHLISTS,
  SET_FAVOURITES,
  SET_ALERT,
  REMOVE_ALERT,
  ADD_MOVIE_TO_WATCHLIST,
  REMOVE_MOVIE_FROM_WATCHLIST,
  ADD_TV_TO_WATCHLIST,
  REMOVE_TV_FROM_WATCHLIST,
  ADD_MOVIE_TO_FAVOURITE,
  REMOVE_MOVIE_FROM_FAVOURITE,
  ADD_TV_TO_FAVOURITE,
  REMOVE_TV_FROM_FAVOURITE,
  CLEAR_USER_DATA
} from './types';

export const setAlert = (alert, type, timeout) => dispatch => {
  const id = uuid();
  dispatch({ type: SET_ALERT, payload: { alert, type, id } });

  setTimeout(() => {
    dispatch({ type: REMOVE_ALERT, payload: id });
  }, timeout || 4000);
};

export const removeAlert = id => dispatch => {
  dispatch({ type: REMOVE_ALERT, payload: id });
};

export const fetchPlaylists = id => async dispatch => {
  try {
    const res = await mdb.get(`/account/${id}/lists`);
    dispatch({ type: SET_LISTS, payload: res.data });
  } catch (err) {}
};

export const fetchWatchlists = id => async dispatch => {
  try {
    const movie = await mdb.get(`/account/${id}/watchlist/movies`);
    const tv = await mdb.get(`/account/${id}/watchlist/tv`);
    dispatch({
      type: SET_WATCHLISTS,
      payload: { movie: movie.data, tv: tv.data }
    });
  } catch (err) {}
};

export const fetchFavourites = id => async dispatch => {
  try {
    const movie = await mdb.get(`/account/${id}/favorite/movies`);
    const tv = await mdb.get(`/account/${id}/favorite/tv`);
    dispatch({
      type: SET_FAVOURITES,
      payload: { movie: movie.data, tv: tv.data }
    });
  } catch (err) {
    console.log(err);
  }
}

export const createList = ({ name, description }) => async dispatch => {
  try {
    const res = await mdb.post('/list', {
      name,
      description
    });
  } catch (err) {}
};

export const getUser = session_id => async dispatch => {
  try {
    const res = await mdb.get('/account', { params: { session_id } });
    window.localStorage.setItem('sessionId', session_id);
    dispatch({ type: SET_USER, payload: res.data });
  } catch (err) {}
};

export const openModal = () => ({
  type: OPEN_MODAL
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});

export const toggleWatchlist = (accountId, data,media) => async dispatch => {
  try {
    const res = await mdb.post(`/account/${accountId}/watchlist`, data);

    if (data.media_type === 'movie') {
      if (res.data.status_code === 1 || res.data.status_code === 12) {
        dispatch({ type: ADD_MOVIE_TO_WATCHLIST, payload: media });
        dispatch(setAlert('Added to Watchlist', 'success'));
      } else if (res.data.status_code === 13) {
        dispatch({ type: REMOVE_MOVIE_FROM_WATCHLIST, payload: data.media_id });
        dispatch(setAlert('Removed from Watchlist', 'success'));
      }
    } else {
      if (res.data.status_code === 1 || res.data.status_code === 12) {
        dispatch({ type: ADD_TV_TO_WATCHLIST, payload: media });
        dispatch(setAlert('Added to Watchlist', 'success'));
      } else if (res.data.status_code === 13) {
        dispatch({ type: REMOVE_TV_FROM_WATCHLIST, payload: data.media_id });
        dispatch(setAlert('Removed from Watchlist', 'success'));
      }
    }
  } catch (err) {}
};

export const toggleFavourite = (accountId, data,media) => async dispatch => {
  try {
    const res = await mdb.post(`/account/${accountId}/favorite`, data);

    if (data.media_type === 'movie') {
      if (res.data.status_code === 1 || res.data.status_code === 12) {
        dispatch({ type: ADD_MOVIE_TO_FAVOURITE, payload: media });
        dispatch(setAlert('Added to Favourite', 'success'));
      } else if (res.data.status_code === 13) {
        dispatch({ type: REMOVE_MOVIE_FROM_FAVOURITE, payload: data.media_id });
        dispatch(setAlert('Removed from Favourite', 'success'));
      }
    } else {
      if (res.data.status_code === 1 || res.data.status_code === 12) {
        dispatch({ type: ADD_TV_TO_FAVOURITE, payload: media });
        dispatch(setAlert('Added to Favourite', 'success'));
      } else if (res.data.status_code === 13) {
        dispatch({ type: REMOVE_TV_FROM_FAVOURITE, payload: data.media_id });
        dispatch(setAlert('Removed from Favourite', 'success'));
      }
    }
  } catch (err) {}
};

export const clearUserData = () => ({
  type: CLEAR_USER_DATA
});
