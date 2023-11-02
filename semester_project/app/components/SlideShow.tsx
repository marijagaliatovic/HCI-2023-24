"use client"
import React, { useState } from "react";

const SlideShow = () => {
  const images = [
    "/images/slika_sobe_1.jpg",
    "/images/slika_sobe_2.jpg",
    "/images/slika_sobe_3.jpg"
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  const prevSlide = () => {
    setSlideIndex((slideIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % images.length);
  };

  return (
    <div className="bg-white relative w-full basis-6/12 m-4">
        <div className="py-10 px-8 bg-white">
            {images.map((image, index) => (
            <img
                key={index}
                className={index === slideIndex ? "block" : "hidden"}
                src={image}
                alt={`Slide ${index + 1}`}
            />
            ))}
            <div>
                <i onClick={prevSlide} className="cursor-pointer absolute top-1/2 left-8 transform -translate-y-1/2 w-auto p-4
                text-white font-bold text-lg duration-500 ease-out select-none hover:bg-black hover:bg-opacity-80">&#10094;</i>
                <i onClick={nextSlide} className="cursor-pointer absolute top-1/2 right-8 transform -translate-y-1/2 w-auto p-4
                text-white font-bold text-lg duration-500 ease-out select-none hover:bg-black hover:bg-opacity-80">&#10095;</i>
            </div>
        </div>
    
    </div>
  );
};

export default SlideShow;
