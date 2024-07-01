import { getProjectList } from "@/components/Fetching/Portfolio/port";
import PortLayout from "@/components/Portfolio"
import Header from "@/components/shared/Header/HeaderPort";

export default async function PortofolioPage() {
  const projectList = await getProjectList();
  return (
    <section className="md:min-h-[1200px]">
      <Header
        type="Portfolio"
        title="Portfolio"
        image="/assets/images/header-port.jpg"
      />
      <PortLayout portfolios={projectList} />
    </section>
  )
}