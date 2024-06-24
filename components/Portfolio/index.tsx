import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import GridIcon from "@/public/assets/icons/GridIcon";
import ListIcon from "@/public/assets/icons/ListIcon";
import Pages from "../shared/Pages";
import CardSquarePorto from "./CardSquarePorto";
import CardListPorto from "./CardListPorto";

const index = () => {
  return (
    <section>
      <div className="flex justify-center gap-[6px] md:gap-6 px-7 flex-wrap md:overflow-hidden pt-7 md:pt-10">
        <div className="bg-blue w-[46px] h-[14px] md:w-auto md:h-[43px] rounded-[4px] md:rounded-[16px] flex items-center justify-center py-3 px-10">
          <p className="text-white font-extrabold text-[6px] md:text-[16px] whitespace-nowrap md:whitespace-normal">
            All
          </p>
        </div>
        <div className="w-[46px] h-[14px] md:w-auto md:h-[43px] rounded-[4px] md:rounded-[16px] flex items-center justify-center py-3 px-10">
          <p className="text-dark font-[500] text-[6px] md:text-[16px] hover:text-blue transition-colors duration-300 whitespace-nowrap md:whitespace-normal">
            Mobile Development
          </p>
        </div>
        <div className="w-[46px] h-[14px] md:w-auto md:h-[43px] rounded-[4px] md:rounded-[16px] flex items-center justify-center py-3 px-10">
          <p className="text-dark font-[500] text-[6px] md:text-[16px] hover:text-blue transition-colors duration-300 whitespace-nowrap md:whitespace-normal">
            Web App Development
          </p>
        </div>
        <div className="w-[46px] h-[14px] md:w-auto md:h-[43px] rounded-[4px] md:rounded-[16px] flex items-center justify-center py-3 px-10">
          <p className="text-dark font-[500] text-[6px] md:text-[16px] hover:text-blue transition-colors duration-300 whitespace-nowrap md:whitespace-normal">
            Website Development
          </p>
        </div>
        <div className="w-[46px] h-[14px] md:w-auto md:h-[43px] rounded-[4px] md:rounded-[16px] flex items-center justify-center py-3 px-10">
          <p className="text-dark font-[500] text-[6px] md:text-[16px] hover:text-blue transition-colors duration-300 whitespace-nowrap md:whitespace-normal">
            Digital Marketing
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-4 md:pt-12 pb-20">
        <div>
          <Tabs defaultValue="list" className="px-4">
            <div className="flex justify-between items-center">
              <div className="flex w-full md:w-[773px] h-[24px] md:h-[40px] items-center border-[0.5px] rounded-[2px] md:rounded-lg border-dark">
                <div className="flex items-center justify-center pl-3 border-0 rounded-none">
                  <Image
                    src="/assets/icons/search.svg"
                    alt="search"
                    width={20}
                    height={20}
                    className="z-30"
                  />
                </div>
                <Input
                  type="text"
                  className="flex-grow h-full py-2 pl-2 md:pl-4 pr-2 border-0 rounded-none"
                />
              </div>
              <TabsList>
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
              </div>
              <CardListPorto />
              <CardListPorto />
              <CardListPorto />
              <CardListPorto />
              <Pages />
            </TabsContent>
            <TabsContent value="square">
              <div className="flex gap-4 md:gap-[0px] flex-wrap my-4 md:my-7 mb-10">
                <CardSquarePorto />
                <CardSquarePorto />
                <CardSquarePorto />
                <CardSquarePorto />
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