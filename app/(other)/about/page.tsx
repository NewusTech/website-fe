import AboutLayout from "@/components/About";
import PortLayout from "@/components/Portfolio"
import Header from "@/components/shared/Header/HeaderAbout";

const AboutPage = () => {
  return (
    <section className="min-h-[1200px]">
      <Header
        type="About Us"
        title="About Us"
        image="/assets/images/header-about.png"
      />
      <AboutLayout />
    </section>
  )
}

export default AboutPage;