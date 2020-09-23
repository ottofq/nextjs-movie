import React from 'react'
import Link from 'next/link'
import { AiFillStar } from 'react-icons/ai'

import * as S from './styles'
import movieGenres from './movieGenres'

export interface MovieProps {
  id: string
  title: string
  name?: string
  genre_ids: number[]
  vote_average?: number
  backdrop_path: string
}

const MovieCard = ({
  id,
  title,
  name,
  genre_ids,
  vote_average,
  backdrop_path
}: MovieProps) => {
  const sliceGenres = genre_ids.slice(0, 3)

  const genreNames = movieGenres.filter(item => sliceGenres.includes(item.id))

  return (
    <Link
      href={`/movie/${id}/${
        name?.replace(/\s/g, '-') || title?.replace(/\s/g, '-')
      }`}
    >
      <a>
        <S.Container>
          <S.Image
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          />
          <S.MovieName>{name || title}</S.MovieName>
          <S.Genres>
            <p>{genreNames.map(item => item.name).join(', ')}</p>
            {vote_average ? (
              <>
                <AiFillStar size={15} />
                <span>{vote_average}/10</span>
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
