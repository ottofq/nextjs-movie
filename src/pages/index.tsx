import React from 'react'
import Head from 'next/head'

import MainContent from '../components/MainContent'
import MainBanner from '../components/MainBanner'
import Slider from '../components/Slider'

import * as S from '../styles/pages/Home'

import api from '../services/api'

export interface Movie {
  title: string
  id: number
}

export interface Props {
  nowPlayingMovies: Movie[]
}

export const getServerSideProps = async () => {
  const nowPlayingMoviesResponse = await api.get('/movie/now_playing')

  const nowPlayingMovies = nowPlayingMoviesResponse.data.results

  return {
    props: {
      nowPlayingMovies
    }
  }
}

const Home = ({ nowPlayingMovies }: Props) => {
  return (
    <>
      <Head>
        <title>Movies</title>
      </Head>
      <S.Container>
        <MainBanner />
        {/* <MainContent data={nowPlayingMovies} /> */}
        <Slider />
      </S.Container>
    </>
  )
}

export default Home
