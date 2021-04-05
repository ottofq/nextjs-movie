import React from 'react'
import Link from 'next/link'
import slugify from 'slugify'

import MovieCard, { MovieProps } from '../MovieCard'
import * as S from './styles'

export interface Props {
  movies: MovieProps[]
}

const SidebarMovies = ({ movies }: Props) => {
  return (
    <S.Container>
      <h2>Upcoming Movies</h2>
      <ul>
        {movies.map(movie => (
          <Link
            key={movie.id}
            href={`/movie/${movie.id}/${slugify(movie.title)}`}
          >
            <a>
              <li>
                <MovieCard movie={movie} />
              </li>
            </a>
          </Link>
        ))}
      </ul>
    </S.Container>
  )
}

export default SidebarMovies
