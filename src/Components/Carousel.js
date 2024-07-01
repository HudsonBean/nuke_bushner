import React, { useState } from "react";
import "../Styles/Components/Carousel.css";
import Button from "./Button";
import { useMotionValueEvent, useScroll } from "framer-motion";
import classNames from "classnames";

function Carousel() {
  const { scrollY } = useScroll();
  const [viewable, setViewable] = useState("viewable--false");
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 430) {
      setViewable("viewable--true");
    } else if (latest >= 850) {
      setViewable("viewable--false");
    } else {
      setViewable("viewable--false");
    }
  });
  const data = [
    {
      Date: "July 6, 2024",
      Area: "Wichita, Kansas",
      Location: "Caesar's Barroom",
    },
    {
      Date: "July 6, 2024",
      Area: "Wichita, Kansas",
      Location: "Caesar's Barroom",
    },
    {
      Date: "July 6, 2024",
      Area: "Wichita, Kansas",
      Location: "Caesar's Barroom",
    },
    {
      Date: "July 6, 2024",
      Area: "Wichita, Kansas",
      Location: "Caesar's Barroom",
    },
  ];
  return (
    <div className="carousel-container">
      <div className="carousel">
        {data.map((item, i) => (
          <div className={classNames("slide", viewable)} key={i}>
            <span className="slide__date">{item.Date}</span>
            <span className="slide__area">{item.Area}</span>
            <span className="slide__location">
              <Button>{item.Location}</Button>
            </span>
            <span className="slide__cta">
              <Button>Buy a Ticket</Button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
