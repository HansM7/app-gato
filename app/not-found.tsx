"use client";
import Link from "next/link"
import Navigation from "./components/navigation"
import Drawer from "./components/drawer";
import { useEffect, useState } from "react";

export default function ErrorPage(){
  const [isDrawer, setIsDrawer] = useState(false);

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
  return (
    <div>
      <div
        className={`fixed  ${
          isDrawer ? "w-screen" : "w-16"
        }  h-screen z-10 flex  `}
      >
        <Navigation isDrawer={isDrawer} setIsDrawer={setIsDrawer}></Navigation>
        {isDrawer && <Drawer></Drawer>}
      </div>
    <div className="max-w-[1440px] w-full min-h-screen mx-auto  flex justify-center items-center xl:px-32 md:px-24  px-8  gap-4 lg:gap-8 xl:gap-16">
      <div className="flex flex-col gap-10 items-start ">
        <h2 className="text-6xl text-[#3D3D3D] font-bold">¡Oops! Página no encontrada</h2>
        <p className="text-xl text-[#666666]">Lo sentimos, pero la página que estas buscando no existe.</p>
        <Link href={"/"} className="text-[#6D28D9] font-bold hover:scale-105 transition-all duration-300" >Volver al inicio</Link>
      </div>
      <div>
        <img
        className="h-full max-h-[550px] w-auto object-contain"
        src="/gato404.png" alt="error" />
      </div>
    </div>
    </div>
    
  )
}



