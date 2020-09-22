import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import * as S from './styles'
import axios from 'axios'
import useSWR from 'swr'

export interface Movie {
  title: string
  id: number
}

export interface Props {
  movies: Movie[]
}

const SidebarMovies = () => {
  const { data: response, error } = useSWR('/api/movies', axios)

  if (error) return <div>failed to load</div>
  if (!response) return <div>loading...</div>

  const movies = response.data.movies

  return (
    <S.Container>
      <h2>Treding Movies</h2>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link href={`/movie/${movie.id}/${movie.title.replace(/\s/g, '-')}`}>
            <a>{movie.title}</a>
          </Link>
        </li>
      ))}
    </S.Container>
  )
}

export default SidebarMovies
