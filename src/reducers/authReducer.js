import { LOGIN, LOGOUT, AUTH_ERROR } from '../actions/types';

const initialState = {
  isAuth: false,
  loading: true,
  sessionId: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        isAuth: true,
        loading: false,
        sessionId: payload 
      };
    case LOGOUT:
    case AUTH_ERROR:
      return {
        ...state,
        isAuth: false,
        loading: false,
        sessionId: ''
      }
    default:
      return state;
  }
};
