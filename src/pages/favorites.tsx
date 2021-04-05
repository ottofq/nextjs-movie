import React, { useContext } from 'react'

import { FavoriteContext } from '../context/FavoritesMovies'
import FavCard from '../components/FavCard'

import * as S from '../styles/pages/Favorites'

const Favorites = () => {
  const { favoriteMovies } = useContext(FavoriteContext)
  return (
    <S.Container>
      {favoriteMovies.length ? (
        favoriteMovies.map(movie => (
          <FavCard
            key={movie.id}
            title={movie.title}
            imgSrc={movie.backdrop_path}
            genres={movie.genres}
            id={movie.id}
            description={movie.overview}
          />
        ))
      ) : (
        <div>Empty</div>
      )}
    </S.Container>
  )
}

export default Favorites
