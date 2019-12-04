import mdb from '../movieDB/mdb'
import {SET_CURRENT_TV} from '../actions/types'

export const getShow = (id) => async dispatch => {
  try {
    const res = await mdb.get(`/tv/${id}`,{
      params: {
        append_to_response: 'credits,images,videos'
      }
    })

    dispatch({type: SET_CURRENT_TV, payload: res.data})
  } catch (err) {
    
  }
}

