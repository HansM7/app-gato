"use client";

import FastContact from "@/app/components/fast-contac";
import TimeLine from "@/app/components/timeline";
import { Carousel } from "keep-react";
import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import { useState } from "react";

function Service01() {
  const [step, setStep] = useState(1);

  const data = [
    {
      title: "Análisis",
      items: [
        "Evaluamos tu presencia online actual y la de tus competidores.",
        "Definimos tu público objetivo y sus necesidades.",
        "Establecemos objetivos SMART para tu estrategia digital.",
      ],
    },
    {
      title: "Planificación",
      items: [
        "Desarrollamos una estrategia personalizada para alcanzar tus objetivos.",
        "Seleccionamos los canales digitales más adecuados para tu negocio.",
        "Creamos un calendario editorial con contenido relevante y atractivo.",
      ],
    },
    {
      title: "Implementación",
      items: [
        "Implementamos la estrategia digital con un equipo de expertos.",
        "Monitoreamos y analizamos los resultados en tiempo real.",
        "Optimizamos la estrategia de forma continua para mejorar el rendimiento.",
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
              Servicio de Marketing Digital
            </span>
          </RevealWrapper>
          <RevealWrapper
            origin="left"
            duration={1500}
            className={"w-full mt-16"}
          >
            <p className=" font-light xl:text-4xl md:text-3xl text-xl text-gray-200 leading-normal">
              Atrae clientes, impulsa ventas y construye una marca sólida con
              estrategias personalizadas, contenido cautivador y análisis
              constante.
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
            <p className="md:text-2xl text-xl font-light">
              Nuestros servicios de Marketing Digital te ayudarán a lograr tus
              objetivos de negocio a través de estrategias personalizadas para
              cada plataforma. Creamos contenido atractivo y relevante que
              cautiva a tu público objetivo, implementamos campañas de pago por
              clic y marketing de influencers para ampliar tu alcance, y
              analizamos constantemente los resultados para optimizar tus
              inversiones inversiones.
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
                className="  text-white  carousel_dinamic "
              >
                <div className="bg-blue-500 flex flex-col px-8 md:px-24 gap-4 py-12 ">
                  <span className="text-xl">Plan Nivel 0</span>
                  <div>
                    <span className="text-3xl">S/. 400.00</span>
                  </div>
                </div>

                <div className="bg-red-500 flex flex-col px-8 md:px-24 gap-4 py-12 ">
                  <span className="text-xl">Plan Nivel 1</span>
                  <div>
                    <span className="text-3xl">S/. 650.00</span>
                  </div>
                </div>

                <div className="bg-orange-500 flex flex-col px-8 md:px-24 gap-4 py-12 ">
                  <span className="text-xl">Plan Nivel 2</span>
                  <div>
                    <span className="text-3xl">S/. 1200.00</span>
                  </div>
                </div>

                <div className="bg-green-500 flex flex-col px-8 md:px-24 gap-4 py-12 ">
                  <span className="text-xl">Plan Nivel 3</span>
                  <div>
                    <span className="text-3xl">S/. 2000.00</span>
                  </div>
                </div>

                <div className="bg-gray-500 flex flex-col px-8 md:px-24 gap-4 py-12 ">
                  <span className="text-xl">Plan Nivel 4</span>
                  <div>
                    <span className="text-3xl">S/. 3600.00</span>
                  </div>
                </div>

                <div className="bg-purple-500 flex flex-col px-8 md:px-24 gap-4 py-12 ">
                  <span className="text-xl">Session fotos y videos</span>
                  <div>
                    <span className="text-3xl">S/. 320.00</span>
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
            className={"w-full pb-16 md:px-44"}
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

export default Service01;
