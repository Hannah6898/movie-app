import React from "react";
import classes from "./FavBtn.module.css"

function FavBtn() {
  return (
    <div className={classes.favourite}>
      <button className={classes.favouritebtn}>Add to Favourties</button>
    </div>
  );
}

export default FavBtn;
