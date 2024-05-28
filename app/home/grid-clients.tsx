"use client";

import axios from "axios";
import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import Pagination from "../components/Pagination";

function GridClients() {
  /*   const clients = [
    {
      slug: "evadry",
      company: "Eva-Dry",
      service: "Desarrolllo Web",
      image:
        "https://i.pinimg.com/736x/01/a2/5b/01a25b770392bf75c3bf4182b91892cf.jpg",
      url: "",
      alt: "GATO - Cliente Eva-Dry",
    },
    {
      slug: "ambar-paddle",
      company: "Ambar Paddle",
      service: "Desarrolllo Web",
      image:
        "https://res.cloudinary.com/difvp2onn/image/upload/v1716480132/clientes-gato/q2ywguwbq1kdnneugaxk.png",
      url: "",
      alt: "GATO - Cliente Ambar Paddle",
    },
    {
      slug: "cr-motors",
      company: "CR Motors",
      service: "Desarrolllo Web",
      image:
        "https://i.pinimg.com/736x/14/d4/1e/14d41e8e044f772dd97ba883eae11075.jpg",
      url: "",
      alt: "GATO - Cliente CR Motors",
    },
    {
      slug: "caprepar-group",
      company: "Caprepar Group",
      service: "Desarrolllo Web",
      image:
        "https://i.pinimg.com/736x/0d/4b/9b/0d4b9bc3bb65614f182fc563c8b32dd0.jpg",
      url: "",
      alt: "GATO - Cliente Caprepar Group",
    },
    {
      slug: "intexos",
      company: "Intexos",
      service: "Desarrolllo Web",
      image:
        "https://res.cloudinary.com/difvp2onn/image/upload/v1716480131/clientes-gato/intexos.png",
      url: "",
      alt: "GATO - Cliente Social Commerce",
    },
    {
      slug: "ginius",
      company: "ginius",
      service: "Desarrolllo Web",
      image:
        "https://res.cloudinary.com/difvp2onn/image/upload/v1716646445/clientes-gato/ginius.png",
      url: "",
      alt: "GATO - Cliente ginius",
    },
    {
      slug: "embalaje-company",
      company: "Embalaje company",
      service: "Desarrolllo Web",
      image:
        "https://res.cloudinary.com/difvp2onn/image/upload/v1716480131/clientes-gato/embalaje-company.webp",
      url: "",
      alt: "GATO - Cliente Embalaje Company",
    },
    {
      slug: "naturmed",
      company: "Naturmed",
      service: "Desarrolllo Web",
      image:
        "https://res.cloudinary.com/difvp2onn/image/upload/v1716649373/clientes-gato/naturmed.png",
      url: "",
      alt: "GATO - Cliente Naturmed",
    },
    {
      slug: "clinica-delmat",
      company: "Clínica Delmat",
      service: "Desarrolllo Web",
      image:
        "https://res.cloudinary.com/difvp2onn/image/upload/v1716480131/clientes-gato/clinicadelmat.png",
      url: "",
      alt: "GATO - Cliente Clínica Delmat",
    },
    {
      slug: "importaciones-em",
      company: "Importaciones E&M",
      service: "Desarrolllo Web",
      image:
        "https://res.cloudinary.com/difvp2onn/image/upload/v1716480131/clientes-gato/importacioneseym.png",
      url: "",
      alt: "GATO - Cliente Importaciones E&M",
    },
    {
      slug: "jocar-games",
      company: "Jocar Games",
      service: "Desarrolllo Web",
      image:
        "https://res.cloudinary.com/difvp2onn/image/upload/v1716482257/clientes-gato/jocargames.jpg",
      url: "",
      alt: "GATO - Cliente Jocar Games",
    },
    {
      slug: "nutrisalud",
      company: "Nutrisalud",
      service: "Desarrolllo Web",
      image:
        "https://res.cloudinary.com/difvp2onn/image/upload/v1716559337/clientes-gato/nutrisalud.webp",
      url: "",
      alt: "GATO - Cliente Nutrisalud",
    },
    {
      slug: "corporacion-social-commerce",
      company: "Corporacion Social Commerce",
      service: "Desarrolllo Web",
      image:
        "https://res.cloudinary.com/difvp2onn/image/upload/v1716560393/clientes-gato/social-commerce.png",
      url: "",
      alt: "GATO - Cliente Corporacion Social Commerce",
    },
    {
      slug: "bsf-outsourcing-contable",
      company: "BSF Outsourcing Contable",
      service: "Desarrolllo Web",
      image:
        "https://res.cloudinary.com/difvp2onn/image/upload/v1716646449/clientes-gato/bsf-contable.png",
      url: "",
      alt: "GATO - Cliente BSF Outsourcing Contable",
    },
    {
      slug: "hogardia",
      company: "Hogardia",
      service: "Desarrolllo Web",
      image:
        "https://res.cloudinary.com/difvp2onn/image/upload/v1716646996/clientes-gato/hogardia.png",
      url: "",
      alt: "GATO - Cliente Hogardia",
    },
  ]; */
  interface ClientItem {
    id: string;
    slug: string;
    acf: {
      imagen_url: string;
    };
    title: {
      rendered: string;
    };
  }

  const [dataClient, setDataClient] = useState<ClientItem[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://palegreen-anteater-636608.hostingersite.com/wp-json/wp/v2/cliente?per_page=100"
      );
      const clients = response.data;
      console.log(response.data);
      setDataClient(clients);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  const renderClient = (client: any) => (
    <RevealWrapper
      key={client.id}
      origin="bottom"
      duration={1000}
      className="w-full justify-center flex items-center relative overflow-hidden group"
    >
      <Link href={"clientes/" + client.slug} className="w-full">
        <div className="w-full bg-white flex items-center justify-center object-contain aspect-square">
          <img
            className="xl:w-[65%] h-[85%] group-hover:scale-105 transition-all duration-500 ease-in-out object-contain"
            src={client.acf.imagen_url}
            alt={client.title.rendered}
          />
        </div>
        <div className="absolute opacity-0 bg-black group-hover:opacity-100 group-hover:bg-opacity-50 flex top-0 h-full w-full transition-all justify-center items-center duration-500 ease-in-out">
          <span className="translate-y-[500%] text-2xl text-white text-center font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] group-hover:translate-y-0 transition-all duration-700">
            {client.title.rendered}
          </span>
        </div>
      </Link>
    </RevealWrapper>
  );

  return (
    <section
      className="xl:px-32 md:px-24  px-8 flex  py-16  w-full bg-gray-100 flex-col"
      id="clientes"
    >
      <div className="">
        <h2
          className="text-3xl text-center
         text-[#3D3D3D] font-medium uppercase mb-3"
        >
          Nuestros clientes
        </h2>
      </div>
      <div className="w-full  ">
        <Pagination
          data={dataClient}
          itemsPerPage={15}
          render={renderClient}
          gridClass={
            "grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:mt-8 mt-4 gap-4  opacity-90"
          }
        />
      </div>
    </section>
  );
}

export default GridClients;
