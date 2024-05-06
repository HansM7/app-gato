"use client";

import Link from "next/link";

function InfoDrawer({ word }: { word: string }) {
  if (word === "Portafolio") {
    return (
      <div className="grid grid-cols-3 gap-8">
        <Link
          href={"/portafolio/cr-motors-marketing-digital"}
          className="animate-fade-up animate-duration-500 animate-ease-linear animate-normal hover:font-semibold transition-all"
        >
          CR Motors Marketing Digital
        </Link>
        <Link
          href={"/portafolio/evadry-marketing-digital"}
          className="animate-fade-up animate-duration-500 animate-ease-linear animate-normal hover:font-semibold transition-all"
        >
          Evadry Marketing Digital
        </Link>
        <Link
          href={"/portafolio/flower-travel-marketing-y-marketing-digital"}
          className="animate-fade-up animate-duration-500 animate-ease-linear animate-normal hover:font-semibold transition-all"
        >
          Flower Travel Branding y Marketing Digital
        </Link>
        <Link
          href={"/portafolio/social-commerce-marketing-digital"}
          className="animate-fade-up animate-duration-500 animate-ease-linear animate-normal hover:font-semibold transition-all"
        >
          Social Commerce Marketing Digital
        </Link>
      </div>
    );
  } else if (word === "Nosotros") {
    return (
      <div className="grid grid-cols-3 gap-8">
        <span className=" font-light animate-fade-up animate-duration-500 animate-ease-linear animate-normal col-span-3 text-lg">
          En GATO, estamos comprometidos con la búsqueda de la excelencia en
          cada proyecto que emprendemos. Nos enorgullece trabajar con clientes
          que comparten nuestra pasión por el éxito y están dispuestos a
          desafiar los límites en busca de resultados extraordinarios.
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
