import { useMotionValueEvent, useScroll } from "framer-motion";
import React, { useState } from "react";
import SlantLeft from "./SlantLeft";

function ShopPreview() {
  const { scrollY } = useScroll();
  const [shopTitleX, setShopTitleX] = useState(0);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 960) {
      setShopTitleX(latest - 960);
    } else {
      setShopTitleX(0);
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
      <SlantLeft right={false} className="slant" />
    </div>
  );
}

export default ShopPreview;
