import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import CardListProject from "@/components/LandingPage/SuccessProject/CardListProject";
import CardSquareProject from "@/components/LandingPage/SuccessProject/CardSquareProject";
import Pages from "@/components/shared/Pages";
import GridIcon from "@/public/assets/icons/GridIcon";
import ListIcon from "@/public/assets/icons/ListIcon";

const TabsProject = () => {
  return (
    <div className="relative">
      <h1 className="text-blue font-semibold text-[10px] md:text-[32px]">
        Success Project
      </h1>
      <Tabs defaultValue="list" className="min-w-screen">
        <TabsList className="flex justify-end -mt-7 md:mt">
          <TabsTrigger value="list" className="ml-2 pb-[3px] pt-[3px]">
            <ListIcon color="w-[10px] md:w-[25px]" />
          </TabsTrigger>
          <TabsTrigger value="square" className="ml-2 pb-[5.5px] pt-[5px]">
            <GridIcon color="w-[10px] md:w-[25px]" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="list">
          <p className="text-gray text-[8px] md:text-[16px]">
            Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
            Terabel pov astrobel sar direlig.
          </p>
          <div className="flex flex-col md:flex-row gap-4 my-4 md:my-10 ">
            <div className="gap-4 md:flex hidden">
              <Button className="bg-transparent border border-dark shadow-none hover:bg-[#E3E3E3] text-blue">
                Mobile Development
              </Button>
              <Button className="bg-transparent border border-dark shadow-none hover:bg-[#E3E3E3] text-blue">
                Web App Development
              </Button>
              <Button className="bg-transparent border border-dark shadow-none hover:bg-[#E3E3E3] text-blue">
                Website Development
              </Button>
              <Button className="bg-transparent border border-dark shadow-none hover:bg-[#E3E3E3] text-blue">
                Digital Marketing
              </Button>
            </div>
            <div className="flex w-full">
              <Input
                type="text"
                className="bg-white border border-dark border-r-0 rounded-r-none"
              />
              <div className="border border-l-0 border-dark -ml-4 bg-white flex items-center justify-center rounded-l-0 rounded-r-[6px]">
                <Image
                  src="/assets/icons/search.svg"
                  alt="search"
                  width={30}
                  height={30}
                  className="mr-3"
                />
              </div>
            </div>
            <div className="gap-2 md:hidden flex">
              <Button
                className="bg-transparent border border-dark shadow-none hover:bg-[#E3E3E3] text-blue"
                size="xs"
              >
                Mobile Development
              </Button>
              <Button
                className="bg-transparent border border-dark shadow-none hover:bg-[#E3E3E3] text-blue"
                size="xs"
              >
                Web App Development
              </Button>
              <Button
                className="bg-transparent border border-dark shadow-none hover:bg-[#E3E3E3] text-blue"
                size="xs"
              >
                Website Development
              </Button>
              <Button
                className="bg-transparent border border-dark shadow-none hover:bg-[#E3E3E3] text-blue"
                size="xs"
              >
                Digital Marketing
              </Button>
            </div>
          </div>
          <CardListProject />
          <CardListProject />
          <Pages />
        </TabsContent>
        <TabsContent value="square">
          <p className="text-gray text-[8px] md:text-[16px]">
            Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
            Terabel pov astrobel sar direlig.
          </p>
          <div className="flex flex-col md:flex-row gap-4 my-4 md:my-10 ">
            <div className="gap-4 md:flex hidden">
              <Button className="bg-transparent border border-dark shadow-none hover:bg-[#E3E3E3] text-blue">
                Mobile Development
              </Button>
              <Button className="bg-transparent border border-dark shadow-none hover:bg-[#E3E3E3] text-blue">
                Web App Development
              </Button>
              <Button className="bg-transparent border border-dark shadow-none hover:bg-[#E3E3E3] text-blue">
                Website Development
              </Button>
              <Button className="bg-transparent border border-dark shadow-none hover:bg-[#E3E3E3] text-blue">
                Digital Marketing
              </Button>
            </div>
            <div className="flex w-full">
              <Input
                type="text"
                className="bg-white border border-dark border-r-0 rounded-r-none"
              />
              <div className="border border-l-0 border-dark -ml-4 bg-white flex items-center justify-center rounded-l-0 rounded-r-[6px]">
                <Image
                  src="/assets/icons/search.svg"
                  alt="search"
                  width={30}
                  height={30}
                  className="mr-3"
                />
              </div>
            </div>
            <div className="gap-2 md:hidden flex">
              <Button
                className="bg-transparent border border-dark shadow-none hover:bg-[#E3E3E3] text-blue"
                size="xs"
              >
                Mobile Development
              </Button>
              <Button
                className="bg-transparent border border-dark shadow-none hover:bg-[#E3E3E3] text-blue"
                size="xs"
              >
                Web App Development
              </Button>
              <Button
                className="bg-transparent border border-dark shadow-none hover:bg-[#E3E3E3] text-blue"
                size="xs"
              >
                Website Development
              </Button>
              <Button
                className="bg-transparent border border-dark shadow-none hover:bg-[#E3E3E3] text-blue"
                size="xs"
              >
                Digital Marketing
              </Button>
            </div>
          </div>
          <div className="flex gap-4 md:gap-[60px] flex-wrap mb-[10px]">
            <CardSquareProject />
            <CardSquareProject />
            <CardSquareProject />
            <CardSquareProject />
            <CardSquareProject />
          </div>
          <Pages />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsProject;
