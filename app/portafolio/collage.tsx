"use client";

import { RevealWrapper } from "next-reveal";
import Link from "next/link";

function CollagePortfolio() {
  return (
    <section className="w-full  xl:px-24 md:px-20 sm:px-12  px-8   py-16">
      <RevealWrapper duration={1500} origin="top">
        <div className="flex justify-center">
          <h1 className="text-3xl text-center border-b-2 border-blue-400 w-fit">
            Portafolio
          </h1>
        </div>
      </RevealWrapper>

      <RevealWrapper duration={1500} origin="bottom" className={`mt-12`}>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ">
          <Link
            href={"/portafolio/flowers-travel"}
            className="group relative overflow-hidden border"
          >
            <img
              className="object-cover w-full h-full group-hover:scale-105 transition-all min-h-72"
              src="https://i.pinimg.com/736x/81/dd/00/81dd000b83b99271f5b58c8c2232e033.jpg"
              alt=""
            />

            <div className="absolute hidden group-hover:flex inset-0 bg-black bg-opacity-70 w-full h-full top-0 animate-fade-up flex-col justify-center items-center gap-4 text-white">
              <h2 className="font-semibold text-xl">Flowers Travel</h2>
              <span>Desarrollo Web</span>
            </div>
          </Link>

          <Link
            href={"/portafolio/evadry"}
            className="group relative overflow-hidden"
          >
            <img
              className="object-cover w-full h-full group-hover:scale-105 transition-all min-h-72"
              src="https://i.pinimg.com/736x/06/fa/f4/06faf4dfe26484f67ed6bd47e1c2969e.jpg"
              alt=""
            />

            <div className="absolute hidden group-hover:flex inset-0 bg-black bg-opacity-70 w-full h-full top-0 animate-fade-up flex-col justify-center items-center gap-4 text-white">
              <h2 className="font-semibold text-xl">Empresa</h2>
              <span>Descripcion proyecto</span>
            </div>
          </Link>

          <Link
            href={"/portafolio/cr-motors"}
            className="group relative overflow-hidden"
          >
            <img
              className="object-cover w-full h-full group-hover:scale-105 transition-all min-h-72"
              src="https://i.pinimg.com/736x/06/fa/f4/06faf4dfe26484f67ed6bd47e1c2969e.jpg"
              alt=""
            />

            <div className="absolute hidden group-hover:flex inset-0 bg-black bg-opacity-70 w-full h-full top-0 animate-fade-up flex-col justify-center items-center gap-4 text-white">
              <h2 className="font-semibold text-xl">Empresa</h2>
              <span>Descripcion proyecto</span>
            </div>
          </Link>

          <Link
            href={"/portafolio/cr-motors"}
            className="group relative overflow-hidden"
          >
            <img
              className="object-cover w-full h-full group-hover:scale-105 transition-all min-h-72"
              src="https://i.pinimg.com/736x/06/fa/f4/06faf4dfe26484f67ed6bd47e1c2969e.jpg"
              alt=""
            />

            <div className="absolute hidden group-hover:flex inset-0 bg-black bg-opacity-70 w-full h-full top-0 animate-fade-up flex-col justify-center items-center gap-4 text-white">
              <h2 className="font-semibold text-xl">Empresa</h2>
              <span>Descripcion proyecto</span>
            </div>
          </Link>
        </div>
      </RevealWrapper>
    </section>
  );
}

export default CollagePortfolio;
