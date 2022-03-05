import React from "react";
import classes from "./Header.module.css";
import Heading from "./Heading";
import Form from "./Form"

function Header(props) {
  return (
    <div>
      {/* <header className={classes.header}> */}
        <div className="row d-flex align-items-center mt-4 mb-4">
        <Heading/>
        <Form  searchValue={props.searchValue} searchMedia={props.searchMedia}/>
        </div>
      {/* </header> */}
    </div>
  );
}

export default Header;
