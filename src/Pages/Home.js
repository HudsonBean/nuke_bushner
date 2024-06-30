import React from "react";
import "../Styles/Home.css";
import MenuBar from "../Components/MenuBar";
import Slant from "../Components/Slant";
import video from "../Videos/AmericanIdol.mp4";
import Button from "../Components/Button";

function Home() {
  return (
    <div>
      <div className="home-page">
        <MenuBar />
        <div className="home-page__content">
          {/* Video */}
          <video
            autoPlay
            className="home-page__video"
            controls
            controlsList="play nodownload nofullscreen noremoteplayback"
          >
            <source src={video} type="video/mp4" />
          </video>
          {/* CTA */}
          <Button></Button>
        </div>
        <Slant className="slant" />
      </div>
      <div
        style={{ width: "100%", height: "50rem", backgroundColor: "white" }}
      ></div>
      {/* Placeholder */}
    </div>
  );
}

export default Home;
