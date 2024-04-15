"use client";

import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import React from "react";

function Items() {
  const services = [
    {
      name: "Marketing Digital",
      icon: "https://cdn-icons-png.flaticon.com/512/7978/7978338.png",
      detail:
        "Nuestros servicios de Marketing Digital, están orientados en transformar tus redes sociales en fuentes de conversión, según los objetivos de tu negocio.",
      path: "marketing-digital",
    },
    {
      name: "Diseño Web",
      icon: "https://cdn-icons-png.flaticon.com/512/7978/7978338.png",
      detail:
        "Transformamos tu presencia en línea con diseños web impactantes y funcionales. Desde la creación de sitios web atractivos hasta la optimización.",
      path: "diseño-web",
    },
    {
      name: "Desarrollo de Software",
      icon: "https://cdn-icons-png.flaticon.com/512/7978/7978338.png",
      detail:
        "Transformamos tus ideas en software funcional. Desde la conceptualización hasta la implementación, creamos soluciones a medida.",
      path: "desarrollo-software",
    },
    {
      name: "Branding",
      icon: "https://cdn-icons-png.flaticon.com/512/7978/7978338.png",
      detail:
        "Capturamos la esencia de tu marca y la llevamos a nuevas alturas con la creación de identidades visuales impactantes",
      path: "branding",
    },
    {
      name: "Business Intelligence",
      icon: "https://cdn-icons-png.flaticon.com/512/7978/7978338.png",
      detail:
        "Análizamos insights y visualizaciones para que puedas aprovechar al máximo la información de tu empresa.",
      path: "business-intelligence",
    },
  ];

  function handleRedirect(path: string) {}

  return (
    <div className="min-h-screen xl:px-48 md:px-28  px-8 flex bg-gray-100 pt-24 pb-24">
      <div className="w-full flex flex-col">
        <div className="flex flex-col">
          <RevealWrapper origin="left" duration={1500} className={"w-full"}>
            <h1 className="text-[4rem]">Somos</h1>
          </RevealWrapper>
          <RevealWrapper origin="right" duration={1500} className={"w-full"}>
            <h1 className="text-[4rem] font-semibold">Especialistas</h1>
          </RevealWrapper>
        </div>
        {/*  */}
        <div className="grid grid-cols-3 gap-8 mt-8">
          {services.map((service, index) => (
            <RevealWrapper
              origin="bottom"
              duration={index * 400 + 1000}
              className={"w-full"}
              key={index}
            >
              <div
                role="button"
                onClick={() => handleRedirect("")}
                className="w-full p-2 flex flex-col gap-4 group"
              >
                <div className="flex flex-col gap-1">
                  <img
                    className="w-20 transition-transform duration-300  group-hover:animate-pulse group-hover:scale-105 "
                    src={service.icon}
                    alt=""
                  />
                  <h3 className="font-semibold text-2xl">{service.name}</h3>
                </div>
                <div>
                  <p className="text-slate-600">{service.detail}</p>
                </div>
                <div>
                  <Link
                    href={""}
                    className="text-[#0A86ED] underline font-semibold"
                  >
                    VER DETALLE
                  </Link>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
        <hr className="mt-16 bg-white" />
        {/*  */}
        <div className="flex gap-8 mt-16 items-center">
          <div>
            <span className="text-3xl">¿Necesitas una cotización?</span>
          </div>
          <div className="relative group flex overflow-hidden">
            <img
              className="absolute w-20 bottom-0 right-0 animate-fade-up animate-once animate-duration-[1200ms] animate-ease-out animate-normal hidden group-hover:flex"
              src="https://cdn.pixabay.com/photo/2019/04/17/12/34/black-cat-is-curious-4134136_960_720.png"
              alt=""
            />
            <div className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl bg-white px-8 py-4 group-hover:shadow-xl transition-all ">
              <span className="text-xl text-slate-600">
                Soy una Pyme y tengo una idea de negocio
              </span>
              <div className="h-10  mt-2 ">
                <Link
                  href={""}
                  className="text-[#0A86ED] animate-fade-right animate-once animate-duration-[1200ms] animate-ease-out animate-normal hidden group-hover:flex text-md font-semibold"
                >
                  Solicitar detalle
                </Link>
              </div>
            </div>
          </div>

          <div className="relative group flex overflow-hidden">
            <img
              className="absolute w-20 bottom-0 right-0 animate-fade-up animate-once animate-duration-[1200ms] animate-ease-out animate-normal hidden group-hover:flex"
              src="https://cdn.pixabay.com/photo/2019/04/17/12/34/black-cat-is-curious-4134136_960_720.png"
              alt=""
            />
            <div className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl bg-white px-8 py-4 group-hover:shadow-xl transition-all ">
              <span className="text-xl text-slate-600">
                Tengo una empresa y necesito una cotización
              </span>
              <div className="h-10  mt-2 ">
                <Link
                  href={""}
                  className="text-[#0A86ED] animate-fade-right animate-once animate-duration-[1200ms] animate-ease-out animate-normal hidden group-hover:flex text-md font-semibold"
                >
                  Solicitar detalle
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
