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
    <section className=" flex  py-16  w-full ">
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
                  src="https://www.tourinnovacion.cl/wp-content/uploads/2023/12/IMG-20231206-WA0015.jpg"
                  loading="lazy"
                  alt="Photo by Minh Pham"
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
                  src="https://s3.amazonaws.com/wordpress-production/wp-content/uploads/sites/19/2016/10/construir-equipo-de-desarrollo-agil.jpg"
                  loading="lazy"
                  alt="Photo by Minh Pham"
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
                  src="https://phantom-marca.unidadeditorial.es/7f5757062b9d9f786611640769ff75ce/resize/828/f/jpg/assets/multimedia/imagenes/2022/06/14/16552255739888.png"
                  loading="lazy"
                  alt="Photo by Minh Pham"
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
                  src="https://www.postgradoutp.edu.pe/blog/wp-content/uploads/2020/02/Equipo-SCRUM-300x200.webp"
                  loading="lazy"
                  alt="Photo by Minh Pham"
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