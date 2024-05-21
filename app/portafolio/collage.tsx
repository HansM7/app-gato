"use client";

import axios from "axios";
import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import { useEffect, useState } from "react";

function CollagePortfolio() {
  const [dataPortfolio, setDataPortfolio] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [isSelected, setIsSelected] = useState(false);

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://palegreen-anteater-636608.hostingersite.com/wp-json/wp/v2/proyecto"
      );
      setDataPortfolio(response.data);
      setIsLoading(false);
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="w-full  xl:px-24 md:px-20 sm:px-12  px-8   py-16">
      <RevealWrapper duration={1500} origin="top">
        <div>
          <h1
            title="GATO - Portafolio de proyectos"
            className="text-3xl 
            text-[#3D3D3D] font-semibold uppercase mb-4"
          >
            Portafolio
          </h1>
          <nav className="w-full">
          <ul className="flex gap-x-4 text-[#4F4F4F] font-semibold">
            <li className="group hover:text-[#6D28D9]">Todas las categorías
            <div className="abslute w-full h-0.5 bg-[#6D28D9] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </li>
            <li className="group hover:text-[#6D28D9]">Diseño web
            <div className="abslute w-full h-0.5 bg-[#6D28D9] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </li>
            <li className="group hover:text-[#6D28D9]">Branding
            <div className="abslute w-full h-0.5 bg-[#6D28D9] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div></li>
            <li className="group hover:text-[#6D28D9]">Desarrollo de aplicaciones
            <div className="abslute w-full h-0.5 bg-[#6D28D9] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div></li>
            <li className="group hover:text-[#6D28D9]">Marketing Digital
            <div className="abslute w-full h-0.5 bg-[#6D28D9] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div></li>
          </ul>
        </nav>
        </div>
      </RevealWrapper>
      <RevealWrapper duration={1500} origin="bottom" className={`mt-12`}>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ">
          {isLoading ? (
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              <div className="h-72 animate-pulse"></div>
              <div className="h-72 animate-pulse"></div>
              <div className="h-72 animate-pulse"></div>
              <div className="h-72 animate-pulse"></div>
              <div className="h-72 animate-pulse"></div>
            </div>
          ) : (
            dataPortfolio.map((item: any, index: number) => (
              <Link
                key={index}
                href={"/portafolio/" + item.slug}
                className="group relative overflow-hidden border"
              >
                <img
                  className="object-cover w-full group-hover:scale-105 transition-all h-72"
                  src={item.acf.imagen}
                  alt={`GATO - Proyecto ${item.acf.cliente}`}
                  title={`GATO - Proyecto ${item.acf.cliente}`}
                />

                <div className="absolute hidden group-hover:flex inset-0 bg-black bg-opacity-70 w-full h-full top-0 animate-fade-up flex-col justify-center items-center gap-4 text-white">
                  <h2 className="font-semibold text-xl">{item.acf.cliente}</h2>
                  <span>{item.title.rendered}</span>
                </div>
              </Link>
            ))
          )}
        </div>
      </RevealWrapper>
    </section>
  );
}

export default CollagePortfolio;
