import { useState, useEffect } from "react";
import "./slider.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const SliderData = [
  {
    image: "/serv5.webp",
    heading: "SEO and Content Strategy",
  },
  {
    image: "/pexel2.webp",
    heading: "Soial Media Management",
  },
  {
    image: "/pexel3.webp",
    heading: "PPC and Online Campaigns",
  },
  {
    image: "/serv4.webp",
    heading: "Paid Advertisement",
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = SliderData.length;
  // slideLength = 1 2 3
  // currentSlide = 0 1 2

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="w-full rounded mx-auto h-full  flex justify-center items-center  relative overflow-hidden">
      {SliderData.map((slide, index) => {
        return (
          <div
            className={`${
              index === currentSlide && "current"
            } h-full top-0 absolute w-full opacity-0 transition-all duration-500 ease-linear -translate-x-[20%] transform`}
            key={index}
          >
            {index === currentSlide && (
              <div className="flex w-full h-full pb-4 items-center justify-center">
                <img
                  src={slide.image}
                  alt=""
                  className="fixed top-0 h-full w-full"
                />
                <div className="content absolute mx-auto w-1/2 md:px-8 px-4 py-4">
                  <h2 className="text-sm md:text-base  w-fit bg-gradient-to-r from-[#559297] to-[#7ba949] px-2 py-1 rounded  uppercase">
                    {slide.heading}
                  </h2>

                  <hr />
                </div>
              </div>
            )}
          </div>
        );
      })}
      <div className="absolute  bottom-0 w-[100px] h-10 flex flex-row gap-8">
        <span className="bg-neutral-700/60 backdrop-blur-md text-accent text-lg font-bold  h-8 w-8 cursor-pointer  z-10 rounded-full border-2 border-red-500 flex justify-center items-center hover:bg-opacity-60  duration-300 hover:opacity-80">
          <i className=" fa-solid fa-arrow-left" onClick={prevSlide}>
            <BsChevronLeft />
          </i>
        </span>
        <span className="bg-neutral-700/60 backdrop-blur-md text-accent text-lg font-bold  h-8 w-8 cursor-pointer  z-10 rounded-full border-2 border-red-500 flex justify-center items-center hover:bg-opacity-60  duration-300 hover:opacity-80">
          <i className="fa-solid fa-arrow-right" onClick={nextSlide}>
            <BsChevronRight />
          </i>
        </span>
      </div>
    </div>
  );
}
