"use client";

import axios from "axios";
import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import { useEffect, useState } from "react";

function CollagePortfolio() {
  const [dataPortfolio, setDataPortfolio] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState(
    "Todas las categorías"
  );

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://palegreen-anteater-636608.hostingersite.com/wp-json/wp/v2/proyecto"
      );
      const projects = response.data;
      setDataPortfolio(projects);
      
    } catch (error) {}
    finally{
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleCategorySelect = (category:any) => {
    setSelectedCategory(category);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const filteredPortafolio =
    selectedCategory === "Todas las categorías"
      ? dataPortfolio
      : dataPortfolio.filter((item) =>
          item.slug.includes(selectedCategory.toLowerCase().replace(/ /g, "-"))
        );

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
        </div>
      </RevealWrapper>
      <RevealWrapper duration={1500} origin="left">
        <nav className="w-full">
          <ul className=" relative flex gap-x-4 text-[#4F4F4F] font-semibold">
            {[
              "Todas las categorías",
              "Diseño web",
              "Branding",
              "Desarrollo de aplicaciones",
              "Marketing Digital",
            ].map((category) => (
              <li
                key={category}
                className={`group hover:text-[#6D28D9] ${
                  selectedCategory === category ? "text-[#6D28D9]" : ""
                }`}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
                <div
                  className={`abslute w-full h-0.5 bg-[#6D28D9] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    selectedCategory === category ? "scale-x-100" : ""
                  }`}
                ></div>
              </li>
            ))}
          </ul>
        </nav>
      </RevealWrapper>
      <RevealWrapper duration={1500} origin="bottom" className={`mt-12`}>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ">
          {isLoading ? (
            <div className="absolute mx-auto flex justify-center w-full ">
              <svg
                className="mr-3 h-20 w-20 animate-spin text-[#6D28D9]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  strokeLinecap="round"
                ></path>
              </svg>
              {/* <div className="h-72 bg-gray-300 animate-pulse"></div>
            <div className="h-72 bg-gray-300 animate-pulse"></div>
            <div className="h-72 bg-gray-300 animate-pulse"></div>
            <div className="h-72 bg-gray-300 animate-pulse"></div>
            <div className="h-72 bg-gray-300 animate-pulse"></div> */}
            </div>
          ) : filteredPortafolio.length > 0 ? (
            filteredPortafolio.map((item: any, index: number) => (
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

                <div className="absolute hidden group-hover:flex inset-0 bg-black bg-opacity-70 w-full h-full top-0 p-3 animate-fade-up flex-col justify-end items-start  gap-4 text-white">
                  <h2 className="font-semibold text-xl">{item.acf.cliente}</h2>
                  <span>{item.title.rendered}</span>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center text-[#5D5D5D]">
              De momento no tenemos datos para mostrar...
            </div>
          )
          /* dataPortfolio.map((item: any, index: number) => (
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

                <div className="absolute hidden group-hover:flex inset-0 bg-black bg-opacity-70 w-full h-full top-0 p-3 animate-fade-up flex-col justify-end items-start  gap-4 text-white">
                  <h2 className="font-semibold text-xl">{item.acf.cliente}</h2>
                  <span>{item.title.rendered}</span>
                </div>
              </Link>
            )) */
          }
        </div>
      </RevealWrapper>
    </section>
  );
}

export default CollagePortfolio;
