import React, { ReactChild, useRef } from 'react'
import Slider from 'react-slick'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'

import * as S from './styles'

export interface Props {
  title: string
  children: ReactChild[]
  slidesToShow?: number
}

const SliderContent = ({ children, title, slidesToShow = 4 }: Props) => {
  const slider = useRef<Slider>()

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 4,
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
        {children}
      </Slider>
    </S.Container>
  )
}

export default SliderContent
