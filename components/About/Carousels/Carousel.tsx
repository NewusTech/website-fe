'use client'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Component1 from "./SliderOne";

const Carousels = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <Component1 />
      </div>
      <div>
        <Component1 />
      </div>
      <div>
        <Component1 />
      </div>
    </Slider>
  );
};

export default Carousels;
