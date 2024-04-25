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
    <section className="container mx-auto mt-[76px] pb-[71px]">
      <h1 className="text-center text-tangerine text-[32px]">
        <strong className="text-blue">Mengapa</strong> Memilih Kami?
      </h1>
      <h4 className="font-bold text-2xl text-center mt-5 text-black">
        &quot;The Trusted and Quality Consultant in Service Excellence.&quot;
      </h4>
      <div className="flex items-center justify-center mt-10 gap-[60px]">
        {chooseUs.map(({ id, logo, name, desc }: WhyChooseUsProps) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center gap-[60px]"
          >
            <Image src={logo} alt={name} width={100} height={100} />
            <p className="text-center w-[320px] text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
