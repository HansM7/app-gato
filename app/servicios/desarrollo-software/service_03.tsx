"use client";

import FastContact from "@/app/components/fast-contac";
import TimeLine from "@/app/components/timeline";
import TimeLineMobile from "@/app/components/timeline-mobile";
import TimeLine2 from "@/app/components/timeline2";
import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import { useState } from "react";

function Service03() {
  const [step, setStep] = useState(1);

  const data = [
    {
      title: "Reunión y Requerimientos",
      items: [
        "Se lleva a cabo una reunión inicial para comprender los requisitos del cliente y definir el alcance del proyecto.",
      ],
    },
    {
      title: "Diseño y Prototipado",
      items: [
        "Se procede a diseñar un prototipo de la aplicación móvil, que sirva como referencia visual para el cliente y como base para el desarrollo.",
      ],
    },
    {
      title: "Desarrollo y Codificación",
      items: [
        "Una vez aprobado el diseño, se inicia el desarrollo de la aplicación móvil, incluyendo la programación del front-end y el back-end según sea necesario.",
      ],
    },
    {
      title: "Pruebas y Optimización",
      items: [
        "Se realizan pruebas exhaustivas para garantizar el funcionamiento correcto de la aplicación en diferentes dispositivos y escenarios. Se realizan ajustes y optimizaciones según sea necesario.",
      ],
    },
    {
      title: "Lanzamiento y Entrega",
      items: [
        "Una vez completadas las pruebas y optimizaciones, la aplicación móvil se prepara para su lanzamiento en las tiendas de aplicaciones (App Store, Google Play, etc.). Se entrega la aplicación al cliente y se brinda soporte durante el proceso de publicación.",
      ],
    },
    {
      title: "Mantenimiento y Actualización",
      items: [
        "Después del lanzamiento, se ofrece soporte continuo para resolver cualquier problema que surja y se realizan actualizaciones periódicas para mantener la aplicación al día con las nuevas tecnologías y requisitos del mercado.",
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
            <h1 className="text-sky-400   xl:text-[7rem] md:text-[4rem] text-[3rem] ">
              Servicio de Desarrollo de Software
            </h1>
          </RevealWrapper>
          <RevealWrapper
            origin="left"
            duration={1500}
            className={"w-full mt-16"}
          >
            <span className=" font-light xl:text-4xl md:text-3xl text-xl text-gray-200">
              En GATO transformamos tus ideas en software funcional. Desde la
              conceptualización hasta la implementación, creamos soluciones a
              medida que potencian tu negocio y simplifican tus operaciones.
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
          <p className=" text-xl font-light">
            Brindamos soluciones de desarrollo de software personalizadas para
            impulsar tu negocio y optimizar tus operaciones. Convertimos tus
            ideas en software funcional, desde la conceptualización hasta la
            implementación, cubriendo todas las etapas del proceso de
            desarrollo.
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
    </section>
  );
}

export default Service03;
