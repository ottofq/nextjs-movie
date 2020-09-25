import React from 'react'
import Link from 'next/link'
import { AiFillStar } from 'react-icons/ai'
import slugify from 'slugify'

import * as S from './styles'
import movieGenres from './movieGenres'

export interface GenreProps {
  id: number
  name: string
}

export interface MovieProps {
  id: string
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

  const slug = slugify(movie.title)

  return (
    <Link href={`/movie/${movie.id}/${slug}`}>
      <a>
        <S.Container>
          <S.Image
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
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
      </a>
    </Link>
  )
}

export default MovieCard
