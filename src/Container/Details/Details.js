import React from "react";
import MovieDetailsHead from "../../Components/Details/MovieDetailsHead/MovieDetailsHead";
import FavBtn from "../../Components/Details/FavBtn/FavBtn";
import classes from "./Details.module.css";
import MovieRating from "../../Components/Details/MovieRating/MovieRating";
import GenreIcons from "../../Components/Details/GenreIcons/GenreIcons";
import MovieImage from "../../Components/Details/MovieImage/MovieImage";
import MovieWrittenDetails from "../../Components/Details/MovieWrittenDetails/MovieWrittenDetails";
import MoviePlot from "../../Components/Details/MoviePlot/MoviePlot";
import { Link } from "react-router-dom";

function Details(props) {
  return (
    <div>
      <Link to="/">
        <button className={classes.backbtn} onClick={()=>props.setDisableFav(false)}>Back</button>
      </Link>
      <div className={classes.container}>
        <div>
          <div className="navbar">
            <MovieDetailsHead/>
            <FavBtn
              handleFavouritesClick={props.handleFavouritesClick}
              disableFav={props.disableFav}
            />
          </div>
          <MovieRating/>
          <MovieWrittenDetails/>
          <MoviePlot/>
        </div>
        <div>
          <MovieImage/>
          <div className="d-flex justify-content-start">
            <GenreIcons/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
