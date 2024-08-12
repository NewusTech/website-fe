import "aos/dist/aos.css";
import "../../lib/fa";
// import { Suspense } from 'react'
import OurClient from "../../components/LandingPage/OurClient";
import SuccessProject from "../../components/LandingPage/SuccessProject";
import OurService from "../../components/LandingPage/OurService";
import Blog from "../../components/LandingPage/Blog";
import Testiomonials from "@/components/LandingPage/Testimonials/index";
import Certifications from "@/components/LandingPage/Certifications";
import AboutLanding from "@/components/LandingPage/About";
import CTA from "@/components/LandingPage/CTA";
import WhyChooseUs from "@/components/LandingPage/WhyChooseUs/index";
// import LoadingScreen from "@/components/shared/Loading";
import { getSeoPages } from "@/components/Fetching/SEO";
import { Metadata } from "next";
import { BASE_URL } from "@/constants/constants";
export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seoPages = await getSeoPages();
  const landingMeta = seoPages.find((page) => page.pages === "Home") || {
    id: 0,
    metaDesc: "",
    metaImage: "",
    metaTitle: "",
    pages: "",
    createdAt: "",
    updatedAt: "",
  };

  return {
    title: landingMeta.metaTitle,
    description: landingMeta.metaDesc,
    openGraph: {
      type: "website",
      title: landingMeta.metaTitle,
      description: landingMeta.metaTitle,
      url: `${BASE_URL}`,
      images: [
        {
          url: landingMeta.metaImage,
          width: 800,
          height: 600,
          alt: landingMeta.metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: landingMeta.metaTitle,
      description: landingMeta.metaDesc,
      images: [landingMeta.metaImage],
    },
  };
}

export default function Home() {
  return (
    <section className="overflow-hidden">
      {/* <Suspense fallback={<LoadingScreen />}> */}
      <OurClient />
      <AboutLanding />
      <SuccessProject />
      <OurService />
      <WhyChooseUs />
      <Blog />
      <Testiomonials />
      <Certifications />
      <CTA />
      {/* </Suspense> */}
    </section>
  );
}
