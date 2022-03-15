import React from "react";
import classes from "./MovieDetailsHead.module.css";

function MovieDetailsHead(props) {

  return (
    <div className={classes.header}>
      <h1>{props.details.Title}</h1>
      <h2>{props.details.Year}</h2>
    </div>
  );
}

export default MovieDetailsHead;
