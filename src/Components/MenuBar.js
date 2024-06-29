// Styles
import "../Styles/Components/MenuBar.css";
// Imports
import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

function MenuBar() {
  return (
    <div className="menu-bar">
      <Button className="menu-bar__item">
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <ul className={classNames("menu-bar__item", "menu-bar__list")}></ul>
      <Button className="menu-bar__item">Shop</Button>
    </div>
  );
}

export default MenuBar;
