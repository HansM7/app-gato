"use client";

import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import React from "react";
import FastContact from "../components/fast-contac";

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

    {
      name: "Desarrollo móvil",
      icon: "https://cdn-icons-png.flaticon.com/512/6470/6470993.png",
      detail:
        "Desarrollamos aplicaciones móviles a medida que se adaptan a tus necesidades específicas y potencian la experiencia de tus usuarios.",
      path: "desarrollo-movil",
      video:
        "https://videos.pexels.com/video-files/3252145/3252145-uhd_3840_2160_25fps.mp4",
    },
  ];

  return (
    <section id="detail" className=" bg-gray-100">
      <div className="w-full min-h-screen max-w-[1920px] mx-auto xl:px-24 md:px-16  px-8 flex pt-12 pb-24">
        <div className="w-full flex flex-col ">
          <div className="grid grid-cols-6 gap-8 mt-8 ">
            {services.map((service, index) => (
              <RevealWrapper
                origin="bottom"
                duration={index * 400 + 1000}
                className={
                  "w-full group overflow-hidden col-span-6 md:col-span-3 xl:col-span-3 2xl:col-span-2 min-h-80 rounded-lg "
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
                      title={service.name}
                    />

                    <div className="absolute inset-0 flex flex-col p-8  z-10  gap-4">
                      <h3 className="text-white text-3xl">{service.name}</h3>
                      <p className="text-gray-300 text-xl font-light">
                        {service.detail}
                      </p>
                      <div className="text-[#9747FF] p-2 hidden group-hover:flex animate-fade-right drop-shadow-md font-bold">
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
          <FastContact></FastContact>
        </div>
      </div>
    </section>
  );
}

export default Items;
