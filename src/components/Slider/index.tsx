import React, { useRef } from 'react'
import Slider from 'react-slick'
import { GrNext, GrPrevious } from 'react-icons/gr'

import MovieCard from '../MovieCard'

import * as S from './styles'

const MovieSlider = () => {
  const slider = useRef<Slider>()

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerPadding: '10px'
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
        <S.Title>Now Playing</S.Title>
        <S.ActionsContainer>
          <button onClick={() => previous()}>
            <GrPrevious size={18} />
          </button>
          <button onClick={() => next()}>
            <GrNext size={18} />
          </button>
        </S.ActionsContainer>
      </S.TitleContainer>
      <Slider ref={slider} {...settings}>
        <div>
          <MovieCard />
        </div>
        <div>
          <MovieCard />
        </div>
        <div>
          <MovieCard />
        </div>
        <div>
          <MovieCard />
        </div>
        <div>
          <MovieCard />
        </div>
        <div>
          <MovieCard />
        </div>
      </Slider>
    </S.Container>
  )
}

export default MovieSlider
