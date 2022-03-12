import React from "react";
import classes from "./MoviePlot.module.css";

function MoviePlot() {
  return (
    <div>
      <div className={classes.container}>
        <p className={classes.title}>Plot</p>
        <p>
          A woman is released from prison after serving a sentence for a violent
          crime and re-enters a society that refuses to forgive her past.
        </p>
      </div>
    </div>
  );
}

export default MoviePlot;
