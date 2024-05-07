"use client";

import { RevealWrapper } from "next-reveal";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Collage() {
  const [position, setPosition] = useState(0);

  const router = useRouter();

  function handleRedirect(path: string) {
    router.push("/servicios/" + path);
  }

  return (
    <section className="xl:px-32 md:px-24  px-8 flex  py-16  w-full bg-white">
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
                  src="https://i.pinimg.com/736x/9e/a4/5d/9ea45dc48908ce2f19947d3105dd0dbb.jpg"
                  loading="lazy"
                  alt="Agecia GATO - Marketing Digital"
                  title="Agecia GATO - Marketing Digital"
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
                  // src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                  src="https://i.pinimg.com/736x/d4/c3/fb/d4c3fbe8d97a0514ebe33641b8741f13.jpg"
                  loading="lazy"
                  alt="Agecia GATO - Branding"
                  title="Agecia GATO - Branding"
                  className="absolute inset-0 h-full w-full object-cover object-top  transition-all duration-200 group-hover:scale-110"
                />
              </div>
              {/* este div tiene que aparecer cuando haga hover a la imagen */}
              {position === 2 && (
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
                  // src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
                  src="https://i.pinimg.com/736x/be/3e/c0/be3ec039bbfc3736c73736f19fc935dc.jpg"
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
                    Nuestros servicios de Marketing Digital, están orientados en
                    transformar tus redes sociales en canales de ventas, según
                    los objetivos de tu negocio.
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

export default Collage;
