import mdb from '../movieDB/mdb'
import {SET_CURRENT_PERSON,REMOVE_CURRENT_PERSON} from '../actions/types'

export const getPerson = (id) => async dispatch => {
  try {
    const res = await mdb.get(`/person/${id}`, {
      params: {
        append_to_response: 'images,tagged_images,combined_credits'
      }
    })

    dispatch({type: SET_CURRENT_PERSON, payload: res.data})
  } catch (err) {
    
  }
}

export const removeCurrentPerson = () => ({
  type: REMOVE_CURRENT_PERSON
})