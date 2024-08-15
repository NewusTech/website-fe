import { getTeamList } from "@/components/Fetching/Division/division";
import TeamLayout from "@/components/Team";
import React from "react";
import { getSeoPages } from "@/components/Fetching/SEO";
import { Metadata } from "next";
import { BASE_URL } from "@/constants/constants";
export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seoPages = await getSeoPages();
  const teamMeta = seoPages?.find((page) => page.pages === "Team") || {
    id: 0,
    metaDesc: "",
    metaImage: "",
    metaTitle: "",
    pages: "",
    createdAt: "",
    updatedAt: "",
  };

  return {
    title: teamMeta.metaTitle,
    description: teamMeta.metaDesc,
    openGraph: {
      type: "website",
      title: teamMeta.metaTitle,
      description: teamMeta.metaTitle,
      url: `${BASE_URL}`,
      images: [
        {
          url: teamMeta.metaImage,
          width: 800,
          height: 600,
          alt: teamMeta.metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: teamMeta.metaTitle,
      description: teamMeta.metaDesc,
      images: [teamMeta.metaImage],
    },
  };
}

export default async function TeamPage() {
  const seoPages = await getSeoPages();
  const teamMeta = seoPages?.find((page) => page.pages === "Team") || {
    id: 0,
    metaDesc: "",
    metaImage: "",
    metaTitle: "",
    pages: "",
    createdAt: "",
    updatedAt: "",
  };
  const teams = await getTeamList();

  return (
    <section className="md:min-h-[1200px]">
      <h1 className="hidden">{teamMeta.metaTitle}</h1>
      <TeamLayout teams={teams} />
    </section>
  );
}
