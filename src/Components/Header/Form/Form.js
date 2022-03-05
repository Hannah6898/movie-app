import React from "react";
import classes from "./Form.module.css";

function Form(props) {
  return (
    <div>
      <form>
        <input
          type="text"
          className={classes.input}
          placeholder="Search Movie, TV show, Actor, Director......."
          onChange={(event) => props.setSearchValue(event.target.value)}
          value={props.searchValue}
        ></input>
      </form>
    </div>
  );
}

export default Form;
