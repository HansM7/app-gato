"use client";

import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { TypeAnimation } from "react-type-animation";

function BannerServices() {
  return (
    <section className="md:min-h-screen min-h-[28rem]    flex bg-gray-100  relative ">
      <div className=" md:min-h-screen h-full  overflow-hidden min-h-[28rem] absolute">
        <img
          className="w-screen  md:min-h-screen h-full min-h-[28rem] object-cover  overflow-hidden filter brightness-50"
          src="https://images.pexels.com/photos/2506947/pexels-photo-2506947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ></img>
      </div>
      <div className="xl:px-14 md:px-20 pb-16 md:pb-0 px-8 md:pt-12 pt-8 flex flex-col items-center">
        <RevealWrapper origin="left" duration={1500} className={"w-full"}>
          <div className="  flex flex-col  ">
            <span className="text-gray-200 xl:text-[5rem] md:text-[4rem] text-[3rem]">
              Servicios que
            </span>

            <div className="text-sky-400  xl:text-[7rem] md:text-[6rem] text-[3rem] min-h-44 -mt-4">
              {/* <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "Innovan",
                  1000,
                  "Trascienden",
                  1000,
                  "Impactan",
                  1000,
                ]}
                speed={3}
                repeat={Infinity}
              /> */}

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
            el mundo digital.
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
    </section>
  );
}

export default BannerServices;
