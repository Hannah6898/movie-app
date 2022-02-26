import React from "react";
import classes from "./Movie.module.css";

function Movie(props) {
  console.log(props.data);

  if (props.data === undefined) {
    return null;
  } else {
    return props.data.map((movie, i) => (
      <div className="m-3" key={movie.imdbID}>
      <img
        src={movie.Poster}
        alt={movie.Title}
        className={classes.img}
      ></img>
      </div>
    ));
  }
}

export default Movie;
