import Image from 'next/image';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const TestiomoniStars = () => {
  const testimonials = [
    {
      name: "Neil Patel",
      image: "/assets/images/antoni.svg",
      rating: 5,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Cellia Rins",
      image: "/assets/images/antoni.svg",
      rating: 3,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Mike Demien",
      image: "/assets/images/antoni.svg",
      rating: 1,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }
  ];

  return (
    <div className="container mx-auto px-4 py-10 md:pt-20 lg:px-14">
      <h2 className="text-lg md:text-3xl font-bold text-center pb-3 md:pb-36 capitalize">Testimonials</h2>
      <div>
        <div className="grid grid-cols-3 gap-1 md:gap-4 lg:gap-10 w-full md:grid-cols-3 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative bg-[#14141F] text-white rounded-2xl p-2 lg:p-6 text-center shadow-xl shadow-gray mt-10 md:mt-0">
              <div className="relative flex justify-center">
                <div className="absolute top-[-40px] md:top-[-100px] lg:top-[-115px]">
                  <Image
                    width={1000}
                    height={1000}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 md:w-40 md:h-40 rounded-full mx-auto mb-4"
                  />
                </div>
              </div>
              <h3 className="md:text-sm lg:text-xl text-[6px] font-sans pt-8 md:pt-[80px] lg:pt-16 pb-2">{testimonial.name}</h3>
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
              <blockquote className="text-center leading-3 text-gray-1 lg:leading-9 p-1 md:p-5 lg-p-6">
                <p className="relative md:text-sm lg:text-lg text-[6px]">
                  <FontAwesomeIcon icon={faQuoteLeft} className='md:w-5 w-2 h-2 md:h-5 absolute -left-1 md:left-0 lg:left-1 -top-0' />
                  <span>{testimonial.review}</span>
                  <FontAwesomeIcon icon={faQuoteRight} className='md:w-5 w-2 h-2 md:h-5 absolute left-[92px] md:-left-28 lg:left-[270px] bottom-1' />
                </p>
              </blockquote>
            </div>
          ))}
        </div>

      </div>
    </div >
  );
}

export default TestiomoniStars;
