import CareerLayout from "@/components/Career";
import { getCategoryJobs, getJobList } from "@/components/Fetching/Career/career";
import { getInternRecruit } from "@/components/Fetching/Career/intern";
import Header from "@/components/shared/Header/HeaderCareer";
import { getSeoPages } from "@/components/Fetching/SEO";
import { Metadata } from "next";
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const seoAbout = await getSeoPages();
  const aboutMeta = seoAbout?.find((page: any) => page.pages === "Career");
  const title = aboutMeta?.metaTitle;
  const description = aboutMeta?.metaDesc;
  return {
    title,
    description,
  };
}

export default async function CareerPage() {
  const dataJobs = await getJobList()
  const categoryJobs = await getCategoryJobs()
  const dataIntern = await getInternRecruit()

  return (
    <section className="md:min-h-[1200px] bg-white overflow-hidden">
      <Header />
      <CareerLayout dataJobs={dataJobs} categoryJobs={categoryJobs} dataIntern={dataIntern} />
    </section>
  )
};
