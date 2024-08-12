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
  const seoPages = await getSeoPages();
  const aboutMeta = seoPages?.find((page) => page.pages === "About") || {
    id: 0,
    metaDesc: "",
    metaImage: "",
    metaTitle: "",
    pages: "",
    createdAt: "",
    updatedAt: "",
  };

  return {
    title: aboutMeta.metaTitle,
    description: aboutMeta.metaDesc,
    openGraph: {
      type: "website",
      title: aboutMeta.metaTitle,
      description: aboutMeta.metaTitle,
      url: `${BASE_URL}`,
      images: [
        {
          url: aboutMeta.metaImage,
          width: 800,
          height: 600,
          alt: aboutMeta.metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: aboutMeta.metaTitle,
      description: aboutMeta.metaDesc,
      images: [aboutMeta.metaImage],
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
