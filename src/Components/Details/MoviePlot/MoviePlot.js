import React from "react";
import classes from "./MoviePlot.module.css";

function MoviePlot(props) {
  return (
    <div>
      <div className={classes.container}>
        <p className={classes.title}>Plot</p>
        <p>{props.details.Plot}</p>
      </div>
    </div>
  );
}

export default MoviePlot;
