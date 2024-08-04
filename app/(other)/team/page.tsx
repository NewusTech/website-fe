import { getTeamList } from "@/components/Fetching/Division/division";
import TeamLayout from "@/components/Team";
import React from "react";
import { getSeoPages } from "@/components/Fetching/SEO";
import { Metadata } from "next";
import { BASE_URL } from "@/constants/constants";
export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seoPages = await getSeoPages();
  const teamMeta = seoPages?.find((page: any) => page.pages === "Team");
  const title = teamMeta?.metaTitle;
  const description = teamMeta?.metaDesc;

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

export default async function TeamPage() {
  const teams = await getTeamList();

  return (
    <section className="md:min-h-[1200px]">
      <TeamLayout teams={teams} />
    </section>
  );
}
