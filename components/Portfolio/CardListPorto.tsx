import Image from "next/image";
import { Button } from "@/components/ui/button";

const CardListPorto = () => {
  return (
    <div className="bg-white rounded-[10px] w-[40%] md:w-full mb-[10px]">
      <div className="flex md:gap-[42px]">
        <Image
          src="/assets/images/placeholder-image (2).jpg"
          alt="image card list"
          width={367}
          height={273}
          className="rounded-l-[10px] object-cover"
        />
        <div className="flex flex-col justify-center pr-4 md:pr-[42px] bg-white pl-2 py-5 rounded-r-[10px]">
          <h2 className="md:text-2xl text-[10px] font-semibold">
            Name Project
          </h2>
          <p className="md:text-[16px] text-[8px] text-gray mt-[10px] mb-2 md:mb-5 w-[200px] md:w-full">
            Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.Lörem
            ipsum astrobel sar direlig. Kronde est konfoni med kelig.
          </p>
          <Button
            size="xs"
            className="bg-blue py-[14px] md:py-6 px-20 rounded-[10px] w-[116px] md:w-[188px] hover:bg-blue-2 md:text-[16px] text-[8px]"
          >
            See Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardListPorto;
