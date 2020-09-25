import React from 'react'

import * as S from './styles'

export interface Props {
  imageId: string
  name: string
  character: string
}

const PeopleCard = ({ imageId, name, character }: Props) => {
  return (
    <S.Container>
      <S.Image
        src={
          imageId
            ? `https://image.tmdb.org/t/p/w138_and_h175_face/${imageId}`
            : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'
        }
      />
      <S.Name>{name}</S.Name>
      <S.Character>{character}</S.Character>
    </S.Container>
  )
}

export default PeopleCard
