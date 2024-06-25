// components/CardTeam.js
import Image from "next/image";

const CardTeam = ({ image, name, position }: any) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={image}
        alt="image"
        height={271}
        width={279}
        className="w-[67px] md:w-full md:h-[271px] object-contain"
      />
      <h1 className="text-[8px] md:text-lg font-semibold mt-2">{name}</h1>
      <p className="text-[6px] md:text-sm text-gray-600">{position}</p>
    </div>
  );
};

export default CardTeam;
