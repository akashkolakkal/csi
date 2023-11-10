import React from "react";

const Container = ({ children }) => {
  return (
    <section className="max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl w-full">
      {children}
    </section>
  );
};

export default Container;
