"use client";

import FastContact from "@/app/components/fast-contac";
import TimeLine from "@/app/components/timeline";
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
    <section className="w-full min-h-screen  overflow-hidden">
      <div className="md:min-h-screen min-h-[28rem]    flex bg-gray-100  relative">
        <div className=" md:min-h-screen h-full  overflow-hidden min-h-[28rem] absolute">
          <img
            className="w-screen  md:min-h-screen h-full min-h-[28rem] object-cover  overflow-hidden filter brightness-50"
            src="https://images.pexels.com/photos/2506947/pexels-photo-2506947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ></img>
        </div>
        <div className="xl:px-24 md:px-20 pb-16 md:pb-0 px-8 md:pt-12 pt-8">
          <RevealWrapper origin="left" duration={1500} className={"w-full"}>
            <span className="text-sky-400   xl:text-[7rem] md:text-[4rem] text-[3rem] ">
              Servicio de Desarrollo de Aplicaciones
            </span>
          </RevealWrapper>
          <RevealWrapper
            origin="left"
            duration={1500}
            className={"w-full mt-16"}
          >
            <span className=" font-light xl:text-4xl md:text-3xl text-xl text-gray-200 ">
              Crea aplicaciones móviles innovadoras y atractivas que te acerquen
              a tus clientes, impulsen tu negocio y te den una ventaja
              competitiva.
            </span>
          </RevealWrapper>

          <div className="absolute inset-x-0 mx-auto max-w-sm  p-4 bottom-0 text-center ">
            <Link
              href={"#detail"}
              className="floating-image text-sky-400  text-xl "
            >
              <span className="animate-pulse">Ver mas</span>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="min-h-screen xl:px-36 md:px-16  px-8 flex bg-gray-100 pt-16 flex-col pb-16"
        id="detail"
      >
        <RevealWrapper origin="left" duration={1500} className={"w-full"}>
          <p className="md:text-2xl text-xl font-light">
            Desarrollamos aplicaciones a medida que se adaptan a tus necesidades
            específicas y potencian la experiencia de tus usuarios. Creamos
            herramientas innovadoras que impulsan tu éxito en el mundo digital.
          </p>
        </RevealWrapper>
        <RevealWrapper
          origin="bottom"
          duration={1500}
          className={"w-full pb-16 md:px-44"}
        >
          <div className="grid grid-cols-5 ">
            <TimeLine data={data}></TimeLine>
          </div>
        </RevealWrapper>

        <hr />

        <FastContact></FastContact>
      </div>
    </section>
  );
}

export default Service06;
