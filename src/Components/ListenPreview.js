import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState, React } from "react";
import image1 from "../Images/Image8.jpg";
import image2 from "../Images/Image8.jpg";
import Button from "./Button";
import classNames from "classnames";

function ListenPreview() {
  const { scrollY } = useScroll();
  const [listenPreviewTitleX, setListenPreviewTitleX] = useState(0);
  const opacityDefault = 0.45;
  const [listenPreviewTitleOpacity, setListenPreviewTitleOpacity] =
    useState(opacityDefault);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 1800) {
      if (latest >= 2330) {
        setListenPreviewTitleX(535);
      } else {
        setListenPreviewTitleX(latest - 1800);
      }
      setListenPreviewTitleOpacity((latest - 1800) / 100 + opacityDefault);
    } else {
      setListenPreviewTitleX(0);
      setListenPreviewTitleOpacity(opacityDefault);
    }
  });
  return (
    <div className="listen-preview__content-wrapper">
      <span
        style={{
          transform: `translate(${-listenPreviewTitleX}px, 0px)`,
          opacity: listenPreviewTitleOpacity,
        }}
        className={classNames("listen-preview__title", "no-select")}
      >
        Listen
      </span>
      <div className="wrapper">
        <div className="listen-preview__album-covers">
          <img draggable={false} src={image1} alt="" />
          <img draggable={false} src={image2} alt="" />
        </div>
        <Button newPage={true} href="/listen" className="listen-preview__cta">
          Listen
        </Button>
      </div>
    </div>
  );
}

export default ListenPreview;
