"use client";

import FastContact from "@/app/components/fast-contac";
import TimeLine from "@/app/components/timeline";
import TimeLineMobile from "@/app/components/timeline-mobile";
import TimeLine2 from "@/app/components/timeline2";
import { Carousel } from "keep-react";
import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import { useState } from "react";

function Service02() {
  const [step, setStep] = useState(1);

  const data = [
    {
      title: "Planificación",
      items: [
        "Definimos los objetivos de tu sitio web y su público objetivo.",
        "Creamos un mapa del sitio y wireframes para estructurar el contenido.",
        "Seleccionamos la paleta de colores, la tipografía y el estilo visual.",
      ],
    },
    {
      title: "Desarrollo",
      items: [
        "Desarrollamos un sitio web responsive y accesible para todos los dispositivos.",
        "Implementamos las mejores prácticas de SEO para mejorar la visibilidad en buscadores.",
        "Optimizamos el rendimiento del sitio web para una carga rápida.",
      ],
    },
    {
      title: "Mantenimiento",
      items: [
        "Actualizamos el contenido y las funcionalidades del sitio web de forma regular.",
        "Realizamos copias de seguridad y mantenemos la seguridad del sitio web.",
        "Monitoreamos el rendimiento del sitio web y realizamos mejoras continuas.",
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
            <h1 className="text-sky-400  xl:text-[6rem] md:text-[4rem] text-[3rem]">
              Servicio de Diseño Web
            </h1>
          </RevealWrapper>
          <RevealWrapper
            origin="left"
            duration={1500}
            className={"w-full mt-16"}
          >
            <span className=" font-light xl:text-4xl md:text-3xl text-xl text-gray-200">
              Transformamos tu presencia en línea con diseños web impactantes y
              funcionales. Desde la creación de sitios web atractivos hasta la
              optimización para una experiencia de usuario excepcional, nuestro
              servicio de diseño web te ayuda a destacar en el mundo digital.
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
        <RevealWrapper
          origin="left"
          duration={1500}
          className={"w-full grid md:grid-cols-2  grid-cols-1 gap-8"}
        >
          <div className="flex items-center">
            <p className="text-xl font-light">
              Transformamos tu presencia en línea con diseños web impactantes y
              funcionales. Desde la creación de sitios web atractivos hasta la
              optimización para una experiencia de usuario excepcional, nuestro
              servicio de diseño web te ayuda a destacar en el mundo digital.
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
                  <span className="text-xl">Landing Page</span>
                  <div>
                    <span className="text-3xl">S/. 350.00</span>
                  </div>
                </div>

                <div className="bg-red-500 flex flex-col px-8 md:px-24 gap-4 py-12 ">
                  <span className="text-xl">One Page</span>
                  <div>
                    <span className="text-3xl">S/. 500.00</span>
                  </div>
                </div>

                <div className="bg-orange-500 flex flex-col px-8 md:px-24 gap-4 py-12 ">
                  <span className="text-xl">Basico</span>
                  <div>
                    <span className="text-3xl">S/. 850.00</span>
                  </div>
                </div>

                <div className="bg-green-500 flex flex-col px-8 md:px-24 gap-4 py-12 ">
                  <span className="text-xl">Empresarial</span>
                  <div>
                    <span className="text-3xl">S/. 1200.00</span>
                  </div>
                </div>

                <div className="bg-gray-500 flex flex-col px-8 md:px-24 gap-4 py-12 ">
                  <span className="text-xl">E-Commerce</span>
                  <div>
                    <span className="text-3xl">S/. 1500.00</span>
                  </div>
                </div>

                <div className="bg-purple-500 flex flex-col px-8 md:px-24 gap-4 py-12 ">
                  <span className="text-xl">Web a medida</span>
                  <div>
                    <span className="text-3xl">S/. 5000.00</span>
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

export default Service02;
