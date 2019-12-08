import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_USER,
  SET_LISTS,
  SET_WATCHLISTS,
  SET_ALERT,
  REMOVE_ALERT,
  ADD_MOVIE_TO_WATCHLIST,
  REMOVE_MOVIE_FROM_WATCHLIST,
  ADD_TV_TO_WATCHLIST,
  REMOVE_TV_FROM_WATCHLIST,
  CLEAR_USER_DATA
} from '../actions/types';

const initialState = {
  user: null,
  modalOpen: false,
  lists: null,
  watchlist: {
    tv: [],
    movie: []
  },
  alerts: [],
  loading: true
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
        loading: false
      };
    case SET_LISTS:
      return {
        ...state,
        lists: payload,
        loading: false
      };
    case SET_WATCHLISTS:
      return {
        ...state,
        watchlist: {
          movie: payload.movie.results,
          tv: payload.tv.results
        },
        loading: false
      };
    case ADD_MOVIE_TO_WATCHLIST:
      return {
        ...state,
        watchlist: {
          movie: [{ id: payload }, ...state.watchlist.movie],
          tv: state.watchlist.tv
        },
        loading: false
      };
    case REMOVE_MOVIE_FROM_WATCHLIST:
      return {
        ...state,
        watchlist: {
          movie: state.watchlist.movie.filter(item => item.id !== payload),
          tv: state.watchlist.tv
        },
        loading: false
      };
    case ADD_TV_TO_WATCHLIST:
      return {
        ...state,
        watchlist: {
          movie: state.watchlist.movie,
          tv: [{ id: payload }, ...state.watchlist.tv]
        },
        loading: false
      };
    case REMOVE_TV_FROM_WATCHLIST:
      return {
        ...state,
        watchlist: {
          movie: state.watchlist.movie,
          tv: state.watchlist.tv.filter(item => item.id !== payload)
        },
        loading: false
      };
    case OPEN_MODAL:
      return {
        ...state,
        modalOpen: true,
        loading: false
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalOpen: false,
        loading: false
      };
    case SET_ALERT:
      return {
        ...state,
        alerts: [...state.alerts, payload],
        loading: false
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter(err => err.id !== payload),
        loading: false
      };
    case CLEAR_USER_DATA:
      return {
        user: null,
        modalOpen: false,
        lists: null,
        watchlist: {
          tv: [],
          movie: []
        },
        alerts: [],
        loading: false
      };
    default:
      return state;
  }
};
