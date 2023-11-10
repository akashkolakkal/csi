import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import EventList from "../components/EventList";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <EventList />
    </main>
  );
};

export default Home;
