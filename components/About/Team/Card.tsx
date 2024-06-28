import Image from "next/image";

const CardTeam = ({ image, name, position, onClick }: any) => {
  return (
    <div className={`flex flex-col justify-center items-center flex-grow-0 w-full md:w-[20%] pb-10`} onClick={onClick}>
      <Image
        src={image}
        alt="image"
        height={542}
        width={279}
        className={`object-cover w-full pr-2`}
      />
      <h1 className="text-[8px] md:text-lg font-semibold mt-2 text-center">{name}</h1>
      <p className="text-[6px] md:text-sm text-gray-600 text-center">{position}</p>
    </div>
  );
};

export default CardTeam;
