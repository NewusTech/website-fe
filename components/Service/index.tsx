import Image from "next/image";
import { Button } from "@/components/ui/button";
import CardServices from "@/components/Service/CardService";
import FlowDesktop from "@/components/Service/FlowDesktop";
import FlowResponsive from "@/components/Service/FlowResponsive";

const WhatWeDo = () => {
  return (
    <section className="container md:my-[20px] my-8">
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
      <section className="grid grid-cols-2 gap-x-3 md:gap-x-10 mb-5 md:mb-52">
        <CardServices
          illustration="/assets/illustration/3d-web.svg"
          title="Website-Based Applications"
          desc="Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Tera bel pov astrobel. Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Tera bel pov astrobel."
        />
        <CardServices
          illustration="/assets/illustration/3d-mobile.svg"
          title="Mobile Apps Development"
          desc="Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Tera bel pov astrobel. Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Tera bel pov astrobel."
        />
        <CardServices
          illustration="/assets/illustration/3d-uiux.svg"
          title="UI / UX Design"
          desc="Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Tera bel pov astrobel. Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Tera bel pov astrobel."
        />
        <CardServices
          illustration="/assets/illustration/3d-dm.svg"
          title="Digital Marketing"
          desc="Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Tera bel pov astrobel. Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Tera bel pov astrobel."
        />
      </section>
      <FlowDesktop />
      <FlowResponsive />
    </section>
  );
};

export default WhatWeDo;
