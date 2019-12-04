import { SET_CURRENT_PERSON } from "../actions/types";


const initialState = {
  current: null,
  loading: true
}

export default (state=initialState,{type,payload}) => {
  switch(type) {
    case SET_CURRENT_PERSON:
      return {
        ...state,
        loading: false,
        current: payload
      }
    default:
      return state
  }
}