import mdb from '../movieDB/mdb';
import { LOGIN, AUTH_ERROR, LOGOUT, SET_USER } from './types';
import { setAlert, getUser, fetchWatchlists, clearUserData } from './userActions';

export const login = () => async dispatch => {
  const redirectUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://watchit-watchit.herokuapp.com/dashboard'
      : 'http://localhost:3000/dashboard';

  try {
    const res = await mdb.get('/authentication/token/new');

    const request_token = res.data.request_token;

    if (res.data.success) {
      window.location.href = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=${redirectUrl}`;
    }

    window.localStorage.setItem('reqToken', request_token);
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

let callWatchlists = true
export const getSession = callOnEveryRender => async dispatch => {
  callWatchlists = callOnEveryRender;
  const request_token = window.localStorage.getItem('reqToken');
  const session_id = window.localStorage.getItem('sessionId');

  window.localStorage.removeItem('reqToken');
  try {
    let res;
    if (!session_id) {
      res = await mdb.post('/authentication/session/new', {
        request_token
      });
    }
    if (session_id || res.data.session_id) {
      dispatch(getUser(session_id ? session_id : res.data.session_id));

      //only call fetch Watchlists when user first login
      if (callWatchlists) {
        dispatch(fetchWatchlists());
      }

      dispatch({
        type: LOGIN,
        payload: session_id ? session_id : res.data.session_id
      });
    } else {
      dispatch({ type: AUTH_ERROR });
    }
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

export const logout = () => async dispatch => {
  const session_id = window.localStorage.getItem('sessionId');
  window.localStorage.removeItem('sessionId');

  dispatch({ type: LOGOUT });
  dispatch(clearUserData())

  await mdb.delete('/authentication/session', { session_id });
};
