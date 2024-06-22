import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import GridIcon from "@/public/assets/icons/GridIcon";
import ListIcon from "@/public/assets/icons/ListIcon";
import CardSquareProject from "../LandingPage/SuccessProject/CardSquareProject";
import { Button } from "@/components/ui/button";
import CardListProject from "../LandingPage/SuccessProject/CardListProject";
import Pages from "../shared/Pages";
const index = () => {
  return (
    <section>
      <div className="hidden md:flex gap-6 mt-10 justify-center">
        <div className="bg-blue w-[102px] h-[43px] rounded-[16px] flex items-center justify-center">
          <p className="text-white font-extrabold text-[16px]">All</p>
        </div>
        <div className="h-[43px] rounded-[16px] flex items-center justify-center ">
          <p className="text-dark font-[500] text-[16px] hover:text-blue transition-colors duration-300">
            Mobile Development
          </p>
        </div>
        <div className="h-[43px] rounded-[16px] flex items-center justify-center">
          <p className="text-dark font-[500] text-[16px] hover:text-blue transition-colors duration-300">
            Web App Development
          </p>
        </div>
        <div className="h-[43px] rounded-[16px] flex items-center justify-center">
          <p className="text-dark font-[500] text-[16px] hover:text-blue transition-colors duration-300">
            Website Development
          </p>
        </div>
        <div className="h-[43px] rounded-[16px] flex items-center justify-center">
          <p className="text-dark font-[500] text-[16px] hover:text-blue transition-colors duration-300">
            Digital Marketing
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 pb-20">
        <div>
          <Tabs defaultValue="list">
            <div className="flex justify-between items-center">
              <div className="flex w-[773px] h-[40px]">
                <Image
                  src="/assets/icons/search.svg"
                  alt="search"
                  width={30}
                  height={30}
                  className="z-30"
                />
                <Input
                  type="text"
                  className="bg-white border h-[40px] border-dark -ml-10"
                />
              </div>
              <TabsList className="-mt-7 md:mt-7">
                <TabsTrigger value="list" className="ml-2 pb-[3px] pt-[3px]">
                  <ListIcon color="w-[10px] md:w-[25px]" />
                </TabsTrigger>
                <TabsTrigger value="square" className="ml-2 pb-[5.5px] pt-[5px]">
                  <GridIcon color="w-[10px] md:w-[25px]" />
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="list">
              <div className="flex flex-col md:flex-row gap-4 my-4 md:my-7 ">
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
              <div className="flex gap-4 md:gap-[60px] flex-wrap my-4 md:my-7 mb-10">
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
      </div>
    </section >
  )
}

export default index