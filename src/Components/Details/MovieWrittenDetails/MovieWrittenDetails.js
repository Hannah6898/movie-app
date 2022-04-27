import React from "react";
import classes from "./MovieWrittenDetails.module.css";
import {useSelector} from "react-redux";
import {getMovieDetailsPage} from "../../../Redux/Reducers/MovieDetailsSlice";

function MovieWrittenDetails() {
  const movieDetails= useSelector(getMovieDetailsPage);
  const detail = movieDetails.payload.movieDetails.movieDetails;
  return (
    <div>
      <div className={classes.wrapper}>
        <p className={classes.heading}>Director</p>
        <p>{detail.Director}</p>
        <p className={classes.heading}>Writer</p>
        <p>{detail.Writer}</p>
        <p className={classes.heading}>Stars</p>
        <p>{detail.Actors}</p>
      </div>
    </div>
  );
}

export default MovieWrittenDetails;
