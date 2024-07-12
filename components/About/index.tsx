import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs/tab";
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
import Image from "next/image";

const AboutLayout = ({ abouts, teams, clients, medias }: any) => {
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

  const dummyValues = [
    { title: 'Profesional', imageUrl: '/assets/icons/principle/1.svg' },
    { title: 'Experience', imageUrl: '/assets/icons/principle/2.svg' },
    { title: 'Responsibility', imageUrl: '/assets/icons/principle/3.svg' },
    { title: 'Integrity', imageUrl: '/assets/icons/principle/4.svg' },
    { title: 'Statisfaction', imageUrl: '/assets/icons/principle/5.svg' },
    { title: 'Innovation', imageUrl: '/assets/icons/principle/6.svg' },
  ]

  const items = teams || boxes;

  return (
    <section className="bg-white md:bg-[#F4F4F4] overflow-hidden">
      <Tabs defaultValue="about" className="md:p-[20px] lg:p-[50px] xl:px-[120px] xl:pt-[120px] w-full">
        <TabsList className="w-full text-[#FF6600]">
          <TabsTrigger className="text-[#FF6600] px-4 py-2 md:px-10 md:py-[25px] data-[state=active]:bg-[#FF6600] font-bold text-mobileSubjudul md:text-webSubjudul data-[state=active]:border-[rgb(255,102,0)] border-[#FF6600] border data-[state=active]:rounded-none rounded-none w-full" value="about">
            ABOUT
          </TabsTrigger>
          <TabsTrigger value="legalitas" className="text-[#FF6600] px-4 py-2  md:px-10 md:py-[25px] data-[state=active]:bg-[#FF6600] text-mobileSubjudul md:text-webSubjudul font-bold data-[state=active]:border-[#FF6600] border-[#FF6600] border w-full">
            LEGALITAS
          </TabsTrigger>
          <TabsTrigger value="aspekti" className="text-[#FF6600] px-4 py-2  md:px-10 md:py-[25px] data-[state=active]:bg-[#FF6600] font-bold  data-[state=active]:border-[#FF6600] border-[#FF6600] border w-full text-mobileSubjudul md:text-webSubjudul">
            SBU - ASPEKTI
          </TabsTrigger>
          <TabsTrigger value="kadin" className="text-[#FF6600] px-4 py-2  md:px-10 md:py-[25px] data-[state=active]:bg-[#FF6600] font-bold data-[state=active]:border-[#FF6600] border-[#FF6600] border w-full text-mobileSubjudul md:text-webSubjudul">
            KADIN
          </TabsTrigger>
          <TabsTrigger value="tenaga-ahli" className="text-[#FF6600] px-4 py-2  md:px-10 md:py-[25px] data-[state=active]:bg-[#FF6600] font-bold data-[state=active]:border-[#FF6600] border-[#FF6600] border w-full text-mobileSubjudul md:text-webSubjudul">
            SERTIFIKAT TENAGA AHLI
          </TabsTrigger>
        </TabsList>
        <TabsContent value="about">
          <About abouts={abouts} />
        </TabsContent>
        <TabsContent value="legalitas" >
          <Legalitas />
        </TabsContent>
        <TabsContent value="aspekti" >
          <Aspekti />
        </TabsContent>
        <TabsContent value="kadin" >
          <Kadin />
        </TabsContent>
        <TabsContent value="tenaga-ahli">
          <TenagaAhli />
        </TabsContent>
      </Tabs>
      <div className="max-w-7xl mx-auto px-5 pt-5 pb-10 xl:py-10 xl:pb-20 md:px-[67px] w-full flex flex-col justify-center items-center">
        <h1 className='text-[#FF6600] font-bold text-mobileJudul md:text-webJudul pb-5 md:pb-10 text-center md:text-start uppercase'>Principles <span className='text-[#480DEC] text-center md:text-start'>& Values</span></h1>
        <div className="grid gap-4 md:gap-6 grid-cols-3 md:grid-cols-6">
          {dummyValues.map((dummy: any, i: number) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-20 xl:w-40 flex items-center justify-center h-20 xl:h-40 rounded-full bg-[#FF6600]"><Image src={dummy.imageUrl} alt="logo" width={100} height={100} className="text-white w-10 h-10 lg:w-20 lg:h-20" />
              </div>
              <h1 className="pt-2 font-semibold uppercase text-mobileSubjudul md:text-webSubjudul">{dummy.title}</h1>
            </div>
          ))}
        </div>
      </div>

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
      <div className="p-5 md:p-10 xl:px-20 flex flex-col w-full xl:p-20">
        <OurClient clients={clients} />
      </div>

      <div className="p-5 md:p-10 xl:px-20 bg-[#4F4F4F] xl:p-20 flex flex-col w-full">
        <OurHistory />
      </div>
    </section>
  )
}
export default AboutLayout;
