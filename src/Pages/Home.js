import "../Styles/Home.css";
import MenuBar from "../Components/MenuBar";
import SlantRight from "../Components/SlantRight";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Carousel from "../Components/Carousel";
import classNames from "classnames";
import BookNow from "../Components/BookNow";
import ShopPreview from "../Components/ShopPreview";
import ListenPreview from "../Components/ListenPreview";

function Home() {
  const { scrollY } = useScroll();
  // Events Title
  const [eventsTitleX, setEventsTitleX] = useState(0);
  const opacityDefault = 0.45;
  const [eventsTitleOpacity, setEventsTitleOpacity] = useState(opacityDefault);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 65) {
      if (latest >= 500) {
        setEventsTitleX(440);
      } else {
        setEventsTitleX(latest - 65);
        setEventsTitleOpacity((latest - 65) / 100 + opacityDefault);
      }
    } else {
      setEventsTitleX(0);
      setEventsTitleOpacity(opacityDefault);
    }
  });

  return (
    <div>
      <div className="home-page">
        <MenuBar />
        <div className="home-page__content"></div>
        <SlantRight right={true} className="slant" />
      </div>
      {/* Events */}
      <div id="events">
        <span
          style={{
            transform: `translate(${-eventsTitleX}px, 0px)`,
            opacity: eventsTitleOpacity,
          }}
          className={classNames("events__title", "no-select")}
        >
          Events
        </span>
        {/* Events carousel */}
        <div className="events__carousel">
          <Carousel />
        </div>
      </div>
      {/* Book now section */}
      <BookNow />
      {/* Merch preview section */}
      <ShopPreview />
      {/* Listen preview */}
      <div id="listen-preview">
        <ListenPreview />
      </div>
      {/* Footer */}
    </div>
  );
}

export default Home;
