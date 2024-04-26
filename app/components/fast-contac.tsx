"use client";

import { RevealWrapper } from "next-reveal";
import Link from "next/link";

function FastContact() {
  return (
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
  );
}

export default FastContact;
