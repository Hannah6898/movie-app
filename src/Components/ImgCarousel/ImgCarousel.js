import React from "react";
import classes from "./ImgCarousel.module.css";
import Movie from "./Movie/Movie"
import "bootstrap/dist/css/bootstrap.min.css";

function ImgCarousel(props) {
  console.log(props.data);

  return (
    <div>
      <h2 className={classes.heading}>{props.heading}</h2>
      <div className="container-fluid image-carousel">
        <div className="row">
         <Movie data={props.data}/>
        </div>
      </div>
    </div>
  );
}

export default ImgCarousel;
