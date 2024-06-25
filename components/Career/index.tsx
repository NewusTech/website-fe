import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Job from "./Job";
import Intern from "./Intern";

const CareerLayout = () => {
  return (
    <section className="max-w-7xl mx-auto pt-2 md:pt-20 md:pb-20">
      <Tabs defaultValue="say-hello">
        <TabsList className="flex justify-evenly">
          <TabsTrigger className="border w-full py-[18px] px-[140px] text-black flex items-center rounded-[2px] justify-center bg-[#F4F4F4]whitespace-nowrap md:text-[16px] disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#F4F4F4] data-[state=active]:text-black data-[state=active]:font-bold data-[state=active]:shadow-none bg-[#D9D9D9] "
            value="say-hello">
            Job Recruitment
          </TabsTrigger>
          <TabsTrigger className="border w-full py-[18px] px-[140px] text-black flex items-center rounded-[2px] justify-center bg-[#F4F4F4]whitespace-nowrap md:text-[16px] disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#F4F4F4] data-[state=active]:text-black data-[state=active]:font-bold data-[state=active]:shadow-none bg-[#D9D9D9] "
            value="build-project"
          >
            Intern Recruitment
          </TabsTrigger>
        </TabsList>
        <TabsContent value="say-hello" className="ml-1">
          <Job />
        </TabsContent>
        <TabsContent value="build-project" className="ml-1">
          <Intern />
        </TabsContent>
      </Tabs>
    </section>
  )
}

export default CareerLayout