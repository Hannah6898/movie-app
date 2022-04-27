import React from "react";
import classes from "./MovieDetailsHead.module.css";
import {useSelector} from "react-redux";
import {getMovieDetailsPage} from "../../../Redux/Reducers/MovieDetailsSlice";

function MovieDetailsHead() {
  const movieDetails= useSelector(getMovieDetailsPage);
  const detail = movieDetails.payload.movieDetails.movieDetails;
  return (
    <div className={classes.header}>
      <h1>{detail.Title}</h1>
      <h2>{detail.Year}</h2>
    </div>
  );
}

export default MovieDetailsHead;
