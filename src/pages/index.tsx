import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import MainBanner from '../components/MainBanner'
import SliderMovies from '../components/SliderMovies'
import { MovieProps } from '../components/MovieCard'

import * as S from '../styles/pages/Home'

import api from '../services/api'

export interface Props {
  nowPlayingMovies: MovieProps[]
  trendingMoviesWeek: MovieProps[]
  topRated: MovieProps[]
  upcoming: MovieProps[]
}

export const getStaticProps: GetStaticProps = async () => {
  const nowPlayingMoviesResponse = await api.get('/movie/now_playing')
  const trendingMoviesWeekResponse = await api.get('trending/movie/week')
  const tvPopularResponse = await api.get('tv/popular')
  const topRatedResponse = await api.get('movie/top_rated')
  const upcomingMoviesResponse = await api.get('/movie/upcoming')

  const nowPlayingMovies = nowPlayingMoviesResponse.data.results
  const trendingMoviesWeek = trendingMoviesWeekResponse.data.results
  const tvPopular = tvPopularResponse.data.results
  const topRated = topRatedResponse.data.results
  const upcoming = upcomingMoviesResponse.data.results

  return {
    props: {
      nowPlayingMovies,
      trendingMoviesWeek,
      tvPopular,
      topRated,
      upcoming
    }
  }
}

const Home: React.FC<Props> = ({
  nowPlayingMovies,
  trendingMoviesWeek,
  topRated,
  upcoming
}) => {
  return (
    <S.Container>
      <Head>
        <title>Next Movies</title>
      </Head>
      <S.MainContainer>
        <MainBanner />
        <SliderMovies title="Now Playing" movies={nowPlayingMovies} />
        <SliderMovies title="Trending Movies" movies={trendingMoviesWeek} />
        <SliderMovies title="Top Rated" movies={topRated} />
        <SliderMovies title="Upcoming" movies={upcoming} />

        {/* <SliderMovies title="TV Popular" movies={tvPopular} /> */}
      </S.MainContainer>
    </S.Container>
  )
}

export default Home
