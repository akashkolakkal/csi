import React from "react";

const Button = ({ buttonText }) => {
  return (
    <button className="group/button bg-csi-secondary-bg text-csi-primary-dark px-3 py-1 rounded-md font-bold relative overflow-hidden transition-all duration-150">
      <span className="group-hover/button:opacity-100 h-full text-csi-primary-dark opacity-0 pointer-events-none transition-all duration-150 group-hover/button:mr-2">
        |
      </span>{" "}
      {buttonText}
    </button>
  );
};

export default Button;
