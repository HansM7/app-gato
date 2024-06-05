"use client";

import { useEffect, useState } from "react";
import Navigation from "../components/navigation";
import Drawer from "../components/drawer";
import CollagePortfolio from "./collage";
import Footer from "../components/footer";
import WhatsappContact from "../components/whatsapp-contact";

function Portfolio() {
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
    <div className="relative bg-white flex">
      <WhatsappContact></WhatsappContact>

      <div
        className={`fixed top-0 left-0  ${isDrawer ? "w-screen h-screen" : "w-screen lg:w-16"} h-[60px] lg:h-screen z-10 flex flex-col lg:flex-row`}
      >
        <Navigation isDrawer={isDrawer} setIsDrawer={setIsDrawer}></Navigation>
        {isDrawer && <Drawer></Drawer>}
      </div>
      <div className="flex flex-col w-full pt-[60px] lg:pl-[80px] lg:pt-0 ">
        <CollagePortfolio></CollagePortfolio>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Portfolio;
