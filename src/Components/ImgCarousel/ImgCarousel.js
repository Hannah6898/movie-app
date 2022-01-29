import React from 'react';
import classes from "./ImgCarousel.module.css"

function ImgCarousel(props) {
    return ( <div>

<h2 className={classes.heading}>{props.heading}</h2>
    </div> );
}

export default ImgCarousel;