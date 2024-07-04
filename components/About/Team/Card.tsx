'use client'
// components/CardTeam.js
import Image from "next/image";
import { useState } from "react";
import styles from "./CardTeam.module.css"; // Buat file CSS module untuk styling

const CardTeam = ({ image, name, position, onClick }: any) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(true);
    onClick();
    setTimeout(() => {
      setIsSelected(false);
    }, 500);
  };

  return (
    <div
      className={`flex flex-col justify-center items-center flex-grow-0 h-full w-[48%] md:w-[19.5%] z-40 ${styles.card} ${isSelected ? styles.selected : ""}`}
      onClick={handleClick}>
      <Image
        src={image || "/assets/images/team.svg"}
        alt="Team member"
        height={542}
        width={279}
        className="object-cover h-[200px] md:w-full md:h-[271px] object-center"
      />
      <h1 className="text-[12px] md:text-lg font-semibold mt-2 text-center">{name}</h1>
      <p className="text-[10px] md:text-sm text-gray-600 text-center">
        {position}
      </p>
    </div>
  );
};

export default CardTeam;
