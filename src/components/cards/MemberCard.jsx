import React from "react";
import Button from "../buttons/Button";

const MemberCard = ({ member }) => {
  return (
    <article className="relative group w-full h-60 overflow-hidden">
      <img
        src={member.image}
        alt="member"
        className="absolute object-cover w-full h-full top-0 left-0"
      />

      <footer className="bg-csi-primary-bg/50 rounded-t-2xl py-3 px-2 grid grid-rows-[40%_40%_20%] w-full h-3/4 translate-y-[90%] group-hover:translate-y-[35%] transition-transform duration-300">
        <header className="flex flex-col gap-1">
          <h1 className="text-sm md:text-base lg:text-md">{member.name}</h1>
          <span className="text-xs md:text-sm lg:text-base">
            {member.position}
          </span>
        </header>
        <main className="text-justify">{member.slogan}</main>
        <div className="flex justify-between gap-4">
          <Button buttonText={"LinkedIn"} />
          <Button buttonText={"GitHub"} />
        </div>
      </footer>
    </article>
  );
};

export default MemberCard;
