import { useMotionValueEvent, useScroll } from "framer-motion";
import React, { useState } from "react";
import SlantLeft from "./SlantLeft";
import shirt from "../Images/ShirtPlaceholder.png";
import Button from "./Button";
import classNames from "classnames";

function ShopPreview() {
  const { scrollY } = useScroll();
  const [shopTitleX, setShopTitleX] = useState(0);
  const [isViewable, setViewable] = useState({
    opacity: "0",
    transform: "translateX(-20px)",
  });
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 1000) {
      setShopTitleX(latest - 960);
    } else {
      setShopTitleX(0);
    }
    if (latest >= 1150) {
      setViewable({
        opacity: "1",
        transform: "translateX(0px)",
      });
    } else {
      setViewable({
        opacity: "0",
        transform: "translateX(-20px)",
      });
    }
  });
  return (
    <div id="shop-preview">
      <span
        style={{
          transform: `translate(${shopTitleX}px, 0px)`,
        }}
        className={classNames("shop-preview__title", "no-select")}
      >
        Shop
      </span>
      <div className="shop-preview__content-wrapper">
        <img
          alt="Shirts from Nuke Bushner's store."
          src={shirt}
          draggable={false}
          className={classNames("shop-preview__image", "no-select")}
          style={{ ...isViewable, transition: "all 0.65s ease-in-out" }}
        />
        <Button
          style={{
            ...isViewable,
            transitionProperty: "opacity, transform",
            transitionDuration: "0.65s",
            transitionTimingFunction: "ease-in-out",
          }}
          newPage={true}
          href="/store"
          className="shop-preview__button"
        >
          Buy
        </Button>
      </div>
      <SlantLeft right={false} className="slant" />
    </div>
  );
}

export default ShopPreview;
