"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./CardTeam.module.css";
import Link from "next/link";

const CardTeam = ({ image, name, position, onClick, team }: any) => {
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
      className={`flex flex-col justify-center items-center flex-grow-0 h-full  w-full z-40 ${styles.card} ${isSelected ? styles.selected : ""}`}
    >
      <Image
        src={image || "/assets/images/team.svg"}
        alt="Team member"
        height={800}
        width={800}
        loading="lazy"
        className="object-cover h-[200px] md:w-full md:h-[200px] xl:h-[271px] object-center"
        onClick={handleClick}
      />
      <Link href={`/${team.slug}`} target="_blank" prefetch={false}>
        <h1 className="text-mobileJudul md:text-webJudul font-semibold mt-2 text-center hover:underline">
          {name}
        </h1>
      </Link>
      <p className="text-mobileSubjudul md:text-webSubjudul text-gray-600 text-center">
        {position}
      </p>
    </div>
  );
};

export default CardTeam;
