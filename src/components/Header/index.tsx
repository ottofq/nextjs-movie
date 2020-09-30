import React from 'react'
import { BsHeartFill, BsFillEyeFill } from 'react-icons/bs'

import * as S from './styles'
import Logo from '../../assets/movie.svg'
import Link from 'next/link'

const Header = () => {
  return (
    <S.Container>
      <S.LogoContainer>
        <Link href="/">
          <a>
            <Logo />
            <h1>Next Movies</h1>
          </a>
        </Link>
      </S.LogoContainer>

      <S.ActionsContainer>
        <ul>
          <li>
            <Link href="/favorites">
              <a href="">
                <BsHeartFill size={25} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/watchlist">
              <a href="">
                <BsFillEyeFill size={25} />
              </a>
            </Link>
          </li>
        </ul>
      </S.ActionsContainer>
    </S.Container>
  )
}

export default Header
