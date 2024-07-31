import { getTeamList } from '@/components/Fetching/Division/division';
import TeamLayout from '@/components/Team';
import React from 'react'
import { getSeoPages } from "@/components/Fetching/SEO";
import { Metadata } from "next";
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const seoAbout = await getSeoPages();
  const aboutMeta = seoAbout?.find((page: any) => page.pages === "Team");
  const title = aboutMeta?.metaTitle;
  const description = aboutMeta?.metaDesc;
  return {
    title,
    description,
  };
}

export default async function TeamPage() {
  const teams = await getTeamList();

  return (
    <section className="md:min-h-[1200px]">
      <TeamLayout teams={teams} />
    </section>
  )
}