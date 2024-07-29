import { getTestimony } from '@/components/Fetching/About/about';
import Image from 'next/image';
import Testimonial from './Card';

export default async function TestiomoniStars() {
  const dataTestimony = await getTestimony()
  const dummyImage = "/assets/images/antoni.svg"

  return (
    <div className="text-center md:px-8 2xl:container mx-auto bg-gray-100 pb-6 pt-5">
      <div className="md:mt-5 xl:mt-5 mt-[10px] flex justify-center items-center gap-3 md:gap-5 px-5 md:px-0">
        <h2 className="font-bold capitalize text-mobileJudul md:text-[20px] text-nowrap text-center">
          Testimonials
        </h2>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-2 px-2 sm:gap-5 sm:px-5 md:px-0 lg:gap-5 w-full md:grid-cols-3 lg:grid-cols-3">
          {dataTestimony?.map((testimonial: any, index: number) => (
            <Testimonial key={index}
              imageSrc={testimonial.image}
              quote={testimonial.testimony}
              name={testimonial.name}
              position={testimonial.position || "Manager"}
              company={testimonial.companyName}
            />
          ))}
        </div>
      </div>
    </div >
  );
}
