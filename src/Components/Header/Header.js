import React from "react";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <div>
      <header className={classes.header}>
        <div className="row">
        <h1 className={classes.title}>Movie App</h1>
        <form onSubmit={props.searchMedia}>
          <input
            type="text"
            className={classes.input}
            placeholder="Search Movie, TV show, Actor, Director......."
            onChange={(event)=>props.setSearchValue(event.target.value)}
            value={props.searchValue}
          ></input>
        </form>
        </div>
      </header>
    </div>
  );
}

export default Header;
