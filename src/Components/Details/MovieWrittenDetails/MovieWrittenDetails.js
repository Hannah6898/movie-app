import React from "react";
import classes from "./MovieWrittenDetails.module.css";

function MovieWrittenDetails(props) {
  return (
    <div>
      <div className={classes.wrapper}>
        <p>Director</p>
        <p>{props.details.Director}</p>
        <p>Writer</p>
        <p>{props.details.Writer}</p>
        <p>Stars</p>
        <p>{props.details.Actors}</p>
      </div>
    </div>
  );
}

export default MovieWrittenDetails;
