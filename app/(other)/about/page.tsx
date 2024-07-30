import AboutLayout from "@/components/About";
import { getAboutCompany } from "@/components/Fetching/About/about";
import { getClientist } from "@/components/Fetching/Client/client";
import { getTeamList, getTeamMedia } from "@/components/Fetching/Division/division";
import { getSeoPages } from "@/components/Fetching/SEO";
import Header from "@/components/shared/Header/HeaderAbout";
import Head from 'next/head';

export const dynamic = 'force-dynamic';

export default async function AboutPage() {
  const teams = await getTeamList();
  const clients = await getClientist();
  const medias = await getTeamMedia();
  const abouts = await getAboutCompany();
  const seoAbout = await getSeoPages();

  // Find the metadata for the About page
  const aboutMeta = seoAbout?.find((page: any) => page.pages === "About");
  console.log(aboutMeta);

  return (
    <>
      <Head>
        <title>{aboutMeta?.metaTitle || "About Newus"}</title>
        <meta name="description" content={aboutMeta?.metaDesc || "About Description"} />
      </Head>
      <section className="min-h-[1200px]">
        <Header
          type="About Us"
          title="About Us"
          image="/assets/images/header-about.png"
        />
        <AboutLayout abouts={abouts} teams={teams} clients={clients} medias={medias} />
      </section>
    </>
  )
}
