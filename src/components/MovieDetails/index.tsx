import React, { useState, useContext, useMemo } from 'react'
import { format, parseISO } from 'date-fns'
import { AiFillStar } from 'react-icons/ai'
import { BsHeartFill, BsFillEyeFill } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'
import slugify from 'slugify'

import { FavoriteContext } from '../../context/FavoritesMovies'
import Button from '../Button'
import TrailerModal from '../TrailerModal'
import { MovieProps } from '../MovieCard'

import * as S from './styles'
import Link from 'next/link'

export interface TrailerProps {
  id: number
  key: string
  site: number
}

export interface CrewProps {
  id: number
  name: string
  job: string
}

interface Props {
  movie: MovieProps
  crews: CrewProps[]
  trailer: TrailerProps
}

const MovieDetails = ({ movie, crews, trailer }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const { favoriteMovies, dispatch } = useContext(FavoriteContext)

  function formatDate(date: string) {
    const parseDate = parseISO(date)
    return format(parseDate, 'dd/MM/yyyy')
  }

  function timeConvert(num: number) {
    const hours = Math.floor(num / 60)
    const minutes = num % 60
    return `${hours}h ${minutes}m`
  }

  function closeModal() {
    setShowModal(false)
  }

  function openModal() {
    setShowModal(true)
  }

  function addFavorites() {
    dispatch({ type: 'FAV:ADD_MOVIE', payload: { movie } })
  }

  function removeFavorites() {
    dispatch({ type: 'FAV:REMOVE_MOVIE', payload: { id: movie.id } })
  }

  const liked = useMemo(
    () => favoriteMovies.find(favMovie => favMovie.id === movie.id),
    [favoriteMovies]
  )

  return (
    <S.Container>
      <S.PosterImage
        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
      />
      <S.ContentContainer>
        <S.TitleContainer>
          <S.Title>{movie.title}</S.Title>
          <>
            <AiFillStar size={24} />
            <span>{movie.vote_average}/10</span>
          </>
        </S.TitleContainer>
        <S.Facts>
          <span>{formatDate(movie.release_date)}</span>
          <span> {movie.genres.map(genre => genre.name).join(', ')}</span>
          <span>{timeConvert(movie.runtime)}</span>
        </S.Facts>
        <S.Details>{movie.overview}</S.Details>
        <S.TitleActors>Crew</S.TitleActors>
        <S.CrewsNameContainer>
          {crews.map(crew => (
            <li key={crew.id}>
              <Link href={`/person/${crew.id}/${slugify(crew.name)}`}>
                <a>
                  <p>{crew.name}</p>
                </a>
              </Link>
              <p>{crew.job}</p>
            </li>
          ))}
        </S.CrewsNameContainer>
        <S.ActionsContainer>
          {trailer?.key && (
            <Button Icon={<FaPlay size={20} />} onClick={() => openModal()}>
              Watch Trailer
            </Button>
          )}

          <Button Icon={<BsFillEyeFill size={20} />}>Add Watch List</Button>

          {liked ? (
            <S.FavButton onClick={() => removeFavorites()}>
              <BsHeartFill color="#F00" size={20} />
              <span data-text="Remove from favorites">
                Remove from favorites
              </span>
            </S.FavButton>
          ) : (
            <S.FavButton onClick={() => addFavorites()}>
              <BsHeartFill size={20} />
              <span data-text="Add to favorites">Add to favorites</span>
            </S.FavButton>
          )}
        </S.ActionsContainer>
      </S.ContentContainer>
      {showModal && (
        <TrailerModal youtubeId={trailer.key} closeModal={closeModal} />
      )}
    </S.Container>
  )
}

export default MovieDetails
