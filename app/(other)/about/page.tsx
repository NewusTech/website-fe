import AboutLayout from "@/components/About";
import { getAboutCompany } from "@/components/Fetching/About/about";
import { getClientist } from "@/components/Fetching/Client/client";
import { getTeamList, getTeamMedia } from "@/components/Fetching/Division/division";
import { getSeoPages } from "@/components/Fetching/SEO";
import Header from "@/components/shared/Header/HeaderAbout";
import { Metadata } from 'next'

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const seoAbout = await getSeoPages();
  const aboutMeta = seoAbout?.find((page: any) => page.pages === "About");

  const title = aboutMeta?.metaTitle;
  const description = aboutMeta?.metaDesc;

  return {
    title,
    description,
  };
}

export default async function AboutPage() {
  const teams = await getTeamList();
  const clients = await getClientist();
  const medias = await getTeamMedia();
  const abouts = await getAboutCompany();

  return (
    <>
      <section className="min-h-[1200px]">
        <Header
          type="About Us"
          title="About Us"
          image="/assets/images/header-about.png"
        />
        <AboutLayout abouts={abouts} teams={teams} clients={clients} medias={medias} />
      </section>
    </>
  );
}
