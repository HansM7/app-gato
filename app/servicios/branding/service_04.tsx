"use client";

import FastContact from "@/app/components/fast-contac";
import TimeLine from "@/app/components/timeline";
import TimeLineMobile from "@/app/components/timeline-mobile";
import TimeLine2 from "@/app/components/timeline2";
import { Carousel } from "keep-react";
import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import { useState } from "react";

function Service04() {
  const [step, setStep] = useState(1);

  const data = [
    {
      title: " Consulta y Configuración",
      items: [
        "Se realiza una primera reunión para armar el BRIEF junto al cliente, con el objetivo de conocer acerca de la marca, el público, los objetivos, y lo que se quiere transmitir.",
      ],
    },
    {
      title: "Diseño Inicial",
      items: [
        "Se realizan las primeras opciones gráficas de logos o líneas gráficas que se presentan a través de un manual de marca. Se realizan de 2 a 3 diseños de logo y paleta de colores y se van adaptando a los requerimientos del cliente.",
      ],
    },
    {
      title: "Implementación y Feedback",
      items: [
        "Se entrega el manual de marca y se hacen las mejoras, de ser necesarias, en la opciones elegida por el cliente.",
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
                    Branding
                  </span>
                </div>
              </div>
              <div className="px-8 ">
                <p className="md:text-xl text-sm font-light text-center">
                  Con nuestro enfoque creativo y centrado en tus valores únicos,
                  llevamos la esencia de tu marca a nuevas alturas. Nuestra
                  experiencia en la creación de identidades visuales asegura que
                  destaque en un entorno competitivo, atrayendo a tu audiencia
                  objetivo y dejando una huella perdurable.
                </p>
              </div>
            </div>
            <div className=" flex flex-col md:gap-8  gap-4 py-12 md:px-16   ">
              <div className="flex flex-col items-center md:gap-16 py-16">
                <h2 className="md:text-[5rem] text-4xl font-black">
                  Servicio de
                </h2>
                <div className=" flex flex-wrap justify-center md:gap-10 gap-1">
                  <span className="md:text-[6rem] text-4xl font-black text-blue-500 text-center">
                    Branding
                  </span>
                </div>
              </div>
              <div className="px-8 ">
                <p className="md:text-xl text-sm font-light text-center">
                  En Branding, elevamos tu marca a nuevas alturas capturando su
                  esencia y valores distintivos. Nuestra experiencia en la
                  creación de identidades visuales impactantes garantiza que
                  resaltes en un mundo competitivo, atrayendo a tu público
                  objetivo y dejando una impresión duradera.
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </section>

      <div
        className="min-h-screen xl:px-36 md:px-16  px-4 flex bg-gray-100 pt-16 flex-col pb-16"
        id="detail"
      >
        <RevealWrapper
          origin="left"
          duration={1500}
          className={"w-full grid md:grid-cols-2  grid-cols-1 gap-8"}
        >
          <div>
            <p className=" text-xl font-light">
              Somos expertos en capturar la esencia de tu marca y llevarla a
              nuevas alturas. Te ayudamos a destacar en un mundo cada vez más
              competitivo a través de la creación de identidades visuales
              impactantes que transmiten tu mensaje de manera clara y memorable.
            </p>
          </div>
          <div>
            <RevealWrapper
              duration={1500}
              origin="left"
              className={`rounded-lg overflow-hidden`}
            >
              <Carousel
                slideInterval={5000}
                showControls={true}
                indicators={true}
                className=" bg-blue-500 text-white  carousel_dinamic "
              >
                <div className="flex flex-col px-8 md:px-24 gap-4 py-12 ">
                  <span>Plan Basico</span>
                  <div>
                    <span>4000$</span>
                  </div>
                </div>

                <div className="flex flex-col px-8 md:px-24 gap-4 py-12 ">
                  <span>Plan Basico</span>
                  <div>
                    <span>4000$</span>
                  </div>
                </div>

                <div className="flex flex-col px-8 md:px-24 gap-4 py-12 ">
                  <span>Plan Basico</span>
                  <div>
                    <span>4000$</span>
                  </div>
                </div>
              </Carousel>
            </RevealWrapper>
          </div>
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

export default Service04;
