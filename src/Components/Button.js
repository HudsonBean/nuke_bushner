import React from "react";

function Button({ children, className, href, onClick, onHover }) {
  return (
    <a
      href={href}
      onHover={onHover}
      onClick={onClick}
      style={{ cursor: "pointer", textDecoration: "none" }}
      className={className}
    >
      {children}
    </a>
  );
}

export default Button;
