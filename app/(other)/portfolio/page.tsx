import { getProjectKategoriList, getProjectList } from "@/components/Fetching/Portfolio/port";
import PortLayout from "@/components/Portfolio"
import Header from "@/components/shared/Header/HeaderPort";
import { getSeoPages } from "@/components/Fetching/SEO";
import { Metadata } from "next";
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const seoAbout = await getSeoPages();
  const aboutMeta = seoAbout?.find((page: any) => page.pages === "Portfolio");
  const title = aboutMeta?.metaTitle;
  const description = aboutMeta?.metaDesc;
  return {
    title,
    description,
  };
}

export default async function PortofolioPage() {
  const projectList = await getProjectList();
  const categories = await getProjectKategoriList();
  return (
    <section className="min-h-[55vh] overflow-hidden">
      <Header
        type="Portfolio"
        title="Portfolio"
        image="/assets/images/header-port.jpg"
      />
      <PortLayout portfolios={projectList} categories={categories} />
    </section>
  )
}