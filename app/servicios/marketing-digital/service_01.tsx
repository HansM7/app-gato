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
                    Marketing
                  </span>
                  <span className="md:text-[6rem] text-4xl font-black text-blue-500 text-center">
                    Digital
                  </span>
                </div>
              </div>
              <div className="px-8 ">
                <p className="md:text-xl text-sm font-light text-center">
                  Maximizamos el potencial de tus redes sociales,
                  transformándolas en canales de venta eficaces que se alinean
                  con tu visión empresarial. Nuestro enfoque innovador y
                  estrategias personalizadas potencian tus ventas y optimizan tu
                  presencia online.
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
                    Marketing
                  </span>
                  <span className="md:text-[6rem] text-4xl font-black text-blue-500 text-center">
                    Digital
                  </span>
                </div>
              </div>
              <div className="px-8 ">
                <p className="md:text-xl text-sm font-light text-center">
                  Potenciamos tus plataformas digitales con estrategias
                  adaptadas, convirtiéndolas en poderosos instrumentos de venta.
                  Aprovecha al máximo el alcance de tus redes sociales y mejora
                  tu presencia en línea con nuestro enfoque personalizado y
                  creativo.
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
    </>
  );
}

export default Service01;
