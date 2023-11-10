import React from "react";

const PageHeader = ({ spanText, headerText }) => {
  return (
    <header className="pb-10 pt-16">
      <span className="text-csi-secondary-light text-base md:text-xl font-bold">
        {spanText}
      </span>
      <h1
        className={`font-black text-md sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl`}
      >
        {headerText}
      </h1>
    </header>
  );
};

export default PageHeader;
