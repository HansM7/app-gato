"use client";

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
        <span className="animate-fade-up animate-duration-500 animate-ease-linear animate-normal col-span-3">
          Somos un equipo comprometido con la búsqueda de la excelencia en cada
          proyecto que emprendemos. Nos enorgullece trabajar con clientes que
          comparten nuestra pasión por el éxito y están dispuestos a desafiar
          los límites en busca de resultados extraordinarios. Con un equipo de
          expertos dedicados, nuestro objetivo es ayudarte a mantener en claro
          tus objetivos y superar cualquier obstáculo que se interponga en tu
          camino hacia el progreso. Únete a nosotros en esta emocionante
          aventura, donde nuestro principal propósito es el éxito de tu
          proyecto.
        </span>
      </div>
    );
  } else if (word === "Servicios") {
    return (
      <div className="grid grid-cols-3 gap-8">
        <span className="animate-fade-up animate-duration-500 animate-ease-linear animate-normal">
          Marketing digital
        </span>
        <span className="animate-fade-up animate-duration-700 animate-ease-linear animate-normal">
          Desarrollo de software
        </span>

        <span className="animate-fade-up animate-duration-900 animate-ease-linear animate-normal">
          Diseño web
        </span>
        <span className="animate-fade-up animate-duration-900 animate-ease-linear animate-normal">
          Branding
        </span>
        <span className="animate-fade-up animate-duration-900 animate-ease-linear animate-normal">
          Business Intelligence
        </span>
      </div>
    );
  } else {
    return <></>;
  }
}

export default InfoDrawer;
