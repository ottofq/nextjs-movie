import React from 'react'

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
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Slider>
  )
}

export default MovieSlider
