"use client";

import { RevealWrapper } from "next-reveal";
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
      <div className="xl:px-32 md:px-24 pb-16 md:pb-0 px-8 md:pt-16 pt-8 flex flex-col items-center">
        <RevealWrapper origin="left" duration={1500} className={"w-full"}>
          <div className="  flex flex-col  ">
            <span className="text-gray-200 xl:text-[5rem] md:text-[4rem] text-[3rem]">
              Servicios que
            </span>

            <div className="text-sky-400 font-black xl:text-[7rem] md:text-[6rem] text-[3rem] min-h-44">
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
          className={"w-full md:mt-16"}
        >
          <span className="md:font-light font-light xl:text-[3rem] md:text-[2rem] text-[2rem] text-gray-200">
            En GATO estamos comprometidos con el aprendizaje y desarrollo
            continuo, nos eforzamos para que los servicios que ofrezcamos sean
            de la maxima calidad posible
          </span>
        </RevealWrapper>
      </div>
    </section>
  );
}

export default BannerServices;
