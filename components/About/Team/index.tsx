'use client'
// components/TeamLayout.js
import React, { useState } from "react";
import Header from "@/components/shared/Header/HeaderTeam";
import CardTeam from "./Card";
import styles from "./CardTeam.module.css"; // Import CSS module

const TeamLayout = ({ teams }: any) => {
  const [selectedTeam, setSelectedTeam] = useState(teams[0]);

  const handleClick = (team: any) => {
    setSelectedTeam(team);
  };

  return (
    <main>
      <Header
        teams={selectedTeam}
      />
      <section className={`flex md:flex-row flex-wrap justify-center py-2 px-3 md:px-0 gap-2 md:gap-2 md:pb-20 w-full ${styles.teamSection}`}>
        {teams?.map((team: any, i: number) => (
          <CardTeam
            key={i}
            image={team.image || "/assets/images/team.svg"}
            name={team.name || `Name ${team.id}`}
            position={team.title || `Position ${team.id}`}
            onClick={() => handleClick(team)}
          />
        ))}
      </section>
    </main>
  );
};

export default TeamLayout;
