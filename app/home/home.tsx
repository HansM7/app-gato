"use client";

import { useEffect, useState } from "react";
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
import TestimonialsCards from "./testimonials-card";
import WhatsappContact from "../components/whatsapp-contact";
import Form from "../components/form";

function Home() {
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
        <Banner></Banner>

        <Collage></Collage>
        <Detail></Detail>

        {/* <Slider direction="right"></Slider> */}
        
        {/* <Testimonials></Testimonials> */}
        {/* <TestimonialsCards></TestimonialsCards> */}
        <Form></Form>
        <Footer></Footer>
      </main>
      
    </div>
  );
}

export default Home;
