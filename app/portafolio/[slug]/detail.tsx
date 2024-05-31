"use client";

import Drawer from "@/app/components/drawer";
import Navigation from "@/app/components/navigation";
import { useEffect, useState } from "react";
import BannerDetailPortfolio from "./BannerDetail";
import Footer from "@/app/components/footer";
import WhatsappContact from "@/app/components/whatsapp-contact";
import Form from "@/app/components/form";
import axios from "axios";
import { api_projects } from "@/app/data/enviroments/api.enviroment";

interface DetailProps {
  slug: {};
}
interface Proyecto {
  title: { rendered: string };
  acf: {
    cliente: string;
    problema: string;
    necesidad: string;
    imagen: string;
    'cliente-slug': string;
    "solucion-analisis": string;
    "solucion-diseno": string;
    "solucion-desarrollo": string;
    "solucion-pruebas": string;
    "solucion-despliegue": string;
  };
  // Otros campos del proyecto
}

function Detail({ slug }: DetailProps) {
  const [isDrawer, setIsDrawer] = useState(false);
  const [projectData, setProjectData] = useState<Proyecto | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") {
        setIsDrawer(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  async function fetchProjectData() {
    try {
      const response = await axios.get(`${api_projects}?per_page=100`);

      // Filtrar los objetos que coinciden con el cliente-slug buscado
      const proyectoFiltrado = response.data.find((proyecto: Proyecto) => proyecto.acf['cliente-slug'] === slug);
      
      // Establecer los datos del proyecto filtrado
      setProjectData(proyectoFiltrado);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  }
  fetchProjectData();


  return (
    <div className="relative bg-white flex">
      <WhatsappContact />

      <div
        className={`fixed ${isDrawer ? "w-screen" : "w-16"} h-screen z-10 flex`}
      >
        <Navigation isDrawer={isDrawer} setIsDrawer={setIsDrawer} />
        {isDrawer && <Drawer />}
      </div>

      <div className="flex flex-col w-full md:pl-[80px]">
        {!isLoading && projectData ? (
          <>
            <BannerDetailPortfolio proyecto={projectData}/>
            {/* <PortfolioInfoDetail project={projectData} /> */} {/* Asegúrate de tener este componente */}
            <Form />
            <Footer />
          </>
        ) : (
          <div className="w-full h-screen flex justify-center items-center">
            {/* <Spinner color="info" size="lg" /> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Detail;
