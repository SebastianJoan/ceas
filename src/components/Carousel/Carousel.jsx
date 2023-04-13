import { useState } from "react";

import carousel1 from '../../../public/img/carousel_1.jpg'
import carousel2 from '../../../public/img/carousel_2.jpg'
import carousel3 from '../../../public/img/carousel_3.jpg'
import nextImage from '../../../public/icons/next.svg'

import Image from "next/image";

const images = [
  carousel1,
  carousel2,
  carousel3,
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  return (
    <div className="relative w-full h-[70vh]">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Image ${index}`}
          className={`absolute top-0 left-0 w-full object-cover h-full transition-opacity duration-1000 ${
            activeIndex === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <Image
        onClick={handleNext}
        src={nextImage}
        alt="NextImage"
        width={30}
        height={30}
        className="absolute top-[45%] md:right-20 right-3 cursor-pointer"
      />
      <Image
        onClick={handlePrev}
        src={nextImage}
        width={30}
        height={30}
        alt="PrevImage"
        className="absolute top-[45%] rotate-180 md:left-20 left-3 cursor-pointer"
      />
    </div>
  );
}
