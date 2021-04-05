import React, { useState } from 'react'
import Link from 'next/link'
import slugify from 'slugify'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { VscLoading } from 'react-icons/vsc'
import { useDebounce } from 'react-use'

import { MovieProps } from '../MovieCard'

import { searchTerm } from '../../services'

import * as S from './styles'

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState<Array<MovieProps>>([])
  const [loading, setLoading] = useState(false)

  const [, cancel] = useDebounce(
    async () => {
      const movies = await searchTerm(search)
      setMovies(movies)
      setLoading(false)
    },
    500,
    [search]
  )

  const handleSearch = e => {
    setSearch(e.target.value)
    setLoading(true)
  }

  return (
    <S.Wrapper>
      <AiOutlineSearch />
      <S.Input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search movie"
      />
      {!!search && (
        <S.Button onClick={() => setSearch('')}>
          <AiOutlineClose />
        </S.Button>
      )}
      {loading ? (
        <S.LoadingWrapper>
          <VscLoading />
        </S.LoadingWrapper>
      ) : (
        !!search && (
          <S.WrapperMovie>
            <S.Title>No results</S.Title>
          </S.WrapperMovie>
        )
      )}

      {movies.length > 0 && (
        <S.WrapperMovie>
          <ul>
            {movies.map(movie => (
              <Link
                key={movie.id}
                href={`/movie/${movie.id}/${slugify(movie.title)}`}
              >
                <a>
                  <S.MovieCard>
                    <S.MovieImage
                      src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                    />
                    <S.WrapperTitle>
                      <S.MovieTitle>{movie.title}</S.MovieTitle>
                      <S.MovieYear>{movie.release_date}</S.MovieYear>
                    </S.WrapperTitle>
                  </S.MovieCard>
                </a>
              </Link>
            ))}
          </ul>
        </S.WrapperMovie>
      )}
    </S.Wrapper>
  )
}

export default SearchInput
