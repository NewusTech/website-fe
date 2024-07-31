import Header from "@/components/shared/Header/Header";
import WhatWeDo from "@/components/Service";
import { getSeoPages } from "@/components/Fetching/SEO";
import { Metadata } from "next";
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const seoAbout = await getSeoPages();
  const aboutMeta = seoAbout?.find((page: any) => page.pages === "Service");
  const title = aboutMeta?.metaTitle;
  const description = aboutMeta?.metaDesc;
  return {
    title,
    description,
  };
}

const ServicePage = () => {
  return (
    <section className="overflow-hidden">
      <Header
        type="service"
        title="Service"
        image="/assets/images/header-service.jpg"
      />
      <WhatWeDo />
    </section>
  );
};

export default ServicePage;
