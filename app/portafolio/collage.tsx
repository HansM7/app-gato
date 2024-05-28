"use client";

import axios from "axios";
import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";

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
        "https://palegreen-anteater-636608.hostingersite.com/wp-json/wp/v2/proyecto?per_page=100"
      );
      const projects = response.data;
      setDataPortfolio(projects);
      console.log(projects);
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
          item.slug.includes(
            selectedCategory.toLowerCase().replace(/ /g, "-").replace(/ñ/g, "n")
          )
        );

  const renderPortfolioItem = (item: any) => (
    <Link
      key={item.id}
      href={"/portafolio/" + item.slug}
      className="group relative flex justify-center items-center overflow-hidden border"
    >
      <img
        className="xl:w-[65%] h-[85%] group-hover:scale-105 transition-all duration-500 ease-in-out object-contain"
        src={item.acf.imagen}
        alt={`GATO - Proyecto ${item.acf.cliente}`}
        title={`GATO - Proyecto ${item.acf.cliente}`}
      />
      <div className="absolute hidden group-hover:flex inset-0 bg-black bg-opacity-70 w-full h-full top-0 p-3 animate-fade-up flex-col justify-end items-start gap-4 text-white">
        <h2 className="font-semibold text-xl">{item.acf.cliente}</h2>
        <span>{item.title.rendered}</span>
      </div>
    </Link>
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
              "Diseño Web",
              "Branding",
              "Desarrollo de Aplicaciones",
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
        <Pagination
          data={filteredPortafolio}
          itemsPerPage={8}
          render={renderPortfolioItem}
          gridClass={"grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 "}
        />
      </RevealWrapper>
      
    </section>
  );
}

export default CollagePortfolio;
