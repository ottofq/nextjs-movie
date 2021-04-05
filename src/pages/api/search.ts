import { NextApiRequest, NextApiResponse } from 'next'
import api from '../../services/api'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { query } = req.query

    const movies = await api.get(`/search/movie?query=${query}`)

    res.setHeader('Content-Type', 'application/json')
    return res.status(200).json({ movies: movies.data.results })
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}
