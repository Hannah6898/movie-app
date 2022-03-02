import React from "react";
import classes from "./HomePage.module.css";
import ImgCarousel from "../../Components/ImgCarousel/ImgCarousel";


function HomePage(props) {
  return (
    <div>
      <ImgCarousel heading="Movie" data={props.data} />
      {/* <ImgCarousel heading="TV" data={props.data}/>
        <ImgCarousel heading="Favourties" data={props.data}/> */}
    </div>
  );
}
export default HomePage;
