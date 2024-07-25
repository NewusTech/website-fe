import { getTestimony } from "@/components/Fetching/About/about";
import SliderOwner from "@/components/shared/SliderOwner";

const certifications = [
  {
    name: 'ISO 27001 – Information Security Management Certified',
    image: '/assets/images/antoni.svg',
  },
  {
    name: 'ISO 9001 – Certified Company',
    image: '/assets/images/antoni.svg',
  },
  {
    name: 'Professional Cloud Architect',
    image: '/assets/images/antoni.svg',
  },
  {
    name: 'Professional Collaboration Engineer',
    image: '/assets/images/antoni.svg',
  },
  {
    name: 'Professional Data Engineer',
    image: '/assets/images/antoni.svg',
  },
  {
    name: 'Professional Cloud Engineer',
    image: '/assets/images/antoni.svg',
  },
  {
    name: 'Professional Scrum Product Owner',
    image: '/assets/images/antoni.svg',
  },
  {
    name: 'Professional Scrum Master',
    image: '/assets/images/antoni.svg',
  },
  {
    name: 'Associate Android Developer',
    image: '/assets/images/antoni.svg',
  },
  {
    name: 'Badan Nasional Sertifikasi Profesi',
    image: '/assets/images/antoni.svg',
  },
  {
    name: 'Google Developer Agency Program',
    image: '/assets/images/antoni.svg',
  },
  {
    name: 'Google Certified Educator',
    image: '/assets/images/antoni.svg',
  },
];

export default async function Certifications() {

  return (
    <div className="text-center md:px-8 2xl:container mx-auto bg-gray-100 md:pb-10 -mt-20">
      <div className="md:mt-10 mt-[10px] flex justify-between items-center   gap-3 md:gap-5 px-5 md:px-0 pb-5">
        <h2 className="font-bold capitalize text-mobileJudul md:text-[20px] text-nowrap ">
          Our Achievements
        </h2>
        <div className="w-full h-[1px] bg-gray"></div>
      </div>
      {/* <h1 className="text-lg md:text-3xl font-bold lg:mb-4 capitalize">Our Achievement</h1>
      <h2 className="md:text-2xl mb-8">Certifications</h2> */}
      <SliderOwner />
    </div >
  );
}
