import TabsProject from "@/components/LandingPage/SuccessProject/TabsProject";
import { getProjectKategoriList, getProjectList } from "@/components/Fetching/Portfolio/port";
export const dynamic = 'force-dynamic';

export default async function SuccessProject() {
  const projectList = await getProjectList();
  const categories = await getProjectKategoriList();

  return (
    <section className="my-5 md:my-10 2xl:my-10 mx-4 md:mx-auto md:container">
      <TabsProject portfolios={projectList} categories={categories} />
    </section>
  );
};