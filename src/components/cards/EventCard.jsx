import React from "react";
import Button from "../buttons/Button";

const EventCard = ({ event }) => {
  return (
    <article className="relative group w-full h-60 overflow-hidden">
      <img
        src={event.image}
        alt="Event"
        className="absolute object-cover w-full h-full top-0 left-0"
      />

      <footer className="bg-csi-primary-bg/50 rounded-t-2xl py-3 px-2 grid grid-rows-[40%_40%_20%] w-full h-3/4 translate-y-[90%] group-hover:translate-y-[35%] transition-transform duration-300">
        <header className="flex flex-col gap-1">
          <h1 className="text-sm md:text-base lg:text-md">{event.title}</h1>
          <span className="text-xs md:text-sm lg:text-base">{event.dated}</span>
        </header>
        <main className="text-justify">{event.description}</main>
        <Button buttonText={"Learn More"} />
      </footer>
    </article>
  );
};

export default EventCard;
