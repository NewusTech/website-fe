import {
  getProjectKategoriList,
  getProjectList,
} from "@/components/Fetching/Portfolio/port";
import PortLayout from "@/components/Portfolio";
import Header from "@/components/shared/Header/HeaderPort";
import { getSeoPages } from "@/components/Fetching/SEO";
import { Metadata } from "next";
import { BASE_URL } from "@/constants/constants";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seoPages = await getSeoPages();
  const portofolioMeta = seoPages?.find(
    (page: any) => page.pages === "Portfolio"
  );
  const title = portofolioMeta?.metaTitle;
  const description = portofolioMeta?.metaDesc;

  return {
    title: title,
    description: description,
    openGraph: {
      type: "website",
      title: title,
      description: description,
      url: `${BASE_URL}`,
      images: [
        {
          url: `${BASE_URL}/assets/images/header-about.jpg`,
          width: 800,
          height: 600,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [`${BASE_URL}/assets/images/header-about.jpg`],
    },
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
  );
}
