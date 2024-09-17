import { getProjectKategoriList, getProjectList } from "@/components/Fetching/Portfolio/port";
import dynamic from "next/dynamic";
const TabsProject = dynamic(()=>import("@/components/LandingPage/SuccessProject/TabsProject"))

export default async function SuccessProject() {
  const projectList = await getProjectList();
  const categories = await getProjectKategoriList();

  return (
    <section className="my-5 md:my-10 2xl:my-10 mx-4 md:mx-auto md:container">
      <TabsProject portfolios={projectList} categories={categories} />
    </section>
  );
};