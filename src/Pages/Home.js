import "../Styles/Home.css";
import MenuBar from "../Components/MenuBar";
import Slant from "../Components/Slant";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

function Home() {
  const { scrollY } = useScroll();
  const [eventsTitleX, setEventsTitleX] = useState(0);
  const [eventsTitleOpacity, setEventsTitleOpacity] = useState(0.25);
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(latest);
    if (latest >= 65) {
      if (latest >= 550) {
        return;
      } else {
        setEventsTitleX(latest - 65);
        setEventsTitleOpacity((latest - 65) / 100);
      }
    } else {
      setEventsTitleX(0);
      setEventsTitleOpacity(0.25);
    }
  });
  return (
    <div>
      <div className="home-page">
        <MenuBar />
        <div className="home-page__content"></div>
        <Slant className="slant" />
      </div>
      {/* Events */}
      <div id="events">
        <span
          style={{
            transform: `translate(${-eventsTitleX}px, 0px)`,
            opacity: eventsTitleOpacity,
          }}
          className="events__title"
        >
          Events
        </span>
      </div>
    </div>
  );
}

export default Home;
