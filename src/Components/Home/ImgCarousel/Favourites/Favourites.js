import React from "react";
import classes from "./Favourites.module.css";

function Favourties(props) {
  console.log(props.favourites);
  if (props.favourites === undefined) {
    return null;
  } else {
    return props.favourites.map((movie, i) => (
      <div className="m-3" key={movie.imdbID}>
        <img src={movie.Poster} alt={movie.Title} className={classes.img}></img>
      </div>
    ));
  }
}

export default Favourties;
