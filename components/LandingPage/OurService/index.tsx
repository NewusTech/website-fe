import CardService from "@/components/LandingPage/OurService/CardService";

const OurService = () => {
  return (
    <section className="md:mt-32 md:pb-16 pt-3 md:bg-blue ">
      <div className="mx-auto container">
        <h1 className="text-[12px] md:text-[32px] font-semibold text-dark md:text-white md:pt-10">
          Our Service
        </h1>
        <p className="md:text-white text-dark text-[8px] md:text-[18px] mt-3 md:mt-5">
          With more than 5 years experience supporting 50+ customers, you can
          trust Newus Technology to deliver
        </p>
        <CardService />
      </div>
    </section>
  );
};

export default OurService;
