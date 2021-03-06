import React from "react";
import classes from "./MenuButton.module.css";

const menuButton = props => (
  <div className={classes.MenuButton} onClick={props.menuOpen}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default menuButton;
