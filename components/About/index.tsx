import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import About from "./About";
import Legalitas from "./Legalitas";
import Box from "./Box";
import OurClient from "./OurClient";
import OurHistory from "./OurHistory";
import Carousels from "./Carousels/Carousel";
import SliderMobile from "./SliderMobile";

const AboutLayout = ({ teams, clients }: any) => {
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

  const items = teams || boxes;

  return (
    <section className="bg-white md:bg-[#F4F4F4] overflow-hidden">
      <Tabs defaultValue="about" className="md:p-[120px] -ml-2">
        <TabsList>
          <TabsTrigger className="text-[#FF6600] px-4 py-2 md:px-10 md:py-[25px] data-[state=active]:bg-[#FF6600] font-bold text-[12px] md:text-[20px] data-[state=active]:border-[#FF6600] border-[#FF6600] border data-[state=active]:rounded-none" value="about">
            ABOUT
          </TabsTrigger>
          <TabsTrigger value="legalitas" className="text-[#FF6600] px-4 py-2  md:px-10 md:py-[25px] data-[state=active]:bg-[#FF6600] text-[12px] font-bold md:text-[20px] data-[state=active]:border-[#FF6600] border-[#FF6600] border">
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
        <Carousels teams={teams} />
      </div>
      <div className="block md:hidden">
        <SliderMobile />
      </div>

      <div className="px-4 md:px-[100px] pb-10 min-h-[250px] md:min-h-[845px] bg-[url('/assets/images/bg-team.png')] bg-contain bg-center flex justify-center items-end">
        <div className="text-center md:text-left md:w-[892px]">
          <h1 className="text-white text-start text-[24px] md:text-[64px] font-bold font-asap">Strength in Numbers <span className="text-[#480DEC]">:</span></h1>
          <h2 className="text-[#480DEC] font-bold md:leading-[70px] md:text-[64px]">“Together We Stand, United We Achieve! “</h2>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="hidden md:flex flex-wrap w-full md:h-full">
          {items.slice(0, 4).map((box: any, index: number) => (
            <div key={index} className="w-[20%] md:w-1/4 h-1/2 md:h-full">
              <Box {...box} />
            </div>
          ))}
        </div>
        <div className="hidden md:flex flex-wrap w-full md:h-full">
          {items.slice(4).map((box: any, index: number) => (
            <div key={index} className="w-[20%] md:w-1/4 h-1/2 md:h-full">
              <Box {...box} />
            </div>
          ))}
        </div>

        {/* mobile */}
        <div className="md:hidden flex flex-grow-0 justify-between flex-wrap w-full h-full">
          {items.map((box: any, index: number) => (
            <div key={index} className="w-[24%] h-[24%]">
              <Box {...box} />
            </div>
          ))}
        </div>
      </div>
      {/* OurCliet */}
      <div className="p-10 md:px-28 flex flex-col w-full md:py-24">
        <OurClient clients={clients} />
      </div>

      <div className="p-10 md:px-28 bg-[#4F4F4F] md:pt-24 md:pb-24 flex flex-col w-full">
        <OurHistory />
      </div>
    </section>
  )
}
export default AboutLayout;
