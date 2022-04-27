import React from "react";
import classes from "./MovieRating.module.css";
import {useSelector} from "react-redux";
import {getMovieDetailsPage} from "../../../Redux/Reducers/MovieDetailsSlice";

function MovieRating() {
  const movieDetails= useSelector(getMovieDetailsPage);
  const detail = movieDetails.payload.movieDetails.movieDetails;
  return (
    <div className={classes.movieRating}>
      <img src="https://img.icons8.com/color/48/000000/filled-star--v1.png" />
      <h3>{detail.imdbRating}/10</h3>
    </div>
  );
}

export default MovieRating;
