import CardService from "@/components/LandingPage/OurService/CardService";

const OurService = () => {
  return (
    <section className="md:mt-32 md:pb-16 overflow-hidden">
      {/* <Image src='/assets/illustration/wave.svg' width={100} height={100} alt="wave" className="w-full" /> */}
      <div className="bg-[rgb(20,20,31)] py-10">
        <div className="mx-auto container">
          <h1 className="text-mobileJudul md:text-[24px] font-semibold text-white md:pt-10">
            Our Service
          </h1>
          <p className="text-white text-mobileSubjudul md:text-webJudul mt-3 md:mt-5">
            With 3+ years of experience, Newus Technology is your trusted partner for digital success.
            {/* Let{"'"}s build a brighter future for your business. */}
          </p>
          <CardService />
        </div>
      </div>
      {/* <Image src='/assets/illustration/wave2.svg' width={100} height={100} alt="wave" className="w-full" /> */}
    </section>
  );
};

export default OurService;
