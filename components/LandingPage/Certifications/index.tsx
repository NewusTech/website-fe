import SliderOwner from "@/components/shared/SliderOwner";
import Image from "next/image";

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

export default function Certifications() {
  return (
    <div className="text-center max-w-7xl mx-auto bg-gray-100 pb-10">
      <h1 className="text-lg md:text-3xl font-bold lg:mb-4 capitalize">Our Achievement</h1>
      <h2 className="md:text-2xl mb-8">Certifications</h2>
      <SliderOwner />
    </div >
  );
}