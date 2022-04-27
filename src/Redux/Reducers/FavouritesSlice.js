import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    favourites: [],
}

export const favouritesSlice = createSlice({
    name:"favourites",
    initialState,
    reducers: {
       addToFavourites: (state, action)=>{
           state.favourites = action.payload;
       }
    }
})

export const {addToFavourites} = favouritesSlice.actions;

export default favouritesSlice.reducer;
