import { useMotionValueEvent, useScroll } from "framer-motion";
import React, { useState } from "react";
import SlantLeft from "./SlantLeft";
import shirt from "../Images/ShirtPlaceholder.png";
import Button from "./Button";

function ShopPreview() {
  const { scrollY } = useScroll();
  const [shopTitleX, setShopTitleX] = useState(0);
  const [isViewable, setViewable] = useState({
    opacity: "1",
    transition: "all 0.65s ease-in-out",
    transform: "translateX(0px)",
  });
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 960) {
      setShopTitleX(latest - 960);
    } else {
      setShopTitleX(0);
    }
    if (latest >= 1150) {
      setViewable({
        opacity: "1",
        transition: "all 0.65s ease-in-out",
        transform: "translateX(0px)",
      });
    } else {
      setViewable({
        opacity: "0",
        transition: "all 0.65s ease-in-out",
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
        className="shop-preview__title"
      >
        Shop
      </span>
      <div className="shop-preview__content-wrapper">
        <img
          alt="Shirts from Nuke Bushner's store."
          src={shirt}
          className="shop-preview__image"
          style={isViewable}
        />
        <Button newPage={true} href="/store" className="shop-preview__button">
          Shop
        </Button>
      </div>
      <SlantLeft right={false} className="slant" />
    </div>
  );
}

export default ShopPreview;
