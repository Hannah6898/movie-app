import React from "react";
import classes from "./Movie.module.css";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import {getMovies} from '../../../../Redux/Reducers/MovieSearchSlice'

function Movie(props) {
  const movies = useSelector(getMovies)
  const movieList = Object.values(movies.payload.movieSearch.movies);

  if (movieList=== undefined) {
    return null;
  } else {
    return movieList.map((movie, i) => {
      return movie.Poster == "N/A"? null :
      <div
        className="m-3 "
        key={movie.imdbID}
        onClick={() => props.getMovieDetails(movie)}
      >
        <Link to="/details">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className={classes.img}
          ></img>
        </Link>
      </div>
    });
  }
}




export default Movie;
