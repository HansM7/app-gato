"use client";

import React, { useEffect, useState } from "react";
import Navigation from "../components/navigation";
import Drawer from "../components/drawer";
import Items from "./items";
import BannerServices from "./banner";
import WhatsappContact from "../components/whatsapp-contact";

function Services() {
  const [isDrawer, setIsDrawer] = useState(false);

  const [loading, setLoading] = useState(true);

  function changeLoading() {
    setTimeout(() => {
      setLoading(!loading);
    }, 800);
  }

  function redirect() {
    window.open("https://wa.me/+51999999999", "_blank");
  }

  useEffect(() => {
    changeLoading();
  }, []);

  return (
    <>
      <div className="relative bg-white flex">
        <WhatsappContact></WhatsappContact>

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
        <div className="w-full flex flex-col  justify-between md:pl-[80px]">
          <BannerServices></BannerServices>
          <Items></Items>
        </div>
      </div>
    </>
  );
}

export default Services;
