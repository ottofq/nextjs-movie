import React, { useState } from 'react'
import { format, parseISO } from 'date-fns'
import { AiFillStar } from 'react-icons/ai'
import { BsHeartFill, BsFillEyeFill } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'
import slugify from 'slugify'

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
          <S.FavButton>
            <BsHeartFill size={20} />
            <span data-text="Add to favorites">Add to favorites</span>
          </S.FavButton>
        </S.ActionsContainer>
      </S.ContentContainer>
      {showModal && (
        <TrailerModal youtubeId={trailer.key} closeModal={closeModal} />
      )}
    </S.Container>
  )
}

export default MovieDetails
