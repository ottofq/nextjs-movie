import React, { useContext } from 'react'
import Link from 'next/link'
import slugify from 'slugify'
import { FaTrash } from 'react-icons/fa'

import { FavoriteContext } from '../../context/FavoritesMovies'

import * as S from './styles'

const FavCard = ({ title, id, imgSrc, genres, description }) => {
  const { dispatch } = useContext(FavoriteContext)

  const handleButton = () => {
    dispatch({ type: 'FAV:REMOVE_MOVIE', payload: { id } })
  }
  return (
    <S.Container>
      <S.Image
        src={
          imgSrc
            ? `https://image.tmdb.org/t/p/w300${imgSrc}`
            : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
        }
        title={title}
      />
      <S.DescriptionContainer>
        <Link href={`/movie/${id}/${slugify(title)}`}>
          <S.Title>{title}</S.Title>
        </Link>
        <S.Genres>{genres.map(item => item.name).join(', ')}</S.Genres>
        <S.Description>{description}</S.Description>
      </S.DescriptionContainer>
      <S.Button title="Remove from favorites" onClick={handleButton}>
        <FaTrash size={24} />
      </S.Button>
    </S.Container>
  )
}

export default FavCard
