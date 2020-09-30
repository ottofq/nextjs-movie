import React from 'react'
import Head from 'next/head'

import Header from '../Header'
import Footer from '../Footer'

import * as S from './styles'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Movies</title>
      </Head>
      <S.Container>
        <Header />
        <S.Main>{children}</S.Main>
        <Footer />
      </S.Container>
    </>
  )
}

export default Layout
