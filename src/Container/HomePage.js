import React from "react";
import classes from "./HomePage.module.css"
import Header from "../Components/Header/Header"
import ImgCarousel from "../Components/ImgCarousel/ImgCarousel";

function HomePage(props){
    return(<div>
        <Header/>
        <ImgCarousel heading="Movie" data={props.data}/>
        <ImgCarousel heading="TV"/>
        <ImgCarousel heading="Favourties"/>
    </div>)
}
export default HomePage;