import React from "react";
import "../Styles/Components/Carousel.css";
import Button from "./Button";

function Carousel() {
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
          <div className="slide" key={i}>
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
