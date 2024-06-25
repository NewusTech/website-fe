// components/TeamLayout.js
import React from "react";
import CardTeam from "./Card";
import { teamImage } from "@/constants/index";

const TeamLayout = () => {
  return (
    <section className="flex flex-wrap justify-center gap-3 md:gap-7 pt-2 pb-5 md:pb-20">
      {teamImage.map((team) => (
        <CardTeam
          key={team.id}
          image={team.image}
          name={`Name ${team.id}`}
          position={`Position ${team.id}`}
        />
      ))}
    </section>
  );
};

export default TeamLayout;
