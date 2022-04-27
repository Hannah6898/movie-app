import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    movies: [],
}

export const movieSearchSlice = createSlice({
    name:"movies",
    initialState,
    reducers: {
       getMovies: (state, action)=>{
           state.movies = action.payload;
       }
    }
})

export const {getMovies} = movieSearchSlice.actions;

export default movieSearchSlice.reducer;
