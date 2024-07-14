import Image from "next/image";

const Box = ({ title, description, image }: any) => (
  <div className="relative :w-full">
    <div className="relative h-[160px] md:h-[300px] 2xl:h-[350px]">
      <Image
        loading="lazy"
        src={image ? image : "/assets/images/dummy1.png"}
        width={1000}
        height={1000}
        alt={title}
        className="w-full h-full md:w-full md:h-full bg-center text-white bg-cover object-cover"
      />
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#480DEC] bg-opacity-30 text-white">
      <h1 className="text-mobileSubjudul md:text-webSubjudul font-bold line-clamp-2">{title ? title : "Lorem Ipsum"}</h1>
      <p className="text-mobileDesk md:text-webDesk capitalize font-semibold truncate">{description}</p>
    </div>
  </div>
);

export default Box;
