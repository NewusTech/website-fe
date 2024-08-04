import AboutLayout from "@/components/About";
import { getAboutCompany } from "@/components/Fetching/About/about";
import { getClientist } from "@/components/Fetching/Client/client";
import {
  getTeamList,
  getTeamMedia,
} from "@/components/Fetching/Division/division";
import { getSeoPages } from "@/components/Fetching/SEO";
import Header from "@/components/shared/Header/HeaderAbout";
import { Metadata } from "next";
import { BASE_URL } from "@/constants/constants";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seoAbout = await getSeoPages();
  const aboutMeta = seoAbout?.find((page: any) => page.pages === "About");

  const title = aboutMeta?.metaTitle;
  const description = aboutMeta?.metaDesc;

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
          image="/assets/images/header-about.jpg"
        />
        <AboutLayout
          abouts={abouts}
          teams={teams}
          clients={clients}
          medias={medias}
        />
      </section>
    </>
  );
}
