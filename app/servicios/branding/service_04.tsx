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
      title: "Descubrimiento",
      items: [
        "Descubrimos la esencia de tu marca y lo que la hace única.",
        "Definimos tu propuesta de valor y tu posicionamiento en el mercado.",
        "Creamos una identidad visual atractiva y memorable.",
      ],
    },
    {
      title: "Desarrollo",
      items: [
        "Desarrollamos una estrategia de comunicación efectiva para tu marca.",
        "Creamos contenido de alta calidad que resuena con tu público objetivo.",
        "Gestionamos tu reputación online y construimos relaciones sólidas.",
      ],
    },
    {
      title: "Crecimiento",
      items: [
        "Medimos el impacto de tu marca y la fidelización de tus clientes.",
        "Adaptamos tu estrategia de branding a las tendencias del mercado.",
        "Expandimos el alcance de tu marca a nuevos públicos.",
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
              Estrategias personalizadas, contenido cautivador, alcance ampliado
              y análisis constante para optimizar tus inversiones.
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

export default Service04;
