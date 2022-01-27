import React from "react";
import classes from "./HomePage.module.css"

function HomePage(){
    return(<div>
        <h1 className={classes.title}>Movie App</h1>
        <input type="search" className={classes.input}></input>
        <h2 className={classes.subheading}>Movie</h2>
        <h2 className={classes.subheading}>TV</h2>
        <h2 className={classes.subheading}>Favourite</h2>
    </div>)
}
export default HomePage;