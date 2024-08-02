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
  const seoAbout = await getSeoPages();
  const aboutMeta = seoAbout?.find((page: any) => page.pages === "Home");
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
          url: `${BASE_URL}/assets/images/banner.jpeg`,
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
      images: [`${BASE_URL}/assets/images/banner.jpeg`],
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
