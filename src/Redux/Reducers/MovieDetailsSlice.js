import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    movieDetails: [],
}

export const movieDetailsSlice = createSlice({
    name:"movieDetails",
    initialState,
    reducers: {
       getMovieDetailsPage: (state, action)=>{
           state.movieDetails = action.payload;
       }
    }
})

export const {getMovieDetailsPage} = movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;
