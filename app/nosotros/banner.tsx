"use client";

import { RevealWrapper } from "next-reveal";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

function BannerAbout() {
  const words = [
    "ateción personalizada",
    "experiencia",
    "transparencia y confianza",
  ];

  const sizing = {
    title: "xl:text-[5rem] md:text-[3rem] text-[2rem]",
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
                  className="front w-full min-h-[250px] max-h-[500px] lg:min-h-[350px] object-cover lg:aspect-square shadow-md"
                  src="https://i.pinimg.com/736x/64/a1/c7/64a1c71b6f8274d4a920c8457c083f9b.jpg"
                  alt="imagen"
                />
                <div className="back absolute opacity-0 group-hover:opacity-100 w-full h-full">
                  <img
                    className=" w-full h-full object-cover lg:aspect-square shadow-md"
                    src="https://i.pinimg.com/736x/64/a1/c7/64a1c71b6f8274d4a920c8457c083f9b.jpg"
                    alt="imagen"
                  />
                  <div className="absolute top-0 left-0 bg-[#6D28D9] bg-opacity-70 w-full h-full text-white text-center p-2 flex items-center justify-center">
                    <p>
                      Nos enorgullece ofrecer una atención personalizada a cada
                      uno de nuestros clientes. Nos tomamos el tiempo para
                      conocer tus necesidades y objetivos, garantizando un
                      enfoque a medida que maximiza los resultados y asegura tu
                      satisfacción.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 font-semibold text-xl md:text-2xl justify-between items-center group text-[#666666]">
                Atención Personalizada
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col justify-center">
            <div className="container w-full flex flex-col gap-4">
              <div className="card group relative transition-all duration-500 w-full h-full flex flex-end">
                <img
                  className="front w-full min-h-[250px] max-h-[500px] lg:min-h-[350px] object-cover lg:aspect-square shadow-md"
                  src="https://i.pinimg.com/736x/64/a1/c7/64a1c71b6f8274d4a920c8457c083f9b.jpg"
                  alt="imagen"
                />
                <div className="back absolute opacity-0 group-hover:opacity-100 w-full h-full">
                  <img
                    className=" w-full h-full object-cover lg:aspect-square shadow-md"
                    src="https://i.pinimg.com/736x/64/a1/c7/64a1c71b6f8274d4a920c8457c083f9b.jpg"
                    alt="imagen"
                  />
                  <div className="absolute top-0 left-0 bg-[#6D28D9] bg-opacity-70 w-full h-full text-white text-center p-2 flex items-center justify-center">
                    <p>
                      Con años de experiencia en marketing, branding, desarrollo
                      de software y web, nuestro equipo está compuesto por
                      expertos en sus respectivos campos. Esta experiencia nos
                      permite ofrecer soluciones efectivas y creativas que
                      impulsan el crecimiento de tu negocio.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 font-semibold text-xl md:text-2xl justify-between items-center group text-[#666666]">
                Experiencia
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col justify-start">
            <div className="container w-full flex flex-col gap-4">
              <div className="card group relative transition-all duration-500 w-full h-full flex flex-end">
                <img
                  className="front w-full min-h-[250px] max-h-[500px] lg:min-h-[350px] object-cover lg:aspect-square shadow-md"
                  src="https://i.pinimg.com/736x/64/a1/c7/64a1c71b6f8274d4a920c8457c083f9b.jpg"
                  alt="imagen"
                />
                <div className="back absolute opacity-0 group-hover:opacity-100 w-full h-full">
                  <img
                    className=" w-full h-full object-cover lg:aspect-square shadow-md"
                    src="https://i.pinimg.com/736x/64/a1/c7/64a1c71b6f8274d4a920c8457c083f9b.jpg"
                    alt="imagen"
                  />
                  <div className="absolute top-0 left-0 bg-[#6D28D9] bg-opacity-70 w-full h-full text-white text-center p-2 flex items-center justify-center">
                    <p>
                      La transparencia es fundamental en nuestra relación con
                      los clientes. Nos comprometemos a ser claros y honestos en
                      cada paso del proceso, construyendo una base sólida de
                      confianza. Creemos que la confianza mutua es la clave para
                      lograr resultados excepcionales y relaciones duraderas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 font-semibold text-xl md:text-2xl justify-between items-center group text-[#666666]">
                Transparencia y confianza
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerAbout;
