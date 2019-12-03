import {
  SET_NOWPLAYING,
  SET_CURRENT_MOVIE,
  REMOVE_CURRENT_MOVIE,
  SET_SEARCH_RESULTS,
  REMOVE_SEARCH_RESULTS
} from '../actions/types';

const initialState = {
  current: null,
  search: {
    results: [],
    query: ''
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
        current: payload
      };
    case REMOVE_CURRENT_MOVIE:
      return {
        ...state,
        current: null,
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
        }
      }
    default:
      return state;
  }
};
