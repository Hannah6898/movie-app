import React from "react";
import classes from "./Favourites.module.css";
import { useSelector } from "react-redux";
import { addToFavourites } from "../../../../Redux/Reducers/FavouritesSlice";

function Favourties() {
  const favourite = useSelector(addToFavourites);
  const favouriteList = Object.values(favourite.payload.favourites);

  if (favouriteList === undefined) {
    return null;
  } else {
    return favouriteList.map((movie, i) => (
      <div className="m-3 image-container" key={movie.imdbID}>
        <img src={movie.Poster} alt={movie.Title} className={classes.img}></img>
        <div className="overlay d-flex align-items-center justify-content-center">
          Remove
        </div>
      </div>
    ));
  }
}

export default Favourties;
