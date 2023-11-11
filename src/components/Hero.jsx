import React from "react";
import Container from "./containers/Container";

const Hero = () => {
  return (
    <Container>
      <main className="flex flex-col justify-center gap-6 min-h-[92svh]">
        <span className="text-csi-primary-light uppercase text-sm md:text-base font-semibold">
          Welcome to
        </span>
        <h1 className="font-black text-lg sm:text-xl md:text-3xl lg:text-6xl xl:text-7xl text-csi-secondary-light">
          CSI <span className="text-csi-primary-light">-</span> ACE
        </h1>
        <h3 className="font-black text-md sm:text-lg md:text-xl lg:text-2xl">
          Think <span className="text-csi-primary-light">.</span> Improvise{" "}
          <span className="text-csi-primary-light">.</span> Create{" "}
          <span className="text-csi-primary-light">.</span>
        </h3>
        <p className="text-sm md:text-base lg:text-md max-w-xs md:max-w-md">
          CSI-Atharva is an altruistic society in college initiating workshops
          and events to explore the cornucopia of information.
        </p>
      </main>
    </Container>
  );
};

export default Hero;
