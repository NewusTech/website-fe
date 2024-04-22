import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Coolicon from "@/public/assets/icons/coolicon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CardListProject from "@/components/SuccessProject/CardListProject";
import CardSquareProject from "@/components/SuccessProject/CardSquareProject";

const TabsProject = () => {
  return (
    <Tabs defaultValue="list" className="min-w-screen">
      <TabsList className="flex justify-end">
        <TabsTrigger value="list" className="ml-2 pb-[3px] pt-[3px]">
          <Image
            src="/assets/icons/reorder.svg"
            alt="reorder"
            width={24}
            height={24}
          />
        </TabsTrigger>
        <TabsTrigger value="square" className="ml-2 pb-[5.5px] pt-[5px]">
          <Coolicon color="text-blue" />
        </TabsTrigger>
      </TabsList>
      <TabsContent value="list">
        <p className="text-gray">
          Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
          Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig.
          Kronde est
        </p>
        <div className="flex gap-4 my-10">
          <Button className="bg-transparent border border-dark shadow-none text-blue">
            Website
          </Button>
          <Button className="bg-transparent border border-dark shadow-none text-blue">
            Mobile
          </Button>
          <Button className="bg-transparent border border-dark shadow-none text-blue">
            UI / UX
          </Button>
          <Button className="bg-transparent border border-dark shadow-none text-blue">
            SEO
          </Button>
          <Input
            type="text"
            className="bg-white border border-dark border-r-0 rounded-r-none"
          />
          <div className="border border-l-0 border-dark -ml-4 bg-white flex items-center justify-center rounded-r-[6px]">
            <Image
              src="/assets/icons/search.svg"
              alt="search"
              width={30}
              height={30}
              className="mr-3"
            />
          </div>
        </div>
        <CardListProject />
      </TabsContent>
      <TabsContent value="square">
        <p className="text-gray">
          Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
          Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig.
          Kronde est
        </p>
        <div className="flex gap-4 my-10">
          <Button className="bg-transparent border border-dark shadow-none text-blue">
            Website
          </Button>
          <Button className="bg-transparent border border-dark shadow-none text-blue">
            Mobile
          </Button>
          <Button className="bg-transparent border border-dark shadow-none text-blue">
            UI / UX
          </Button>
          <Button className="bg-transparent border border-dark shadow-none text-blue">
            SEO
          </Button>
          <Input
            type="text"
            className="bg-white border border-dark border-r-0 rounded-r-none"
          />
          <div className="border border-l-0 border-dark -ml-4 bg-white flex items-center justify-center rounded-r-[6px]">
            <Image
              src="/assets/icons/search.svg"
              alt="search"
              width={30}
              height={30}
              className="mr-3"
            />
          </div>
        </div>
        <div className="flex gap-[60px] flex-wrap">
          <CardSquareProject />
          <CardSquareProject />
          <CardSquareProject />
          <CardSquareProject />
          <CardSquareProject />
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TabsProject;
