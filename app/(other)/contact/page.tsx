import ContactLayout from "@/components/Contact";
import Header from "@/components/shared/Header/HeaderAbout";

const ContactPage = () => {
  return (
    <section className="bg-[#F4F4F4]">
      <Header
        type="Contact Us"
        title="Contact Us"
        image="/assets/images/contact-header.svg"
      />
      <ContactLayout />
      <div>
        <iframe
          title="Maps Google Newus Technology"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15887.330729685895!2d105.2725048!3d-5.4423601!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40dbff9e63c95f%3A0x6bd3c394975d3800!2sCV.%20NEWUS%20TEKNOLOGI!5e0!3m2!1sid!2sid!4v1719644292063!5m2!1sid!2sid"
          height="450"
          className="w-full"
          style={{ border: '0' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}

export default ContactPage;