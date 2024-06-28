import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import About from "./About";
import Legalitas from "./Legalitas";
import Image from "next/image";
import Box from "./Box";
import OurClient from "./OurClient";
import OurHistory from "./OurHistory";
import CarouselHeader from "../LandingPage/Header/CarouselHeader";
import Carousels from "./Carousels/Carousel";
import SliderMobile from "./SliderMobile";

const AboutLayout = ({ teams }: any) => {
  const boxes = [
    { title: "Tittle", description: "Description", bgImage: "/assets/images/dummy1.png" },
    { title: "Tittle", description: "Description", bgImage: "/assets/images/dummy2.png" },
    { title: "Tittle", description: "Description", bgImage: "/assets/images/dummy3.png" },
    { title: "Tittle", description: "Description", bgImage: "/assets/images/dummy4.png" },
    { title: "Tittle", description: "Description", bgImage: "/assets/images/dummy5.png" },
    { title: "Tittle", description: "Description", bgImage: "/assets/images/dummy6.png" },
    { title: "Tittle", description: "Description", bgImage: "/assets/images/dummy7.png" },
    { title: "Tittle", description: "Description", bgImage: "/assets/images/dummy8.png" }
  ];

  return (
    <section className="bg-[#F4F4F4] overflow-hidden">
      <Tabs defaultValue="about" className="md:p-[120px] mt-2">
        <TabsList>
          <TabsTrigger className="text-[#FF6600] px-4 py-2 md:px-10 md:py-[25px] data-[state=active]:bg-[#FF6600] font-bold text-[12px] md:text-[20px]" value="about">
            ABOUT
          </TabsTrigger>
          <TabsTrigger value="legalitas" className="text-[#FF6600] px-4 py-2  md:px-10 md:py-[25px] data-[state=active]:bg-[#FF6600] text-[12px] font-bold md:text-[20px]">
            LEGALITAS
          </TabsTrigger>
        </TabsList>
        <TabsContent value="about" className="-ml-1 md:ml-1">
          <About />
        </TabsContent>
        <TabsContent value="legalitas" className="md:ml-1">
          <Legalitas />
        </TabsContent>
      </Tabs>
      <div className="hidden md:block">
        <Carousels />
      </div>
      <div className="block md:hidden">
        <SliderMobile />
      </div>

      <div className="px-4 md:px-[100px] pb-10 min-h-[200px] md:min-h-[845px] bg-[url('/assets/images/bg-team.png')] bg-contain bg-center flex justify-center items-end">
        <div className="text-center md:text-left md:w-[892px]">
          <h1 className="text-white text-[24px] md:text-[64px] font-bold">Strength in Numbers <span className="text-[#480DEC]">:</span></h1>
          <h2 className="text-[#480DEC] text-[18px] md:text-[32px]">“Together We Stand, United We Achieve! “</h2>
        </div>
      </div>

      <div className="flex flex-col w-full h-screen">
        <div className="flex flex-wrap w-full h-1/2 md:h-full">
          {boxes.slice(0, 4).map((box, index) => (
            <div key={index} className="w-1/2 md:w-1/4 h-1/2 md:h-full">
              <Box {...box} />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap w-full h-1/2 md:h-full">
          {boxes.slice(4).map((box, index) => (
            <div key={index} className="w-1/2 md:w-1/4 h-1/2 md:h-full">
              <Box {...box} />
            </div>
          ))}
        </div>
      </div>
      {/* OurCliet */}
      <div className="p-10 md:px-[150px] md:pt-24 flex flex-col w-full md:pb-[82px]">
        <OurClient />
      </div>

      <div className="p-10 md:px-[150px] bg-[#4F4F4F] md:pt-24 flex flex-col w-full">
        <OurHistory />
      </div>
    </section>
  )
}
export default AboutLayout;
