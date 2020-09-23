import React from 'react'
import Link from 'next/link'
import MovieCard from '../MovieCard'

import * as S from './styles'
import axios from 'axios'
import useSWR from 'swr'

export interface Movie {
  title: string
  id: number
}

export interface Props {
  movies: Movie[]
}

const SidebarMovies = () => {
  const { data: response, error } = useSWR('/api/movies', axios)

  if (error) return <div>failed to load</div>
  if (!response) return <div>loading...</div>

  const movies = response.data.movies
  console.log(response.data.movies)

  return (
    <S.Container>
      <h2>Upcoming Movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              key={movie.id}
              href={`/movie/${movie.id}/${movie.title.replace(/\s/g, '-')}`}
            >
              <a>
                <MovieCard
                  title={movie.title}
                  backdrop_path={movie.backdrop_path}
                  genre_ids={movie.genre_ids || []}
                  id={movie.id}
                />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </S.Container>
  )
}

export default SidebarMovies
