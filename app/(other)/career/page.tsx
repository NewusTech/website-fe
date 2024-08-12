import CareerLayout from "@/components/Career";
import {
  getCategoryJobs,
  getJobList,
} from "@/components/Fetching/Career/career";
import { getInternRecruit } from "@/components/Fetching/Career/intern";
import Header from "@/components/shared/Header/HeaderCareer";
import { getSeoPages } from "@/components/Fetching/SEO";
import { Metadata } from "next";
import { BASE_URL } from "@/constants/constants";
export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seoPages = await getSeoPages();
  const careerMeta = seoPages?.find((page) => page.pages === "Career") || {
    id: 0,
    metaDesc: "",
    metaImage: "",
    metaTitle: "",
    pages: "",
    createdAt: "",
    updatedAt: "",
  };

  return {
    title: careerMeta.metaTitle,
    description: careerMeta.metaDesc,
    openGraph: {
      type: "website",
      title: careerMeta.metaTitle,
      description: careerMeta.metaTitle,
      url: `${BASE_URL}`,
      images: [
        {
          url: careerMeta.metaImage,
          width: 800,
          height: 600,
          alt: careerMeta.metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: careerMeta.metaTitle,
      description: careerMeta.metaDesc,
      images: [careerMeta.metaImage],
    },
  };
}

export default async function CareerPage() {
  const dataJobs = await getJobList();
  const categoryJobs = await getCategoryJobs();
  const dataIntern = await getInternRecruit();

  return (
    <section className="md:min-h-[1200px] bg-white overflow-hidden">
      <Header />
      <CareerLayout
        dataJobs={dataJobs}
        categoryJobs={categoryJobs}
        dataIntern={dataIntern}
      />
    </section>
  );
}
