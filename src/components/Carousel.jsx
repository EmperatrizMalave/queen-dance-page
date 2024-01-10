import React, { useState } from 'react';
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { RiArrowLeftDoubleFill } from "react-icons/ri";


const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex - 1 < 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex + 1 >= children.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative p-16">
      <div className="overflow-hidden">
        <div className="whitespace-nowrap transition-transform duration-500" 
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {React.Children.map(children, (child, index) => (
            <div className="inline-block w-full" key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>
      <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 ml-6" onClick={goToPrevious}>
        <RiArrowLeftDoubleFill />
      </button>
      <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 mr-6" onClick={goToNext}>
        <RiArrowRightDoubleLine />
      </button>
    </div>
  );
};

export default Carousel;