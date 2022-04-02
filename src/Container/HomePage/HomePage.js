import React from "react";
import ImgCarousel from "../../Components/Home/ImgCarousel/ImgCarousel";
import Movie from "../../Components/Home/ImgCarousel/Movie/Movie";
import Favourites from "../../Components/Home/ImgCarousel/Favourites/Favourites";
import classes from "./HomePage.module.css";

function HomePage(props) {
  return (
    <div>
      <div className={classes.wrapper}>
        <ImgCarousel
          heading="Movies & TV "
          movie={
            <Movie data={props.data} getMovieDetails={props.getMovieDetails} />
          }
        />
      </div>
      <div className={classes.wrapper}>
        <ImgCarousel
          heading="Favourties"
          movie={<Favourites favourites={props.favourites} />}
        />
      </div>
    </div>
  );
}
export default HomePage;
