"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

interface CardProps {
  image: any;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="p-8 bg-white shadow-md rounded-md border-2 border-orange-400 border-solid h-[500px] flex flex-col justify-evenly mt-[200px]">
      <center>
        <Image src={image} alt={title} width={100} height={100} />
      </center>
      <h3 className="text-xl font-semibold text-center">{title}</h3>
      <p className="mt-2 text-gray-600 text-center">{description}</p>
      <center>
        <button className="bg-orange-500 text-white rounded-lg w-[120px] h-fit p-2 cursor-pointer">
          Try now
        </button>
      </center>
    </div>
  );
};

interface CardData {
  title: string;
  description: string;
  image: any;
}

interface CarouselProps {
  cards: CardData[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const Slider1: React.FC<CarouselProps> = ({
  cards,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? cards.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === cards.length - 1 ? 0 : curr + 1));
  const goToSlide = (index: number) => setCurr(index);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {cards.map((card, index) => (
          <div key={index} className="min-w-full flex justify-center p-4">
            <Card
              title={card.title}
              image={card.image}
              description={card.description}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              className={`
                w-3 h-3 rounded-full
                ${curr === i ? "bg-orange-500" : "bg-gray-400"}
              `}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider1;
