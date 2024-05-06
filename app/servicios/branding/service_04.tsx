"use client";

import FastContact from "@/app/components/fast-contac";
import TimeLine from "@/app/components/timeline";
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
            <span className="text-sky-400   xl:text-[6rem] md:text-[4rem] text-[3rem] ">
              Servicio de Branding
            </span>
          </RevealWrapper>
          <RevealWrapper
            origin="left"
            duration={1500}
            className={"w-full mt-16"}
          >
            <p className=" font-light xl:text-4xl md:text-3xl text-xl text-gray-200 leading-normal">
              Capturamos la esencia de tu marca y la llevamos a nuevas alturas.
              Con la creación de identidades visuales impactantes te ayudamos a
              destacar en un mundo cada vez más competitivo.
            </p>
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

        <div className="flex flex-col mt-16">
          {/* // todo here is timeline */}
          <RevealWrapper
            origin="bottom"
            duration={1500}
            className={"w-full pb-16 "}
          >
            <div className="grid grid-cols-5 ">
              <TimeLine data={data}></TimeLine>
            </div>
          </RevealWrapper>
          {/*  // todo end timeline */}
        </div>

        <hr />

        <FastContact></FastContact>
      </div>
    </section>
  );
}

export default Service04;
