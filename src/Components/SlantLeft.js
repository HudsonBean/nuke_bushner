import React, { useState } from "react";

function Slant({ className, right }) {
  return (
    <svg
      style={{ position: "absolute", bottom: 0, width: "100%", height: "10vw" }}
      className={className}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <polygon points="100, 0 100, 100 0, 100" />
    </svg>
  );
}

export default Slant;
