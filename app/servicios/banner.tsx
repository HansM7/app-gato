"use client";

import { RevealWrapper } from "next-reveal";

function BannerServices() {
  return (
    <section className="md:min-h-screen min-h-[28rem]    flex bg-gray-100  relative">
      <div className=" md:min-h-screen h-full  overflow-hidden min-h-[28rem] absolute">
        <img
          className="w-screen  md:min-h-screen h-full min-h-[28rem] object-cover  overflow-hidden filter brightness-50"
          src="https://images.pexels.com/photos/2506947/pexels-photo-2506947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ></img>
      </div>
      <div className="xl:px-40 md:px-36 pb-16 md:pb-0 px-8 md:pt-32 pt-8">
        <RevealWrapper origin="left" duration={1500} className={"w-full"}>
          <span className="text-sky-400 font-black  xl:text-[7rem] md:text-[4rem] text-[3rem] ">
            Servicios que innovan
          </span>
        </RevealWrapper>
        <RevealWrapper origin="left" duration={1500} className={"w-full mt-4"}>
          <span className="md:font-normal font-light xl:text-[5rem] md:text-[4rem] text-[2rem] text-gray-200">
            Calidad en cada paso,
            <br /> tecnología en cada solución.
          </span>
        </RevealWrapper>
      </div>
    </section>
  );
}

export default BannerServices;
