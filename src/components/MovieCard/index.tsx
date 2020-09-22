import React from 'react'

import * as S from './styles'

const MovieCard = () => {
  return (
    <S.Container>
      <S.Image src="https://image.tmdb.org/t/p/original/zzWGRw277MNoCs3zhyG3YmYQsXv.jpg" />
      <S.MovieName>Mulan</S.MovieName>
      <S.Genres>
        <p>Drama</p>
        <span>7.5/10</span>
      </S.Genres>
    </S.Container>
  )
}

export default MovieCard
