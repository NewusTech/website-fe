import Image from "next/image";
import { Button } from "@/components/ui/button";

const CardListProject = () => {
  return (
    <div className="bg-white rounded-[10px] w-full mb-[10px]">
      <div className="flex gap-[42px]">
        <Image
          src="/assets/images/placeholder-image.jpg"
          alt="image card list"
          width={367}
          height={273}
          className="rounded-l-[10px]"
        />
        <div className="flex flex-col justify-center pr-[42px]">
          <h2 className="text-2xl font-semibold">Name Project</h2>
          <p className="text-[16px] text-gray mt-[10px] mb-5">
            Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.Lörem
            ipsum astrobel sar direlig. Kronde est konfoni med kelig.Lörem ipsum
            astrobel sar direlig. Kronde est konfoni med kelig.Lörem ipsum
            astrobel sar direlig. Kronde est konfoni med kelig.Lörem ipsum
            astrobel sar direlig. Kronde est konfoni med kelig.
          </p>
          <Button className="bg-blue py-6 rounded-[10px] w-[188px] hover:bg-blue-2 text-[16px]">
            See Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardListProject;
