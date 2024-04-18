"use client";

import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import { useState } from "react";

function Service04() {
  const [step, setStep] = useState(1);

  return (
    <section className="w-full min-h-screen  overflow-hidden">
      <div className="min-h-screen xl:px-80 md:px-28  px-8 flex bg-gray-100 pt-16 flex-col pb-16">
        <div className="flex gap-16 items-center">
          <div className="flex flex-col">
            <RevealWrapper origin="left" duration={1500} className={"w-full"}>
              <h1 className="xl:text-[5rem] md:text-[4rem] text-[3rem] font-semibold">
                Branding
              </h1>
            </RevealWrapper>
            {/* <RevealWrapper origin="right" duration={1500} className={"w-full"}>
              <h1 className="xl:text-[5rem] md:text-[4rem] ">Software</h1>
            </RevealWrapper> */}
          </div>
          <div className="w-fit">
            <RevealWrapper origin="top" duration={1500} className={"w-full"}>
              <img className="w-96" src="/gato-service.png" alt="" />
            </RevealWrapper>
          </div>
        </div>

        <RevealWrapper origin="left" duration={1500} className={"w-full"}>
          <p className="md:text-2xl text-xl text-slate-600">
            Somos expertos en capturar la esencia de tu marca y llevarla a
            nuevas alturas. Te ayudamos a destacar en un mundo cada vez más
            competitivo a través de la creación de identidades visuales
            impactantes que transmiten tu mensaje de manera clara y memorable.
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
                <span>Descubrimiento de Marca</span>
              </div>
              <div
                onClick={() => setStep(2)}
                className={`rounded-xl ${
                  step === 2 ? "bg-[#0A86ED] text-white" : "bg-white"
                } border border-[#0A86ED]    p-2 flex justify-center items-center text-center `}
                role="button"
              >
                <span> Estrategia de Marca</span>
              </div>
              <div
                onClick={() => setStep(3)}
                className={`rounded-xl ${
                  step === 3 ? "bg-[#0A86ED] text-white" : "bg-white"
                } border border-[#0A86ED]    p-2 flex justify-center items-center text-center `}
                role="button"
              >
                <span> Diseño de Materiales</span>
              </div>

              <div
                onClick={() => setStep(4)}
                className={`rounded-xl ${
                  step === 4 ? "bg-[#0A86ED] text-white" : "bg-white"
                } border border-[#0A86ED]    p-2 flex justify-center items-center text-center `}
                role="button"
              >
                <span> Diseño de Materiales </span>
              </div>

              <div
                onClick={() => setStep(5)}
                className={`rounded-xl ${
                  step === 5 ? "bg-[#0A86ED] text-white" : "bg-white"
                } border border-[#0A86ED]    p-2 flex justify-center items-center text-center `}
                role="button"
              >
                <span> Guía de Estilo de Marca </span>
              </div>
            </div>

            {/* //todo -> sections information */}

            <div className="mt-8">
              {step === 1 && (
                <RevealWrapper
                  origin="left"
                  duration={1500}
                  className={"w-full"}
                >
                  <div className="mt-12 grid grid-cols-2">
                    <div className="md:col-span-1 col-span-2">
                      <span className="text-3xl">Descubrimiento de Marca</span>
                    </div>
                    <div className="md:col-span-1 col-span-2 mt-4 md:mt-0">
                      <p>
                        Embárcate en un viaje de autodescubrimiento para
                        comprender a fondo tu marca, su historia, valores,
                        público objetivo, mercado y competidores. Realizaremos
                        una investigación exhaustiva, analizaremos tu presencia
                        online y competidores.
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
                      <span className="text-3xl">Estrategia de Marca</span>
                    </div>
                    <div className="md:col-span-1 col-span-2 mt-4 md:mt-0">
                      <p>
                        Define la personalidad, la voz y la propuesta de valor
                        única de tu marca. Determina cómo quieres que tu marca
                        sea percibida por tu público objetivo y desarrolla
                        mensajes clave que comuniquen de manera efectiva la
                        esencia de tu marca.
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
                      <span className="text-3xl">Identidad Visual</span>
                    </div>
                    <div className="md:col-span-1 col-span-2 mt-4 md:mt-0">
                      <p>
                        Desarrolla un concepto creativo que refleje la
                        personalidad y los valores de tu marca. Crea un logotipo
                        memorable y versátil, selecciona una paleta de colores
                        que transmita las emociones y el mensaje deseado, elige
                        tipografías que complementen la personalidad y el estilo
                        de tu marca, y desarrolla elementos gráficos que
                        refuercen la identidad visual de tu marca.
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
                      <span className="text-3xl">Diseño de Materiales</span>
                    </div>
                    <div className="md:col-span-1 col-span-2 mt-4 md:mt-0">
                      <p>
                        Diseña materiales impresos como tarjetas de visita,
                        folletos, brochures y papelería que reflejen la
                        identidad de tu marca. Crea materiales digitales como
                        sitios web, banners, anuncios y presentaciones que sean
                        consistentes con tu identidad de marca.
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

              {step === 5 && (
                <RevealWrapper
                  origin="left"
                  duration={1500}
                  className={"w-full"}
                >
                  <div className="mt-12 grid grid-cols-2">
                    <div className="md:col-span-1 col-span-2">
                      <span className="text-3xl">Guía de Estilo de Marca</span>
                    </div>
                    <div className="md:col-span-1 col-span-2 mt-4 md:mt-0">
                      <p>
                        Establece normas claras para el uso consistente de la
                        identidad de tu marca en todos los materiales.
                        Proporciona ejemplos de cómo aplicar la identidad de tu
                        marca en diferentes contextos y mantén la guía de estilo
                        actualizada con las últimas evoluciones de tu marca.
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

export default Service04;
