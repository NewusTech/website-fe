import Image from "next/image";
import { Button } from "@/components/ui/button";

const WhatWeDo = () => {
  return (
    <section className="container mx-auto md:my-[20px] my-8">
      <div className="flex items-center justify-center flex-col gap-1 md:gap-4 relative">
        <h1 className="font-bold text-dark text-[8px] md:text-[32px] z-20">
          What We Do
        </h1>
        <p className="w-[225px] md:w-[558px] text-center text-[6px] md:text-[16px] leading-[2]">
          Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
          Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig.
          Kronde est
        </p>
        <div className="md:w-[110px] md:h-[27px] w-[51px] h-[15px] bg-tangerine absolute z-10 -mt-9 -ml-16 md:-mt-[90px] md:-ml-[163px]"></div>
      </div>
      <section className="mt-5 md:mb-52 ">
        <div className="w-[146px] md:w-[550px] flex flex-col items-center">
          <div className="w-full md:h-[250px] h-[41px] bg-gray-3"></div>
          <div className="w-[67.8px] h-[75px] md:w-[350px] md:h-[350px] -mt-8 md:-mt-48">
            <Image
              src="/assets/illustration/3d-web.svg"
              alt="illustration"
              width={350}
              height={350}
              className="w-full h-full"
            />
          </div>
        </div>
        <h3 className="text-[8px] md:text-[32px] font-semibold md:my-6 my-[6px]">
          Website-Based Applications
        </h3>
        <p className="md:w-[529px] w-[146px] text-[6px] md:text-[16px]">
          Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Tera
          bel pov astrobel. Lörem ipsum astrobel sar direlig. Kronde est konfoni
          med kelig. Tera bel pov astrobel.
        </p>
        <div className="md:mt-6 mt-2 flex md:gap-x-6 gap-x-2">
          <Button className="bg-blue hover:bg-blue-2 md:h-[51px] md:w-[161px] w-[49px] h-[16px] text-[6px] md:text-sm">
            Start Project
          </Button>
          <Button className="md:h-[51px] md:w-[161px] w-[49px] h-[16px] text-[6px] md:text-sm">
            View Portfolio
          </Button>
        </div>
      </section>
    </section>
  );
};

export default WhatWeDo;
