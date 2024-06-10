import React from "react";
import { RevealWrapper } from "next-reveal";

const cardNew = () => {
  return (
    <div className="w-full">
      <RevealWrapper
        origin="bottom"
        duration={1500}
        className={`w-full relative shadow-lg`}
      >
        <img
          className="w-full h-full object-cover"
          src="https://i.pinimg.com/736x/d4/c3/fb/d4c3fbe8d97a0514ebe33641b8741f13.jpg"
          alt="imagen new entrada"
        />
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black flex flex-col justify-between p-2 lg:p-4">
          <div className="flex flex-wrap gap-1 ">
            <span className="text-xs px-2 py-1 bg-[#1E90FF] text-white font-medium shadow-md">
              Marketing Digital
            </span>
          </div>
          <div className="">
            <h2 className="truncate capitalize text-white text-xl md:text-base lg:text-xl font-bold drop-shadow-xl">
              Estrategias y Tendencias Digitales
            </h2>
            <div className="pt-2 md:pt-1 text-[#cacaca] flex gap-2 text-xs md:text-base ">
              <div className="flex gap-1 items-center ">
                <img
                  className="w-4 h-4 md:w-5 md:h-5 aspect-square rounded-full object-cover"
                  src="https://i.pinimg.com/564x/82/b7/0c/82b70c6f269abfbe49039d11572c50a2.jpg"
                  alt="autor"
                />
                <span>Nombre</span>
              </div>

              <div className="flex items-center justify-start gap-1  ">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 md:w-4 md:h-4"
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
                <span>May 17, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </div>
  );
};

export default cardNew;
