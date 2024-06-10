import React from "react";
import { TypeAnimation } from "react-type-animation";
import { RevealWrapper } from "next-reveal";
import { Typewriter } from "react-simple-typewriter";

const banner = () => {
  return (
    <div className="w-full relative">
      <div className="w-full h-screen md:h-[600px] relative  ">
        <img
          className="w-full h-full object-cover"
          src="https://i.pinimg.com/736x/d4/c3/fb/d4c3fbe8d97a0514ebe33641b8741f13.jpg"
          alt="banner blog"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#1E004D] bg-opacity-50 flex justify-start items-center">
          <RevealWrapper origin="left" duration={1500} className={`w-full`}>
            <div className="w-full max-w-[1920px] mx-auto px-8 pb-8 lg:px-16 lg:pb-16 xl:px32 flex flex-col gap-1 md:gap-4 lg:gap-4 ">
              <div className="flex flex-wrap mb-2 gap-2 ">
                <span className="px-2 md:px-4 py-1 text-sm md:text-base bg-[#1E90FF] text-white font-medium shadow-md">
                  Marketing Digital
                </span>
              </div>

              <h2 className="capitalize text-white text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold drop-shadow-xl">
                <Typewriter
                  words={["Estrategias y Tendencias Digitales"]}
                  typeSpeed={60}
                />
              </h2>
              <div className="py-4 text-[#CACACA] flex gap-2 lg:gap-4 md:text-lg text-sm ">
                <div className="flex gap-1 lg:gap-2 items-center">
                  <img
                    className="w-5 h-5 md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] aspect-square rounded-full object-cover"
                    src="https://i.pinimg.com/564x/82/b7/0c/82b70c6f269abfbe49039d11572c50a2.jpg"
                    alt="autor"
                  />{" "}
                  <span className=" drop-shadow">Nombre</span>
                </div>

                <div className="flex  items-center justify-start gap-1 ">
                  <svg
                    className="h-3 md:h-4 w-auto lg:h-5"
                    width="100%"
                    height="100%"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1813_933)">
                      <path
                        d="M12.6875 7C12.6875 8.50842 12.0883 9.95506 11.0217 11.0217C9.95506 12.0883 8.50842 12.6875 7 12.6875C5.49158 12.6875 4.04494 12.0883 2.97833 11.0217C1.91172 9.95506 1.3125 8.50842 1.3125 7C1.3125 5.49158 1.91172 4.04494 2.97833 2.97833C4.04494 1.91172 5.49158 1.3125 7 1.3125C8.50842 1.3125 9.95506 1.91172 11.0217 2.97833C12.0883 4.04494 12.6875 5.49158 12.6875 7ZM0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7ZM6.34375 3.28125V7C6.34375 7.21875 6.45312 7.42383 6.63633 7.54688L9.26133 9.29688C9.56211 9.49922 9.96953 9.41719 10.1719 9.11367C10.3742 8.81016 10.2922 8.40547 9.98867 8.20312L7.65625 6.65V3.28125C7.65625 2.91758 7.36367 2.625 7 2.625C6.63633 2.625 6.34375 2.91758 6.34375 3.28125Z"
                        fill="#cacaca"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1813_933">
                        <rect width="14" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className=" drop-shadow">May 17, 2024</span>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </div>
  );
};

export default banner;
