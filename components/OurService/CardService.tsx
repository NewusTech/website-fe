import Image from "next/image";

const CardService = () => {
  return (
    <div className="w-3/12">
      <Image src="/assets/images/web.jpg" alt="web" width={300} height={400} />
      <div></div>
    </div>
  );
};

export default CardService;
