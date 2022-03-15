import React from "react";
import ImgCarousel from "../../Components/Home/ImgCarousel/ImgCarousel";
import Movie from "../../Components/Home/ImgCarousel/Movie/Movie";
import Favourites from "../../Components/Home/ImgCarousel/Favourites/Favourites";

function HomePage(props) {
  return (
    <div>
      <ImgCarousel
        heading="Movies & TV "
        movie={
          <Movie data={props.data} getMovieDetails={props.getMovieDetails} />
        }
      />
      <ImgCarousel
        heading="Favourties"
        movie={<Favourites favourites={props.favourites} />}
      />
    </div>
  );
}
export default HomePage;
