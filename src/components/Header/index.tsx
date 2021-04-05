import React from 'react'

import * as S from './styles'
import Logo from '../../assets/movie.svg'
import Link from 'next/link'

import SearchInput from '../SearchInput'

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
        <SearchInput />
      </S.LogoContainer>

      <S.ActionsContainer>
        <ul>
          <li>
            <Link href="/favorites">
              <a>Favorites Movies</a>
            </Link>
          </li>
          <li>
            <Link href="/watchlist">
              <a href="">Watchlist</a>
            </Link>
          </li>
        </ul>
      </S.ActionsContainer>
    </S.Container>
  )
}

export default Header
