import CardService from "@/components/LandingPage/OurService/CardService";

const OurService = () => {
  return (
    <section className="md:pb-5 2xl:pb-16 overflow-hidden">
      <div className="bg-[rgb(20,20,31)] py-8 md:py-5 2xl:py-10">
        <div className="mx-auto px-5 md:container">
          <h1 className="text-mobileJudul md:text-[20px] font-semibold text-white md:pt-5 2xl:pt-5">
            Our Service
          </h1>
          <p className="text-white text-mobileDesk md:text-webSubjudul mt-3 md:mt-5">
            With 3+ years of experience, Newus Technology is your trusted partner for digital success.
          </p>
          <CardService />
        </div>
      </div>
    </section>
  );
};

export default OurService;
