import {
  SET_NOWPLAYING,
  SET_CURRENT_MOVIE,
  REMOVE_CURRENT_MOVIE,
  SET_SEARCH_RESULTS,
  REMOVE_SEARCH_RESULTS,
  SET_DISCOVER_MOVIES
} from '../actions/types';

const initialState = {
  current: null,
  search: {
    results: [],
    query: ''
  },
  discover: {
    popular: null,
    topRated: null,
    upcoming: null
  },
  nowPlaying: {},
  loading: true
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_NOWPLAYING:
      return {
        ...state,
        nowPlaying: payload,
        loading: false
      };
    case SET_CURRENT_MOVIE:
      return {
        ...state,
        current: payload,
        loading: false
      };
    case REMOVE_CURRENT_MOVIE:
      return {
        ...state,
        current: null,
        loading: false
      };
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        search: {
          results: payload.results,
          query: payload.query
        },
        loading: false
      };
    case REMOVE_SEARCH_RESULTS:
      return {
        ...state,
        search: {
          results: [],
          query: ''
        },
        loading: false
      };
    case SET_DISCOVER_MOVIES:
      return {
        ...state,
        discover: {
          upcoming: payload.upcoming,
          topRated: payload.topRated,
          popular: payload.popular
        },
        loading: false

      };
    default:
      return state;
  }
};
