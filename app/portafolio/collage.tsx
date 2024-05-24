"use client";

import axios from "axios";
import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import { useEffect, useState } from "react";

function CollagePortfolio() {
  interface PortafolioItem {
    slug: string;
    acf: {
      imagen: string;
      cliente: string;
    };
    title: {
      rendered: string;
    };
  }

  const [dataPortfolio, setDataPortfolio] = useState<PortafolioItem[]>([]);

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
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleCategorySelect = (category: any) => {
    setSelectedCategory(category);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
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
          {
            isLoading ? (
              <div className="absolute mx-auto flex justify-center w-full ">
                <svg
                  className="animate-spin"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50ZM9.08144 50C9.08144 72.5987 27.4013 90.9186 50 90.9186C72.5987 90.9186 90.9186 72.5987 90.9186 50C90.9186 27.4013 72.5987 9.08144 50 9.08144C27.4013 9.08144 9.08144 27.4013 9.08144 50Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 38.4501C96.393 37.813 97.8624 35.3208 97.0079 32.9631C95.2932 28.2319 92.871 23.7784 89.8167 19.7572C85.8452 14.5284 80.8826 10.133 75.2124 6.82206C69.5422 3.51112 63.2754 1.34943 56.7698 0.460415C51.7666 -0.223279 46.6976 -0.143977 41.7345 0.687907C39.2613 1.10246 37.813 3.60696 38.4501 6.03244C39.0873 8.45792 41.5694 9.8809 44.0505 9.51628C47.8511 8.95773 51.7191 8.93607 55.5402 9.45823C60.8642 10.1858 65.9928 11.9548 70.6331 14.6644C75.2735 17.374 79.3347 20.971 82.5849 25.2501C84.9175 28.3212 86.7997 31.7005 88.1811 35.285C89.083 37.625 91.5421 39.0873 93.9676 38.4501Z"
                    fill="#6D28D9"
                  />
                </svg>
              </div>
            ) : filteredPortafolio.length > 0 ? (
              filteredPortafolio.map((item: any, index: number) => (
                <Link
                  key={index}
                  href={"/portafolio/" + item.slug}
                  className="group relative flex justify-center items-center overflow-hidden border"
                >
                  <img
                    className="xl:w-[70%]  w-[85%] group-hover:scale-105 transition-all
                    duration-500 ease-in-out object-contain "
                    src={item.acf.imagen}
                    alt={`GATO - Proyecto ${item.acf.cliente}`}
                    title={`GATO - Proyecto ${item.acf.cliente}`}
                  />

                  <div className="absolute hidden group-hover:flex inset-0 bg-black bg-opacity-70 w-full h-full top-0 p-3 animate-fade-up flex-col justify-end items-start  gap-4 text-white">
                    <h2 className="font-semibold text-xl">
                      {item.acf.cliente}
                    </h2>
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
