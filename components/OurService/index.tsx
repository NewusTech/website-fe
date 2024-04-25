import CardService from "@/components/OurService/CardService";

const OurService = () => {
  return (
    <section className="mt-32 bg-blue mx-auto container">
      <h1 className="text-[56px] font-semibold text-white pt-10">
        Our Service
      </h1>
      <p className="text-white text-[18px] mt-5">
        With more than 5 years experience supporting 50+ customers, you can
        trust Newus Technology to deliver
      </p>
      <CardService />
    </section>
  );
};

export default OurService;
