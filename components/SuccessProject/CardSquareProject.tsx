import Image from "next/image";
import { Button } from "@/components/ui/button";

const CardSquareProject = () => {
  return (
    <div className="rounded-[10px] border-2 border-gray-1 w-[364px]">
      <Image
        src="/assets/images/placeholder-image.jpg"
        alt="placeholder"
        width={367}
        height={273}
        className="w-full"
      />
      <div className="mt-10 mb-5 flex flex-col gap-4 px-4">
        <h2 className="text-[24px] font-semibold">Name Project</h2>
        <p className="text-gray">
          Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
        </p>
        <Button className="bg-blue py-6 rounded-[10px] w-full hover:bg-blue-2 text-[16px]">
          See Project
        </Button>
      </div>
    </div>
  );
};

export default CardSquareProject;
