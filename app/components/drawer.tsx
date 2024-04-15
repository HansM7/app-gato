import { useState } from "react";
import InfoDrawer from "./info-drawer";
import { useRouter } from "next/navigation";

function Drawer() {
  const [hovered, setHovered] = useState("");

  const [info, setInfo] = useState("");

  const [number, setNumber] = useState("");

  const [isRedirecting, setIsRedirecting] = useState(false);

  const router = useRouter();

  // todo -> define functions
  const handleHover = (word: any) => {
    setHovered(word);
  };

  const handleUnhover = () => {
    setHovered("");
    setInfo("");
  };

  function handleEnter(word: string) {
    setInfo(word);
    if (word === "Portafolio") {
      setNumber("01");
    } else if (word === "Nosotros") {
      setNumber("02");
    } else if (word === "Servicios") {
      setNumber("03");
    }
  }

  function handleMouseLeave() {
    setNumber("");
    setInfo("");
  }

  function handleRedirect(word: string) {
    const newWord = word.toLocaleLowerCase();
    setIsRedirecting(true);
    setTimeout(() => {
      router.push(`/${newWord}`);
    }, 1000);
    setTimeout(() => {
      setIsRedirecting(false);
    }, 2000);
  }

  const renderWord = (word: any) => {
    return (
      <span
        role="button"
        onClick={() => handleRedirect(word)}
        className={`relative text-[4rem] font-semibold hover:text-black text-gray-500  transition-all ${
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
    <>
      <div className="bg-white h-full w-screen  animate-fade-right animate-duration-500 animate-ease-linear animate-normal pt-36 px-32 z-30">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="flex items-center">
              <div className="w-10 ">
                {info === "Portafolio" ? (
                  <div className="animate-fade-left animate-duration-[1000ms] animate-ease-linear animate-alternate ">
                    {number}
                  </div>
                ) : (
                  ""
                )}{" "}
              </div>
              <div
                className={`${
                  info === "Portafolio"
                    ? "hover:ml-4 transition-all  "
                    : "transition-all"
                }`}
              >
                {renderWord("Portafolio")}
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10">
                {info === "Nosotros" ? (
                  <div className="animate-fade-left animate-duration-[1000ms] animate-ease-linear animate-alternate ">
                    {number}
                  </div>
                ) : (
                  ""
                )}{" "}
              </div>
              <div
                className={`${
                  info === "Nosotros"
                    ? "hover:ml-4 transition-all  "
                    : "transition-all"
                }`}
              >
                {renderWord("Nosotros")}
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
                    ? "hover:ml-4 transition-all  "
                    : "transition-all"
                }`}
              >
                {renderWord("Servicios")}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="font-semibold">Escríbenos</span>
              <span>gato@gmail.com</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Háblanos</span>
              <span>9907676768</span>
            </div>
          </div>
        </div>
        {/* information */}
        <div className="mt-12">
          <InfoDrawer word={info}></InfoDrawer>
        </div>
      </div>
      {/* --------------- screen black ------------------------------------- */}
      {isRedirecting ? (
        <div
          className={`fixed h-screen w-screen  bg-black z-30  animate-fade-right animate-duration-[800ms] animate-ease-linear animate-normal`}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Drawer;
