"use client";

import { useState } from "react";
import Banner from "../components/banner";
import Carousel from "../components/carousel";
import Navigation from "../components/navigation";

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
        {isDrawer && (
          <div className=" bg-white h-full w-screen z-10 animate-fade-right animate-duration-500 animate-ease-linear animate-normal "></div>
        )}
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
