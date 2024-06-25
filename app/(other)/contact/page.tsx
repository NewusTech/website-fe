import ContactLayout from "@/components/Contact";
import Header from "@/components/shared/Header/HeaderAbout";

const AboutPage = () => {
  return (
    <section className="h-[1600px] bg-white">
      <Header
        type="Contact Us"
        title="Contact Us"
        image="/assets/images/contact-header.svg"
      />
      <ContactLayout />
    </section>
  )
}

export default AboutPage;