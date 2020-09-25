import React from 'react'
import Link from 'next/link'
import MovieCard, { MovieProps } from '../MovieCard'

import * as S from './styles'
import axios from 'axios'
import useSWR from 'swr'

export interface Props {
  movies: MovieProps[]
}

const SidebarMovies = () => {
  const { data: response, error } = useSWR('/api/movies', axios, {
    refreshInterval: 0
  })

  if (error) return <div>failed to load</div>
  if (!response) return <div>loading...</div>

  const movies = response.data.movies

  return (
    <S.Container>
      <h2>Upcoming Movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </S.Container>
  )
}

export default SidebarMovies
