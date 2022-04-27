import React from "react";
import classes from "./MovieImage.module.css";
import {useSelector} from "react-redux";
import {getMovieDetailsPage} from "../../../Redux/Reducers/MovieDetailsSlice";

function MovieImage() {
  const movieDetails= useSelector(getMovieDetailsPage);
  const detail = movieDetails.payload.movieDetails.movieDetails;
  return (
    <div className={classes.image}>
      <img src={detail.Poster}></img>
    </div>
  );
}

export default MovieImage;
