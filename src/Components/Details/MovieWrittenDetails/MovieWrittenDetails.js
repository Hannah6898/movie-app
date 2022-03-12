import React from "react";
import classes from "./MovieWrittenDetails.module.css";

function MovieWrittenDetails() {
  return (
    <div>
      <div className={classes.wrapper}>
        <p>Director</p>
        <p>Nora Fingscheidt</p>
        <p>Writer</p>
        <p>Peter Craig, Hillary Seitz, Courtenay Miles</p>
        <p>Stars</p>
        <p>Sandra Bullock, Viola Davis, Vincent D'Onofrio</p>
      </div>
    </div>
  );
}

export default MovieWrittenDetails;
