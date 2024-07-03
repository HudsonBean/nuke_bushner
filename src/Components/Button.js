import React from "react";
import { Link } from "react-router-dom";

function Button({
  children,
  className,
  href,
  onClick,
  onHover,
  newPage = false,
  style,
}) {
  if (newPage) {
    return (
      <Link
        to={href}
        onHover={onHover}
        onClick={onClick}
        style={{ ...style, cursor: "pointer", textDecoration: "none" }}
        className={className}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <a
        href={href}
        onHover={onHover}
        onClick={onClick}
        style={{ ...style, cursor: "pointer", textDecoration: "none" }}
        className={className}
      >
        {children}
      </a>
    );
  }
}

export default Button;
