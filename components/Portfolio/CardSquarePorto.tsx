import Image from "next/image";
import { Button } from "@/components/ui/button";

const CardSquarePorto = () => {
  return (
    <div className="rounded-[10px] bg-white md:bg-transparent border-2 border-gray-1 md:w-[364px] w-[170px]">
      <Image
        src="/assets/images/placeholder-image.jpg"
        alt="placeholder"
        width={367}
        height={273}
        className="w-full"
      />
      <div className="md:mt-10 my-4 md:mb-5 flex flex-col gap-1 md:gap-4 px-4">
        <h2 className="md:text-[24px] text-[10px] font-semibold">
          Name Project
        </h2>
        <p className="text-gray text-[8px] md:text-base">
          Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
        </p>
        <Button className="bg-blue md:py-6 mt-5 md:mt-0 h-5 rounded-[10px] w-full hover:bg-blue-2 text-[8px] md:text-[16px]">
          See Project
        </Button>
      </div>
    </div>
  );
};

export default CardSquarePorto;
