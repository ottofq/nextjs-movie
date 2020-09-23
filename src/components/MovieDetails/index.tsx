import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsHeartFill, BsFillEyeFill } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'

import Button from '../Button'
import TrailerModal from '../TrailerModal'

import * as S from './styles'

const MovieDetails = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <S.Container>
      <S.PosterImage src="https://image.tmdb.org/t/p/w342/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg" />
      <S.ContentContainer>
        <S.TitleContainer>
          <S.Title>Mulan</S.Title>
          <>
            <AiFillStar size={24} />
            <span>7.4/10</span>
          </>
        </S.TitleContainer>
        <S.Details>
          When the Emperor of China issues a decree that one man per family must
          serve in the Imperial Chinese Army to defend the country from Huns,
          Hua Mulan, the eldest daughter of an honored warrior, steps in to take
          the place of her ailing father. She is spirited, determined and quick
          on her feet. Disguised as a man by the name of Hua Jun, she is tested
          every step of the way and must harness her innermost strength and
          embrace her true potential.
        </S.Details>
        <S.TitleActors>Actors</S.TitleActors>
        <S.ActorsNameContainer>
          <S.ActorName>Liu Yifei</S.ActorName>
          <S.ActorName>Liu Yifei</S.ActorName>
          <S.ActorName>Liu Yifei</S.ActorName>
          <S.ActorName>Liu Yifei</S.ActorName>
          <S.ActorName>Liu Yifei</S.ActorName>
          <S.ActorName>Liu Yifei</S.ActorName>
          <S.ActorName>Liu Yifei</S.ActorName>
        </S.ActorsNameContainer>
        <S.ActionsContainer>
          <Button
            Icon={<FaPlay size={20} />}
            onClick={() => setShowModal(true)}
          >
            Watch Trailer
          </Button>
          <Button Icon={<BsHeartFill size={20} />}>Fav</Button>
          <Button Icon={<BsFillEyeFill size={20} />}>Add Watch List</Button>
        </S.ActionsContainer>
      </S.ContentContainer>
      <TrailerModal setShow={setShowModal} show={showModal} />
    </S.Container>
  )
}

export default MovieDetails
