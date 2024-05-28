"use client";

import { api_projects } from "@/app/data/enviroments/api.enviroment";
import axios from "axios";
import { Spinner } from "keep-react";
import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import { useEffect, useState } from "react";
import Process from "../process";

function BannerDetailPortfolio() {
  const [data, setData] = useState<any>({});

  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await axios.get(
        `${api_projects}?slug=evadry-marketing-digital`
      );
      setData(response.data[0]);
      setIsLoading(false);
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!isLoading) {
    return (
      <section className="md:min-h-screen  h-full">
        <div className="  flex bg-[#A52DE6]  relative  overflow-hidden ">
          <div className="max-w-[1536px] mx-auto w-full">
            <div className="py-16 pl-16 ">
              <div className="">
                <RevealWrapper origin="top" duration={1500}>
                  <Link
                    href={"/portafolio"}
                    className="text-white flex gap-x-2"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 20L7 12L15 4"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Ver todos los proyectos
                  </Link>
                  <div className="pt-8 flex flex-col ">
                    <span className="text-xl font-bold text-white uppercase">
                      Categoría de servicio: {data.title.rendered}
                    </span>

                    <h1
                      className="text-[4rem] text-white capitalize"
                      title={data.acf.cliente}
                    >
                      {data.acf.cliente}
                    </h1>
                  </div>
                </RevealWrapper>

                <div className="pb-8">
                  <RevealWrapper
                    origin="bottom"
                    duration={1500}
                    className={"h-[649px]"}
                  >
                    <img
                      src="https://www.freshbooks.com/wp-content/uploads/2021/10/what-is-teamwork.jpg "
                      className="w-full  object-cover max-h-[650px] h-full "
                      alt="Servicio de Marketing Digital para Social Commerce - Aumenta tu presencia en línea y maximiza tus ventas"
                      title="Servicio de Marketing Digital para Social Commerce"
                    />
                  </RevealWrapper>
                </div>
              </div>

              <div className="w-full flex gap-8">
                <RevealWrapper
                  origin="left"
                  duration={1500}
                  className={"max-w-[500px] w-full"}
                >
                  <span className="text-2xl text-white font-bold mb-5">
                    PROBLEMA
                  </span>
                  <p className=" text-white font-light ">{data.acf.problema}</p>
                </RevealWrapper>

                <RevealWrapper
                  origin="left"
                  duration={1500}
                  className={"max-w-[500px] w-full"}
                >
                  <span className="text-2xl text-white font-bold mb-5">
                    NECESIDAD
                  </span>
                  <p className=" text-white font-light ">
                    {data.acf.necesidad}
                  </p>
                </RevealWrapper>
              </div>
            </div>
            <div className="relative pr-8 flex items-end">
              <div className=" relative w-[60%] h-[700px]">
                <RevealWrapper
                  origin="left"
                  duration={1500}
                  className={"w-ful h-full"}
                >
                  <img
                    src="https://www.freshbooks.com/wp-content/uploads/2021/10/what-is-teamwork.jpg"
                    className="w-full h-full object-cover  grayscale "
                    alt="Servicio de Marketing Digital para Social Commerce - Aumenta tu presencia en línea y maximiza tus ventas"
                    title="Servicio de Marketing Digital para Social Commerce"
                  />
                </RevealWrapper>
                <RevealWrapper
                  origin="top"
                  duration={1500}
                  className={"absolute top-4 left-[60%]"}
                >
                  <span className="text-[#D9D227] font-semibold text-9xl">
                    SOLUCIÓN
                  </span>
                </RevealWrapper>

                <RevealWrapper
                  origin="bottom"
                  duration={1500}
                  className={"absolute bottom-6 right-8"}
                >
                  <div className="  ">
                    <img
                      src={data.acf.imagen}
                      alt={`logo ${data.acf.cliente}`}
                      className="h-[60px] object-contain"
                    />
                    {/* <span className="text-white font-bold text-6xl uppercase drop-shadow-lg">
                  {data.acf.imagen}
                </span> */}
                  </div>
                </RevealWrapper>
              </div>
              <RevealWrapper
                origin="right"
                duration={1500}
                className={"w-[40%] h-full"}
              >
                <div className="flex justify-center items-start w-full h-full mb-8">
                  <div className="relative h-[340px] w-[86px]  border-t-8 border-r-8 border-[#6D28D9]">
                    <div className="absolute border-none -top-5 left-0  h-8 w-8 bg-[#6D28D9]"></div>
                    <div className="absolute -right-5 top-1/2 h-8 w-8 bg-[#6D28D9]"></div>
                    <div className="absolute -right-5 bottom-0 h-8 w-8 bg-[#6D28D9]"></div>
                  </div>
                  <div className="h-[460px] flex flex-col ml-4 text-white text-2xl font-bold justify-between">
                    <div className="flex flex-col gap-5">
                      <span>Análisis</span>
                    </div>
                    <div className="flex flex-col gap-5">
                      <span>Diseño</span>
                      <span>Desarrollo</span>
                    </div>
                    <div className="flex flex-col gap-5">
                      <span>Pruebas</span>
                      <span>Despliegue</span>
                    </div>
                  </div>
                </div>
              </RevealWrapper>
            </div>
            {/*  */}
          </div>
        </div>
        <RevealWrapper origin="left" duration={1500} className={""}>
          <Process
            analisis={data.acf["solucion-analisis"]}
            diseño={data.acf["solucion-diseno"]}
            desarrollo={data.acf["solucion-desarrollo"]}
            prueba={data.acf["solucion-pruebas"]}
            despliegue={data.acf["solucion-despliegue"]}
          />
        </RevealWrapper>
      </section>
    );
  } else {
    return (
      <section className="w-full h-screen flex justify-center items-center">
        <Spinner color="info" size="lg" />
      </section>
    );
  }
}

export default BannerDetailPortfolio;
