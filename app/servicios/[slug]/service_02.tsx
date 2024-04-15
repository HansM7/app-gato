"use client";

import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import { useState } from "react";

function Service02() {
  const [step, setStep] = useState(1);

  return (
    <section className="w-full min-h-screen  overflow-hidden">
      <div className="min-h-screen xl:px-80 md:px-28  px-8 flex bg-gray-100 pt-16 flex-col pb-16">
        <div className="flex gap-16 items-center">
          <div className="flex flex-col">
            <RevealWrapper origin="left" duration={1500} className={"w-full"}>
              <h1 className="xl:text-[5rem] md:text-[4rem] font-semibold">
                Diseño
              </h1>
            </RevealWrapper>
            <RevealWrapper origin="right" duration={1500} className={"w-full"}>
              <h1 className="xl:text-[5rem] md:text-[4rem] ">Web</h1>
            </RevealWrapper>
          </div>
          <div className="w-fit">
            <RevealWrapper origin="top" duration={1500} className={"w-full"}>
              <img
                className="w-96"
                src="https://images.vexels.com/media/users/3/215556/isolated/preview/56cab15c9dd85351a1546bdfa86b9dd6-gato-acostado-mullido-plano.png"
                alt=""
              />
            </RevealWrapper>
          </div>
        </div>

        <RevealWrapper origin="left" duration={1500} className={"w-full"}>
          <p className="text-2xl text-slate-600">
            Transformamos tu presencia en línea con diseños web impactantes y
            funcionales. Desde la creación de sitios web atractivos hasta la
            optimización para una experiencia de usuario excepcional, nuestro
            servicio de diseño web te ayuda a destacar en el mundo digital.
          </p>
        </RevealWrapper>
        <RevealWrapper
          origin="right"
          duration={1500}
          className={"w-full pb-16"}
        >
          {/* <div className="">
            <img
              className="w-full "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHZ9nZyE2bXxKITFeUCu98ewZTqMP1o6LAdb_uDMG-jjXmmPd5lPGGhR36ZbzpO8EZ4Y&usqp=CAU "
              alt=""
            />
          </div> */}
          <div className="flex flex-col mt-16">
            <div className="flex justify-between">
              <div
                onClick={() => setStep(1)}
                className={`rounded-full ${
                  step === 1 ? "bg-[#0A86ED]" : "bg-white"
                } border border-[#0A86ED] p-3  w-36 h-36 flex justify-center items-center text-center`}
                role="button"
              >
                <span>Planificación y Definición</span>
              </div>
              <div
                onClick={() => setStep(2)}
                className={`rounded-full ${
                  step === 2 ? "bg-[#0A86ED]" : "bg-white"
                } border border-[#0A86ED] p-3  w-36 h-36 flex justify-center items-center text-center`}
                role="button"
              >
                <span>Diseño y Desarrollo</span>
              </div>
              <div
                onClick={() => setStep(3)}
                className={`rounded-full ${
                  step === 3 ? "bg-[#0A86ED]" : "bg-white"
                } border border-[#0A86ED] p-3  w-36 h-36 flex justify-center items-center text-center`}
                role="button"
              >
                <span> Implementación y Mantenimiento</span>
              </div>
            </div>

            <div className="mt-8">
              {step === 1 && (
                <RevealWrapper
                  origin="left"
                  duration={1500}
                  className={"w-full"}
                >
                  <div className="mt-12 grid grid-cols-2">
                    <div className="">
                      <span className="text-3xl">
                        Planificación y Definición
                      </span>
                    </div>
                    <div>
                      <p>
                        Conocemos tu negocio, público objetivo y definimos tu
                        marca, objetivos y necesidades de diseño. Analizamos a
                        tus competidores para identificar oportunidades y
                        diferenciarte. Creamos un mapa del sitio y definimos el
                        contenido que atraiga clientes.
                      </p>
                    </div>
                  </div>
                  <img
                    className="w-full mt-8 rounded-lg"
                    src="https://img.freepik.com/vector-gratis/banner-marketing-digital_157027-1372.jpg"
                    alt=""
                  />
                </RevealWrapper>
              )}
              {step === 2 && (
                <RevealWrapper
                  origin="left"
                  duration={1500}
                  className={"w-full"}
                >
                  <div className="mt-12 grid grid-cols-2">
                    <div className="">
                      <span className="text-3xl">Diseño y Desarrollo</span>
                    </div>
                    <div>
                      <p>
                        Desarrollamos un diseño visual atractivo y profesional
                        que refleje tu marca. Creamos una interfaz intuitiva y
                        fácil de navegar, optimizada para diferentes
                        dispositivos. Implementamos las últimas tecnologías web
                        para un sitio web rápido, seguro y confiable.
                      </p>
                    </div>
                  </div>
                  <img
                    className="w-full mt-8 rounded-lg"
                    src="https://img.freepik.com/vector-gratis/banner-marketing-digital_157027-1372.jpg"
                    alt=""
                  />
                </RevealWrapper>
              )}
              {step === 3 && (
                <RevealWrapper
                  origin="left"
                  duration={1500}
                  className={"w-full"}
                >
                  <div className="mt-12 grid grid-cols-2">
                    <div className="">
                      <span className="text-3xl">
                        mplementación y Mantenimiento
                      </span>
                    </div>
                    <div>
                      <p>
                        Convertimos tu diseño en un sitio web funcional.
                        Realizamos pruebas exhaustivas para garantizar el
                        correcto funcionamiento y optimizar el rendimiento.
                        Brindamos soporte continuo para actualizaciones,
                        seguridad y resolución de problemas.
                      </p>
                    </div>
                  </div>
                  <img
                    className="w-full mt-8 rounded-lg"
                    src="https://img.freepik.com/vector-gratis/banner-marketing-digital_157027-1372.jpg"
                    alt=""
                  />
                </RevealWrapper>
              )}
            </div>
          </div>
        </RevealWrapper>

        <hr />

        <RevealWrapper origin="left" duration={1500} className={"w-full"}>
          <div className="flex gap-8 mt-16 items-center">
            <div>
              <span className="text-3xl">¿Necesitas una cotización?</span>
            </div>

            <RevealWrapper origin="bottom" duration={2000}>
              <div className="relative group flex overflow-hidden">
                <img
                  className="absolute w-20 bottom-0 right-0 animate-fade-up animate-once animate-duration-[1200ms] animate-ease-out animate-normal hidden group-hover:flex"
                  src="https://cdn.pixabay.com/photo/2019/04/17/12/34/black-cat-is-curious-4134136_960_720.png"
                  alt=""
                />
                <div className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl bg-white px-8 py-4 group-hover:shadow-xl transition-all ">
                  <span className="text-xl text-slate-600">
                    Soy una Pyme y tengo una idea de negocio
                  </span>
                  <div className="h-10  mt-2 ">
                    <Link
                      href={"/contactanos"}
                      className="text-[#0A86ED] animate-fade-right animate-once animate-duration-[1200ms] animate-ease-out animate-normal hidden group-hover:flex text-md font-semibold"
                    >
                      Solicitar detalle
                    </Link>
                  </div>
                </div>
              </div>
            </RevealWrapper>

            <RevealWrapper origin="bottom" duration={2500}>
              <div className="relative group flex overflow-hidden">
                <img
                  className="absolute w-20 bottom-0 right-0 animate-fade-up animate-once animate-duration-[1200ms] animate-ease-out animate-normal hidden group-hover:flex"
                  src="https://cdn.pixabay.com/photo/2019/04/17/12/34/black-cat-is-curious-4134136_960_720.png"
                  alt=""
                />
                <div className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl bg-white px-8 py-4 group-hover:shadow-xl transition-all ">
                  <span className="text-xl text-slate-600">
                    Tengo una empresa y necesito una cotización
                  </span>
                  <div className="h-10  mt-2 ">
                    <Link
                      href={"/contactanos"}
                      className="text-[#0A86ED] animate-fade-right animate-once animate-duration-[1200ms] animate-ease-out animate-normal hidden group-hover:flex text-md font-semibold"
                    >
                      Solicitar detalle
                    </Link>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

export default Service02;
