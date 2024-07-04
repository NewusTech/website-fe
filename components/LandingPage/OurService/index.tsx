import CardService from "@/components/LandingPage/OurService/CardService";
import Image from "next/image";

const OurService = () => {
  return (
    <section className="md:mt-32 md:pb-16">
      {/* <Image src='/assets/illustration/wave.svg' width={100} height={100} alt="wave" className="w-full" /> */}
      <div className="bg-[rgb(20,20,31)] py-10">
        <div className="mx-auto container">
          <h1 className="text-white text-[12px] md:text-[32px] font-semiboldtext-white md:pt-10">
            Our Service
          </h1>
          <p className="text-white text-[8px] md:text-[18px] mt-3 md:mt-5">
            With over 3 years of experience, Newus Technology is your trusted partner for digital success. Let{"'"}s collaborate to build a brighter future for your business.
          </p>
          <CardService />
        </div>
      </div>
      {/* <Image src='/assets/illustration/wave2.svg' width={100} height={100} alt="wave" className="w-full" /> */}
    </section>
  );
};

export default OurService;
