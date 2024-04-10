import { useState } from "react";
import InfoDrawer from "./info-drawer";

function Drawer() {
  const [hovered, setHovered] = useState("");

  const [info, setInfo] = useState("");

  const handleHover = (word: any) => {
    setHovered(word);
  };

  const handleUnhover = () => {
    setHovered("");
  };

  function handleEnter(word: string) {
    setInfo(word);
  }

  const renderWord = (word: any) => {
    return (
      <span
        role="button"
        className={`relative text-[4rem] font-black text-gray-500  transition-all ${
          hovered === word && "text-black"
        }`}
        onMouseEnter={() => handleHover(word)}
        onMouseLeave={handleUnhover}
      >
        {Array.from(word).map((char: any, index) => (
          <span
            onMouseEnter={() => handleEnter(word)}
            onMouseLeave={() => setInfo("")}
            key={index}
            className="inline-block"
            style={{
              transitionDelay: `${index * 30}ms`,
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
          {renderWord("Portfolio")}
          {renderWord("Agencia")}
          {renderWord("Servicios")}
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
