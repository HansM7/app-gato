"use client";

import { RevealWrapper } from "next-reveal";
import Link from "next/link";

function GridClients() {
  const clients = [
    {
      company: "Flowers Travel",
      service: "Desarrolllo Web",
      image:
        "https://i.pinimg.com/736x/81/dd/00/81dd000b83b99271f5b58c8c2232e033.jpg",
      url: "",
    },
    {
      company: "Eva-Dry",
      service: "Desarrolllo Web",
      image:
        "https://i.pinimg.com/736x/01/a2/5b/01a25b770392bf75c3bf4182b91892cf.jpg",
      url: "",
    },
  ];
  return (
    <section className="xl:px-32 md:px-24  px-8 flex  py-16  w-full bg-gray-100 flex-col">
      <div className="">
        <h2 className="text-3xl text-center">Nuestros clientes</h2>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-2 xl:mt-8 mt-4 2xl:gap-44 xl:gap-24 md:gap-12 gap-8 opacity-90  ">
        {clients.map((item, index) => (
          <RevealWrapper
            origin="bottom"
            duration={1000 + index * 200}
            className={
              "w-full justify-center  flex items-center relative overflow-hidden group"
            }
          >
            <Link href={""}>
              <img
                className=" w-full group-hover:scale-105 transition-all"
                src={item.image}
                alt=""
              />
            </Link>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}

export default GridClients;
