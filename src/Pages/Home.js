import React from "react";
import "../Styles/Home.css";
import MenuBar from "../Components/MenuBar";
import Slant from "../Components/Slant";
import classNames from "classnames";

function Home() {
  return (
    <div>
      <div className="home-page">
        <MenuBar />
        <Slant className={classNames("slant", "grit")} />
      </div>
      <div
        className="grit"
        style={{ width: "100%", height: "50rem", backgroundColor: "white" }}
      ></div>
    </div>
  );
}

export default Home;
