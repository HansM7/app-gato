"use client";

import { RevealWrapper } from "next-reveal";
import React from "react";

function Form() {
  return (
    <section className="w-full min-h-screen  ">
      <div className="min-h-screen xl:px-80 md:px-28  px-8 flex bg-gray-100 pt-16 flex-col pb-16">
        <div className="flex gap-16 items-center">
          <div className="flex flex-col">
            <RevealWrapper origin="left" duration={1500} className={"w-full"}>
              <h1 className="">
                {" "}
                <span className="xl:text-[5rem] font-semibold">Hola,</span>
                <span className="xl:text-[5rem] "> hagamos</span>
              </h1>
            </RevealWrapper>
            <RevealWrapper origin="right" duration={1500} className={"w-full"}>
              <h1 className="xl:text-[5rem] ">cosas grandes</h1>
            </RevealWrapper>
          </div>
          <div className="w-fit">
            <RevealWrapper origin="top" duration={1500} className={"w-full"}>
              <img
                className="w-96"
                src="https://images.vexels.com/media/users/3/215556/isolated/preview/56cab15c9dd85351a1546bdfa86b9dd6-gato-acostado-mullido-plano.png"
                alt=""
              />
            </RevealWrapper>
          </div>
        </div>

        <hr />

        <RevealWrapper origin="bottom" duration={1500} className={"w-full"}>
          <div className="bg-white p-8 rounded-lg mt-16 shadow-large ">
            <form action="" className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2 col-span-2">
                <span className="font-semibold">Nombres</span>
                <input
                  className="px-3 py-2 rounded-lg outline-none border"
                  type="text"
                  name=""
                  id=""
                />
              </div>

              <div className="flex flex-col gap-2 col-span-1">
                <span className="font-semibold">Correo</span>
                <input
                  className="px-3 py-2 rounded-lg outline-none border"
                  type="text"
                  name=""
                  id=""
                />
              </div>

              <div className="flex flex-col gap-2 col-span-1">
                <span className="font-semibold">Teléfono</span>
                <input
                  className="px-3 py-2 rounded-lg outline-none border"
                  type="text"
                  name=""
                  id=""
                />
              </div>

              <div className="flex flex-col gap-2 col-span-2">
                <span className="font-semibold">Mensaje</span>
                <textarea
                  className="px-3 py-2 rounded-lg outline-none border"
                  name=""
                  id=""
                ></textarea>
              </div>
              <div className="col-span-2">
                <button className="bg-[#0A86ED] hover:bg-[#0a7fed] px-5 py-2 rounded-2xl text-white">
                  Contactar
                </button>
              </div>
            </form>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

export default Form;
