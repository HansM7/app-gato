"use client";
import Navigation from "../components/navigation";
import Drawer from "../components/drawer";
import Footer from "../components/footer";
import WhatsappContact from "../components/whatsapp-contact";
import { useEffect, useState } from "react";
import Custom404 from "../not-found";
const blog = () => {
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
        className={`fixed  ${
          isDrawer ? "w-screen" : "w-16"
        }  h-screen z-10 flex  `}
      >
        <Navigation isDrawer={isDrawer} setIsDrawer={setIsDrawer}></Navigation>
        {isDrawer && <Drawer></Drawer>}
      </div>
      <main className="flex flex-col w-full  md:pl-[80px] ">
        {/* <Header></Header> */}
        <h1>hola</h1>
        <Footer></Footer>
      </main>
    </div>
  )
}

export default blog
