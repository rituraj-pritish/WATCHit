import axios from 'axios'

const session_id = window.localStorage.getItem('sessionId') || ''

export default  axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    session_id
  }
})