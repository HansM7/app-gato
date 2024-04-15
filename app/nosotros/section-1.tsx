"use client";

import { RevealWrapper } from "next-reveal";
import Team from "./team";
import Footer from "../components/footer";

function Section1() {
  return (
    <section className="w-full h-screen  ">
      <div className="h-screen xl:px-80 md:px-28  px-8 flex bg-gray-100 pt-32">
        <RevealWrapper origin="bottom" duration={1500} className={"w-full"}>
          <h1 className="font-bold xl:text-[5rem] md:text-[4rem] text-slate-800">
            Estrategas,soñadores comprometidos con el cambio digital.
          </h1>
        </RevealWrapper>
      </div>
      <div className="h-screen xl:px-32 md:px-8  px-8 flex   justify-center -mt-20 ">
        <RevealWrapper origin="bottom" duration={1500} className={"w-full"}>
          <div className="w-full">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
              <RevealWrapper
                duration={1500}
                origin="left"
                className="group relative flex xl:h-96 h-80 flex-col  overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <a href="#">
                  <img
                    src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-200 group-hover:scale-110"
                  />
                </a>
              </RevealWrapper>

              <RevealWrapper
                className="group relative flex xl:h-96 h-80  items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80 mt-20"
                duration={1500}
                origin="right"
              >
                <a href="#">
                  <img
                    src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                    loading="lazy"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center  duration-200 group-hover:scale-110 transition-all"
                  />
                </a>
              </RevealWrapper>

              <div className="flex flex-col col-span-2 gap-4">
                <RevealWrapper
                  duration={1500}
                  origin="left"
                  className="group relative flex flex-col xl:h-96 h-72  items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80 justify-between"
                >
                  <a
                    href="#"
                    className="pb-20 flex flex-col justify-between z-20"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
                      loading="lazy"
                      alt="Photo by Martin Sanchez"
                      className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-200 group-hover:scale-110"
                    />
                  </a>
                </RevealWrapper>
                <span>
                  En GATO, estamos comprometidos con la búsqueda de la
                  excelencia en cada proyecto que emprendemos. Nos enorgullece
                  trabajar con clientes que comparten nuestra pasión por el
                  éxito y están dispuestos a desafiar los límites en busca de
                  resultados extraordinarios.
                </span>
              </div>

              <RevealWrapper
                duration={1500}
                origin="right"
                className="group relative flex xl:h-[28rem] h-96 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-[26rem] "
              >
                <a href="#">
                  <img
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                    loading="lazy"
                    alt="Photo by Lorenzo Herrera"
                    className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-200 group-hover:scale-110"
                  />
                </a>
              </RevealWrapper>
            </div>
          </div>
        </RevealWrapper>
      </div>

      {/* //todo -> --------------------------------------------------------------------------------*/}

      <div className="w-full  flex flex-col mt-[20rem]">
        <div className="grid grid-cols-2 px-52 gap-20">
          <RevealWrapper origin="left" duration={1500} className={"w-full"}>
            <p className="text-3xl ">
              Ayudamos a las marcas a resolver grandes desafíos y lograr mejores
              productos digitales.
            </p>
          </RevealWrapper>

          <RevealWrapper origin="right" duration={1500} className={"w-full"}>
            <p className="text-xl font-light">
              Nuestro trabajo resulta de nuestra identidad como agencia. Nuestra
              metodología basado en el valor permite a nuestros clientes pensar
              en grande, dar pasos seguros y lanzar las mejores experiencias
              digitales que marquen diferencia con sus competidores.
            </p>
          </RevealWrapper>
        </div>
        {/* timeline */}
        <div className="px-32 mt-32">
          <div className="flex ">
            <RevealWrapper origin="top" duration={2000} className={"w-full"}>
              <div className="border-r flex justify-end pr-8 pb-4 ">
                <div className="border border-slate-300 p-8 flex group gap-4 shadow-large">
                  <div className="hidden transition-all group-hover:flex group-hover:animate-fade-left animate-once animate-duration-[1200ms] animate-ease-out animate-normal  ">
                    <span className="text-xl font-light">
                      Visión Disruptiva
                    </span>
                  </div>
                  <span className="text-3xl">02</span>
                </div>
              </div>
            </RevealWrapper>
            <RevealWrapper origin="top" duration={2000} className={"w-full"}>
              <div className="border-r flex justify-end pr-8 pb-4">
                <div className="border border-slate-300 p-8 flex group gap-4 shadow-large">
                  <div className="hidden transition-all group-hover:flex group-hover:animate-fade-left animate-once animate-duration-[1200ms] animate-ease-out animate-normal  ">
                    <span className="text-xl font-light">
                      Cultura de Colaboración
                    </span>
                  </div>
                  <span className="text-3xl">04</span>
                </div>
              </div>
            </RevealWrapper>

            <RevealWrapper origin="top" duration={2000} className={"w-full"}>
              <div className="border-r flex justify-end pr-8 pb-4">
                <div className="border border-slate-300 p-8 flex group gap-4 shadow-large">
                  <div className="hidden transition-all group-hover:flex group-hover:animate-fade-left animate-once animate-duration-[1200ms] animate-ease-out animate-normal  ">
                    <span className="text-xl font-light">
                      Compromiso con la Sostenibilidad
                    </span>
                  </div>
                  <span className="text-3xl">06</span>
                </div>
              </div>
            </RevealWrapper>
          </div>

          <RevealWrapper origin="left" duration={2000} className={"w-full"}>
            <div className="h-1 bg-slate-300  w-full"></div>
          </RevealWrapper>
          <div className="flex pr-64">
            <RevealWrapper origin="bottom" duration={2000} className={"w-full"}>
              <div className="border-r flex justify-end pr-8 pt-4">
                <div className="border border-slate-300 p-8 flex group gap-4 shadow-large">
                  <div className="hidden transition-all group-hover:flex group-hover:animate-fade-left animate-once animate-duration-[1200ms] animate-ease-out animate-normal  ">
                    <span className="text-xl font-light">
                      Visión Disruptiva
                    </span>
                  </div>
                  <span className="text-3xl">01</span>
                </div>
              </div>
            </RevealWrapper>
            <RevealWrapper origin="bottom" duration={2000} className={"w-full"}>
              <div className="border-r flex justify-end pr-8 pt-4">
                <div className="border border-slate-300 p-8 flex group gap-4 shadow-large">
                  <div className="hidden transition-all group-hover:flex group-hover:animate-fade-left animate-once animate-duration-[1200ms] animate-ease-out animate-normal  ">
                    <span className="text-xl font-light">
                      Centricidad en el Cliente
                    </span>
                  </div>
                  <span className="text-3xl">03</span>
                </div>
              </div>
            </RevealWrapper>

            <RevealWrapper origin="bottom" duration={2000} className={"w-full"}>
              <div className="border-r flex justify-end pr-8 pt-4">
                <div className="border border-slate-300 p-8 flex group gap-4 shadow-large">
                  <div className="hidden transition-all group-hover:flex group-hover:animate-fade-left animate-once animate-duration-[1200ms] animate-ease-out animate-normal  ">
                    <span className="text-xl font-light">Análisis de dato</span>
                  </div>
                  <span className="text-3xl">05</span>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>

      {/* //todo -> --------------------------------------------------------------------------------*/}

      <Team></Team>
      <Footer></Footer>
    </section>
  );
}

export default Section1;
