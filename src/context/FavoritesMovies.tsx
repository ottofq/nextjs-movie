import React, { useReducer, Dispatch, useEffect } from 'react'
import { MovieProps } from '../components/MovieCard'

type InitialStateType = MovieProps[]

type Action =
  | { type: 'FAV:ADD_MOVIE'; payload: { movie: MovieProps } }
  | { type: 'FAV:REMOVE_MOVIE'; payload: { id: number } }
  | { type: 'FAV:LOAD_STORAGE'; payload: { movies: MovieProps[] } }

const initialState: InitialStateType = []

export const FavoriteContext = React.createContext<{
  favoriteMovies: InitialStateType
  dispatch: Dispatch<Action>
}>({ favoriteMovies: initialState, dispatch: () => null })

const reducer = (state: InitialStateType, action: Action): InitialStateType => {
  switch (action.type) {
    case 'FAV:ADD_MOVIE':
      return [...state, action.payload.movie]
    case 'FAV:REMOVE_MOVIE':
      return state.filter(movie => movie.id !== action.payload.id)
    case 'FAV:LOAD_STORAGE':
      return action.payload.movies
    default:
      return state
  }
}
export const FavoritesProvider: React.FC = ({ children }) => {
  const [favoriteMovies, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const favMovies = localStorage.getItem('@next-movies:favs')

    if (favMovies) {
      dispatch({
        type: 'FAV:LOAD_STORAGE',
        payload: { movies: JSON.parse(favMovies) }
      })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('@next-movies:favs', JSON.stringify(favoriteMovies))
  }, [favoriteMovies])

  return (
    <FavoriteContext.Provider value={{ favoriteMovies, dispatch }}>
      {children}
    </FavoriteContext.Provider>
  )
}

export default FavoriteContext
