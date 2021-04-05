import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import PersonDetails from '../../../components/PersonDetails'
import SliderMovies from '../../../components/SliderMovies'

import api from '../../../services/api'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params

  const personDataResponse = await api.get(`/person/${id}`)
  const socialIdsResponse = await api.get(`/person/${id}/external_ids`)
  const personMovieResponse = await api.get(`/person/${id}/movie_credits`)

  const person = personDataResponse.data
  const socialIds = socialIdsResponse.data
  const movies = personMovieResponse.data

  return {
    props: {
      person,
      movies,
      socialIds
    }
  }
}
const PersonPage = ({ person, movies, socialIds }) => {
  const moviesArr =
    person.known_for_department === 'Directing' ? movies.crew : movies.cast

  return (
    <>
      <Head>
        <title>{`Next Movies | ${person.name} `}</title>
      </Head>
      <PersonDetails person={person} socialIds={socialIds} />
      {moviesArr.length > 0 ? (
        <SliderMovies title="Movies" movies={moviesArr} />
      ) : (
        ''
      )}
    </>
  )
}
export default PersonPage
