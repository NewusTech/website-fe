'use client'
// components/TeamLayout.js
import React, { useState } from "react";
import Header from "@/components/shared/Header/HeaderTeam";
import CardTeam from "./Card";
import styles from "./CardTeam.module.css"; // Import CSS module

const TeamLayout = ({ teams }: any) => {
  const [selectedTeam, setSelectedTeam] = useState(() => {
    const teamObj = teams.find((team: any) => team.title === 'Direktur');
    return teamObj; // Kembalikan objek atau undefined jika tidak ditemukan
  });

  const handleClick = (team: any) => {
    setSelectedTeam(team);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="overflow-hidden">
      <Header teams={selectedTeam} />
      <section className={`py-1 md:py-1 md:px-0 pb-5 lg:pb-20 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  2xl:grid gap-1 ${styles.teamSection}`}>
        {teams?.map((team: any, i: number) => (
          <CardTeam
            key={i}
            team={team}
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
