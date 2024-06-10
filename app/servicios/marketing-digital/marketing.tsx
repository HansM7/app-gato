"use client";

import Banner from "@/app/components/service/banner/banner";
import Benefits from "./benefits";
import Plans from "@/app/components/service/plan/plans";
import Process from "./process";
import { useState } from "react";
import { DataMarketing } from "./dataMarketing";

function Service01() {
  const [step, setStep] = useState(1);

  const data = [
    {
      title: "Consulta y Configuración",
      items: [
        "Se realiza una primera reunión para armar el BRIEF junto al cliente, con el objetivo de conocer acerca de la marca, el público, los objetivos, etc. En la misma reunión se procede a configurar la página y otorgar los permisos necesarios para poder administrarla.",
      ],
    },
    {
      title: "Diseño Inicial",
      items: [
        "Se realizan las primeras opciones de piezas gráficas para comenzar a gestionar las redes sociales de la cuenta. Se sigue una línea gráfica y se van adaptando a los requerimientos del cliente.",
      ],
    },
    {
      title: "Implementación y Feedback",
      items: [
        "Se inicia la gestión de las redes sociales, y las ADS, incorporando el feedback del cliente para ajustar y mejorar continuamente las estrategias.",
      ],
    },
  ];

  return (
    <>
      <Banner
        color="#A52DE6"
        service="Marketing"
        service2="digital"
        description="Conquista el mundo digital: ¡Descubre nuestras estrategias de marketing digital!"
      />
      <Benefits color="#A52DE6" />
      <Plans color="#A52DE6" data={DataMarketing} />
      <Process />
    </>
  );
}

export default Service01;
