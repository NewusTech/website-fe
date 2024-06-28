import "aos/dist/aos.css"
import OurClient from "../../components/LandingPage/OurClient";
import SuccessProject from "../../components/LandingPage/SuccessProject";
import OurService from "../../components/LandingPage/OurService";
import WhyChooseUs from "../../components/LandingPage/WhyChooseUs";
import Blog from "../../components/LandingPage/Blog";

export default function Home() {
  return (
    <>
      <OurClient />
      <SuccessProject />
      <OurService />
      <WhyChooseUs />
      <Blog />
    </>
  );
}
