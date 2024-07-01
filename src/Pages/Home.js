import React from "react";
import "../Styles/Home.css";
import MenuBar from "../Components/MenuBar";
import Slant from "../Components/Slant";
import video from "../Videos/WriteThatSong.mp4";
import Button from "../Components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

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
            muted
            controlsList="play nodownload nofullscreen noremoteplayback"
          >
            <source src={video} type="video/mp4" />
          </video>
          {/* CTA */}
          <Button className="home-page__cta">
            <span>Book Now</span>
            <FontAwesomeIcon
              className="home-page__cta--arrow"
              icon={faArrowDown}
            />
          </Button>
        </div>
        <Slant className="slant" />
      </div>
      {/* About Me */}
      <div id="about-me">
        <span className="about-me__first-name">Nuke</span>
        <span className="about-me__last-name">Bushner</span>
      </div>
    </div>
  );
}

export default Home;
