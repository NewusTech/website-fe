import { getProjectKategoriList, getProjectList } from "@/components/Fetching/Portfolio/port";
import PortLayout from "@/components/Portfolio"
import Header from "@/components/shared/Header/HeaderPort";
export const dynamic = 'force-dynamic';

export default async function PortofolioPage() {
  const projectList = await getProjectList();
  const categories = await getProjectKategoriList();
  return (
    <section className="md:min-h-[1200px]">
      <Header
        type="Portfolio"
        title="Portfolio"
        image="/assets/images/header-port.jpg"
      />
      <PortLayout portfolios={projectList} categories={categories} />
    </section>
  )
}