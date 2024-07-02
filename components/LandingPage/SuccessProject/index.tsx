import TabsProject from "@/components/LandingPage/SuccessProject/TabsProject";
import { getProjectList } from "@/components/Fetching/Portfolio/port";
import { getBlogList } from "@/components/Fetching/Blog/blog";

export default async function SuccessProject() {
  const projectList = await getProjectList();
  return (
    <section className="my-5 md:my-[80px] mx-4 md:mx-auto md:container">
      <TabsProject portfolios={projectList} />
    </section>
  );
};