"use client";

// import { RevealWrapper } from "next-reveal";
// import Link from "next/link";
// import { Typewriter } from "react-simple-typewriter";
// import Section1 from "../nosotros/section-1";
import { Carousel } from "keep-react";

function BannerServices() {
  return (
    <section className="w-full h-full min-h-screen relative">
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
              <h1 className="md:text-[6rem] text-4xl font-black">
                Servicios que
              </h1>
              <span className="md:text-[6rem] text-4xl font-black text-blue-500">
                Innovan
              </span>
            </div>
            <div className="px-8 ">
              <p className="md:text-xl text-sm font-light text-center">
                En GATO llevamos tu negocio al siguiente nivel con nuestra gama
                completa de servicios digitales. Desde estrategias de marketing
                hasta el diseño web, estamos aquí para hacer que tu marca brille
                en el mundo digital.
              </p>
            </div>
          </div>

          {/* <div className=" flex flex-col md:gap-8  gap-4 py-12 md:px-16   ">
            <div className="flex flex-col items-center md:gap-16 py-16">
              <h2 className="md:text-[6rem] text-4xl font-black">
                Servicios que
              </h2>
              <span className="md:text-[6rem] text-4xl font-black text-blue-500">
                Trascienden
              </span>
            </div>
            <div className="px-8 ">
              <p className="md:text-xl text-sm font-light text-center">
                En GATO llevamos tu negocio al siguiente nivel con nuestra gama
                completa de servicios digitales. Desde estrategias de marketing
                hasta el diseño web, estamos aquí para hacer que tu marca brille
                en el mundo digital.
              </p>
            </div>
          </div> */}
        </Carousel>
      </div>
    </section>
  );
}

{
  /* <section className="md:min-h-screen min-h-[28rem]    flex bg-gray-100  relative ">
      <div className=" md:min-h-screen h-full  overflow-hidden min-h-[28rem] absolute">
        <img
          className="w-screen  md:min-h-screen h-full min-h-[28rem] object-cover  overflow-hidden filter brightness-50"
          src="https://images.pexels.com/photos/2506947/pexels-photo-2506947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ></img>
      </div>
      <div className="xl:px-14 md:px-20 pb-16 md:pb-0 px-8 md:pt-12 pt-8 flex flex-col items-center">
        <RevealWrapper origin="left" duration={1500} className={"w-full"}>
          <div className="  flex flex-col  ">
            <h1
              title="Servicios tecnologicos GATO"
              className="text-gray-200 xl:text-[5rem] md:text-[4rem] text-[3rem]"
            >
              Servicios que
            </h1>

            <div className="text-sky-400  xl:text-[7rem] md:text-[6rem] text-[3rem] min-h-44 -mt-4">
              <Typewriter
                loop
                words={["Innovan", "Trascienden", "Impactan"]}
                typeSpeed={70}
              />
            </div>
          </div>
        </RevealWrapper>
        <RevealWrapper
          origin="right"
          duration={1500}
          className={"w-full md:mt-16 -mt-16"}
        >
          <span className="md:font-light font-light xl:text-[3rem] md:text-[2rem] text-3xl text-pretty text-gray-200">
            En GATO llevamos tu negocio al siguiente nivel con nuestra gama
            completa de servicios digitales. Desde estrategias de marketing
            hasta el diseño web, estamos aquí para hacer que tu marca brille en
            el mundo digital.
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
    </section> */
}

export default BannerServices;
