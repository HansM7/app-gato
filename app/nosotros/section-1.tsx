"use client";

import { RevealWrapper } from "next-reveal";
import Team from "./team";
import Footer from "../components/footer";
import Colaborators from "./colaborators";
import CollageAbout from "../components/collage-about";

function Section1() {
  return (
    <section className="w-full h-screen  ">
      <div className="md:min-h-screen   xl:px-52 md:px-36 pb-16 md:pb-0 px-8  flex bg-gray-100 md:pt-32 pt-16">
        <RevealWrapper origin="bottom" duration={1500} className={"w-full"}>
          <h1 className="font-bold xl:text-[5rem] md:text-[4rem] text-[2rem] text-slate-800">
            Somo estrategas y soñadores comprometidos con el cambio digital.
          </h1>
        </RevealWrapper>
      </div>
      <div className="min-h-screen xl:px-52 md:px-36 px-8   flex   justify-center  ">
        <RevealWrapper origin="bottom" duration={1500} className={"w-full"}>
          <CollageAbout></CollageAbout>
        </RevealWrapper>
      </div>

      {/* //todo -> --------------------------------------------------------------------------------*/}

      <div className="w-full  flex flex-col md:mt-8 mt-8">
        <div className="grid md:grid-cols-2 grid-cols-1 xl:px-52 md:px-36 px-8  md:gap-20 gap-8">
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
        {/* <div className="px-32 mt-32">
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
                    <span className="text-xl font-light">
                      Análisis de datos
                    </span>
                  </div>
                  <span className="text-3xl">05</span>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div> */}
      </div>

      {/* //todo -> --------------------------------------------------------------------------------*/}

      <Team></Team>
      <hr />
      <Colaborators></Colaborators>
      <Footer></Footer>
    </section>
  );
}

export default Section1;
