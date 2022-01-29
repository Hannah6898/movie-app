import React from "react";
import classes from "./HomePage.module.css"
import Header from "../Components/Header/Header"
import ImgCarousel from "../Components/ImgCarousel/ImgCarousel";

function HomePage(){
    return(<div>
        <Header/>
        <ImgCarousel heading="Movie"/>
        <ImgCarousel heading="TV"/>
        <ImgCarousel heading="Favourties"/>
    </div>)
}
export default HomePage;