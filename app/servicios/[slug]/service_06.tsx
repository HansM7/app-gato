"use client";

import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import { useState } from "react";

function Service06() {
  const [step, setStep] = useState(1);

  return (
    <section className="w-full min-h-screen  overflow-hidden">
      <div className="min-h-screen xl:px-80 md:px-28  px-8 flex bg-gray-100 pt-16 flex-col pb-16">
        <div className="flex gap-16 items-center">
          <div className="flex flex-col">
            <RevealWrapper origin="left" duration={1500} className={"w-full"}>
              <h1 className="xl:text-[5rem] md:text-[4rem] text-[3rem] font-semibold">
                Desarrollo de
              </h1>
            </RevealWrapper>
            <RevealWrapper origin="right" duration={1500} className={"w-full"}>
              <h1 className="xl:text-[5rem] md:text-[4rem] text-[3rem]  ">
                Aplicaciones
              </h1>
            </RevealWrapper>
          </div>
          <div className="w-fit">
            <RevealWrapper origin="top" duration={1500} className={"w-full"}>
              <img className="w-96" src="/gato-service.png" alt="" />
            </RevealWrapper>
          </div>
        </div>

        <RevealWrapper origin="left" duration={1500} className={"w-full"}>
          <p className="md:text-2xl text-xl text-slate-600">
            Desarrollamos aplicaciones a medida que se adaptan a tus necesidades
            específicas y potencian la experiencia de tus usuarios. Creamos
            herramientas innovadoras que impulsan tu éxito en el mundo digital.
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
            <div className="grid md:grid-cols-5 grid-cols-3 gap-2 text-xs md:text-lg">
              <div
                onClick={() => setStep(1)}
                className={`rounded-xl ${
                  step === 1 ? "bg-[#0A86ED] text-white" : "bg-white"
                } border border-[#0A86ED]    p-2 flex justify-center items-center text-center `}
                role="button"
              >
                <span>Definición de Alcance y Requerimientos</span>
              </div>
              <div
                onClick={() => setStep(2)}
                className={`rounded-xl ${
                  step === 2 ? "bg-[#0A86ED] text-white" : "bg-white"
                } border border-[#0A86ED]    p-2 flex justify-center items-center text-center `}
                role="button"
              >
                <span>Diseño y Prototipado</span>
              </div>
              <div
                onClick={() => setStep(3)}
                className={`rounded-xl ${
                  step === 3 ? "bg-[#0A86ED] text-white" : "bg-white"
                } border border-[#0A86ED]    p-2 flex justify-center items-center text-center `}
                role="button"
              >
                <span> Desarrollo y Pruebas</span>
              </div>

              <div
                onClick={() => setStep(4)}
                className={`rounded-xl ${
                  step === 4 ? "bg-[#0A86ED] text-white" : "bg-white"
                } border border-[#0A86ED]    p-2 flex justify-center items-center text-center `}
                role="button"
              >
                <span> Lanzamiento y Mantenimiento </span>
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
                      <span className="text-3xl">
                        Definición de Alcance y Requerimientos
                      </span>
                    </div>
                    <div className="md:col-span-1 col-span-2 mt-4 md:mt-0">
                      <p>
                        Empezaremos por comprender a la perfección tus
                        objetivos, las necesidades de tus usuarios y las metas
                        que deseas alcanzar con la aplicación. Definiremos las
                        funcionalidades clave, el público al que te diriges
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
                      <span className="text-3xl">Diseño y Prototipado</span>
                    </div>
                    <div className="md:col-span-1 col-span-2 mt-4 md:mt-0">
                      <p>
                        Daremos vida a tu app a través de prototipos visuales e
                        interactivos. Juntos, navegaremos por la interfaz de
                        usuario (UI) y la experiencia de usuario (UX),
                        asegurándonos de que cada interacción sea intuitiva,
                        atractiva y fluida.
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
                      <span className="text-3xl">Desarrollo y Pruebas</span>
                    </div>
                    <div className="md:col-span-1 col-span-2 mt-4 md:mt-0">
                      <p>
                        Lanzaremos al mundo a través de las tiendas de
                        aplicaciones correspondientes (Google Play Store, Apple
                        App Store). Pero nuestro trabajo no termina ahí. Nos
                        mantendremos a tu lado ofreciendo soporte continuo.
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

              {step === 4 && (
                <RevealWrapper
                  origin="left"
                  duration={1500}
                  className={"w-full"}
                >
                  <div className="mt-12 grid grid-cols-2">
                    <div className="md:col-span-1 col-span-2">
                      <span className="text-3xl">
                        Lanzamiento y Mantenimiento
                      </span>
                    </div>
                    <div className="md:col-span-1 col-span-2 mt-4 md:mt-0">
                      <p>
                        Implementaremos la solución BI personalizada en tu
                        entorno de producción y te brindaremos la capacitación
                        necesaria para utilizarla de manera efectiva,
                        maximizando su potencial.
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
          <div className="grid grid-cols-3 gap-8 mt-16 items-center">
            <div className=" col-span-3 md:col-span-1">
              <span className="text-3xl">¿Necesitas una cotización?</span>
            </div>

            <RevealWrapper
              origin="bottom"
              duration={2000}
              className={"w-fit col-span-3 md:col-span-1"}
            >
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

            <RevealWrapper
              origin="bottom"
              duration={2500}
              className={"w-fit col-span-3 md:col-span-1"}
            >
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

export default Service06;
