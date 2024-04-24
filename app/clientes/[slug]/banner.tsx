"use client";

import { RevealWrapper } from "next-reveal";
import Link from "next/link";

function BannerClient() {
  return (
    <section className="md:min-h-screen min-h-[25rem]   flex bg-gray-100   px-52 py-24">
      <div className="relative w-full">
        <RevealWrapper
          origin="top"
          duration={1000}
          className={`bg-red-400 w-72 h-full`}
        >
          <div className="bg-red-400 w-72 h-full "></div>
        </RevealWrapper>

        <RevealWrapper
          origin="right"
          duration={1000}
          className={`absolute inset-0  min-w-full pt-24 px-16  h-fit flex flex-col `}
        >
          <div className="w-full bg-sky-800 px-8 pt-12 pb-20 flex flex-col gap-4">
            <h4 className="text-white text-xl font-semibold">
              Salud y medicina
            </h4>
            <h1 className="text-[6rem] font-semibold text-white">
              Naturmed Peru
            </h1>
            <p className="text-gray-200 text-3xl font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              suscipit eos obcaecati, provident soluta rerum tempore expedita,
              dicta, quaerat accusamus ratione pariatur saepe eligendi! Ratione
              distinctio facere cumque illo nulla?
            </p>
            <span className="text-white mt-12">Contactar por:</span>
          </div>
          <div className=" w-full ml-24 -mt-8 flex gap-4 opacity-90 text-white pt-8">
            <RevealWrapper origin="bottom" duration={1000} delay={500}>
              <Link
                href={""}
                className="p-8 bg-sky-500 hover:bg-sky-600 transition-all"
              >
                <span>Facebook</span>
              </Link>
            </RevealWrapper>

            <RevealWrapper origin="bottom" duration={1000} delay={500}>
              <Link
                href={""}
                className="p-8 bg-purple-500 hover:bg-purple-600 transition-all"
              >
                <span>Instagram</span>
              </Link>
            </RevealWrapper>

            <RevealWrapper origin="bottom" duration={1000} delay={500}>
              <Link
                href={""}
                className="p-8 bg-blue-300 hover:bg-blue-400 transition-all"
              >
                <span>Linkedin</span>
              </Link>
            </RevealWrapper>

            <RevealWrapper origin="bottom" duration={1000} delay={500}>
              <Link
                href={""}
                className="p-8 bg-gray-500 hover:bg-gray-600 transition-all"
              >
                <span>Twitter</span>
              </Link>
            </RevealWrapper>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

export default BannerClient;
