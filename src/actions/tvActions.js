import mdb from '../movieDB/mdb'
import {SET_CURRENT_TV, SET_DISCOVER_TV} from '../actions/types'

export const getShow = (id) => async dispatch => {
  try {
    const res = await mdb.get(`/tv/${id}`,{
      params: {
        append_to_response: 'credits,images,videos,recommendations'
      }
    })

    dispatch({type: SET_CURRENT_TV, payload: res.data})
  } catch (err) {
    
  }
}

export const discoverTv = () => async dispatch => {
  try {
    const airing_today = await mdb.get('/tv/airing_today');
    const popular = await mdb.get('/tv/popular');
    const topRated = await mdb.get('/tv/top_rated');

    dispatch({
      type: SET_DISCOVER_TV,
      payload: {
        upcoming: airing_today.data.results,
        popular: popular.data.results,
        topRated: topRated.data.results
      }
    });
  } catch (err) {}
};

