import React, { useRef } from 'react'
import Slider from 'react-slick'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'

import MovieCard, { MovieProps } from '../MovieCard'

import * as S from './styles'

export interface Props {
  movies: MovieProps[]
  title: string
}

const MovieSlider = ({ movies, title }: Props) => {
  const slider = useRef<Slider>()

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    useTransform: true,
    adaptiveHeight: true
  }

  function next() {
    slider.current.slickNext()
  }
  function previous() {
    slider.current.slickPrev()
  }

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>{title}</S.Title>
        <S.ActionsContainer>
          <button onClick={() => previous()}>
            <MdNavigateBefore size={24} />
          </button>
          <button onClick={() => next()}>
            <MdNavigateNext size={24} />
          </button>
        </S.ActionsContainer>
      </S.TitleContainer>
      <hr />
      <Slider ref={slider} {...settings}>
        {movies.map(movie => (
          <MovieCard
            id={movie.id}
            title={movie.title}
            genre_ids={movie.genre_ids}
            vote_average={movie.vote_average}
            backdrop_path={movie.backdrop_path}
            name={movie.name}
          />
        ))}
      </Slider>
    </S.Container>
  )
}

export default MovieSlider
