import React from "react";
import classes from "./MoviePlot.module.css";
import {useSelector} from "react-redux";
import {getMovieDetailsPage} from "../../../Redux/Reducers/MovieDetailsSlice";

function MoviePlot() {
  const movieDetails= useSelector(getMovieDetailsPage);
  const detail = movieDetails.payload.movieDetails.movieDetails;
  return (
    <div>
      <div className={classes.container}>
        <p className={classes.title}>Plot</p>
        <p>{detail.Plot}</p>
      </div>
    </div>
  );
}

export default MoviePlot;
