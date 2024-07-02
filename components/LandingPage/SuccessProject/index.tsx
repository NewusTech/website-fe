import TabsProject from "@/components/LandingPage/SuccessProject/TabsProject";
import { getProjectKategoriList, getProjectList } from "@/components/Fetching/Portfolio/port";

export default async function SuccessProject() {
  const projectList = await getProjectList();
  const categories = await getProjectKategoriList();

  return (
    <section className="my-5 md:my-[80px] mx-4 md:mx-auto md:container">
      <TabsProject portfolios={projectList} categories={categories} />
    </section>
  );
};