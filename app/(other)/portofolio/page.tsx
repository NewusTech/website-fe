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
    (page) => page.pages === "Portfolio"
  ) || {
    id: 0,
    metaDesc: "",
    metaImage: "",
    metaTitle: "",
    pages: "",
    createdAt: "",
    updatedAt: "",
  };

  return {
    title: portofolioMeta.metaTitle,
    description: portofolioMeta.metaDesc,
    openGraph: {
      type: "website",
      title: portofolioMeta.metaTitle,
      description: portofolioMeta.metaTitle,
      url: `${BASE_URL}`,
      images: [
        {
          url: portofolioMeta.metaImage,
          width: 800,
          height: 600,
          alt: portofolioMeta.metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: portofolioMeta.metaTitle,
      description: portofolioMeta.metaDesc,
      images: [portofolioMeta.metaImage],
    },
  };
}

export default async function PortofolioPage() {
  const projectList = await getProjectList();
  const categories = await getProjectKategoriList();
  const seoPages = await getSeoPages();
  const portofolioMeta = seoPages?.find(
    (page) => page.pages === "Portfolio"
  ) || {
    id: 0,
    metaDesc: "",
    metaImage: "",
    metaTitle: "",
    pages: "",
    createdAt: "",
    updatedAt: "",
  };
  return (
    <section className="min-h-[55vh] overflow-hidden">
      <h1 className="hidden">{portofolioMeta.metaTitle}</h1>
      <Header
        type="Portofolio"
        title="portofolio"
        image="/assets/images/header-port.jpg"
      />
      <PortLayout portfolios={projectList} categories={categories} />
    </section>
  );
}
