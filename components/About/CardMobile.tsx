import Image from "next/image";
import { useState } from "react";
import styles from "./CardTeam.module.css";

const CardMobile = ({ image, name, position, onClick }: any) => {
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
      className={`${styles.card} ${isSelected ? styles.selected : ""}`}
      onClick={handleClick}
    >
      <Image
        src={image || "/assets/images/team.svg"}
        alt="Team member"
        height={542}
        width={279}
        className="object-cover w-full pr-2"
      />
      <h1 className="text-[8px] md:text-lg font-semibold mt-2 text-center">
        {name}
      </h1>
      <p className="text-[6px] md:text-sm text-gray-600 text-center">
        {position}
      </p>
    </div>
  );
};

export default CardMobile;
