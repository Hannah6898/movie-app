import React from "react";
import classes from "./MovieImage.module.css";

function MovieImage(props) {
  return (
    <div className={classes.image}>
      <img src={props.details.Poster}></img>
    </div>
  );
}

export default MovieImage;
