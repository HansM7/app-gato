"use client";

import FastContact from "@/app/components/fast-contac";
import TimeLine from "@/app/components/timeline";
import TimeLineMobile from "@/app/components/timeline-mobile";
import TimeLine2 from "@/app/components/timeline2";
import { Carousel } from "keep-react";
import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import { useState } from "react";

function Service06() {
  const [step, setStep] = useState(1);

  const data = [
    {
      title: "Análisis",
      items: [
        "Definimos la plataforma objetivo (iOS, Android o ambas).",
        "Diseñamos la interfaz de usuario (UI) y la experiencia de usuario (UX).",
        "Seleccionamos las tecnologías y herramientas de desarrollo adecuadas.",
      ],
    },
    {
      title: "Desarrollo",
      items: [
        "Desarrollamos una aplicación nativa o híbrida de alta calidad.",
        "Implementamos las funciones y funcionalidades necesarias.",
        "Optimizamos el rendimiento de la aplicación para una experiencia fluida.",
      ],
    },
    {
      title: "Lanzamiento y Publicación",
      items: [
        "Publicamos la aplicación en las tiendas de aplicaciones (App Store y Google Play).",
        "Monitoreamos las reseñas de los usuarios y solucionamos problemas.",
        "Actualizamos la aplicación con nuevas funciones y mejoras de forma regular.",
      ],
    },
  ];

  return (
    <>
      <section className="w-full  min-h-screen relative">
        <div className=" md:min-h-screen h-full  overflow-hidden  absolute z-0">
          <img
            className="w-screen  md:min-h-screen h-full  object-cover  overflow-hidden filter brightness-50"
            src="https://i.pinimg.com/originals/be/3e/c0/be3ec039bbfc3736c73736f19fc935dc.jpg"
            alt="GATO - Servicios digitales"
            title="GATO - Servicios digitales"
          ></img>
        </div>
        <div className=" w-full h-full flex items-center md:px-16 px-2">
          <Carousel
            slideInterval={5000}
            showControls={true}
            // indicators={true}
            className="  text-white  carousel_dinamic  w-full  "
            style={{ height: "100%!important" }}
          >
            <div className=" flex flex-col md:gap-8  gap-4 py-12 md:px-16   ">
              <div className="flex flex-col items-center md:gap-16 py-16">
                <h1 className="md:text-[5rem] text-4xl font-black">
                  Servicio de
                </h1>
                <div className=" flex flex-wrap justify-center md:gap-10 gap-1">
                  <span className="md:text-[6rem] text-4xl font-black text-blue-500 text-center">
                    Desarrollo
                  </span>
                  <span className="md:text-[6rem] text-4xl font-black text-blue-500 text-center">
                    Móvil
                  </span>
                </div>
              </div>
              <div className="px-8 ">
                <p className="md:text-xl text-sm font-light text-center">
                  Creamos aplicaciones personalizadas que convierten ideas en
                  soluciones digitales innovadoras, elevando la experiencia del
                  usuario. Desde la concepción hasta la implementación, nuestro
                  equipo se compromete a superar tus expectativas en cada
                  proyecto.
                </p>
              </div>
            </div>
            <div className=" flex flex-col md:gap-8  gap-4 py-12 md:px-16   ">
              <div className="flex flex-col items-center md:gap-16 py-16">
                <h1 className="md:text-[5rem] text-4xl font-black">
                  Servicio de
                </h1>
                <div className=" flex flex-wrap justify-center md:gap-10 gap-1">
                  <span className="md:text-[6rem] text-4xl font-black text-blue-500 text-center">
                    Desarrollo
                  </span>
                  <span className="md:text-[6rem] text-4xl font-black text-blue-500 text-center">
                    Móvil
                  </span>
                </div>
              </div>
              <div className="px-8 ">
                <p className="md:text-xl text-sm font-light text-center">
                  Desarrollamos aplicaciones a medida que transforman tus
                  conceptos en soluciones digitales vanguardistas, mejorando la
                  experiencia del usuario. Desde la idea inicial hasta la
                  ejecución, nuestro equipo se esfuerza por no solo cumplir,
                  sino superar tus expectativas en cada proyecto.
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </section>

      <div
        className="min-h-screen xl:px-36 md:px-16  px-8 flex bg-gray-100 pt-16 flex-col pb-16"
        id="detail"
      >
        <RevealWrapper origin="left" duration={1500} className={"w-full"}>
          <p className=" text-xl font-light">
            Desarrollamos aplicaciones a medida que se adaptan a tus necesidades
            específicas y potencian la experiencia de tus usuarios. Creamos
            herramientas innovadoras que impulsan tu éxito en el mundo digital.
          </p>
        </RevealWrapper>
        <div className={` w-full py-16 sm:grid grid-rows-3 hidden    `}>
          <TimeLine2 data={data} numCols={data.length}></TimeLine2>
        </div>

        <div className={` w-full py-16 sm:hidden   `}>
          <TimeLineMobile data={data}></TimeLineMobile>
        </div>

        <hr />

        <FastContact></FastContact>
      </div>
    </>
  );
}

export default Service06;
