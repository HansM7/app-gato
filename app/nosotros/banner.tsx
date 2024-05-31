"use client";

import { RevealWrapper } from "next-reveal";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { TypeAnimation } from "react-type-animation";

function BannerAbout() {
  const words = [
    "Soluciones Personalizada",
    "Ideas Creativas",
    "Innovación Constante",
  ];

  const bg_colors = ["bg-[#007CF8]", "bg-[#0BC2E1]", "bg-[#A52DE6]"];

  const sizing = {
    title: "xl:text-[4rem] md:text-[3rem] sm:text-[2rem] text-[2rem]",
    description: "xl:text-[3rem] md:text-3xl sm:text-[2rem]  text-xl",
  };

  const [iterator, setIterator] = useState(0);

  const [colorSelected, setColorSelected] = useState(bg_colors[0]);

  const [position, setPosition] = useState(1);

  // todo -> define functions

  /*   function deleting() {
    setIterator(iterator + 1);

    if (iterator === 21) {
      setColorSelected(bg_colors[1]);
    } else if (iterator === 35) {
      setColorSelected(bg_colors[2]);
    }
  } */

  useEffect(() => {
    const timer = setTimeout(() => {
      setPosition((prevPosition) =>
        prevPosition === 2 ? 0 : prevPosition + 1
      );
    }, 10000);

    return () => clearTimeout(timer);
  }, [position]);
  return (
    <section className=" w-full  ">
      <div className="max-w-[1920px] flex flex-col mx-auto relative xl:px-32 lg:px:16 px-8 py-16">
        <div className="flex flex-col animate-fade-right mb-4">
          <h1
            className={`${sizing.title} 
                text-[#3D3D3D] w-full font-semibold `}
            title="Agencia GATO"
          >
            En <span className="text-[#6D28D9]">GATO</span> encontrarás{" "}
          </h1>

          <div className="flex flex-col gap-2">
            <span
              title="Servicio tecnológico GATO"
              className={` ${sizing.title} text-[#3D3D3D]  px-1 w-fit font-semibold   leading-1	`}
            >
              {/* <Typewriter
                    words={["Desarrollo de software"]}
                    onDelete={deleting}
                    typeSpeed={70}
                  /> */}
              {position === 0 && (
                <TypeAnimation
                  className={``}
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    words[position],
                    1000,
                  ]}
                  speed={2}
                  repeat={Infinity}
                />
              )}
              {position === 1 && (
                <TypeAnimation
                  className={""}
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    words[position],
                    1000,
                  ]}
                  speed={2}
                  repeat={Infinity}
                />
              )}
              {position === 2 && (
                <TypeAnimation
                  className={``}
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    words[position],
                    1000,
                  ]}
                  speed={2}
                  repeat={Infinity}
                />
              )}
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between gap-8 lg:gap-10 md:h-[500px] xl:h-[700px]">
          <div className="w-full md:w-1/3 flex flex-col justify-end">
            <div className="w-full flex flex-col gap-4">
              <div className="w-full h-full flex flex-end">
                <img
                  className="w-full min-h-[250px] max-h-[500px] lg:min-h-[350px] object-cover lg:aspect-square"
                  src="https://i.pinimg.com/736x/64/a1/c7/64a1c71b6f8274d4a920c8457c083f9b.jpg"
                  alt="imagen"
                />
              </div>
              <div className="flex gap-2 font-semibold text-xl md:text-2xl justify-between items-center group">
                Soluciones Personalizada
                <svg
                  className="group-hover:translate-x-6 transition-all duration-300"
                  width="20"
                  height="21"
                  viewBox="0 0 39 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38.4142 16.4142C39.1953 15.6332 39.1953 14.3668 38.4142 13.5858L25.6863 0.857869C24.9052 0.0768199 23.6389 0.0768197 22.8579 0.857868C22.0768 1.63892 22.0768 2.90525 22.8579 3.6863L34.1716 15L22.8579 26.3137C22.0768 27.0948 22.0768 28.3611 22.8579 29.1421C23.6389 29.9232 24.9052 29.9232 25.6863 29.1421L38.4142 16.4142ZM-3.30789e-07 17L37 17L37 13L3.30789e-07 13L-3.30789e-07 17Z"
                    fill="#3D3D3D"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col justify-center">
            <div className="w-full">
              <div className="w-full h-full flex flex-end">
                <img
                  className="w-full min-h-[250px] max-h-[500px] lg:min-h-[350px] object-cover lg:aspect-square"
                  src="https://i.pinimg.com/736x/64/a1/c7/64a1c71b6f8274d4a920c8457c083f9b.jpg"
                  alt="imagen"
                />
              </div>
              <div className="flex gap-2 font-semibold text-xl md:text-2xl justify-between items-center group">
                Ideas Creativas
                <svg
                  className="group-hover:translate-x-6 transition-all duration-300"
                  width="20"
                  height="21"
                  viewBox="0 0 39 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38.4142 16.4142C39.1953 15.6332 39.1953 14.3668 38.4142 13.5858L25.6863 0.857869C24.9052 0.0768199 23.6389 0.0768197 22.8579 0.857868C22.0768 1.63892 22.0768 2.90525 22.8579 3.6863L34.1716 15L22.8579 26.3137C22.0768 27.0948 22.0768 28.3611 22.8579 29.1421C23.6389 29.9232 24.9052 29.9232 25.6863 29.1421L38.4142 16.4142ZM-3.30789e-07 17L37 17L37 13L3.30789e-07 13L-3.30789e-07 17Z"
                    fill="#3D3D3D"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col justify-start">
            <div className="w-full">
              <div className="w-full h-full flex flex-end">
                <img
                  className="w-full min-h-[250px] max-h-[500px] lg:min-h-[350px] object-cover lg:aspect-square"
                  src="https://i.pinimg.com/736x/64/a1/c7/64a1c71b6f8274d4a920c8457c083f9b.jpg"
                  alt="imagen"
                />
              </div>
              <div className="flex gap-2 font-semibold text-xl md:text-2xl justify-between items-center group">
                Innovación Constante
                <svg
                  className="group-hover:translate-x-6 transition-all duration-300"
                  width="20"
                  height="21"
                  viewBox="0 0 39 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38.4142 16.4142C39.1953 15.6332 39.1953 14.3668 38.4142 13.5858L25.6863 0.857869C24.9052 0.0768199 23.6389 0.0768197 22.8579 0.857868C22.0768 1.63892 22.0768 2.90525 22.8579 3.6863L34.1716 15L22.8579 26.3137C22.0768 27.0948 22.0768 28.3611 22.8579 29.1421C23.6389 29.9232 24.9052 29.9232 25.6863 29.1421L38.4142 16.4142ZM-3.30789e-07 17L37 17L37 13L3.30789e-07 13L-3.30789e-07 17Z"
                    fill="#3D3D3D"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*       <div className=" md:min-h-screen h-full  overflow-hidden min-h-[28rem] absolute">
        <video
          autoPlay
          muted
          loop
          className="w-screen h-full md:min-h-screen min-h-[25rem] object-cover  overflow-hidden filter brightness-50"
          src="https://videos.pexels.com/video-files/3249902/3249902-uhd_3840_2160_25fps.mp4"
        ></video>
      </div>
      <div className=" md:px-20 pb-16 md:pb-0 px-4 md:pt-16 pt-8  ">
        <RevealWrapper origin="left" duration={1500} className={"w-full"}>
          <div className="  flex flex-col  "> */}
      {/* <span className="text-gray-200 xl:text-[5rem] md:text-[4rem] text-[3rem] h-fit">
              Somos
            </span> */}
      {/* 
            <div className="text-sky-400  xl:text-[7rem] md:text-[6rem] text-[3rem] min-h-44 -mt-4">
              <Typewriter
                loop
                words={["Estrategas", "Decididos", "Responsables"]}
                typeSpeed={70}
              />
            </div>
          </div>
        </RevealWrapper>
        <RevealWrapper
          origin="right"
          duration={1500}
          className={"w-full md:mt-8 -mt-8 "}
        >
          <span className="md:font-light font-light xl:text-[3rem] md:text-[2rem] text-[2rem] text-gray-200">
            En GATO, estamos comprometidos con la búsqueda de la excelencia en
            cada proyecto que emprendemos. Nos enorgullece trabajar con clientes
            que comparten nuestra pasión por el éxito y están dispuestos a
            desafiar los límites en busca de resultados extraordinarios.
          </span>
        </RevealWrapper>
        <a href="" className="scrollDown opacity-80 absolute bottom-10 left-1/2 w-[45px] h-[70px] border-2 border-white flex justify-center rounded-[30px]">
            <span className="bg-white w-[5px] h-[10px] rounded-[30px] mt-[10px] relative"></span>
        </a>
      </div> */}
    </section>
  );
}

export default BannerAbout;
