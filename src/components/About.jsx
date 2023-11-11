import React from "react";
import Container from "./containers/Container";
import SectionHeader from "./headers/SectionHeader";
import { User2 } from "lucide-react";

const About = () => {
  return (
    <Container isLightBackground>
      <SectionHeader text={"About Us"} alignment="right" />
      <section className="pb-10 text-justify min-h-[50svh]">
        <p className="text-sm md:text-base lg:text-md">
          We are the C.S.I. Student Branch of Atharva College of Engineering.
          Formed in 2009, CSI-Atharva is an altruistic society in college
          initiating workshops, events and seminars to explore the cornucopia of
          information other than the regular curriculum offered by the
          university. As part of our endeavour to bring together and assimilate
          various aspects of technical and non-technical education, number of
          seminars and workshops are conducted by professionals imparting
          knowledge to the students of the college. We also encourage member
          students to organize events by themselves so that it imbibes in them
          the skills of management, self-confidence and helps to exchange views
          and information, learn and share ideas.
        </p>

        <figure className="flex gap-4 items-center justify-start mt-6">
          <User2 />

          <figcaption className="flex flex-col gap-2">
            <span className="text-csi-secondary-light">Prof. Nileema Pathak</span>
            <span className="text-xs md:text-sm lg:text-base">
              Faculty Coordinator
            </span>
          </figcaption>
        </figure>
      </section>
    </Container>
  );
};

export default About;
