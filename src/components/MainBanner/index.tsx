import React from 'react'

import * as S from './styles'

interface Props {
  imageURL: string
}

const MainBanner = () => {
  return (
    <S.Container>
      <S.DescriptionContainer>
        <S.Title>Mulan</S.Title>
        <S.ContainerInfo>
          <S.Genres>Drama,Action,War,Fantasy,Adventure</S.Genres>
          <S.Avarage>7.5/10</S.Avarage>
        </S.ContainerInfo>
        <S.Description>
          When the Emperor of China issues a decree that one man per family must
          serve in the Imperial Chinese Army to defend the country from Huns,
          Hua Mulan, the eldest daughter of an honored warrior, steps in to take
          the place of her ailing father. She is spirited, determined and quick
          on her feet. Disguised as a man by the name of Hua Jun, she is tested
          every step of the way and must harness her innermost strength and
          embrace her true potential.
        </S.Description>
      </S.DescriptionContainer>
    </S.Container>
  )
}

export default MainBanner
