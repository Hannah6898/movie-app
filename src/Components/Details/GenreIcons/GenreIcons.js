import React from "react";
import classes from "./GenreIcons.module.css";

function GenreIcons(props) {
  let genre = props.details.Genre;
  const array = genre.split(",");
  if (array === undefined) {
    return null;
  } else {
    return array.map((genre, i) => (
      <div className="m-1" key={i}>
        <button className={classes.genre}>{genre}</button>
      </div>
    ));
  }
}

export default GenreIcons;
