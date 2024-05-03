"use client";

import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import React, { useState } from "react";

function Colaborators() {
  const data = [
    {
      id: 1,
      slug: "cr-motors",
      title: "Marketing Digital",
      client: "CR Motors",
      description:
        "Este enfoque integral ha permitido a CR MOTORS mantener su posición destacada en el sector y explorar nuevas oportunidades de crecimiento, fortaleciendo su vínculo con los clientes y consolidando su presencia en línea.",
    },
    {
      id: 2,
      slug: "evadry",
      title: "Marketing Digital",
      client: "Evadry",
      description:
        "Además, nuestra estrategia incluyó la implementación de campañas publicitarias dirigidas y la optimización de la interacción con los usuarios para fomentar una mayor lealtad de la clientela y atraer nuevos consumidores.",
    },
    {
      id: 3,
      slug: "flowers-travel",
      title: "Marketing Digital",
      client: "Flowers Travel",
      description:
        "Hemos tomado las riendas de las redes sociales de Flowers Travel con el objetivo de atraer más clientes y profesionalizar la marca en estas plataformas. Implementamos estrategias de contenido específicas que resuenan con su mercado objetivo.",
    },
  ];

  return (
    <div className="w-full xl:px-24 md:px-16  px-8  min-h-screen flex flex-col pt-16 pb-32 bg-gray-100  ">
      <div className="flex justify-center">
        <RevealWrapper origin="top" duration={1000}>
          <span className="md:text-[3rem] text-[2rem] ">Casos de éxito</span>
        </RevealWrapper>
      </div>
      <div className="flex flex-col items-center mt-8 gap-8">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1   gap-8">
          {data.map((item, index) => (
            <RevealWrapper
              origin="bottom"
              duration={1000}
              className={"min-h-96"}
              key={index}
            >
              <Link href={""} className="h-96 relative">
                <div className="overflow-hidden group h-full relative">
                  <img
                    className="w-full h-full object-cover filter brightness-[30%] group-hover:scale-110 transition-all"
                    src="https://images.pexels.com/photos/7375/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />

                  <div className="absolute inset-0 flex flex-col   z-10  gap-4  p-8">
                    <h3 className="text-white xl:text-xl text-lg ">
                      {item.client}
                    </h3>
                    <span className="xl:text-3xl text-sm  w-full  py-1 text-white font-semibold">
                      {item.title}
                    </span>
                    <p className="text-gray-200 font-light">
                      {item.description}
                    </p>
                    {/* <div className="text-violet-300 p-2 hidden group-hover:flex animate-fade-right ">
                      Click para ver mas detalles
                    </div> */}
                  </div>
                </div>
              </Link>
            </RevealWrapper>
          ))}
        </div>
      </div>

      {/* modal detail team */}
    </div>
  );
}

export default Colaborators;
