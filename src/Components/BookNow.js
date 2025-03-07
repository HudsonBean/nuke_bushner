import React, { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faL } from "@fortawesome/free-solid-svg-icons";
import { useMotionValueEvent, useScroll } from "framer-motion";
import classNames from "classnames";

function BookNow() {
  const { scrollY } = useScroll();
  const [isViewable, setViewable] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 720) {
      setViewable(true);
    } else {
      setViewable(false);
    }
  });
  return (
    <div className={classNames("book-now", { viewable: isViewable })}>
      <Button className="book-now__cta">Book Now</Button>
    </div>
  );
}

export default BookNow;
