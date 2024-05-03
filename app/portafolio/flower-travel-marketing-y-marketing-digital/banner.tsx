"use client";

import { api_projects } from "@/app/data/enviroments/api.enviroment";
import axios from "axios";
import { RevealWrapper } from "next-reveal";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

function BannerDetailPortfolio() {
  const [data, setData] = useState<any>({});

  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await axios.get(
        `${api_projects}?slug=flowers-travel-branding-y-marketing-digital`
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
      <section className="md:min-h-screen  h-full  flex bg-gray-100  relative  overflow-hidden ">
        <div className="grid grid-cols-5 ">
          <div className="w-full md:col-span-2 col-span-5  p-8 flex flex-col gap-8">
            <RevealWrapper origin="left" duration={1500} className={"w-full"}>
              <span>PROBLEMA</span>
              <p className="text-gray-800 font-light lg:text-base text-sm  ">
                {data.acf.problema}
              </p>
            </RevealWrapper>

            <RevealWrapper origin="left" duration={1500} className={"w-full"}>
              <span>NECESIDAD</span>
              <p className="text-gray-800 font-light lg:text-base text-sm">
                {data.acf.necesidad}
              </p>
            </RevealWrapper>

            <RevealWrapper origin="left" duration={1500} className={"w-full"}>
              <span>SOLUCION</span>
              <p className="text-gray-800 font-light lg:text-base text-sm">
                {data.acf.solucion}
              </p>
            </RevealWrapper>

            <RevealWrapper
              origin="left"
              duration={1500}
              className={"w-full grid md:grid-cols-2 grid-cols-1 gap-2"}
            >
              <img
                src="https://media.istockphoto.com/id/1128826884/es/vector/ning%C3%BAn-s%C3%ADmbolo-de-vector-de-imagen-falta-icono-disponible-no-hay-galer%C3%ADa-para-este-momento.jpg?s=612x612&w=0&k=20&c=9vnjI4XI3XQC0VHfuDePO7vNJE7WDM8uzQmZJ1SnQgk="
                alt=""
                className="rounded-md"
              />
              <img
                src="https://media.istockphoto.com/id/1128826884/es/vector/ning%C3%BAn-s%C3%ADmbolo-de-vector-de-imagen-falta-icono-disponible-no-hay-galer%C3%ADa-para-este-momento.jpg?s=612x612&w=0&k=20&c=9vnjI4XI3XQC0VHfuDePO7vNJE7WDM8uzQmZJ1SnQgk="
                alt=""
                className="rounded-md"
              />
            </RevealWrapper>
          </div>
          {/*  */}

          <div className="grid grid-cols-9 md:col-span-3 col-span-5 ">
            <div className="col-span-8 h-full grid grid-rows-6 ">
              <div className="border-x border-black row-span-2 p-8 flex flex-col ">
                <span className="text-2xl font-light">Proyecto de </span>

                <span className="text-[3rem]">{data.title.rendered}</span>
              </div>
              <div className="border-x border-t border-black  row-span-4 p-8">
                <RevealWrapper
                  origin="bottom"
                  duration={1500}
                  className={"w-full h-full grid lg:grid-cols-2 grid-cols-1 "}
                >
                  <img
                    src="https://www.freshbooks.com/wp-content/uploads/2021/10/what-is-teamwork.jpg "
                    className="w-full  object-cover h-full "
                    alt=""
                  />
                  <img
                    src="https://www.freshbooks.com/wp-content/uploads/2021/10/what-is-teamwork.jpg"
                    className="w-full  object-cover h-full "
                    alt=""
                  />
                </RevealWrapper>
              </div>
            </div>
            <div className="flex flex-col justify-around items-center border ">
              <span className="-rotate-90">a</span>
              <span className="-rotate-90 lg:text-base text-sm">
                {data.acf.cliente}
              </span>
              <span className="-rotate-90">c</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BannerDetailPortfolio;
