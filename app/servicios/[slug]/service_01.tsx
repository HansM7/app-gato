"use client";

import FastContact from "@/app/components/fast-contac";
import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import { useState } from "react";

function Service01() {
  const [step, setStep] = useState(1);

  return (
    <section className="w-full min-h-screen  overflow-hidden">
      <div className="md:min-h-screen min-h-[28rem]    flex bg-gray-100  relative">
        <div className=" md:min-h-screen h-full  overflow-hidden min-h-[28rem] absolute">
          <img
            className="w-screen  md:min-h-screen h-full min-h-[28rem] object-cover  overflow-hidden filter brightness-50"
            src="https://images.pexels.com/photos/2506947/pexels-photo-2506947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ></img>
        </div>
        <div className="xl:px-24 md:px-20 pb-16 md:pb-0 px-8 md:pt-24 pt-8">
          <RevealWrapper origin="left" duration={1500} className={"w-full"}>
            <span className="text-sky-400   xl:text-[7rem] md:text-[4rem] text-[3rem] ">
              Servicio de Marketing Digital
            </span>
          </RevealWrapper>
          <RevealWrapper
            origin="left"
            duration={1500}
            className={"w-full mt-16"}
          >
            <span className=" font-light xl:text-4xl md:text-3xl text-xl text-gray-200">
              Estrategias personalizadas, contenido cautivador, alcance ampliado
              y análisis constante para optimizar tus inversiones.
            </span>
          </RevealWrapper>
        </div>
      </div>
      <div className="min-h-screen xl:px-36 md:px-16  px-8 flex bg-gray-100 pt-16 flex-col pb-16">
        <RevealWrapper origin="left" duration={1500} className={"w-full"}>
          <p className="md:text-2xl text-xl text-slate-600">
            Nuestros servicios de Marketing Digital te ayudarán a lograr tus
            objetivos de negocio a través de estrategias personalizadas para
            cada plataforma. Creamos contenido atractivo y relevante que cautiva
            a tu público objetivo, implementamos campañas de pago por clic y
            marketing de influencers para ampliar tu alcance, y analizamos
            constantemente los resultados para optimizar tus inversiones
            inversiones.
          </p>
        </RevealWrapper>
        <RevealWrapper
          origin="right"
          duration={1500}
          className={"w-full pb-16"}
        >
          <div className="flex flex-col mt-16">
            <div className="grid md:grid-cols-5 grid-cols-3 gap-2 text-xs md:text-lg">
              <div
                onClick={() => setStep(1)}
                className={`rounded-xl ${
                  step === 1 ? "bg-[#0A86ED] text-white" : "bg-white"
                } border border-[#0A86ED]    p-2 flex justify-center items-center text-center `}
                role="button"
              >
                <span>Análisis e Investigación</span>
              </div>
              <div
                onClick={() => setStep(2)}
                className={`rounded-xl ${
                  step === 2 ? "bg-[#0A86ED] text-white" : "bg-white"
                } border border-[#0A86ED]  p-2 flex justify-center items-center text-center `}
                role="button"
              >
                <span>Planificación y Desarrollo</span>
              </div>
              <div
                onClick={() => setStep(3)}
                className={`rounded-xl ${
                  step === 3 ? "bg-[#0A86ED] text-white" : "bg-white"
                } border border-[#0A86ED] p-2 flex justify-center items-center text-center `}
                role="button"
              >
                <span> Implementación y Medición</span>
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
                    <div className="md:col-span-1 col-span-2">
                      <span className="text-3xl">Análisis e Investigación</span>
                    </div>
                    <div className="md:col-span-1 col-span-2 mt-4 md:mt-0">
                      <p>
                        El primer paso crucial es sumergirse en el mundo de tu
                        mercado, público objetivo y competidores. Esto implica
                        comprender las tendencias de la industria, identificar
                        las necesidades y preferencias de tu audiencia, y
                        analizar las fortalezas y debilidades de tus
                        competidores.
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
                    <div className="md:col-span-1 col-span-2">
                      <span className="text-3xl">
                        Planificación y Desarrollo
                      </span>
                    </div>
                    <div className="md:col-span-1 col-span-2 mt-4 md:mt-0">
                      <p>
                        Con base en el análisis previo, selecciona los canales
                        de marketing digital más adecuados para alcanzar tus
                        objetivos y conectar con tu público objetivo. Desarrolla
                        un plan de contenido sólido que incluya diferentes
                        formatos (texto, imágenes, videos) atractivo y relevante
                        para cada canal.
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
                    <div className="md:col-span-1 col-span-2">
                      <span className="text-3xl">
                        Implementación y Medición
                      </span>
                    </div>
                    <div className="md:col-span-1 col-span-2 mt-4 md:mt-0">
                      <p>
                        Llevamos el plan a la acción y ejecuta tu estrategia de
                        marketing digital en los canales elegidos. Interactúa
                        activamente con tu audiencia, respondiendo a
                        comentarios, mensajes y participando en conversaciones
                        en línea.
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

        <FastContact></FastContact>
      </div>
    </section>
  );
}

export default Service01;
