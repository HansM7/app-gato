"use client";

import Banner from "../components/banner";
import Carousel from "../components/carousel";
import Carousel2 from "../components/carousel-2";
import Header from "../components/header";

function Home() {
  return (
    <div className="bg-white">
      <Header></Header>
      <Banner></Banner>
      <Carousel></Carousel>
      {/* <Carousel2></Carousel2> */}
    </div>
  );
}

export default Home;
