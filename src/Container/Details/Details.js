import React from "react";
import Header from "../../Components/Header/Header";
import classes from "./Details.module.css";

function Details() {
  return (
    <div>
      <Header />
      <button className={classes.backbtn}>Back</button>
      <div className={classes.container}>
        <div className={classes.details}>
          <div className={classes.basics}>
            <div className={classes.header}>
              <div>
                <h1>The Social Network</h1>
              </div>
              <div>
                <h2>2010</h2>
              </div>
            </div>
            <img src="https://img.icons8.com/color/48/000000/filled-star--v1.png"/>
            <h3>7.5/10</h3>
          </div>
          <div className={classes.favourite}>
            <button className={classes.favouritebtn}>Add to Favourties</button>
          </div>
        </div>
        <div className={classes.image}>
          <img src="https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"></img>
        </div>
        <div>
            <div className={classes.genre}>Drama</div>
        </div>
      </div>
    </div>
  );
}

export default Details;
