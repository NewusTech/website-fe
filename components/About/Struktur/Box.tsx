import Image from "next/image";

const Box = ({ title, description, image }: any) => (
  <div className="relative w-full h-full rounded-sm shadow">
    <div className="relative">
      <Image
        loading="lazy"
        src={image}
        width={1000}
        height={1000}
        alt={title}
        className="w-full h-[100px] rounded-sm sm:h-[150px] md:h-[200px] lg:h-[120px] xl:h-[150px] object-cover"
      />
    </div>
    <div className="absolute bottom-0 left-0 right-0 px-2 bg-black bg-opacity-10 text-white text-center">
      <h1 className="text-mobileSubjudul md:text-webSubjudul md:font-semibold">{title}</h1>
      <p className="text-mobileDesk md:text-webDesk capitalize font-semibold truncate">{description}</p>
    </div>
  </div>
);

export default Box;
