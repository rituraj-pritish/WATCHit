import axios from 'axios'
import config from '../config'

export default  axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: config.apiKey
  }
})