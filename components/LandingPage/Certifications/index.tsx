import SliderOwner from "@/components/shared/SliderOwner";
import CarouselImage from "./Slider";

export default async function Certifications() {

  return (
    <div className="text-center p-5 md:px-8 2xl:container mx-auto bg-gray-100 md:pb-10 bg-[#010911]">
      <div className="flex flex-col pb-5 xl:py-5 gap-2 xl:gap-3">
        <h2 className="font-bold capitalize text-mobileJudul md:text-[20px] text-nowrap text-white">
          Certificate
        </h2>
        <h3 className="text-mobileDesk md:text-webSubjudul text-white">Newus memiliki sertifikat berusaha dibidang piranti lunak</h3>
      </div>
      <CarouselImage />
    </div >
  );
}
