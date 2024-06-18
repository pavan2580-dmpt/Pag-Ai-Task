"use client"

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Explore from './Explore';
import Terminal from './Terminal';

const SliderCard: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container w-[100%] h-auto">
      <Slider {...settings}>
        <div>
          <Explore />
        </div>
        <div>
          <Terminal />
        </div>
      </Slider>
    </div>
  );
};

export default SliderCard;
