import { chooseUs } from "@/constants";
import Image from "next/image";

interface WhyChooseUsProps {
  id: number;
  name: string;
  logo: string;
  desc: string;
}

const WhyChooseUs = () => {
  return (
    <section className="container mx-auto pt-10 md:pt-5 md:pb-10 md:my-[76px]">
      <h1 className="text-center text-tangerine text-[12px] md:text-[32px]">
        <strong className="text-blue mr-2 md:mr-[10px]">Mengapa</strong> Memilih Kami?
      </h1>
      <h4 className="font-bold text-[10px] md:text-2xl text-center mt-[10px] md:mt-5 text-black">
        &quot;The Trusted and Quality Consultant in Service Excellence.&quot;
      </h4>
      <div className="flex items-center justify-center mt-4 md:mt-10 gap-2 md:gap-[60px]">
        {chooseUs.map(({ id, logo, name, desc }: WhyChooseUsProps) => (
          <div
            data-aos='fade-in'
            data-aos-delay={id * 200}
            key={id}
            className="flex flex-col items-center justify-center gap-3 md:gap-[60px]"
          >
            <div className="md:w-[100px] md:h-[100px] h-7 w-7">
              <Image
                src={logo}
                alt={name}
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
            <p className="text-center w-[120px] md:w-[320px] md:text-sm text-[6px]">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
