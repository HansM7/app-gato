"use client";

import Drawer from "@/app/components/drawer";
import Footer from "@/app/components/footer";
import Navigation from "@/app/components/navigation";
import { useState } from "react";
import BannerClient from "./banner";

function Detail() {
  const [isDrawer, setIsDrawer] = useState(false);

  function redirect() {
    window.open("https://wa.me/+51946380310", "_blank");
  }

  return (
    <div className="relative bg-white flex">
      {/* //todo fondo -----------------------------*/}

      {/* <div className="absolute w-full bg-violet-900 opacity-80">
        <video
          className="  opacity-60"
          muted
          loop
          autoPlay
          src="video.mp4"
        ></video>
      </div> */}

      {/* //todo fondo -----------------------------*/}

      {/* // todo -> whatsapp icon */}
      <div className="fixed bottom-6 right-6 z-20" onClick={redirect}>
        <img
          role="button"
          className="w-10 floating-image"
          src="https://cdn.iconscout.com/icon/free/png-512/free-whatsapp-43-189795.png?f=webp&w=256"
          alt=""
        />
      </div>
      {/* //todo -> end whatsapp icon */}

      <div
        className={`fixed  ${
          isDrawer ? "w-screen" : "w-16"
        }  h-screen z-10 flex  `}
      >
        <Navigation isDrawer={isDrawer} setIsDrawer={setIsDrawer}></Navigation>
        {isDrawer && <Drawer></Drawer>}
      </div>
      <div className="flex flex-col w-full md:pl-[80px] ">
        <BannerClient></BannerClient>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Detail;
