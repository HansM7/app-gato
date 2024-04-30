"use client";

import FastContact from "@/app/components/fast-contac";
import TimeLine from "@/app/components/timeline";
import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import { useState } from "react";

function Service03() {
  const [step, setStep] = useState(1);

  const data = [
    {
      title: "Análisis",
      items: [
        "Recopilamos tus requisitos y comprendemos tus necesidades específicas.",
        "Definimos la arquitectura del software y las tecnologías a utilizar.",
        "Elaboramos un presupuesto y un cronograma detallado del proyecto.",
      ],
    },
    {
      title: "Diseño",
      items: [
        "Creamos prototipos interactivos para visualizar la interfaz del software.",
        "Diseñamos una base de datos segura y escalable.",
        "Desarrollamos código limpio y bien documentado.",
      ],
    },
    {
      title: "Pruebas",
      items: [
        "Realizamos pruebas exhaustivas para garantizar el correcto funcionamiento del software.",
        "Corregimos errores y optimizamos el rendimiento.",
        "Implementamos el software en tu entorno de producción.",
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
              Servicio de Desarrollo de Software
            </span>
          </RevealWrapper>
          <RevealWrapper
            origin="left"
            duration={1500}
            className={"w-full mt-16"}
          >
            <span className=" font-light xl:text-4xl md:text-3xl text-xl text-gray-200">
              Transforma tus ideas en software poderoso y escalable con un
              desarrollo personalizado que se adapta a tus necesidades
              específicas.
            </span>
          </RevealWrapper>
        </div>
      </div>

      <div className="min-h-screen xl:px-36 md:px-16  px-8 flex bg-gray-100 pt-16 flex-col pb-16">
        <RevealWrapper origin="left" duration={1500} className={"w-full"}>
          <p className="md:text-2xl text-xl text-slate-600">
            Brindamos soluciones de desarrollo de software personalizadas para
            impulsar tu negocio y optimizar tus operaciones. Convertimos tus
            ideas en software funcional, desde la conceptualización hasta la
            implementación, cubriendo todas las etapas del proceso de
            desarrollo.
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

export default Service03;
