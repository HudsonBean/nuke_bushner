import React from "react";

function Button({ children, className, onClick, onHover }) {
  return (
    <div
      onHover={onHover}
      onClick={onClick}
      style={{ cursor: "pointer" }}
      className={className}
    >
      {children}
    </div>
  );
}

export default Button;
