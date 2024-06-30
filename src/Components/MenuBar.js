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
        {/* Events */}
        <Button className="menu-bar__item">
          <span>Events</span>
        </Button>

        {/* About Me */}
        <Button className="menu-bar__item" href="#about-me">
          <span>About Me</span>
        </Button>

        {/* Name */}
        <Button
          className={classNames("menu-bar__item", "menu-bar__item--name")}
        >
          <span>Nuke Bushner</span>
        </Button>

        {/* Watch */}
        <Button className="menu-bar__item">
          <span>Watch</span>
        </Button>

        {/* Shop */}
        <Button className="menu-bar__item">
          <span>Shop</span>
        </Button>
      </div>
    </div>
  );
}

export default MenuBar;
