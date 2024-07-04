/* eslint-disable react/no-unescaped-entities */
'use client'

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    image: "/assets/images/dummy1.png",
    text: "This is a great product! Highly recommend to everyone.",
    name: "John Doe",
    position: "CEO at Company",
  },
  {
    id: 2,
    image: "/assets/images/dummy2.png",
    text: "Amazing experience, wonderful team.",
    name: "Jane Smith",
    position: "Marketing Manager",
  },
  {
    id: 3,
    image: "/assets/images/dummy3.png",
    text: "Our project was a success thanks to this team.",
    name: "Samuel Green",
    position: "Project Lead",
  },
  {
    id: 4,
    image: "/assets/images/dummy4.png",
    text: "Exceptional service and great results.",
    name: "Emily White",
    position: "Developer",
  },
];

const TestimonialsCarousel = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // Disable default arrows
  };

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className="p-10 md:p-20 bg-white bg-cover">
      <h1 className="text-center md:pb-10 font-bold text-tangerine text-lg md:text-[32px]">
        Testimonials
      </h1>
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex flex-col md:flex-row justify-center items-center text-center p-4 w-full">
            <div className="flex flex-col md:flex-row  md:gap-10 justify-center">
              <Image
                src={testimonial.image}
                alt={`testimonial from ${testimonial.name}`}
                width={128}
                height={128}
                className="w-full h-36 md:w-[200px] md:h-[200px] mb-4 object-cover text-center"
              />
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm md:text-xl mb-2">"{testimonial.text}"</p>
                <p className="text-tangerine text-md font-bold">{testimonial.name}</p>
                <p className="text-sm">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex justify-end gap-4 w-full mt-16 md:mt-10">
        <div
          onClick={previous}
          className="bg-blue-2 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue transition cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M16.1602 7.41L11.5802 12L16.1602 16.59L14.7502 18L8.75016 12L14.7502 6L16.1602 7.41Z" fill="white" />
          </svg>
        </div>
        <div
          onClick={next}
          className="bg-blue-2 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue transition cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7.83984 7.41L12.4198 12L7.83984 16.59L9.24984 18L15.2498 12L9.24984 6L7.83984 7.41Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
