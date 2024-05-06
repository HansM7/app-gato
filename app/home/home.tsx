"use client";

import { useState } from "react";
import Banner from "../components/banner";
import Carousel from "../components/carousel";
import Navigation from "../components/navigation";
import Drawer from "../components/drawer";
import "react-awesome-slider/dist/styles.css";
import Collage from "../components/collage";
import Detail from "../components/detail";
import Slider from "../components/slider";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer";
import GridClients from "../components/grid-clients";
import TestimonialsCards from "../components/testimonials-card";
import WhatsappContact from "../components/whatsapp-contact";

function Home() {
  const [isDrawer, setIsDrawer] = useState(false);

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
      <WhatsappContact></WhatsappContact>
      {/* //todo -> end whatsapp icon */}

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
        <Banner></Banner>
        {/* <Carousel></Carousel> */}
        {/* <Carousel2></Carousel2> */}
        {/* // todo -> this is section abiable👇 */}
        <Collage></Collage>
        <Detail></Detail>

        {/* <Slider direction="right"></Slider> */}
        <GridClients></GridClients>
        {/* <Testimonials></Testimonials> */}
        <TestimonialsCards></TestimonialsCards>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default Home;
