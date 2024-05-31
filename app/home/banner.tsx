"use client";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import CountUp from "react-countup";
import { useMediaQueries } from "@react-hook/media-query";
import { TypeAnimation } from "react-type-animation";

function Banner() {
  // todo -> define states

  const words = [
    "Desarrollo de Software",
    "Desarrollo Web",
    "Marketing Digital",
  ];

  const bg_colors = ["bg-[#007CF8]", "bg-[#0BC2E1]", "bg-[#A52DE6]"];

  const sizing = {
    title: "xl:text-[5rem] md:text-[3rem] sm:text-[2rem] text-[2rem]",
    description: "xl:text-[3rem] md:text-3xl sm:text-[2rem]  text-xl",
  };

  const [iterator, setIterator] = useState(0);

  const [colorSelected, setColorSelected] = useState(bg_colors[0]);

  const [position, setPosition] = useState(1);

  // todo -> define functions

  function deleting() {
    setIterator(iterator + 1);

    if (iterator === 21) {
      setColorSelected(bg_colors[1]);
    } else if (iterator === 35) {
      setColorSelected(bg_colors[2]);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setPosition((prevPosition) =>
        prevPosition === 2 ? 0 : prevPosition + 1
      );
    }, 10000);

    return () => clearTimeout(timer);
  }, [position]);

  return (
    <section className=" md:min-h-screen min-h-[25rem]  bg-gray-100 relative flex flex-col justify-center">
      {/* this is decorator */}
      <div className="absolute w-full  h-full bg-red-100 md:max-h-screen overflow-hidden ">
        {/* <video
          autoPlay
          muted
          loop
          className="w-full md:min-h-screen min-h-[25rem] object-cover  overflow-hidden"
          src="https://videos.pexels.com/video-files/5495900/5495900-hd_1920_1080_30fps.mp4"
        ></video> */}
        <img
          alt="Equipo de GATO: Expertos en Desarrollo Web, Marketing Digital y Software"
          title="Equipo de GATO"
          className="w-full h-full object-cover  overflow-hidden brightness-75"
          src="banner_gato.jpg"
        />{" "}
      </div>

      {/*  */}
      <div className="xl:px-24 md:px-12 sm:px-12  px-8 flex   pt-12 ">
          <div className="w-full flex flex-col animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal">
            <div className="flex flex-col animate-fade-right ">
              <h1
                className={`${sizing.title} 
                text-white w-full font-semibold `}
                title="Agencia GATO"
              >
                Agencia de{" "}
              </h1>

              <div className="flex flex-col gap-2">
                
                <span
                  title="Servicio tecnológico GATO"
                  className={` ${sizing.title} text-white  px-1 w-fit font-semibold   leading-1	`}
                >
                  {/* <Typewriter
                    words={["Desarrollo de software"]}
                    onDelete={deleting}
                    typeSpeed={70}
                  /> */}
                  {position === 0 && (
                    <TypeAnimation
                    className={`${bg_colors[position]}`}
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
                    className={`${bg_colors[position]}`}
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
                    className={`${bg_colors[position]}`}
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

            {/* //todo carousel or transition images  --------------------- */}

            <div className="flex gap-4  justify-start xl:mt-16  md:mt-8 mt-4 ">
              <div className="w-full flex justify-between xl:pr-16 pr-8">
                {position === 0 && (
                  <p
                  // className={`font-light ${sizing.description} text-[#7A7678]`}
                  className={`font-light ${sizing.description} text-white md:leading-tight`}
                >
                  <Typewriter
                    words={[
                      "En Gato transformamos tus ideas en softwares funcionales y simplificamos tus operaciones.",
                    ]}
                    onDelete={deleting}
                    typeSpeed={30}
                  />
                </p>
                )}
                {position === 1 && (
                  <p
                  className={`font-light ${sizing.description} text-white  md:leading-tight`}
                >
                  <Typewriter
                    words={[
                      " En Gato potenciamos tu presencia en línea con diseños web impactantes y funcionales.",
                    ]}
                    onDelete={deleting}
                    typeSpeed={30}
                  />
                </p>
                )}
                {position === 2 && (
                  <p
                  className={`font-light ${sizing.description} text-white  md:leading-tight`}
                >
                  <Typewriter
                    words={[
                      "En Gato transformamos tus redes sociales en fuentes de conversión.",
                    ]}
                    onDelete={deleting}
                    typeSpeed={30}
                  />
                </p>
                )}
                
              </div>
              
            </div>
            
          </div>
          <a href="#collage" className="scrollDown opacity-100 absolute bottom-10 left-1/2 w-[45px] h-[70px] flex justify-center">
            <span className="bg-white  relative"></span>
        </a>

        

        {/* //todo data about company */}
        {/* <div className=" p- text-slate-700 z-0  flex flex-col gap-8 text-right">
          <div className="flex flex-col">
            <span className="text-[4rem] ">
              {" "}
              <CountUp end={40} />
            </span>
            <span className="opacity-80  font-light">Años en el mercado</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[4rem] ">
              <CountUp end={300} />
            </span>
            <span className="opacity-80  font-light">
              {" "}
              Proyectos realizados
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[4rem] ">
              <CountUp end={10} />
            </span>
            <span className="opacity-80  font-light">Colaboradores</span>
          </div>
        </div> */}

        {/* <div className=" hidden md:flex text-slate-700 z-0     text-right  justify-center  ">
          <img className="w-[40rem] floating-image" src="banner.png" alt="" />
        </div> */}

        {/*  */}
      </div>
    </section>
  );
}

export default Banner;
