import React from "react";
import Container from "../components/containers/Container";
import PageHeader from "../components/headers/PageHeader";
import { useTeamData } from "../context/Provider";
import MemberCard from "../components/cards/MemberCard";

const Teams = () => {
  const { teams } = useTeamData();
  return (
    <Container>
      <PageHeader spanText={"Our Amazing Team"} headerText={"Team"} />
      <section className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teams?.map((member) => (
          <MemberCard member={member} key={member.id} />
        ))}
      </section>
    </Container>
  );
};

export default Teams;
