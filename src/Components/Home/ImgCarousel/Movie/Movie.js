import React from "react";
import classes from "./Movie.module.css";
import {Link} from "react-router-dom";

function Movie(props) {
  if (props.data === undefined) {
    return null;
  } else {
    return props.data.map((movie, i) => (
      <div className="m-3" key={movie.imdbID} onClick={()=>props.getMovieDetails(movie)}>
        <Link to="/details">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className={classes.img}
      ></img>
      </Link>
      </div>
    ));
  }
}

export default Movie;
