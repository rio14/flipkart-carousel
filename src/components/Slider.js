import React, { useState } from "react";
import { SliderData } from "./SliderData";
function Slider() {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="flex h-72 w-full bg-gray-300 py-4 px-2 my-6  justify-center items-center relative overflow-hidden">
      <div className="absolute h-5 w-2 left-0 ml-4 z-10 text-5xl cursor-pointer select-none text-white">
        <svg
          onClick={prevSlide}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
          />
        </svg>
      </div>
      <div className="absolute right-0 mr-4 z-10 text-5xl cursor-pointer select-none text-white">
        <svg
          onClick={nextSlide}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? "opacity-100 duration-100 ease-in scale-105"
                : "opacity-0 duration-100"
            }
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="slides"
                className="h-64 w-full object-center bg-cover shadow"
              />
            )}
          </div>
        );
      })}
    </section>
  );
}
export default Slider;
