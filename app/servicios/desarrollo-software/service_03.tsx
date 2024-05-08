"use client";

import FastContact from "@/app/components/fast-contac";
import TimeLine from "@/app/components/timeline";
import TimeLineMobile from "@/app/components/timeline-mobile";
import TimeLine2 from "@/app/components/timeline2";
import { Carousel } from "keep-react";
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
                    Desarrollo de
                  </span>
                  <span className="md:text-[6rem] text-4xl font-black text-blue-500 text-center">
                    Software
                  </span>
                </div>
              </div>
              <div className="px-8 ">
                <p className="md:text-xl text-sm font-light text-center">
                  En GATO, convertimos tus visiones en realidad digital con
                  software funcional a medida. Desde la concepción hasta la
                  implementación, creamos soluciones que potencian tu negocio y
                  simplifican tus operaciones. Nuestro equipo de expertos se
                  compromete a superar tus expectativas en cada proyecto.
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
                    Desarrollo de
                  </span>
                  <span className="md:text-[6rem] text-4xl font-black text-blue-500 text-center">
                    Software
                  </span>
                </div>
              </div>
              <div className="px-8 ">
                <p className="md:text-xl text-sm font-light text-center">
                  En GATO, hacemos tus ideas palpables con software funcional y
                  a medida. Desde la conceptualización hasta la implementación,
                  creamos soluciones que impulsan tu negocio y optimizan tus
                  procesos. Con un equipo experto comprometido, garantizamos que
                  cada proyecto no solo cumpla, sino que supere tus
                  expectativas.
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
    </>
  );
}

export default Service03;
