'use client'
// components/CardTeam.js
import Image from "next/image";
import { useState } from "react";
import styles from "./CardTeam.module.css"; // Buat file CSS module untuk styling
import { removeHTMLTags } from "@/lib/utils";

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
      className={`flex flex-col justify-center items-center flex-grow-0 h-full w-[49%] md:w-[24%] xl:w-[19.5%] z-40 ${styles.card} ${isSelected ? styles.selected : ""}`}
      onClick={handleClick}>
      <Image
        src={image || "/assets/images/team.svg"}
        alt="Team member"
        height={1000}
        width={1000}
        className="object-cover h-[200px] md:w-full md:h-[200px] xl:h-[271px] object-center"
      />
      <h1 className="text-mobileJudul md:text-webJudul font-semibold mt-2 text-center">{name}</h1>
      <p className="text-mobileSubjudul md:text-webSubjudul text-gray-600 text-center">
        {position}
      </p>
    </div>
  );
};

export default CardTeam;
