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
          title="Maps Google Andalas"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1096.875420454372!2d105.25854069662351!3d-5.4105141113791735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1706168582915!5m2!1sid!2sid"
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