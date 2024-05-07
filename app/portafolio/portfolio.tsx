"use client";

import { useState } from "react";
import Navigation from "../components/navigation";
import Drawer from "../components/drawer";
import CollagePortfolio from "./collage";
import Footer from "../components/footer";
import WhatsappContact from "../components/whatsapp-contact";

function Portfolio() {
  const [isDrawer, setIsDrawer] = useState(false);

  function redirect() {
    window.open("https://wa.me/+51946380310", "_blank");
  }

  return (
    <div className="relative bg-white flex">
      <WhatsappContact></WhatsappContact>

      <div
        className={`fixed  ${
          isDrawer ? "w-screen" : "w-16"
        }  h-screen z-10 flex  `}
      >
        <Navigation isDrawer={isDrawer} setIsDrawer={setIsDrawer}></Navigation>
        {isDrawer && <Drawer></Drawer>}
      </div>
      <div className="flex flex-col w-full md:pl-[80px] ">
        <CollagePortfolio></CollagePortfolio>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Portfolio;
