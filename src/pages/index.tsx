import React from 'react'
import Head from 'next/head'

import MainBanner from '../components/MainBanner'
import Slider from '../components/Slider'

import * as S from '../styles/pages/Home'

import api from '../services/api'

export interface Movie {
  id: string
  title: string
  genre_ids: number[]
  vote_average: number
  backdrop_path: string
}

export interface Props {
  nowPlayingMovies: Movie[]
  trendingMoviesWeek: Movie[]
  tvPopular: Movie[]
}

export const getServerSideProps = async () => {
  const nowPlayingMoviesResponse = await api.get('/movie/now_playing')
  const trendingMoviesWeekResponse = await api.get('trending/movie/week')
  const tvPopularResponse = await api.get('tv/popular')

  const nowPlayingMovies = nowPlayingMoviesResponse.data.results
  const trendingMoviesWeek = trendingMoviesWeekResponse.data.results
  const tvPopular = tvPopularResponse.data.results

  return {
    props: {
      nowPlayingMovies,
      trendingMoviesWeek,
      tvPopular
    }
  }
}

const Home = ({ nowPlayingMovies, trendingMoviesWeek, tvPopular }: Props) => {
  return (
    <>
      <Head>
        <title>Movies</title>
      </Head>
      <S.Container>
        <MainBanner />
        <Slider title="Now Playing" movies={nowPlayingMovies} />
        <Slider title="Trending Movies" movies={trendingMoviesWeek} />
        <Slider title="TV Popular" movies={tvPopular} />
      </S.Container>
    </>
  )
}

export default Home
