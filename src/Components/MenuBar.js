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
          Events{" "}
          <FontAwesomeIcon className="menu-bar__item--icon" icon={faCalendar} />
        </Button>
        <Button className="menu-bar__item">
          Contact
          <FontAwesomeIcon className="menu-bar__item--icon" icon={faEnvelope} />
        </Button>
        <Button
          className={classNames("menu-bar__item", "menu-bar__item--name")}
        >
          Nuke Bushner
        </Button>
        <Button className="menu-bar__item">
          Watch
          <FontAwesomeIcon className="menu-bar__item--icon" icon={faEye} />
        </Button>
        <Button className="menu-bar__item">
          Shop
          <FontAwesomeIcon
            className="menu-bar__item--icon"
            icon={faHatCowboy}
          />
        </Button>
      </div>
    </div>
  );
}

export default MenuBar;
