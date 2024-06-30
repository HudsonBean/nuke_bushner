// Styles
import "../Styles/Components/MenuBar.css";
// Imports
import React from "react";
import Button from "./Button";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faEnvelope,
  faEye,
  faHatCowboy,
} from "@fortawesome/free-solid-svg-icons";

function MenuBar() {
  return (
    <div className="menu-bar">
      <div className="menu-bar--wrapper">
        <Button className="menu-bar__item">
          <span>Events</span>
        </Button>
        <Button className="menu-bar__item">
          <span>Contact</span>
        </Button>
        <Button
          className={classNames("menu-bar__item", "menu-bar__item--name")}
        >
          <span>Nuke Bushner</span>
        </Button>
        <Button className="menu-bar__item">
          <span>Watch</span>
        </Button>
        <Button className="menu-bar__item">
          <span>Shop</span>
        </Button>
      </div>
    </div>
  );
}

export default MenuBar;
