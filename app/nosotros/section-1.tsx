"use client";

import { RevealWrapper } from "next-reveal";
import Team from "./team";
import Footer from "../components/footer";
import Colaborators from "./colaborators";
import CollageAbout from "./collage-about";
import GridClients from "./grid-clients";

function Section1() {
  return (
    <div className="w-full h-full ">
      {/* <div className=" pb-16 xl:px-32 md:px-24 px-8   flex   justify-center  ">
        <RevealWrapper origin="bottom" duration={1500} className={"w-full"}>
          <CollageAbout></CollageAbout>
        </RevealWrapper>
      </div> */}

      {/* //todo -> --------------------------------------------------------------------------------*/}

      <div className="w-full  flex flex-col pb-16 bg-gray-100 ">
        <div className="grid md:grid-cols-2 grid-cols-1 xl:px-32 md:px-24 px-8  md:gap-20 gap-8">
          <RevealWrapper origin="left" duration={1500} className={"w-full"}>
            <p className="text-3xl ">
              Ayudamos a las marcas a resolver grandes desafíos y lograr mejores
              productos digitales.
            </p>
          </RevealWrapper>

          <RevealWrapper origin="right" duration={1500} className={"w-full"}>
            <p className="text-xl font-light">
              Con un equipo de expertos dedicados, nuestro objetivo es ayudarte
              a mantener en claro tus objetivos y superar cualquier obstáculo
              que se interponga en tu camino hacia el progreso. Únete a nosotros
              en esta emocionante aventura, donde nuestro principal propósito es
              el éxito de tu proyecto.
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
      <GridClients></GridClients>
      <hr />
      {/* <Colaborators></Colaborators> */}
      <Footer></Footer>
    </div>
  );
}

export default Section1;
