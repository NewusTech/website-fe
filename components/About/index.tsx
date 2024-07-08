import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import About from "./Tabs/About";
import Legalitas from "./Tabs/Legalitas";
import Box from "./Box";
import OurClient from "./OurClient";
import OurHistory from "./OurHistory";
import Carousels from "./Carousels/Carousel";
import SliderMobile from "./SliderMobile";
import Aspekti from "./Tabs/Aspekti";
import Kadin from "./Tabs/Kadin";
import TenagaAhli from "./Tabs/TenagaAhli";
import Struktur from "./Struktur";
import StrukturMobile from "./Struktur/mobile";
import Medias from "./Medias";

const AboutLayout = ({ teams, clients, medias }: any) => {
  const boxes = [
    { title: "Tittle", description: "Description", image: "/assets/images/dummy1.png" },
    { title: "Tittle", description: "Description", image: "/assets/images/dummy2.png" },
    { title: "Tittle", description: "Description", image: "/assets/images/dummy3.png" },
    { title: "Tittle", description: "Description", image: "/assets/images/dummy4.png" },
    { title: "Tittle", description: "Description", image: "/assets/images/dummy5.png" },
    { title: "Tittle", description: "Description", image: "/assets/images/dummy6.png" },
    { title: "Tittle", description: "Description", image: "/assets/images/dummy7.png" },
    { title: "Tittle", description: "Description", image: "/assets/images/dummy8.png" }
  ];

  const items = teams || boxes;

  return (
    <section className="bg-white md:bg-[#F4F4F4]">
      <Tabs defaultValue="about" className="md:p-[20px] lg:p-[50px] xl:p-[120px]">
        <TabsList className=" md:border-[#FF6600] md:border w-full pl-[135px] md:pl-0 md:px-0 md:py-10 overflow-x-scroll md:overflow-hidden rounded-none">
          <TabsTrigger className="text-[#FF6600] px-4 py-2 md:px-10 md:py-[25px] data-[state=active]:bg-[#FF6600] font-bold text-[12px] md:text-[20px] data-[state=active]:border-[rgb(255,102,0)] border-[#FF6600] border data-[state=active]:rounded-none rounded-none w-full" value="about">
            ABOUT
          </TabsTrigger>
          <TabsTrigger value="legalitas" className="text-[#FF6600] px-4 py-2  md:px-10 md:py-[25px] data-[state=active]:bg-[#FF6600] text-[12px] font-bold md:text-[20px] data-[state=active]:border-[#FF6600] border-[#FF6600] border w-full">
            LEGALITAS
          </TabsTrigger>
          <TabsTrigger value="aspekti" className="text-[#FF6600] px-4 py-2  md:px-10 md:py-[25px] data-[state=active]:bg-[#FF6600] text-[12px] font-bold md:text-[20px] data-[state=active]:border-[#FF6600] border-[#FF6600] border w-full">
            SBU - ASPEKTI
          </TabsTrigger>
          <TabsTrigger value="kadin" className="text-[#FF6600] px-4 py-2  md:px-10 md:py-[25px] data-[state=active]:bg-[#FF6600] text-[12px] font-bold md:text-[20px] data-[state=active]:border-[#FF6600] border-[#FF6600] border w-full">
            KADIN
          </TabsTrigger>
          <TabsTrigger value="tenaga-ahli" className="text-[#FF6600] px-4 py-2  md:px-10 md:py-[25px] data-[state=active]:bg-[#FF6600] text-[12px] font-bold md:text-[20px] data-[state=active]:border-[#FF6600] border-[#FF6600] border w-full">
            SERTIFIKAT TENAGA AHLI
          </TabsTrigger>
        </TabsList>
        <TabsContent value="about" className="-ml-1 md:mx-1">
          <About />
        </TabsContent>
        <TabsContent value="legalitas" className="md:mx-1">
          <Legalitas />
        </TabsContent>
        <TabsContent value="aspekti" className="md:mx-1">
          <Aspekti />
        </TabsContent>
        <TabsContent value="kadin" className="md:mx-1">
          <Kadin />
        </TabsContent>
        <TabsContent value="tenaga-ahli" className="md:mx-1">
          <TenagaAhli />
        </TabsContent>
      </Tabs>
      <div className="hidden lg:block">
        <Struktur teams={teams} />
        {/* <Carousels teams={teams} /> */}
      </div>
      <div className="block lg:hidden">
        <StrukturMobile teams={teams} />
      </div>

      <Medias medias={medias} />

      {/* <div className="hidden md:flex flex-wrap w-full md:h-full">
          {items.slice(4).map((box: any, index: number) => (
            <div key={index} className="w-[20%] md:w-1/4 h-1/2 md:h-full">
              <Box {...box} />
            </div>
          ))}
        </div> */}

      {/* mobile */}
      {/* <div className="md:hidden flex flex-grow-0 justify-between flex-wrap w-full h-full">
          {items.map((box: any, index: number) => (
            <div key={index} className="w-[24%] h-[24%]">
              <Box {...box} />
            </div>
          ))}
        </div> */}
      {/* OurCliet */}
      <div className="p-10 md:px-28 flex flex-col w-full md:p-20">
        <OurClient clients={clients} />
      </div>

      <div className="p-10 md:px-28 bg-[#4F4F4F] md:pt-24 md:pb-24 flex flex-col w-full">
        <OurHistory />
      </div>
    </section>
  )
}
export default AboutLayout;
