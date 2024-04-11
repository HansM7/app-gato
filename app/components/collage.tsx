"use client";

import { RevealWrapper } from "next-reveal";

function Collage() {
  return (
    <section className="xl:px-44 md:px-28  px-8 flex  py-16  w-full bg-white">
      <div className="w-full">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <RevealWrapper
            duration={1500}
            origin="left"
            className="group relative flex xl:h-96 h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Marketing
              </span>
            </a>
          </RevealWrapper>

          <RevealWrapper
            className="group relative flex xl:h-96 h-80  items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            duration={1500}
            origin="right"
          >
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center  duration-200 group-hover:scale-110 transition-all"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Desarrollo web
              </span>
            </a>
          </RevealWrapper>

          <RevealWrapper
            duration={1500}
            origin="left"
            className="group relative flex xl:h-96 h-80  items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Devesarrollo de software
              </span>
            </a>
          </RevealWrapper>

          <RevealWrapper
            duration={1500}
            origin="right"
            className="group relative flex xl:h-96 h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Data
              </span>
            </a>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default Collage;
