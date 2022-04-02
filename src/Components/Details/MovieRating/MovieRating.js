import React from "react";
import classes from "./MovieRating.module.css";

function MovieRating(props) {
  return (
    <div className={classes.movieRating}>
      <img src="https://img.icons8.com/color/48/000000/filled-star--v1.png" />
      <h3>{props.details.imdbRating}/10</h3>
    </div>
  );
}

export default MovieRating;
