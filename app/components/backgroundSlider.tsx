import React, { useEffect, useState } from "react";
import imageSlide from "./dataSlider";

const backgroundSlider = () => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 2) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentState]);

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const goToNext = (currentState: number) => {
    setCurrentState(currentState);
  };
  return (
    <div className="h-full w-full relative">
      <div style={bgImageStyle} className="h-full">
        <div className=" h-full flex flex-col justify-center items-center md:gap-8  gap-4 py-12 md:px-16   ">
         
          <div className="flex flex-col items-center md:gap-16 py-16">
            <h1 className="md:text-[6rem] text-4xl font-black">
              {imageSlide[currentState].title}
            </h1>
            <span className="md:text-[6rem] text-4xl font-black text-blue-500">
              {imageSlide[currentState].word}
            </span>
          </div>
          <div className="px-8 ">
            <p className="md:text-xl text-sm font-light text-center">
              {imageSlide[currentState].description}
            </p>
          </div>
          <div className="flex items-center justify-center">
            {imageSlide.map((imageSlide, currentState) => (
              <span
                className="w-[45px] h-[12px] bg-white bg-opacity-50 ml-2 rounded-md cursor-pointer shadow-md hover:bg-opacity-100 transition-all duration-300"
                key={currentState}
                onClick={() => goToNext(currentState)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default backgroundSlider;
