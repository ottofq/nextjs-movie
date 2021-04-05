import React from 'react'
import { BsHeartFill, BsFillEyeFill } from 'react-icons/bs'

import * as S from './styles'

const SidebarActions = () => {
  return (
    <S.Container>
      <BsHeartFill size={25} />
      <BsFillEyeFill size={25} />
    </S.Container>
  )
}

export default SidebarActions
