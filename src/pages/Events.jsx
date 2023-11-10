import React from "react";
import Container from "../components/containers/Container";
import PageHeader from "../components/headers/PageHeader";
import EventCard from "../components/cards/EventCard";
import { useEventData } from "../context/Provider";

const Events = () => {
  const { events } = useEventData();
  return (
    <Container>
      {/* Recent event */}
      <PageHeader spanText={"Recent"} headerText={"Events"} />
      <EventCard event={events[0]} />

      {/* All events */}
      <PageHeader spanText={"Past"} headerText={"Events"} />
      <section className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events?.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
    </Container>
  );
};

export default Events;
