import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

api.defaults.params = {
  api_key: process.env.API_KEY
}

export default api
