import { SET_NOWPLAYING } from '../actions/types';

const initialState = {
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
    default:
      return state;
  }
};
