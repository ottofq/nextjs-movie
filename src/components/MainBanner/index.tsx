import React from 'react'

import * as S from './styles'

const MainBanner = () => {
  return (
    <S.Container>
      <S.Title>Next Movies</S.Title>
      <S.Description>
        <p>
          Simple project for movies pages make with{' '}
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            Next.js
          </a>
        </p>
        <p>
          Movies data provided by{' '}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noreferrer"
          >
            The Movie Database API
          </a>
        </p>
      </S.Description>
    </S.Container>
  )
}

export default MainBanner
