import Link from 'next/link'
import React from 'react'
import slugify from 'slugify'

import MovieCard, { MovieProps } from '../MovieCard'
import Slider from '../Slider'

import * as S from './styles'

export interface Props {
  movies: MovieProps[]
  title: string
}

const MovieSlider = ({ movies, title }: Props) => {
  return (
    <Slider title={title}>
      {movies.map(movie => (
        <Link
          href={`/movie/${movie.id}/${slugify(movie.title)}`}
          key={movie.id}
        >
          <a>
            <MovieCard movie={movie} />
          </a>
        </Link>
      ))}
    </Slider>
  )
}

export default MovieSlider
