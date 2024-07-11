import "aos/dist/aos.css"
import '../../lib/fa';
import { Suspense } from 'react'
import OurClient from "../../components/LandingPage/OurClient";
import SuccessProject from "../../components/LandingPage/SuccessProject";
import OurService from "../../components/LandingPage/OurService";
import WhyChooseUs from "../../components/LandingPage/WhyChooseUs";
import Blog from "../../components/LandingPage/Blog";
import TestiomoniStars from "@/components/LandingPage/Testimonials/Testiomoni-stars";
import Certifications from "@/components/LandingPage/Certifications";
import LoadingScreen from "@/components/shared/Loading";
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <section className="overflow-hidden">
      {/* <Suspense fallback={<LoadingScreen />}> */}
      <OurClient />
      <SuccessProject />
      <OurService />
      <WhyChooseUs />
      <Blog />
      <TestiomoniStars />
      <Certifications />
      {/* </Suspense> */}
    </section>
  );
}
