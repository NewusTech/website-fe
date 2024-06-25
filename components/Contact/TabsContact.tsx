import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";

const TabsContact = () => {
  return (
    <section className="p-4 md:-mt-5">
      <h1 className="font-bold md:text-[32px] pb-3">Get In Touch</h1>
      <h2 className="text-[10px] md:text-[16px] pb-4">Do you really think graphic arts supply houses were hiring classics scholars</h2>
      <Tabs defaultValue="say-hello">
        <TabsList className="flex justify-start gap-6">
          <TabsTrigger className="inline-flex text-black items-center rounded-[2px] justify-center bg-[#F4F4F4]whitespace-nowrap pb-1 md:text-md disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#F4F4F4] data-[state=active]:text-black data-[state=active]:font-bold data-[state=active]:shadow-none data-[state=active]:border-b-[2.5px] data-[state=active]:border-b-[rgb(72,13,236)]"
            value="say-hello">
            Say Hello
          </TabsTrigger>
          <TabsTrigger className="inline-flex text-black items-center rounded-[2px] justify-center bg-[#F4F4F4]whitespace-nowrap pb-1 md:text-md  disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#F4F4F4] data-[state=active]:text-black data-[state=active]:font-bold data-[state=active]:shadow-none data-[state=active]:border-b-[2.5px] data-[state=active]:border-b-[#480DEC]"
            value="build-project"
          >
            Build Your Project
          </TabsTrigger>
        </TabsList>
        <TabsContent value="say-hello" className="ml-1">
          <TabOne />
        </TabsContent>
        <TabsContent value="build-project" className="ml-1">
          <TabTwo />
        </TabsContent>
      </Tabs>
    </section>
  )
}

export default TabsContact