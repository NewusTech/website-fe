import CardServices from "@/components/Service/CardService";
import FlowDesktop from "@/components/Service/FlowDesktop";
import FlowResponsive from "@/components/Service/FlowResponsive";
import { getServiceList } from "../Fetching/Service/service";
import WorkFlow from "./WorkFlow";
export const dynamic = 'force-dynamic';

export default async function WhatWeDo() {
  const services = await getServiceList();

  return (
    <section className="px-5 max-w-7xl mx-auto md:my-[20px] my-8 overflow-hidden">
      <div className="flex items-center justify-center flex-col gap-1 md:gap-4 relative">
        <h1 className="font-bold text-dark text-mobileJudul md:text-webJudul z-20">
          What We Do
        </h1>
        <p className="w-full md:w-[558px] text-center text-mobileDesk md:text-webSubjudul">
          With over 3 years of experience, Newus Technology is your trusted partner for digital success. Let{"'"}s collaborate to build a brighter future for your business.
        </p>
        <div className="md:w-[70px] md:h-[45px] w-[51px] h-[45px] bg-tangerine absolute z-10 -mt-24 -ml-16 md:-mt-[100px] md:-ml-[80px]"></div>
      </div>
      <section className="grid grid-cols-2 gap-x-3 md:gap-x-2 2xl:gap-x-10 mb-5 py-5 md:px-5 xl:px-10">
        {services?.map((service: any, i: number) => (
          <CardServices
            key={i}
            illustration={service.image || 'assets/illustration/3d-dm.svg'}
            title={service.title}
            desc={service.description}
          />
        ))}
        {/* <CardServices
          illustration="/assets/illustration/3d-dm.svg"
          title="Digital Marketing"
          desc="Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Tera bel pov astrobel. Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Tera bel pov astrobel."
        /> */}
      </section>
      {/* <FlowDesktop />
      <FlowResponsive /> */}
      <WorkFlow />
    </section>
  );
};
