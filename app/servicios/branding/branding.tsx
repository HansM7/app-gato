"use client";

import Banner from "@/app/components/service/banner/banner";
import Benefits from "./benefits";
import Plans from "@/app/components/service/plan/plans";
import Process from "./process";
import { DataBranding } from "./dataBranding";

function Branding() {
  return (
    <>
      <Banner
        color="#A52DE6"
        service="Branding"
        service2=""
        description="Haz que tu marca brille: ¡Descubre cómo podemos transformar tu identidad!"
      />
      <Benefits color="#A52DE6" />
      <Plans color="#A52DE6" data={DataBranding} />
      <Process />
    </>
  );
}

export default Branding;
