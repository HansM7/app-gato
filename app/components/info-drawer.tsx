"use client";

import Link from "next/link";

function InfoDrawer({ word }: { word: string }) {
  if (word === "Portafolio") {
    return (
      <div className="grid grid-cols-3 gap-8">
        <span className="animate-fade-up animate-duration-500 animate-ease-linear animate-normal">
          Technlogy description
        </span>
        <span className="animate-fade-up animate-duration-700 animate-ease-linear animate-normal">
          Technlogy description
        </span>
        <span className="animate-fade-up animate-duration-900 animate-ease-linear animate-normal">
          Technlogy description
        </span>
        <span className="animate-fade-up animate-duration-1100 animate-ease-linear animate-normal">
          Technlogy description
        </span>
        <span className="animate-fade-up animate-duration-1300 animate-ease-linear animate-normal">
          Technlogy description
        </span>
        <span className="animate-fade-up animate-duration-1500 animate-ease-linear animate-normal">
          Technlogy description
        </span>
      </div>
    );
  } else if (word === "Nosotros") {
    return (
      <div className="grid grid-cols-3 gap-8">
        <span className=" font-light animate-fade-up animate-duration-500 animate-ease-linear animate-normal col-span-3 text-lg">
          Somos un equipo comprometido con la búsqueda de la excelencia en cada
          proyecto que emprendemos. Nos enorgullece trabajar con clientes que
          comparten nuestra pasión por el éxito y están dispuestos a desafiar
          los límites en busca de resultados extraordinarios.
          <br />
          Con un equipo de expertos dedicados, nuestro objetivo es ayudarte a
          mantener en claro tus objetivos y superar cualquier obstáculo que se
          interponga en tu camino hacia el progreso.
          <br />
          <br />
          Únete a nosotros en esta emocionante aventura, donde nuestro principal
          propósito es el éxito de tu proyecto.
        </span>
      </div>
    );
  } else if (word === "Servicios") {
    return (
      <div className="grid grid-cols-3 gap-8">
        <Link
          href={"/servicios/marketing-digital"}
          className="animate-fade-up animate-duration-500 animate-ease-linear animate-normal hover:font-semibold transition-all"
        >
          Marketing digital
        </Link>
        <Link
          href={"/servicios/desarrollo-software"}
          className="animate-fade-up animate-duration-700 animate-ease-linear animate-normal hover:font-semibold transition-all"
        >
          Desarrollo de software
        </Link>

        <Link
          href={"/servicios/diseno-web"}
          className="animate-fade-up animate-duration-900 animate-ease-linear animate-normal hover:font-semibold transition-all"
        >
          Diseño web
        </Link>
        <Link
          href={"/servicios/branding"}
          className="animate-fade-up animate-duration-900 animate-ease-linear animate-normal hover:font-semibold transition-all"
        >
          Branding
        </Link>
        <Link
          href={"/servicios/desarrollo-movil"}
          className="animate-fade-up animate-duration-900 animate-ease-linear animate-normal hover:font-semibold transition-all"
        >
          Desarrollo de aplicaciones
        </Link>
      </div>
    );
  } else {
    return <></>;
  }
}

export default InfoDrawer;
