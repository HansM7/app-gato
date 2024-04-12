"use client";

import { RevealWrapper } from "next-reveal";
import { useState } from "react";

function Collage() {
  const [position, setPosition] = useState(0);

  return (
    <section className="xl:px-44 md:px-28  px-8 flex  py-16  w-full bg-white">
      <div className="w-full">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <RevealWrapper duration={1500} origin="left">
            <div
              className="group relative flex xl:h-96 h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 "
              onMouseEnter={() => setPosition(1)}
              onMouseLeave={() => setPosition(0)}
            >
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-200 group-hover:scale-110"
                />
              </a>
              {/* este div tiene que aparecer cuando haga hover a la imagen */}
              {position === 1 && (
                <div
                  className="absolute bg-black opacity-70 w-full h-full  flex justify-center items-center transition-all  text-center px-8"
                  role="button"
                >
                  <p className="text-xl text-white">
                    Transformamos tu presencia en línea con diseños web
                    impactantes y funcionales.
                  </p>
                </div>
              )}
            </div>
          </RevealWrapper>

          <RevealWrapper
            duration={1500}
            origin="left"
            className="w-full col-span-2"
          >
            <div
              className="w-full group relative flex xl:h-96 h-80  items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80  "
              onMouseEnter={() => setPosition(2)}
              onMouseLeave={() => setPosition(0)}
            >
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-200 group-hover:scale-110"
                />
              </a>
              {/* este div tiene que aparecer cuando haga hover a la imagen */}
              {position === 2 && (
                <div
                  className="absolute bg-black opacity-70 w-full h-full  flex justify-center items-center transition-all  text-center px-8"
                  role="button"
                >
                  <p className=" text-white text-xl">
                    Nuestros servicios de Marketing Digital, están orientados en
                    transformar tus redes sociales en fuentes de conversión,
                    según los objetivos de tu negocio.
                  </p>
                </div>
              )}
            </div>
          </RevealWrapper>

          {/* <RevealWrapper
            className="group relative flex xl:h-96 h-80  items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            duration={1500}
            origin="right"
          >
            <div>
              <img
                onMouseEnter={() => setPosition(2)}
                onMouseLeave={() => setPosition(0)}
                src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center  duration-200 group-hover:scale-110 transition-all"
              />
            </div>
            {position === 2 && (
              <div
                className="absolute bg-black opacity-70 w-full h-full  flex justify-center items-center transition-all "
                role="button"
              >
                <p className="text-sm text-white">
                  ransformamos tu presencia en línea con diseños web impactantes
                  y funcionales.
                </p>
              </div>
            )}
          </RevealWrapper> */}

          <RevealWrapper
            duration={1500}
            origin="left"
            className="w-full col-span-2"
          >
            <div
              className="w-full group relative flex xl:h-96 h-80  items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80  "
              onMouseEnter={() => setPosition(3)}
              onMouseLeave={() => setPosition(0)}
            >
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-200 group-hover:scale-110"
                />
              </a>
              {/* este div tiene que aparecer cuando haga hover a la imagen */}
              {position === 3 && (
                <div
                  className="absolute bg-black opacity-70 w-full h-full  flex justify-center items-center transition-all  text-center px-8"
                  role="button"
                >
                  <p className=" text-white text-xl">
                    Transformamos tus ideas en software funcional. Desde la
                    conceptualización hasta la implementación, creamos
                    soluciones a medida que potencian tu negocio y simplifican
                    tus operaciones.
                  </p>
                </div>
              )}
            </div>
          </RevealWrapper>

          <RevealWrapper duration={1500} origin="left">
            <div
              className="group relative flex xl:h-96 h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 "
              onMouseEnter={() => setPosition(4)}
              onMouseLeave={() => setPosition(0)}
            >
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-200 group-hover:scale-110"
                />
              </a>
              {/* este div tiene que aparecer cuando haga hover a la imagen */}
              {position === 4 && (
                <div
                  className="absolute bg-black opacity-70 w-full h-full  flex justify-center items-center transition-all  text-center px-8"
                  role="button"
                >
                  <p className="text-xl text-white">
                    Capturamos la esencia de tu marca y la llevamos a nuevas
                    alturas. Con la creación de identidades visuales impactantes
                    te ayudamos a destacar en un mundo cada vez más competitivo.
                  </p>
                </div>
              )}
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default Collage;
