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
    <div className="container mx-auto px-4 py-10 md:pt-20">
      <h2 className="text-lg md:text-3xl font-bold text-center pb-8 md:pb-36 capitalize">Testimonials</h2>
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 gap-10 md:gap-1 lg:gap-10 pb-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative bg-[#14141F] text-white rounded-2xl p-6 text-center w-80 shadow-xl shadow-gray mt-20 md:mt-0">
              <div className="relative flex justify-center">
                <div className="absolute top-[-110px]">
                  <Image
                    width={1000}
                    height={1000}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4"
                  />
                </div>
              </div>
              <h3 className="md:text-xl font-sans pt-14 pb-2">{testimonial.name}</h3>
              <div className="flex justify-center">
                {[...Array(5)].map((star, i) => (
                  <svg
                    key={i}
                    className={`w-8 h-8 ${i < testimonial.rating ?
                      (testimonial.rating === 5 ? 'text-[#03fc4e]' : testimonial.rating === 3 ? 'text-yellow-300' : 'text-[#fc0328]') : 'text-gray-400'
                      }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-center leading-8 text-gray-1 sm:leading-9 p-5">
                <p className="relative">
                  <FontAwesomeIcon icon={faQuoteLeft} className='w-5 h-5 absolute -left-4 top-1' />
                  <span>{testimonial.review}</span>
                  <FontAwesomeIcon icon={faQuoteRight} className='w-5 h-5 absolute left-44 md:left-28 lg:left-44 bottom-1' />
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
