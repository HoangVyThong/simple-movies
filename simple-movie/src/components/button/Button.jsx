import React from "react";

const Button = ({
  onClick,
  className,
  isFullWidth = false,
  type = "button",
  bgColor = "primary",
  children,
}) => {
  let bgColorClass = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgColorClass = "bg-primary";
      break;
    case "secondary":
      bgColorClass = "bg-secondary";
      break;
    default:
      break;
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary p-4 rounded-lg capitalize mt-auto ${
        isFullWidth ? "w-full" : ""
      } ${bgColorClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
