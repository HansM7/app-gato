"use client";

import FastContact from "@/app/components/fast-contac";
import TimeLine from "@/app/components/timeline";
import TimeLineMobile from "@/app/components/timeline-mobile";
import TimeLine2 from "@/app/components/timeline2";
import { Carousel } from "keep-react";
import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import { useState } from "react";

function Service01() {
  const [step, setStep] = useState(1);

  const data = [
    {
      title: "Consulta y Configuración",
      items: [
        "Se realiza una primera reunión para armar el BRIEF junto al cliente, con el objetivo de conocer acerca de la marca, el público, los objetivos, etc. En la misma reunión se procede a configurar la página y otorgar los permisos necesarios para poder administrarla.",
      ],
    },
    {
      title: "Diseño Inicial",
      items: [
        "Se realizan las primeras opciones de piezas gráficas para comenzar a gestionar las redes sociales de la cuenta. Se sigue una línea gráfica y se van adaptando a los requerimientos del cliente.",
      ],
    },
    {
      title: "Implementación y Feedback",
      items: [
        "Se inicia la gestión de las redes sociales, y las ADS, incorporando el feedback del cliente para ajustar y mejorar continuamente las estrategias.",
      ],
    },
  ];

  const gridCol = "grid-cols-" + data.length;

  return (
    <section className="w-full min-h-screen  overflow-hidden">
      <div className="md:min-h-screen min-h-[28rem]    flex bg-gray-100  relative">
        <div className=" md:min-h-screen h-full  overflow-hidden min-h-[28rem] absolute">
          <img
            className="w-screen  md:min-h-screen h-full min-h-[28rem] object-cover  overflow-hidden filter brightness-50"
            src="https://images.pexels.com/photos/2506947/pexels-photo-2506947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ></img>
        </div>
        <div className="xl:px-32 md:px-20 pb-16 md:pb-0 px-8 md:pt-32 pt-16  grid grid-cols-5 gap-16">
          <div className="col-span-3">
            <RevealWrapper origin="left" duration={1500} className={"w-full"}>
              <h1 className="text-sky-400   xl:text-[5rem] md:text-[4rem] text-[3rem] ">
                Servicio de Marketing Digital
              </h1>
            </RevealWrapper>
            <RevealWrapper
              origin="left"
              duration={1500}
              className={"w-full mt-16"}
            >
              <p className=" font-light xl:text-4xl md:text-3xl text-xl text-gray-200 leading-normal">
                Nuestros servicios de Marketing Digital, están orientados en
                transformar tus redes sociales en canales de venta, según los
                objetivos de tu negocio.
              </p>
            </RevealWrapper>
          </div>
          <div className="col-span-2 z-10 flex justify-center pb-4 ">
            <img
              src="https://academiadigital.com/wp-content/uploads/2019/07/Curso-de-Marketing-Digital.png"
              alt=""
            />
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
                  <span className="text-xl">Plan Inicial</span>
                  <div>
                    <span className="text-3xl">S/. 450.00</span>
                  </div>
                </div>

                <div className="bg-red-500 flex flex-col px-8 md:px-24 gap-4 py-12 ">
                  <span className="text-xl">Plan Integral</span>
                  <div>
                    <span className="text-3xl">S/. 750.00</span>
                  </div>
                </div>

                <div className="bg-orange-500 flex flex-col px-8 md:px-24 gap-4 py-12 ">
                  <span className="text-xl">Plan Maestro</span>
                  <div>
                    <span className="text-3xl">S/. 1250.00</span>
                  </div>
                </div>

                <div className="bg-green-500 flex flex-col px-8 md:px-24 gap-4 py-12 ">
                  <span className="text-xl">Plan Premium</span>
                  <div>
                    <span className="text-3xl">S/. 2000.00</span>
                  </div>
                </div>

                <div className="bg-gray-500 flex flex-col px-8 md:px-24 gap-4 py-12 ">
                  <span className="text-xl">Plan Ejecutivo</span>
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

export default Service01;
