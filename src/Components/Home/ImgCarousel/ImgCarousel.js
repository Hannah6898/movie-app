import React from "react";
import classes from "./ImgCarousel.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ImgCarousel(props) {

  return (
    <div>
      <h2 className={classes.heading}>{props.heading}</h2>
        <div className="row image-carousel border border-white">
          <div className="d-flex justify-content-start p-0">
            {props.movie}
         </div>
        </div>
    </div>
  );
}

export default ImgCarousel;
