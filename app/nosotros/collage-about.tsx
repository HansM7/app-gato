"use client";

import { RevealWrapper } from "next-reveal";
import { useRouter } from "next/navigation";
import { useState } from "react";

function CollageAbout() {
  const [position, setPosition] = useState(0);

  const router = useRouter();

  function handleRedirect(path: string) {
    router.push("/servicios/" + path);
  }

  return (
    <section className=" flex  py-16 xl:px-32 md:px-24 px-8 w-ful bg-gray-100 ">
      <div className="w-full">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <RevealWrapper
            duration={1500}
            origin="left "
            className="col-span-2 sm:col-span-1"
          >
            <div
              className=" group relative flex xl:h-96 h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 "
              onMouseEnter={() => setPosition(1)}
              onMouseLeave={() => setPosition(0)}
              onClick={() => handleRedirect("marketing-digital")}
            >
              <div>
                <img
                  src="https://i.pinimg.com/736x/52/06/f8/5206f80009c41c8b3ce864ae2f07eb93.jpg"
                  loading="lazy"
                  alt="Agecia GATO - Branding"
                  title="Agecia GATO - Branding"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-200 group-hover:scale-110"
                />
              </div>
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
              onClick={() => handleRedirect("branding")}
            >
              <div>
                <img
                  src="https://i.pinimg.com/736x/74/68/cc/7468cc4fe04a0fccfbfa661555fe8922.jpg"
                  loading="lazy"
                  alt="Agecia GATO - Desarrollo de Software"
                  title="Agecia GATO - Desarrollo de Software"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-200 group-hover:scale-110"
                />
              </div>
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
              onClick={() => handleRedirect("desarrollo-software")}
            >
              <div>
                <img
                  src="https://i.pinimg.com/736x/b7/da/ae/b7daaed28bee8358721cd0066b7c4209.jpg"
                  loading="lazy"
                  alt="Agecia GATO - Desarrollo de Software"
                  title="Agecia GATO - Desarrollo de Software"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-200 group-hover:scale-110"
                />
              </div>
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

          <RevealWrapper
            duration={1500}
            origin="left"
            className="col-span-2 sm:col-span-1"
          >
            <div
              className="group relative flex xl:h-96 h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 "
              onMouseEnter={() => setPosition(4)}
              onMouseLeave={() => setPosition(0)}
              onClick={() => handleRedirect("desarrollo-movil")}
            >
              <div>
                <img
                  src="https://i.pinimg.com/736x/ab/1f/9b/ab1f9b72e259f15ac247e3ef90a63261.jpg"
                  loading="lazy"
                  alt="Agecia GATO - Desarrollo de Aplicaciones"
                  title="Agecia GATO - Desarrollo de Aplicaciones"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-200 group-hover:scale-110"
                />
              </div>
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

export default CollageAbout;
