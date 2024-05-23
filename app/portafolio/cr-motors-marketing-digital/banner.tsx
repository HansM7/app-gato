"use client";

import { api_projects } from "@/app/data/enviroments/api.enviroment";
import axios from "axios";
import Link from "next/link";
import { Spinner } from "keep-react";
import { RevealWrapper } from "next-reveal";
import { useEffect, useState } from "react";

function BannerDetailPortfolio() {
  const [data, setData] = useState<any>({});

  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await axios.get(
        `${api_projects}?slug=cr-motors-marketing-digital`
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
      <section className="md:min-h-screen  h-full  flex bg-[#A52DE6]  relative  overflow-hidden ">
        <div className=" w-full">
          <div className="py-16 pl-16 ">
            <div className="">
              <Link href={"/portafolio"} className="text-white flex gap-x-2">
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
                  Categoría de servicio{" "}
                </span>

                <h1
                  className="text-[4rem] text-white capitalize"
                  title={data.title.rendered}
                >
                  {data.title.rendered}
                </h1>
              </div>
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
                <p className=" text-white font-light ">{data.acf.necesidad}</p>
              </RevealWrapper>
            </div>
          </div>
          <div className="relative pr-8 flex items-end">
            <div className=" relative w-[60%] h-[700px]">
              
              <img
                src="https://www.freshbooks.com/wp-content/uploads/2021/10/what-is-teamwork.jpg"
                className="w-full h-full object-cover  grayscale "
                alt="Servicio de Marketing Digital para Social Commerce - Aumenta tu presencia en línea y maximiza tus ventas"
                title="Servicio de Marketing Digital para Social Commerce"
              />
              <span className="absolute top-4 left-[60%]  text-[#D9D227] font-semibold text-9xl">
                SOLUCIÓN
              </span>
              <div className=" absolute bottom-6 right-8 ">
                <span className="text-white font-bold text-6xl uppercase drop-shadow-lg">
                  {data.acf.cliente}
                </span>
              </div>
            </div>

            <div className="flex justify-center items-start w-[40%] h-full mb-8">
              <div className="relative h-[340px] w-[86px]  border-t-8 border-r-8 border-[#6D28D9]">
                <div className="absolute border-none -top-5 left-0  h-8 w-8 bg-[#6D28D9]"></div>
                <div className="absolute -right-5 top-1/2 h-8 w-8 bg-[#6D28D9]"></div>
                <div className="absolute -right-5 bottom-0 h-8 w-8 bg-[#6D28D9]"></div>
              </div>
              <div className="h-[460px] flex flex-col ml-4 text-white text-2xl font-bold justify-between">
                <div className="flex flex-col gap-5">
                  <span>Análisis</span>
                  <span>Diseño</span>
                  <span>Desarrollo</span>
                </div>
                <div className="flex flex-col gap-5">
                  <span>Pruebas</span>
                  <span>Despliegue</span>
                </div>
              </div>
            </div>
          </div>

          {/* <RevealWrapper
            origin="left"
            duration={1500}
            className={"w-full grid md:grid-cols-2 grid-cols-1 gap-2"}
          >
            <img
              src="https://media.istockphoto.com/id/1128826884/es/vector/ning%C3%BAn-s%C3%ADmbolo-de-vector-de-imagen-falta-icono-disponible-no-hay-galer%C3%ADa-para-este-momento.jpg?s=612x612&w=0&k=20&c=9vnjI4XI3XQC0VHfuDePO7vNJE7WDM8uzQmZJ1SnQgk="
              alt="Servicio de Marketing Digital para Social Commerce - Aumenta tu presencia en línea y maximiza tus ventas"
              title="Servicio de Marketing Digital para Social Commerce"
              className="rounded-md"
            />
            <img
              src="https://media.istockphoto.com/id/1128826884/es/vector/ning%C3%BAn-s%C3%ADmbolo-de-vector-de-imagen-falta-icono-disponible-no-hay-galer%C3%ADa-para-este-momento.jpg?s=612x612&w=0&k=20&c=9vnjI4XI3XQC0VHfuDePO7vNJE7WDM8uzQmZJ1SnQgk="
              alt="Servicio de Marketing Digital para Social Commerce - Aumenta tu presencia en línea y maximiza tus ventas"
              title="Servicio de Marketing Digital para Social Commerce"
              className="rounded-md"
            />
          </RevealWrapper> */}
          {/*  */}
        </div>
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
