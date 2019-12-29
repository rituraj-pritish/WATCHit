import axios from 'axios'

const session_id = window.localStorage.getItem('sessionId') || ''

export default  axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'c4e5e25acde2c068be87859f63627ded',
    session_id 
  }
})