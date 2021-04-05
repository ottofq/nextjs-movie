import React from 'react'
import { AiFillGithub } from 'react-icons/ai'

import * as S from './styles'

const Footer = () => {
  return (
    <S.Container>
      <a
        href="https://github.com/ottofq/nextjs-movie"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub title="Github" size={40} />
      </a>
    </S.Container>
  )
}

export default Footer
