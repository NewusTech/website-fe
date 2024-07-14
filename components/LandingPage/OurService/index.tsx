import CardService from "@/components/LandingPage/OurService/CardService";

const OurService = () => {
  return (
    <section className="2xl:mt-32 md:pb-10 2xl:pb-16 overflow-hidden">
      {/* <Image src='/assets/illustration/wave.svg' width={100} height={100} alt="wave" className="w-full" /> */}
      <div className="bg-[rgb(20,20,31)] py-8 md:py-5 2xl:py-10">
        <div className="mx-auto px-5 md:container ">
          <h1 className="text-mobileJudul md:text-[20px] font-semibold text-white md:pt-10">
            Our Service
          </h1>
          <p className="text-white text-mobileDesk md:text-webSubJudul mt-3 md:mt-5">
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
