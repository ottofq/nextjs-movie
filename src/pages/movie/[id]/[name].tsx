import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

import MovieDetails, {
  CrewProps,
  TrailerProps
} from '../../../components/MovieDetails'
import { MovieProps } from '../../../components/MovieCard'
import SliderPeople, { PeopleProps } from '../../../components/SliderPeople'
import SliderMovies from '../../../components/SliderMovies'

import api from '../../../services/api'
import * as S from '../../../styles/pages/Movie'

interface Props {
  movie: MovieProps
  similar: MovieProps[]
  crews: CrewProps[]
  trailer: TrailerProps[]
  cast: PeopleProps[]
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params

  const movieDataResponse = await api.get(`/movie/${id}`)
  const videoDataResponse = await api.get(`/movie/${id}/videos`)
  const creditsDataResponse = await api.get(`/movie/${id}/credits`)
  const similarMovieResponse = await api.get(`/movie/${id}/similar`)

  const crewFilter = ['Directing', 'Writing']

  const movie = movieDataResponse.data
  const video = videoDataResponse.data.results
  const cast = creditsDataResponse.data.cast
  const crews = creditsDataResponse.data.crew.filter(
    item => crewFilter.includes(item.department) && item.job !== 'Layout'
  )
  const similar = similarMovieResponse.data.results

  return {
    props: {
      movie,
      similar,
      trailer: video,
      cast: cast.slice(0, 16),
      crews
    }
  }
}

const Movie: React.FC<Props> = ({ movie, similar, trailer, cast, crews }) => {
  return (
    <>
      <Head>
        <title>{`Next Movies | ${movie.title} `}</title>
      </Head>
      <S.Container>
        <S.Wrapper>
          <S.MovieInfo>
            <MovieDetails
              movie={movie}
              trailer={trailer.length > 0 ? trailer[0] : null}
              crews={crews}
            />
          </S.MovieInfo>

          <S.Movies>
            <SliderPeople title="Cast" peoples={cast} />
            <SliderMovies title="Similar Movies" movies={similar} />
          </S.Movies>
        </S.Wrapper>
      </S.Container>
    </>
  )
}

export default Movie
