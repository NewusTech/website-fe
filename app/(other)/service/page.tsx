import Header from "@/components/shared/Header/Header";
import WhatWeDo from "@/components/Service";
import { getSeoPages } from "@/components/Fetching/SEO";
import { Metadata } from "next";
import { BASE_URL } from "@/constants/constants";
export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seoPages = await getSeoPages();
  const serviceMeta = seoPages?.find((page) => page.pages === "Service") || {
    id: 0,
    metaDesc: "",
    metaImage: "",
    metaTitle: "",
    pages: "",
    createdAt: "",
    updatedAt: "",
  };

  return {
    title: serviceMeta.metaTitle,
    description: serviceMeta.metaDesc,
    openGraph: {
      type: "website",
      title: serviceMeta.metaTitle,
      description: serviceMeta.metaTitle,
      url: `${BASE_URL}`,
      images: [
        {
          url: serviceMeta.metaImage,
          width: 800,
          height: 600,
          alt: serviceMeta.metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: serviceMeta.metaTitle,
      description: serviceMeta.metaDesc,
      images: [serviceMeta.metaImage],
    },
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
