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
                    Diseño
                  </span>
                  <span className="md:text-[6rem] text-4xl font-black text-blue-500 text-center">
                    Web
                  </span>
                </div>
              </div>
              <div className="px-8 ">
                <p className="md:text-xl text-sm font-light text-center">
                  Nuestro servicio de diseño web te ofrece la transformación
                  digital que necesitas, con sitios impactantes y altamente
                  funcionales. Desde la creación de páginas atractivas hasta la
                  optimización para una experiencia de usuario excepcional,
                  destacamos tu presencia en línea con diseños innovadores.
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
                    Diseño
                  </span>
                  <span className="md:text-[6rem] text-4xl font-black text-blue-500 text-center">
                    Web
                  </span>
                </div>
              </div>
              <div className="px-8 ">
                <p className="md:text-xl text-sm font-light text-center">
                  Destaca en el mundo digital con nuestro servicio de diseño
                  web, que ofrece sitios web impresionantes y altamente
                  funcionales. Desde la creación de páginas atractivas hasta la
                  optimización para una experiencia de usuario excepcional,
                  impulsamos tu presencia en línea con diseños innovadores y
                  adaptados a tus necesidades.
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
    </>
  );
}

export default Service02;
