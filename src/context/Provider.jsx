import React, { createContext, useContext, useState } from "react";
import { teamList, eventList } from "../common";

const TeamContext = createContext(null);
const EventContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [teams, setTeams] = useState(teamList);
  const [events, setEvents] = useState(eventList);
  return (
    <TeamContext.Provider value={{ teams, setTeams }}>
      <EventContext.Provider value={{ events, setEvents }}>
        {children}
      </EventContext.Provider>
    </TeamContext.Provider>
  );
};

export default ContextProvider;

export const useTeamData = () => useContext(TeamContext);
export const useEventData = () => useContext(EventContext);
