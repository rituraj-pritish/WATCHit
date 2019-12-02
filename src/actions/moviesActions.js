import mdb from '../movieDB/mdb'
import { SET_NOWPLAYING } from './types';

export const fetchNowPlayingMovies = () => async dispatch => {
  const res = await mdb.get('/movie/now_playing',{params: {api_key: 'c4e5e25acde2c068be87859f63627ded'}})
  
  dispatch({type: SET_NOWPLAYING, payload: res.data})
}