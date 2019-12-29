import { SET_CURRENT_TV, SET_DISCOVER_TV,REMOVE_CURRENT_TV } from '../actions/types';

const initialState = {
  current: null,
  loading: true,
  discover: {
    airing_today: null,
    topRated: null,
    upcoming: null
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_TV:
      return {
        ...state,
        loading: false,
        current: payload
      };
    case REMOVE_CURRENT_TV:
      return {
        ...state,
        loading: false,
        current: null
      };
    case SET_DISCOVER_TV:
      return {
        ...state,
        discover: {
          airing_today: payload.upcoming,
          topRated: payload.topRated,
          popular: payload.popular
        },
        loading: false
      };
    default:
      return state;
  }
};
