import {combineReducers} from 'redux'
import moviesReducer from './moviesReducer'
import authReducer from './authReducer'
import tvReducer from './tvReducer'
import personReducer from './personReducer'

export default combineReducers({
  movies: moviesReducer,
  auth: authReducer,
  tv: tvReducer,
  person: personReducer
})
