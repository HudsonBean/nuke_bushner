import React from "react";
import "../Styles/Home.css";
import MenuBar from "../Components/MenuBar";
import Slant from "../Components/Slant";

function Home() {
  return (
    <div>
      <div className="home-page">
        <MenuBar />
        <Slant className="slant" />
      </div>
      <div
        style={{ width: "100%", height: "50rem", backgroundColor: "white" }}
      ></div>
    </div>
  );
}

export default Home;
