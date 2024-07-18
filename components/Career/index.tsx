import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Job from "./Job/index";
import Intern from "./Intern/index";

const CareerLayout = ({ dataJobs, categoryJobs }: any) => {
  return (
    <section className="max-w-7xl mx-auto p-4 md:pt-20 md:pb-20">
      <Tabs defaultValue="say-hello">
        <TabsList className="flex justify-evenly mb-4 md:mb-0">
          <TabsTrigger className="border w-full py-2 md:py-[18px] md:px-[140px] text-black flex items-center rounded-[2px] justify-center bg-[#F4F4F4]whitespace-nowrap text-mobileSubjudul md:text-webSubjudul disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#F4F4F4] data-[state=active]:text-black data-[state=active]:border-2 data-[state=active]:border-[#480DEC] data-[state=active]:shadow-none data-[state=active]:font-bold bg-[#D9D9D9]"
            value="say-hello">
            Job Recruitment
          </TabsTrigger>
          <TabsTrigger className="border w-full  py-2 md:py-[18px] md:px-[140px] text-black flex items-center rounded-[2px] justify-center bg-[#F4F4F4]whitespace-nowrap text-mobileSubjudul md:text-webSubjudul disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#F4F4F4] data-[state=active]:text-black data-[state=active]:border-2 data-[state=active]:border-[#480DEC] data-[state=active]:shadow-none data-[state=active]:font-bold bg-[#D9D9D9]"
            value="build-project"
          >
            Intern Recruitment
          </TabsTrigger>
        </TabsList>
        <TabsContent value="say-hello" className="ml-1">
          <Job dataJobs={dataJobs} categoryJobs={categoryJobs} />
        </TabsContent>
        <TabsContent value="build-project" className="ml-1">
          <Intern />
        </TabsContent>
      </Tabs>
    </section>
  )
}

export default CareerLayout