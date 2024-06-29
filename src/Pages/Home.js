import React from "react";
import "../Styles/Home.css";
import MenuBar from "../Components/MenuBar";
import Slant from "../Components/Slant";

function Home() {
  return (
    <div className="home-page">
      <MenuBar />
      <Slant className="slant" />
    </div>
  );
}

export default Home;
