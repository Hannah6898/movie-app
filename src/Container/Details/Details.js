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
  console.log(props.details)
  return (
    <div>
      <Link to="/">
        <button className={classes.backbtn} onClick={()=>props.setDisableFav(false)}>Back</button>
      </Link>
      <div className={classes.container}>
        <div>
          <div className="navbar">
            <MovieDetailsHead details={props.details} />
            <FavBtn
              handleFavouritesClick={props.handleFavouritesClick}
              details={props.details}
              disableFav={props.disableFav}
            />
          </div>
          <MovieRating details={props.details} />
          <MovieWrittenDetails details={props.details} />
          <MoviePlot details={props.details} />
        </div>
        <div>
          <MovieImage details={props.details} />
          <div className="d-flex justify-content-start">
            <GenreIcons details={props.details} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
