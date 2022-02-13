import React from "react";
import classes from "./Movie.module.css";

function Movie(props) {
    console.log(props.data)
  return (
    <div>
      {props.data.map((movie, i) => (
        // <div className="d-flex justify-content-start m-3">
          <img
          key={i}
            src={movie.Poster}
            alt={movie.Title}
            className={classes.img}
          ></img>
        // </div>
      ))}
    </div>
  );
}

export default Movie;
