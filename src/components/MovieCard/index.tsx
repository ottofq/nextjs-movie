/* eslint-disable camelcase */
import React from 'react'
import { AiFillStar } from 'react-icons/ai'

import * as S from './styles'
import movieGenres from './movieGenres'

export interface GenreProps {
  id: number
  name: string
}

export interface MovieProps {
  id: number
  title: string
  original_title: string
  overview: string
  genre_ids?: number[]
  genre?: GenreProps[]
  poster_path: string
  release_date: string
  genres: GenreProps[]
  runtime: number
  vote_average?: number
  backdrop_path: string
}

interface Props {
  movie: MovieProps
}

const MovieCard = ({ movie }: Props) => {
  const sliceGenres = movie.genre_ids.slice(0, 3)

  const genreNames = movieGenres.filter(item => sliceGenres.includes(item.id))

  return (
    <S.Container>
      <S.Image
        loading="lazy"
        src={
          movie?.backdrop_path
            ? `https://image.tmdb.org/t/p/w300${movie.backdrop_path}`
            : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
        }
        alt={movie.title}
        title={movie.title}
      />
      <S.MovieName>{movie.title}</S.MovieName>
      <S.Genres>
        <p>{genreNames.map(item => item.name).join(', ')}</p>
        {movie.vote_average ? (
          <>
            <AiFillStar size={15} />
            <span>{movie.vote_average}/10</span>
          </>
        ) : (
          ''
        )}
      </S.Genres>
    </S.Container>
  )
}

export default MovieCard
