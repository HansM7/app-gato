"use client";

import Navigation from "@/app/components/navigation";
import Drawer from "@/app/components/drawer";
import { useEffect, useState } from "react";
import Service06 from "./service_06";

function Content() {
  const [isDrawer, setIsDrawer] = useState(false);

  const [loading, setLoading] = useState(true);

  function changeLoading() {
    setTimeout(() => {
      setLoading(!loading);
    }, 800);
  }

  function redirect() {
    window.open("https://wa.me/+51946380310", "_blank");
  }

  useEffect(() => {
    changeLoading();
  }, []);

  return (
    <>
      <div className="relative bg-white flex">
        <div className="fixed bottom-6 right-6 z-20" onClick={redirect}>
          <img
            role="button"
            className="w-10 floating-image"
            src="https://cdn.iconscout.com/icon/free/png-512/free-whatsapp-43-189795.png?f=webp&w=256"
            alt=""
          />
        </div>

        <div
          className={`fixed ${
            isDrawer ? "w-screen" : "w-16"
          }  h-screen z-10 flex  `}
        >
          <Navigation
            isDrawer={isDrawer}
            setIsDrawer={setIsDrawer}
          ></Navigation>
          {isDrawer && <Drawer></Drawer>}
        </div>
        <div className="w-full flex flex-col  justify-between md:pl-16">
          {/* <Header></Header> */}

          <Service06></Service06>
        </div>

        {/* //todo-> section loadin -----------------------------------------------*/}
        {/* {loading ? (
          <div className={`fixed h-screen  z-30 bg-black   `}></div>
        ) : (
          <div
            className={`fixed h-screen  bg-black   animate-fade-left animate-duration-[800ms] animate-ease-linear animate-reverse`}
          ></div>
        )} */}
        {/* //todo-> section loadin -----------------------------------------------*/}
      </div>
    </>
  );
}

export default Content;
