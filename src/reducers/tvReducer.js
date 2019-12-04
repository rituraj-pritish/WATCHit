import { SET_CURRENT_TV } from '../actions/types';

const initialState = {
  current: null,
  loading: true
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_TV:
      return {
        ...state,
        loading: false,
        current: payload
      };
    default:
      return state;
  }
};
