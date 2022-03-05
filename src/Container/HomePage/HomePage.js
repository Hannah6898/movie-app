import React from "react";
import ImgCarousel from "../../Components/Home/ImgCarousel/ImgCarousel";

function HomePage(props) {
  return (
    <div>
      <ImgCarousel heading="Movies & TV " data={props.data} />
      <ImgCarousel heading="Favourties" />
    </div>
  );
}
export default HomePage;
