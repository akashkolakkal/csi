import React from "react";

const SectionHeader = ({ isHuge, alignment = "left", text, ...rest }) => {
  return (
    <h1
      className={`font-black text-md sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl ${
        isHuge && "xl:text-6xl"
      } ${
        alignment === "right"
          ? "text-right"
          : alignment === "center"
          ? "text-center"
          : "text-left"
      }`}
      {...rest}
    >
      {text}
    </h1>
  );
};

export default SectionHeader;
