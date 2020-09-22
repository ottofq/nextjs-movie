import React from 'react'
import Head from 'next/head'

import Header from '../Header'
import SidebarActions from '../SidebarActions'
import SidebarMovies from '../SidebarMovies'

import * as S from './styles'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Movies</title>
      </Head>
      <Header />
      <S.Container>
        <SidebarActions />
        {children}
        <SidebarMovies />
      </S.Container>
    </>
  )
}

export default Layout
