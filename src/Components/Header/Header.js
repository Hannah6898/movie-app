import React from "react";
import classes from "./Header.module.css";
import Heading from "./Heading/Heading";
import Form from "./Form/Form";

function Header(props) {
  return (
    <div className={classes.header}>
      <div className="navbar">
        <div className="container-fluid">
          <Heading />
          <Form
            searchValue={props.searchValue}
            setSearchValue={props.setSearchValue}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
