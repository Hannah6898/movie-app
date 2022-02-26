import React from "react";
import classes from "./ImgCarousel.module.css";
import Movie from "./Movie/Movie"
import "bootstrap/dist/css/bootstrap.min.css";

function ImgCarousel(props) {

  return (
    <div>
      <h2 className={classes.heading}>{props.heading}</h2>
      <div className="container-fluid image-carousel">
        <div className="row">
          <div className="d-flex justify-content-start movies">
         <Movie data={props.data}/>
         </div>
        </div>
      </div>
    </div>
  );
}

export default ImgCarousel;
