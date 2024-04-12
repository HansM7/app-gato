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
        <span className="animate-fade-up animate-duration-500 animate-ease-linear animate-normal">
          Technlogy Agency description
        </span>
        <span className="animate-fade-up animate-duration-700 animate-ease-linear animate-normal">
          Technlogy Agency description
        </span>
        <span className="animate-fade-up animate-duration-900 animate-ease-linear animate-normal">
          Technlogy Agency description
        </span>
        <span className="animate-fade-up animate-duration-1100 animate-ease-linear animate-normal">
          Technlogy Agency description
        </span>
        <span className="animate-fade-up animate-duration-1300 animate-ease-linear animate-normal">
          Technlogy Agency description
        </span>
      </div>
    );
  } else if (word === "Servicios") {
    return (
      <div className="grid grid-cols-3 gap-8">
        <span className="animate-fade-up animate-duration-500 animate-ease-linear animate-normal">
          Technlogy service description
        </span>
        <span className="animate-fade-up animate-duration-700 animate-ease-linear animate-normal">
          Technlogy service description
        </span>
        <span className="animate-fade-up animate-duration-900 animate-ease-linear animate-normal">
          Technlogy service description
        </span>
      </div>
    );
  } else {
    return <></>;
  }
}

export default InfoDrawer;
