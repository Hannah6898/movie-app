import React from "react";
import MovieDetailsHead from "../../Components/Details/MovieDetailsHead/MovieDetailsHead";
import FavBtn from "../../Components/Details/FavBtn/FavBtn";
import classes from "./Details.module.css";
import MovieRating from "../../Components/Details/MovieRating/MovieRating";
import GenreIcons from "../../Components/Details/GenreIcons/GenreIcons";
import MovieImage from "../../Components/Details/MovieImage/MovieImage";
import MovieWrittenDetails from "../../Components/Details/MovieWrittenDetails/MovieWrittenDetails";
import MoviePlot from "../../Components/Details/MoviePlot/MoviePlot";

function Details() {
  return (
    <div>
      <button className={classes.backbtn}>Back</button>
      <div className={classes.container}>
        <div>
          <div className="navbar">
            <MovieDetailsHead />
            <FavBtn />
          </div>
          <MovieRating />
          <MovieWrittenDetails/>
          <MoviePlot/>
        </div>
        <div>
          <MovieImage />
          <GenreIcons /> 
        </div>

        
      </div>
    
    </div>
  );
}

export default Details;
