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
        <div className="xl:px-24 md:px-20 pb-16 md:pb-0 px-8 md:pt-12 pt-8">
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

        <div className="flex flex-col mt-16">
          {/* // todo here is timeline */}
          <RevealWrapper
            origin="bottom"
            duration={1500}
            className={"w-full pb-16 md:px-44"}
          >
            <div className="grid grid-cols-5 ">
              {/*  */}
              <RevealWrapper
                duration={2000}
                origin="left"
                className="col-span-2  flex flex-col justify-center items-start py-8 "
              >
                <div className="flex flex-col rounded-md bg-white shadow-large p-2 ">
                  <span className="font-semibold md:text-lg text-sm">
                    Titulo
                  </span>
                  <span className="md:text-sm text-xs ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quas temporibus, nisi eaque iste vitae porro laudantium,
                    odit, itaque quibusdam aliquid fugiat repellendus
                  </span>
                </div>
              </RevealWrapper>
              <div className="flex flex-col justify-center items-center relative">
                <div className="w-1 h-full bg-blue-500 rounded-md "></div>
                <div className="md:w-16 md:h-16 w-8 h-8 bg-blue-500 rounded-full absolute"></div>
                <div className="w-1 h-full bg-blue-500  rounded-md "></div>
              </div>
              <RevealWrapper
                duration={2000}
                origin=" right"
                className="col-span-2  flex items-center"
              >
                <img
                  className="rounded-full md:w-20 md:h-20 w-16 h-16 border-2 border-blue-500"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpxGd2Ch0SsWo0cE-w1XPmmaWRNB6vtOKQPQVedM7ACQ&s"
                  alt=""
                />
              </RevealWrapper>
              {/*  */}
              <RevealWrapper
                duration={2000}
                origin=" right"
                className="col-span-2  flex items-center"
              >
                <img
                  className="rounded-full md:w-20 md:h-20 w-16 h-16 border-2 border-blue-500"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpxGd2Ch0SsWo0cE-w1XPmmaWRNB6vtOKQPQVedM7ACQ&s"
                  alt=""
                />
              </RevealWrapper>

              <div className="flex flex-col justify-center items-center relative">
                <div className="w-1 h-full bg-blue-500 rounded-md "></div>
                <div className="md:w-16 md:h-16 w-8 h-8 bg-blue-500 rounded-full absolute"></div>
                <div className="w-1 h-full bg-blue-500  rounded-md "></div>
              </div>

              <RevealWrapper
                duration={2000}
                origin="left"
                className="col-span-2  flex flex-col justify-center items-start py-8 "
              >
                <div className="flex flex-col rounded-md bg-white shadow-large p-2 ">
                  <span className="font-semibold md:text-lg text-sm">
                    Titulo
                  </span>
                  <span className="md:text-sm text-xs ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quas temporibus, nisi eaque iste vitae porro laudantium,
                    odit, itaque quibusdam aliquid fugiat repellendus
                  </span>
                </div>
              </RevealWrapper>

              {/*  */}
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
