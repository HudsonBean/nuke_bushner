// Styles
import "../Styles/Components/MenuBar.css";
// Imports
import React from "react";
import Button from "./Button";
import classNames from "classnames";

function MenuBar() {
  return (
    <div className="menu-bar">
      <div className="menu-bar--wrapper">
        <Button className="menu-bar__item">Events</Button>
        <Button className="menu-bar__item">Contact</Button>
        <Button
          className={classNames("menu-bar__item", "menu-bar__item--name")}
        >
          Nuke Bushner
        </Button>
        <Button className="menu-bar__item">Watch</Button>
        <Button className="menu-bar__item">Shop</Button>
      </div>
    </div>
  );
}

export default MenuBar;
