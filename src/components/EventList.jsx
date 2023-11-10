import React from "react";
import Container from "./containers/Container";
import SectionHeader from "./headers/SectionHeader";
import EventCard from "./cards/EventCard";
import { useEventData } from "../context/Provider";

const EventList = () => {
  const { events } = useEventData();
  return (
    <Container>
      <SectionHeader text={"Recent Events"} />
      <section className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {events?.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
    </Container>
  );
};

export default EventList;
