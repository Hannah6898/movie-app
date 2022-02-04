import React from 'react';
import classes from "./ImgCarousel.module.css"

function ImgCarousel(props) {
    console.log(props.data);

    return ( <div>
        <h2 className={classes.heading}>{props.heading}</h2>
        <img src="https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" alt="Movie Name" className={classes.img}></img>
    </div> );
}

export default ImgCarousel;