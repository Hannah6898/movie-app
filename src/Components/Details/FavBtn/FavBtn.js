import React from "react";
import classes from "./FavBtn.module.css";

function FavBtn(props) {
  return (
    <div className={classes.favourite}>
      <button
        className={classes.favouritebtn}
        onClick={() => props.handleFavouritesClick(props.details)}
      >
        Add to Favourties
      </button>
    </div>
  );
}

export default FavBtn;
