import { useState } from "react";
import InfoDrawer from "./info-drawer";

function Drawer() {
  const [hovered, setHovered] = useState("");

  const [info, setInfo] = useState("");

  const [number, setNumber] = useState("");

  const handleHover = (word: any) => {
    setHovered(word);
  };

  const handleUnhover = () => {
    setHovered("");
    setInfo("");
  };

  function handleEnter(word: string) {
    setInfo(word);
    if (word === "Portfolio") {
      setNumber("01");
    } else if (word === "Agencia") {
      setNumber("02");
    } else if (word === "Servicios") {
      setNumber("03");
    }
  }

  function handleMouseLeave() {
    setNumber("");
    setInfo("");
  }

  const renderWord = (word: any) => {
    return (
      <span
        role="button"
        className={`relative text-[4rem] font-black hover:text-black text-gray-500  transition-all ${
          hovered === word && "text-black"
        }`}
        onMouseEnter={() => handleHover(word)}
        onMouseLeave={handleUnhover}
      >
        {Array.from(word).map((char: any, index) => (
          <span
            onMouseEnter={() => handleEnter(word)}
            onMouseLeave={() => handleMouseLeave}
            key={index}
            className="inline-block"
            style={{
              transitionDelay: `${index * 70}ms`,
            }}
          >
            {char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <div className="bg-white h-full w-screen z-10 animate-fade-right animate-duration-500 animate-ease-linear animate-normal pt-36 px-32">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="flex items-center">
            <div className="w-10">
              {info === "Portfolio" ? (
                <div className="animate-fade-left animate-duration-[1000ms] animate-ease-linear animate-alternate ">
                  {number}
                </div>
              ) : (
                ""
              )}{" "}
            </div>
            <div
              className={`${
                info === "Portfolio"
                  ? "animate-fade-right animate-duration-[1000ms] animate-ease-linear animate-alternate "
                  : ""
              }`}
            >
              {renderWord("Portfolio")}
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-10">
              {info === "Agencia" ? (
                <div className="animate-fade-left animate-duration-[1000ms] animate-ease-linear animate-alternate ">
                  {number}
                </div>
              ) : (
                ""
              )}{" "}
            </div>
            <div
              className={`${
                info === "Agencia"
                  ? "animate-fade-right animate-duration-[1000ms] animate-ease-linear animate-alternate "
                  : ""
              }`}
            >
              {renderWord("Agencia")}
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-10">
              {info === "Servicios" ? (
                <div className="animate-fade-left animate-duration-[1000ms] animate-ease-linear animate-alternate ">
                  {number}
                </div>
              ) : (
                ""
              )}{" "}
            </div>
            <div
              className={`${
                info === "Servicios"
                  ? "animate-fade-right animate-duration-[1000ms] animate-ease-linear animate-alternate "
                  : ""
              }`}
            >
              {renderWord("Servicios")}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <span className="font-semibold">Escríbenos</span>
            <span>gato@gmail.com</span>
          </div>
        </div>
      </div>
      {/* information */}
      <div className="mt-12">
        <InfoDrawer word={info}></InfoDrawer>
      </div>
    </div>
  );
}

export default Drawer;
