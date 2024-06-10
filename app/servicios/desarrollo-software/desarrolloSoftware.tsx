"use client";

import Banner from "@/app/components/service/banner/banner";
import Benefits from "./benefits";
import Process from "./process";

function Service03() {
  return (
    <>
      <Banner
        color="#007CF8"
        service="Desarrollo de"
        service2="Software"
        description="Software a medida para tus necesidades. ¡Descubre cómo podemos ayudarte!"
      />
      <Benefits color="#007CF8" />
      <Process />
    </>
  );
}

export default Service03;
