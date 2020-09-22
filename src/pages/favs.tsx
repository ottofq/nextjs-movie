import React from 'react'
import Head from 'next/head'

import MainContent from '../components/MainContent'

import * as S from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Movies | Favoritos</title>
      </Head>
      <S.Container>
        <div>favoritos</div>
      </S.Container>
    </>
  )
}

export default Home
