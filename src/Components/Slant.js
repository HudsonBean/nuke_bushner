import React from "react";

function Slant({ className }) {
  return (
    <svg
      style={{ position: "absolute", bottom: 0, width: "100%", height: "10vw" }}
      className={className}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <polygon points="0, 0 0, 100 100 100" />
    </svg>
  );
}

export default Slant;
