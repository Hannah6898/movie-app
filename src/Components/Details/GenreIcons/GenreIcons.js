import React from "react";
import classes from "./GenreIcons.module.css"

function GenreIcons() {
  return (
    <div>
      {/* <div>
      <div className={classes.genre}>Drama</div>
      </div> */}
      <button className={classes.genre}>
        Drama
      </button>
    </div>
  );
}

export default GenreIcons;
