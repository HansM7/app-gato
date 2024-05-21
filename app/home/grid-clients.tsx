"use client";

import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import { title } from "process";

function GridClients() {
  const clients = [
    {
      slug: "flowers-travel",
      company: "Flowers Travel",
      service: "Desarrolllo Web",
      image:
        "https://i.pinimg.com/736x/81/dd/00/81dd000b83b99271f5b58c8c2232e033.jpg",
      url: "",
      alt: "GATO - Cliente Flowers Travel",
    },
    {
      slug: "evadry",
      company: "Eva-Dry",
      service: "Desarrolllo Web",
      image:
        "https://i.pinimg.com/736x/01/a2/5b/01a25b770392bf75c3bf4182b91892cf.jpg",
      url: "",
      alt: "GATO - Cliente Eva-Dry",
    },
    {
      slug: "cr-motors",
      company: "CR Motors",
      service: "Desarrolllo Web",
      image:
        "https://i.pinimg.com/736x/14/d4/1e/14d41e8e044f772dd97ba883eae11075.jpg",
      url: "",
      alt: "GATO - Cliente CR Motors",
    },
    {
      slug: "caprepar-group",
      company: "Caprepar Group",
      service: "Desarrolllo Web",
      image:
        "https://i.pinimg.com/736x/0d/4b/9b/0d4b9bc3bb65614f182fc563c8b32dd0.jpg",
      url: "",
      alt: "GATO - Cliente Caprepar Group",
    },
    {
      slug: "flowers-travel",
      company: "Flowers Travel",
      service: "Desarrolllo Web",
      image:
        "https://i.pinimg.com/736x/81/dd/00/81dd000b83b99271f5b58c8c2232e033.jpg",
      url: "",
      alt: "GATO - Cliente Flowers Travel",
    },
    {
      slug: "evadry",
      company: "Eva-Dry",
      service: "Desarrolllo Web",
      image:
        "https://i.pinimg.com/736x/01/a2/5b/01a25b770392bf75c3bf4182b91892cf.jpg",
      url: "",
      alt: "GATO - Cliente Eva-Dry",
    },
    {
      slug: "cr-motors",
      company: "CR Motors",
      service: "Desarrolllo Web",
      image:
        "https://i.pinimg.com/736x/14/d4/1e/14d41e8e044f772dd97ba883eae11075.jpg",
      url: "",
      alt: "GATO - Cliente CR Motors",
    },
    {
      slug: "caprepar-group",
      company: "Caprepar Group",
      service: "Desarrolllo Web",
      image:
        "https://i.pinimg.com/736x/0d/4b/9b/0d4b9bc3bb65614f182fc563c8b32dd0.jpg",
      url: "",
      alt: "GATO - Cliente Caprepar Group",
    },
    {
      slug: "flowers-travel",
      company: "Flowers Travel",
      service: "Desarrolllo Web",
      image:
        "https://i.pinimg.com/736x/81/dd/00/81dd000b83b99271f5b58c8c2232e033.jpg",
      url: "",
      alt: "GATO - Cliente Flowers Travel",
    },
    {
      slug: "evadry",
      company: "Eva-Dry",
      service: "Desarrolllo Web",
      image:
        "https://i.pinimg.com/736x/01/a2/5b/01a25b770392bf75c3bf4182b91892cf.jpg",
      url: "",
      alt: "GATO - Cliente Eva-Dry",
    },
    {
      slug: "cr-motors",
      company: "CR Motors",
      service: "Desarrolllo Web",
      image:
        "https://i.pinimg.com/736x/14/d4/1e/14d41e8e044f772dd97ba883eae11075.jpg",
      url: "",
      alt: "GATO - Cliente CR Motors",
    },
    {
      slug: "caprepar-group",
      company: "Caprepar Group",
      service: "Desarrolllo Web",
      image:
        "https://i.pinimg.com/736x/0d/4b/9b/0d4b9bc3bb65614f182fc563c8b32dd0.jpg",
      url: "",
      alt: "GATO - Cliente Caprepar Group",
    },
    {
      slug: "flowers-travel",
      company: "Flowers Travel",
      service: "Desarrolllo Web",
      image:
        "https://i.pinimg.com/736x/81/dd/00/81dd000b83b99271f5b58c8c2232e033.jpg",
      url: "",
      alt: "GATO - Cliente Flowers Travel",
    },
    {
      slug: "evadry",
      company: "Eva-Dry",
      service: "Desarrolllo Web",
      image:
        "https://i.pinimg.com/736x/01/a2/5b/01a25b770392bf75c3bf4182b91892cf.jpg",
      url: "",
      alt: "GATO - Cliente Eva-Dry",
    },
    {
      slug: "cr-motors",
      company: "CR Motors",
      service: "Desarrolllo Web",
      image:
        "https://i.pinimg.com/736x/14/d4/1e/14d41e8e044f772dd97ba883eae11075.jpg",
      url: "",
      alt: "GATO - Cliente CR Motors",
    },
  ];
  return (
    <section
      className="xl:px-32 md:px-24  px-8 flex  py-16  w-full bg-gray-100 flex-col"
      id="clientes"
    >
      <div className="">
        <h2 className="text-3xl text-center
         text-[#3D3D3D] font-medium uppercase mb-3">Nuestros clientes</h2>
      </div>
      <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:mt-8 mt-4 gap-4  opacity-90  ">
        {clients.map((item, index) => (
          <RevealWrapper
            key={index}
            origin="bottom"
            duration={1000 + index * 200}
            className={
              "w-full justify-center  flex items-center relative overflow-hidden group "
            }
          >
            <Link href={"clientes/" + item.slug} className="w-full  ">
              <div className=" w-full h-64 bg-white flex items-center justify-center
                object-contain aspect-square">
                  <img
                className=" w-[90%] group-hover:scale-105 transition-all
                duration-500 ease-in-out object-contain "
                src={item.image}
                alt={item.alt}
              />
              </div>
              <div className="absolute opacity-0 bg-black group-hover:opacity-50  flex top-0 h-full w-full transition-all justify-center items-center
              duration-300 ease-in-out">
                <span className="text-2xl text-white 
                font-bold">{item.company}</span>
              </div>
            </Link>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}

export default GridClients;
