import { getTestimony } from '@/components/Fetching/About/about';
import Image from 'next/image';

export default async function TestiomoniStars() {
  const dataTestimony = await getTestimony()
  const dummyImage = "/assets/images/antoni.svg"

  return (
    <div className="container mx-auto px-1 py-10 md:pt-20 lg:px-14">
      <h2 className="text-mobileJudul md:text-[24px] font-bold text-center pb-3 md:pb-36 capitalize">Testimonials</h2>
      <div>
        <div className="grid grid-cols-3 gap-1 md:gap-4 lg:gap-10 w-full md:grid-cols-3 lg:grid-cols-3">
          {dataTestimony?.map((testimonial: any, index: number) => (
            <div key={index} className="relative bg-[#14141F] text-white rounded-md xl:rounded-2xl p-2 lg:p-6 text-center shadow-xl shadow-gray mt-10 md:mt-0">
              <div className="relative flex justify-center">
                <div className="absolute top-[-40px] md:top-[-100px] lg:top-[-115px]">
                  <Image
                    width={1000}
                    height={1000}
                    src={testimonial.image || dummyImage}
                    alt={testimonial.name}
                    className="w-14 object-cover h-14 md:w-40 md:h-40 rounded-full mx-auto mb-4"
                  />
                </div>
              </div>
              <h3 className="md:text-webSubjudul text-mobileSubjudul font-sans pt-8 md:pt-[80px] lg:pt-16 pb-2">{testimonial.name}</h3>
              <div className="flex justify-center pb-2 ">
                {[...Array(5)].map((star, i) => (
                  <svg
                    key={i}
                    className={` md:w-8 w-4 h-4 md:h-8 ${i < testimonial.rating ?
                      (testimonial.rating === 5 ? 'text-[#03fc4e]' : testimonial.rating === 3 ? 'text-yellow-300' : 'text-[#fc0328]') : 'text-gray-400'
                      }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-center leading-5 text-gray-1 p-1 md:p-5">
                <p className="relative md:text-webDesk text-mobileDesk">
                  {/* <FontAwesomeIcon icon={faQuoteLeft} className='md:w-5 w-2 h-2 md:h-5 absolute -left-1 md:left-0 lg:left-1 -top-0' /> */}
                  <span>&ldquo;{testimonial.testimony}&rdquo;</span>
                  {/* <FontAwesomeIcon icon={faQuoteRight} className='md:w-5 w-2 h-2 md:h-5 absolute left-[92px] md:-left-28 lg:left-[270px] bottom-1' /> */}
                </p>
              </blockquote>
            </div>
          ))}
        </div>

      </div>
    </div >
  );
}
