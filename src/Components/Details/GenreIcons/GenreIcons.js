import React from "react";
import classes from "./GenreIcons.module.css";

function GenreIcons(props) {
  console.log(props.details)
return(<div></div>)

  // if (props.details === undefined) {
  //   return null;
  // } else {
  //   let genre = props.details.Genre;
  //   console.log(genre);
  //   const array = genre.split(",");
  //   console.log(array)
  //   if (array === array.length ==0){
  //     return null;
  //   }else{
  //   return array.map((genre, i) => (
  //     <div className="m-1" key={i}>
  //       <button className={classes.genre}>{genre}</button>
  //     </div>
  //   ))};
  // }
}

export default GenreIcons;


