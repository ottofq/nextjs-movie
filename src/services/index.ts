import axios from 'axios'

const api = axios.create({
  baseURL: process.env.URL_LOCAL_API
})

export const searchTerm = async search => {
  try {
    const result = await api.get(`/api/search?query=${search}`)
    return result.data.movies.slice(0, 5)
  } catch (e) {
    return e.response
  }
}
