import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import About from "./About";
import Legalitas from "./Legalitas";
import Image from "next/image";
import Box from "./Box";
import OurClient from "./OurClient";
import OurHistory from "./OurHistory";

const AboutLayout = () => {
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
    <section className="bg-[#F4F4F4]">
      <Tabs defaultValue="about" className="p-[120px]">
        <TabsList>
          <TabsTrigger className="text-[#FF6600] px-10 py-[25px] data-[state=active]:bg-[#FF6600] font-bold text-[20px]" value="about">
            ABOUT
          </TabsTrigger>
          <TabsTrigger value="legalitas" className="text-[#FF6600] px-10 py-[25px] data-[state=active]:bg-[#FF6600]  font-bold text-[20px]">
            LEGALITAS
          </TabsTrigger>
        </TabsList>
        <TabsContent value="about" className="ml-1">
          <About />
        </TabsContent>
        <TabsContent value="legalitas" className="ml-1">
          <Legalitas />
        </TabsContent>
      </Tabs>

      <div className="px-[100px] pb-52 min-h-screen bg-[url('/assets/illustration/bg-about.svg')] bg-cover">
        <div className="flex justify-end text-white pt-[120px] text-[40px] font-bold">Meet the team behind the apps</div>
        <div className="flex justify-between gap-10">
          <div className="relative">
            <Image src={'/assets/images/dummyceo.svg'} width={579} height={517} alt="Dummy Profile" />
            <div className="absolute bottom-0 w-full bg-opacity-75 py-2">
              <div className="text-white text-center">
                <h1 className="font-bold text-[16px] md:text-[32px]">ANTONI, S.T</h1>
                <h2 className="text-[12px] md:text-[16px]">Chief Executive Officer</h2>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="relative">
              <Image
                src={'/assets/images/dummyceo.svg'}
                width={359}
                height={343}
                alt="Dummy Profile"
              />
              <div className="absolute bottom-0 w-full bg-opacity-75 py-2">
                <div className="text-white text-center">
                  <h1 className="font-bold text-[16px] md:text-[20px]">DEVI ADELIANTY</h1>
                  <h2 className="text-[12px] md:text-[16px]">Chief Marketing Officer</h2>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={'/assets/images/dummyceo.svg'}
                width={359}
                height={343}
                alt="Dummy Profile"
              />
              <div className="absolute bottom-0 w-full bg-opacity-75 py-2">
                <div className="text-white text-center">
                  <h1 className="font-bold text-[16px] md:text-[20px]">ADAM KALAMONDO</h1>
                  <h2 className="text-[12px] md:text-[16px]">Chief Technology  Officer</h2>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="px-[100px] pb-10 min-h-[845px] bg-[url('/assets/images/bg-team.png')] bg-cover text-[64px] font-bold flex justify-center items-end">
        <div className="w-[892px]">
          <h1 className="text-white">Strength in Numbers <span className="text-[#480DEC]">:</span></h1>
          <h2 className="text-[#480DEC]">“Together We Stand, United We Achieve! “</h2>
        </div>
      </div>

      <div className="flex flex-col w-full h-screen">
        <div className="flex flex-wrap w-full h-1/2">
          {boxes.slice(0, 4).map((box, index) => (
            <Box key={index} {...box} />
          ))}
        </div>
        <div className="flex flex-wrap w-full h-1/2">
          {boxes.slice(4).map((box, index) => (
            <Box key={index} {...box} />
          ))}
        </div>
      </div>
      {/* OurCliet */}
      <div className="px-[150px] pt-24 flex flex-col w-full pb-[82px]">
        <OurClient />
      </div>

      <div className="px-[150px] bg-[#4F4F4F] pt-24 flex flex-col w-full">
        <OurHistory />
      </div>

    </section>
  )
}
export default AboutLayout;
