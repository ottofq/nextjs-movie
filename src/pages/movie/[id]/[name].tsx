import React from 'react'
import Head from 'next/head'

import MainContent from '../../../components/MainContent'
import api from '../../../services/api'

import * as S from '../../../styles/pages/Home'

interface Props {
  data: string
}

export const getServerSideProps = async ({ req, params }) => {
  const id = params.id

  const response = await api.get(`/movie/${id}`)

  const data = response.data

  return {
    props: {
      data
    }
  }
}

const Movie = ({ data }: Props) => {
  return (
    <>
      <Head>
        <title>Movies | Nome do Filme </title>
      </Head>
      <S.Container>
        <p>{JSON.stringify(data)}</p>
      </S.Container>
    </>
  )
}

export default Movie
