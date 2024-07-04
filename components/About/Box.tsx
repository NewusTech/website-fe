import Image from "next/image";

const Box = ({ title, description, image }: any) => (
  <div className="relative">
    <div className="relative">
      <Image
        loading="lazy"
        src={image}
        width={359}
        height={343}
        alt={title}
        className="w-full min-h-[100px] md:w-full md:min-h-[350px] bg-center text-white bg-cover object-cover"
      />
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-10 text-white">
      <h1 className="text-xs md:text-2xl font-bold">{title}</h1>
      <p className="text-[10px] md:text-lg capitalize font-semibold truncate">{description}</p>
    </div>
  </div>
);

export default Box;
