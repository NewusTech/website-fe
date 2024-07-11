'use client'
// components/TeamLayout.js
import React, { useState } from "react";
import Header from "@/components/shared/Header/HeaderTeam";
import CardTeam from "./Card";
import styles from "./CardTeam.module.css"; // Import CSS module

const TeamLayout = ({ teams }: any) => {
  const [selectedTeam, setSelectedTeam] = useState(() => {
    // Cari objek pertama dengan title "Direktur"
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
      <section className={`flex md:flex-row flex-wrap justify-center py-1 md:py-1 md:px-0 gap-1 xl:gap-2 md:pb-20 w-full ${styles.teamSection}`}>
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
