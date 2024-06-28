'use client'

import React, { useState } from "react";
import Header from '@/components/shared/Header/HeaderAbout'
import CardTeam from "./Card";

const TeamLayout = ({ teams }: any) => {
  const [selectedImage, setSelectedImage] = useState("");
  console.log(teams[0]);

  const handleImageClick = (team: any) => {
    setSelectedImage(team.image);
  };

  return (
    <main>
      <Header
        type="team"
        title="team"
        image={selectedImage || "/assets/images/team.svg"}
      />
      <section className="flex flex-wrap justify-center pt-2 pb-5 md:pb-20 w-full">
        {teams?.map((team: any, i: number) => (
          <CardTeam
            key={i}
            image={`${team.image ? team.image : '/assets/images/team.svg'}`}
            name={`${team.name ? team.name : 'Name ${team.id}'}`}
            position={`${team.title ? team.title : 'Position ${team.id}'}`}
            onClick={() => handleImageClick(team)}
          />
        ))}
      </section>
    </main>
  );
};

export default TeamLayout;
