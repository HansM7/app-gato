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
      video:
        "https://videos.pexels.com/video-files/7414127/7414127-hd_1920_1080_24fps.mp4",
    },
    {
      name: "Diseño Web",
      icon: "https://cdn-icons-png.flaticon.com/512/2210/2210184.png",
      detail:
        "Transformamos tu presencia en línea con diseños web impactantes y funcionales. Desde la creación de sitios web atractivos hasta la optimización.",
      path: "diseno-web",
      video:
        "https://videos.pexels.com/video-files/852423/852423-hd_1920_1080_24fps.mp4",
    },
    {
      name: "Desarrollo de Software",
      icon: "https://cdn-icons-png.flaticon.com/512/1875/1875609.png",
      detail:
        "Transformamos tus ideas en software funcional. Desde la conceptualización hasta la implementación, creamos soluciones a medida.",
      path: "desarrollo-software",
      video:
        "https://videos.pexels.com/video-files/2516160/2516160-hd_1920_1080_24fps.mp4",
    },
    {
      name: "Branding",
      icon: "https://cdn-icons-png.flaticon.com/512/1540/1540198.png",
      detail:
        "Capturamos la esencia de tu marca y la llevamos a nuevas alturas con la creación de identidades visuales impactantes",
      path: "branding",
      video:
        "https://videos.pexels.com/video-files/3205622/3205622-hd_1920_1080_25fps.mp4",
    },
    // {
    //   name: "Business Intelligence",
    //   icon: "https://cdn-icons-png.flaticon.com/512/3343/3343849.png",
    //   detail:
    //     "Análizamos insights y visualizaciones para que puedas aprovechar al máximo la información de tu empresa.",
    //   path: "business-intelligence",
    // },
    {
      name: "Desarrollo de Aplicaciones",
      icon: "https://cdn-icons-png.flaticon.com/512/6470/6470993.png",
      detail:
        "Desarrollamos aplicaciones a medida que se adaptan a tus necesidades específicas y potencian la experiencia de tus usuarios.",
      path: "desarrollo-movil",
      video:
        "https://videos.pexels.com/video-files/3252145/3252145-uhd_3840_2160_25fps.mp4",
    },
  ];

  function handleRedirect(path: string) {}

  return (
    <section>
      <div className="min-h-screen xl:px-24 md:px-16  px-8 flex bg-gray-100 pt-12 pb-24">
        <div className="w-full flex flex-col ">
          {/* <div className="flex gap-16">
              <div className="flex flex-col">
                <RevealWrapper origin="left" duration={1500} className={"w-full"}>
                  <h1 className="xl:text-[4rem] md:text-[3rem] text-[3rem]">
                    Servicios
                  </h1>
                </RevealWrapper>
                <RevealWrapper
                  origin="right"
                  duration={1500}
                  className={"w-full"}
                >
                  <h1 className="xl:text-[4rem] md:text-[3rem] text-[3rem] font-semibold">
                    Tecnológicos
                  </h1>
                </RevealWrapper>
              </div>
              <div>
                <RevealWrapper origin="" duration={1500} className={"w-full"}>
                  <img src="gato-sleep.png" alt="" />
                </RevealWrapper>
              </div>
            </div> */}
          {/*  */}
          <div className="grid grid-cols-6 gap-4 mt-8 ">
            {services.map((service, index) => (
              <RevealWrapper
                origin="bottom"
                duration={index * 400 + 1000}
                className={
                  "w-full group overflow-hidden col-span-6 md:col-span-3 xl:col-span-3 2xl:col-span-2 min-h-80"
                }
                key={index}
              >
                <Link
                  href={"/servicios/" + service.path}
                  className="h-96 relative"
                >
                  <div className="overflow-hidden group h-full relative">
                    <video
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover filter brightness-[30%] group-hover:scale-110 transition-all"
                      src={service.video}
                    />

                    <div className="absolute inset-0 flex flex-col p-8  z-10  gap-4">
                      <h3 className="text-white text-3xl">{service.name}</h3>
                      <p className="text-gray-300 text-xl font-light">
                        {service.detail}
                      </p>
                      <div className="text-violet-300 p-2 hidden group-hover:flex animate-fade-right ">
                        Click para ver mas detalles
                      </div>
                    </div>
                  </div>
                </Link>
              </RevealWrapper>
            ))}
          </div>
          <hr className="mt-16 bg-white" />
          {/*  */}
          <RevealWrapper origin="left" duration={1500} className={"w-full"}>
            <div className="grid grid-cols-3 gap-8 mt-16 items-center">
              <div className=" col-span-3 md:col-span-1">
                <span className="text-3xl">¿Necesitas una cotización?</span>
              </div>

              <RevealWrapper
                origin="bottom"
                duration={2000}
                className={"w-fit col-span-3 md:col-span-1"}
              >
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
                        href={"/contactanos"}
                        className="text-[#0A86ED] animate-fade-right animate-once animate-duration-[1200ms] animate-ease-out animate-normal hidden group-hover:flex text-md font-semibold"
                      >
                        Solicitar detalle
                      </Link>
                    </div>
                  </div>
                </div>
              </RevealWrapper>

              <RevealWrapper
                origin="bottom"
                duration={2500}
                className={"w-fit col-span-3 md:col-span-1"}
              >
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
                        href={"/contactanos"}
                        className="text-[#0A86ED] animate-fade-right animate-once animate-duration-[1200ms] animate-ease-out animate-normal hidden group-hover:flex text-md font-semibold"
                      >
                        Solicitar detalle
                      </Link>
                    </div>
                  </div>
                </div>
              </RevealWrapper>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default Items;
