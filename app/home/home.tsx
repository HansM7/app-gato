"use client";

import { useState } from "react";
import Banner from "../components/banner";
import Carousel from "../components/carousel";
import Navigation from "../components/navigation";
import Drawer from "../components/drawer";

function Home() {
  const [isDrawer, setIsDrawer] = useState(false);

  return (
    <div className="relative bg-white flex">
      <div
        className={`fixed ${
          isDrawer ? "w-screen" : "w-16"
        }  h-screen z-10 flex  `}
      >
        <Navigation isDrawer={isDrawer} setIsDrawer={setIsDrawer}></Navigation>
        {isDrawer && <Drawer></Drawer>}
      </div>
      <main>
        {/* <Header></Header> */}
        <Banner></Banner>
        <Carousel></Carousel>
        {/* <Carousel2></Carousel2> */}
      </main>
    </div>
  );
}

export default Home;
