"use client";

import { useState } from "react";
import Banner from "./banner";
import Carousel from "../components/carousel";
import Navigation from "../components/navigation";
import Drawer from "../components/drawer";
import "react-awesome-slider/dist/styles.css";
import Collage from "./collage";
import Detail from "./detail";
import Slider from "../components/slider";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer";
import GridClients from "./grid-clients";
import TestimonialsCards from "./testimonials-card";
import WhatsappContact from "../components/whatsapp-contact";

function Home() {
  const [isDrawer, setIsDrawer] = useState(false);

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
