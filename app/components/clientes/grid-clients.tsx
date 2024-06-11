"use client";

import axios from "axios";
import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import Pagination from "../Pagination";

interface ClientItem {
  id: string;
  slug: string;
  acf: {
    imagen_url: string;
    servicio: string;
  };
  title: {
    rendered: string;
  };
}

function decodeHtml(html: string): string {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function GridClients() {
  const [dataClient, setDataClient] = useState<ClientItem[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://palegreen-anteater-636608.hostingersite.com/wp-json/wp/v2/cliente?per_page=100"
      );
      const clients: ClientItem[] = response.data.map((client: ClientItem) => ({
        ...client,
        title: {
          ...client.title,
          rendered: decodeHtml(client.title.rendered),
        },
      }));
      setDataClient(clients);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  const defaultImageUrl =
    "https://i.pinimg.com/originals/73/fe/ce/73fece7ac631330d0dd4c1bd22325029.png";
  const renderClient = (client: any) => (
    <RevealWrapper
      key={client.id}
      origin="bottom"
      duration={1000}
      className=" w-full justify-center flex items-center relative overflow-hidden group"
    >
      <div className="container w-full group">
        <div className="card group relative transition-all duration-500">
          <div className="front w-full h-full bg-white flex items-center justify-center  aspect-square">
            <img
              className="xl:w-[65%] h-[85%] group-hover:scale-105 transition-all duration-500 ease-in-out object-contain"
              src={
                client.acf?.imagen_url ? client.acf.imagen_url : defaultImageUrl
              }
              alt={client.title.rendered}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = defaultImageUrl;
              }}
            />
          </div>
          <div className="back absolute opacity-0 group-hover:opacity-100 flex flex-col top-0 h-full w-full transition-all justify-center items-center duration-500 ease-in-out bg-white">
            <img
              className="xl:w-[65%] h-[85%] group-hover:scale-105 transition-all duration-500 ease-in-out object-contain"
              src={
                client.acf?.imagen_url ? client.acf.imagen_url : defaultImageUrl
              }
              alt={client.title.rendered}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = defaultImageUrl;
              }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center px-1 md:px-2 gap-2">
              <span className="text-base md:text-2xl text-white text-center font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]  transition-all duration-700">
                {client.title.rendered}
              </span>
              <p className=" text-sm md:text-base text-white text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]  transition-all duration-700">
                {client.acf.servicio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </RevealWrapper>
  );

  return (
    <section className="  w-full bg-gray-100 " id="clientes">
      <div className="w-full max-w-[1920px] mx-auto xl:px-32 md:px-24 px-8 flex flex-col py-16">
        <div className="">
          <h2
            className="text-3xl text-center
         text-[#3D3D3D] font-medium uppercase mb-3"
          >
            Nuestros clientes
          </h2>
        </div>
        <div className="w-full ">
          <Pagination
            dataName="clientes"
            data={dataClient}
            itemsPerPage={15}
            render={renderClient}
            gridClass={
              "grid xl:grid-cols-5 md:grid-cols-3  grid-cols-2 xl:mt-8 mt-4 gap-2 md:gap-4 xl:gap-8 opacity-90"
            }
          />
        </div>
      </div>
    </section>
  );
}

export default GridClients;
