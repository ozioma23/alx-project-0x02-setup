import React from "react";
import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ size = "medium", shape = "rounded-md", children, onClick }) => {
  let sizeClasses = "";
  switch (size) {
    case "small":
      sizeClasses = "px-3 py-1 text-sm";
      break;
    case "medium":
      sizeClasses = "px-4 py-2 text-base";
      break;
    case "large":
      sizeClasses = "px-6 py-3 text-lg";
      break;
  }

  return (
    <button
      className={`bg-blue-500 text-white ${shape} ${sizeClasses} hover:bg-blue-600 transition`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
