import React from "react";
import classes from "./MovieWrittenDetails.module.css";

function MovieWrittenDetails(props) {
  return (
    <div>
      <div className={classes.wrapper}>
        <p className={classes.heading}>Director</p>
        <p>{props.details.Director}</p>
        <p className={classes.heading}>Writer</p>
        <p>{props.details.Writer}</p>
        <p className={classes.heading}>Stars</p>
        <p>{props.details.Actors}</p>
      </div>
    </div>
  );
}

export default MovieWrittenDetails;
