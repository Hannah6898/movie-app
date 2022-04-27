import { configureStore } from '@reduxjs/toolkit'
import favouritesReducer from './Reducers/FavouritesSlice'
import movieDetailsReducer from './Reducers/MovieDetailsSlice'
import movieSearchReducer from './Reducers/MovieSearchSlice'

export default configureStore({
    reducer: {
      favourites: favouritesReducer,
      movieDetails: movieDetailsReducer,
      movieSearch: movieSearchReducer
    },
  })
  