"use client";

import { RevealWrapper } from "next-reveal";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

function BannerServices() {
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

  const [position, setPosition] = useState(1);

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
            En <span className="text-[#6D28D9]">GATO</span> nos destacamos por
            nuestra
          </h1>

          <div className="flex flex-col gap-2">
            <span
              title="Servicio tecnológico GATO"
              className={` ${sizing.title} text-[#3D3D3D]  px-1 w-fit font-semibold   leading-1	`}
            >
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
            <div className="container w-full flex flex-col gap-4">
              <div className="card group relative transition-all duration-500 w-full h-full flex flex-end">
                <img
                  loading="lazy"
                  className="front w-full min-h-[250px] max-h-[500px] lg:min-h-[350px] object-cover lg:aspect-square shadow-md"
                  src="https://i.pinimg.com/736x/fc/cf/b0/fccfb08b7b601c7b23e738d690ff3c69.jpg"
                  alt="imagen"
                />
                <div className="back absolute opacity-0 group-hover:opacity-100 w-full h-full">
                  <img
                    loading="lazy"
                    className=" w-full h-full object-cover lg:aspect-square shadow-md"
                    src="https://i.pinimg.com/736x/fc/cf/b0/fccfb08b7b601c7b23e738d690ff3c69.jpg"
                    alt="imagen"
                  />
                  <div className="absolute top-0 left-0 bg-[#6D28D9] bg-opacity-70 w-full h-full text-white text-center p-2 flex items-center justify-center">
                    <p>
                      En GATO ofrecemos soluciones a medida para cada cliente,
                      adaptándonos a sus necesidades específicas. Desde software
                      personalizado hasta estrategias de marketing, nos
                      comprometemos a entender tus objetivos y ofrecerte
                      herramientas que impulsan tu éxito.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 font-semibold text-xl md:text-2xl justify-between items-center group text-[#666666]">
                Soluciones Personalizadas
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col justify-center">
            <div className="container w-full flex flex-col gap-4">
              <div className="card group relative transition-all duration-500 w-full h-full flex flex-end">
                <img
                  loading="lazy"
                  className="front w-full min-h-[250px] max-h-[500px] lg:min-h-[350px] object-cover lg:aspect-square shadow-md"
                  src="https://i.pinimg.com/736x/d5/20/0d/d5200da7fb7e6323f41db312d7f40cef.jpg"
                  alt="imagen"
                />
                <div className="back absolute opacity-0 group-hover:opacity-100 w-full h-full">
                  <img
                    loading="lazy"
                    className=" w-full h-full object-cover lg:aspect-square shadow-md"
                    src="https://i.pinimg.com/736x/d5/20/0d/d5200da7fb7e6323f41db312d7f40cef.jpg"
                    alt="imagen"
                  />
                  <div className="absolute top-0 left-0 bg-[#6D28D9] bg-opacity-70 w-full h-full text-white text-center p-2 flex items-center justify-center">
                    <p>
                      La creatividad impulsa todo lo que hacemos. Generamos
                      ideas innovadoras que destacan tu marca en un mercado
                      competitivo. Con campañas impactantes y diseños únicos,
                      hacemos que tu marca sea memorable y atractiva.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 font-semibold text-xl md:text-2xl justify-between items-center group text-[#666666]">
                Ideas Creativas
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col justify-start">
            <div className="container w-full flex flex-col gap-4">
              <div className="card group relative transition-all duration-500 w-full h-full flex flex-end">
                <img
                  loading="lazy"
                  className="front w-full min-h-[250px] max-h-[500px] lg:min-h-[350px] object-cover lg:aspect-square shadow-md"
                  src="https://i.pinimg.com/736x/da/57/8e/da578e890c011bf32b2aabe78d1e94c2.jpg"
                  alt="imagen"
                />
                <div className="back absolute opacity-0 group-hover:opacity-100 w-full h-full">
                  <img
                    loading="lazy"
                    className=" w-full h-full object-cover lg:aspect-square shadow-md"
                    src="https://i.pinimg.com/736x/da/57/8e/da578e890c011bf32b2aabe78d1e94c2.jpg"
                    alt="imagen"
                  />
                  <div className="absolute top-0 left-0 bg-[#6D28D9] bg-opacity-70 w-full h-full text-white text-center p-2 flex items-center justify-center">
                    <p>
                      Nos mantenemos a la vanguardia de las tendencias y
                      tecnologías para ofrecerte soluciones siempre actuales.
                      Nuestra filosofía de innovación constante te asegura estar
                      un paso adelante de la competencia, adaptándonos
                      continuamente al mundo digital.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 font-semibold text-xl md:text-2xl justify-between items-center group text-[#666666]">
                Innovación constante
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default BannerServices;
