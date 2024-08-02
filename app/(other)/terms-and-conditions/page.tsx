import { getSeoPages } from "@/components/Fetching/SEO";
import { Metadata } from "next";
import React from "react";

// export async function generateMetadata(): Promise<Metadata> {
//     const seoAbout = await getSeoPages();
//     const aboutMeta = seoAbout?.find((page: any) => page.pages === "Team");
//     const title = aboutMeta?.metaTitle;
//     const description = aboutMeta?.metaDesc;
//     return {
//       title,
//       description,
//     };
//   }

export default function page() {
  return <section className="md:min-h-[1200px]">tes</section>;
}
