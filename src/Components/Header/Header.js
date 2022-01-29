import React from 'react';
import classes from "./Header.module.css"

function Header() {
    return (  
    <div>
        <header className={classes.header}>
        <h1 className={classes.title}>Movie App</h1>
        <input type="search" className={classes.input} placeholder='Search Movie, TV show, Actor, Director.......'></input>
        </header>
        </div>
        );
}

export default Header;