"use client";

import { useEffect, useState } from "react";
import Navigation from "../components/navigation";
import Form from "../components/form";
import Drawer from "../components/drawer";
import WhatsappContact from "../components/whatsapp-contact";
import Header from "./header";
import Ubication from "./ubication";

function Contact() {
  const [isDrawer, setIsDrawer] = useState(false);

  const [loading, setLoading] = useState(true);

  function changeLoading() {
    setTimeout(() => {
      setLoading(!loading);
    }, 800);
  }

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

  useEffect(() => {
    changeLoading();
  }, []);

  return (
    <>
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
        <div className="w-full flex flex-col  justify-between md:ml-16">
          {/* <Header></Header> */}
          <Header></Header>
          <Form></Form>
          <Ubication></Ubication>
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

export default Contact;
