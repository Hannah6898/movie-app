import React from "react";
import classes from "./FavBtn.module.css";
import {useSelector} from "react-redux";
import {getMovieDetailsPage} from "../../../Redux/Reducers/MovieDetailsSlice";

function FavBtn(props) {
  const movieDetails= useSelector(getMovieDetailsPage);
  const detail = movieDetails.payload.movieDetails.movieDetails;
  return (
    <div className={classes.favourite}>
      <button
        disabled={props.disableFav}
        className={classes.favouritebtn}
        onClick={() => props.handleFavouritesClick(detail)}
      >
        Add to Favourties
      </button>
    </div>
  );
}

export default FavBtn;
