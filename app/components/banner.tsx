"use client";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import CountUp from "react-countup";
import { useMediaQueries } from "@react-hook/media-query";
import { TypeAnimation } from "react-type-animation";

function Banner() {
  // todo -> define states

  const { matches, matchesAny, matchesAll } = useMediaQueries({
    screen: "screen",
    width: "(min-width: 400px)",
  });

  console.log(matches);
  const words = [
    "Desarrollo de Software",
    "Desarrollo web",
    "Marketing Digital",
  ];

  const bg_colors = ["bg-[#007CF8]", "bg-[#0BC2E1]", "bg-[#A52DE6]"];

  const sizing = {
    title: "xl:text-[5rem] md:text-[3rem] sm:text-[2rem] text-[2rem]",
    description: "xl:text-4xl md:text-[2rem] sm:text-[2rem] text-[1rem]",
  };

  const [iterator, setIterator] = useState(0);

  const [colorSelected, setColorSelected] = useState(bg_colors[0]);

  const [position, setPosition] = useState(0);

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
    <section className=" md:min-h-screen min-h-[25rem]  bg-gray-100 relative">
      {/* this is decorator */}
      <div className="absolute w-full md:min-h-screen min-h-[25rem]  bg-red-100 md:max-h-screen overflow-hidden ">
        {/* <video
          autoPlay
          muted
          loop
          className="w-full md:min-h-screen min-h-[25rem] object-cover  overflow-hidden"
          src="https://videos.pexels.com/video-files/5495900/5495900-hd_1920_1080_30fps.mp4"
        ></video> */}
        <img
          className="w-full md:min-h-screen min-h-[25rem] object-cover  overflow-hidden"
          src="banner_gato.jpg"
          alt=""
        />{" "}
      </div>

      {/*  */}
      <div className="xl:px-40 md:px-20 sm:px-12  px-8 flex  py-4 pt-20 relative">
        {position === 0 && (
          <div className="w-full flex flex-col animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal">
            <div className="flex flex-col animate-fade-right ">
              <h1 className={`${sizing.title} text-black w-full font-semibold`}>
                Agencia de{" "}
              </h1>

              <div className="flex flex-col gap-2">
                <span
                  className={` ${sizing.title} text-white  px-1 w-fit font-semibold   leading-1	`}
                >
                  {/* <Typewriter
                    words={["Desarrollo de software"]}
                    onDelete={deleting}
                    typeSpeed={70}
                  /> */}

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
                </span>
              </div>
            </div>

            {/* //todo carousel or transition images  --------------------- */}

            <div className="flex gap-4  justify-start mt-12 ">
              <div className="w-full flex justify-between xl:pr-32 pr-12">
                <p
                  // className={`font-light ${sizing.description} text-[#7A7678]`}
                  className={`font-light ${sizing.description} text-white`}
                >
                  <Typewriter
                    words={[
                      "En Genius, somos expertos en el desarrollo de software a medida que impulsa la innovación y la eficiencia en tu empresa.",
                    ]}
                    onDelete={deleting}
                    typeSpeed={30}
                  />
                </p>
              </div>
            </div>
          </div>
        )}

        {position === 1 && (
          <div className="w-full flex flex-col animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal">
            <div className="flex flex-col  animate-fade-right  ">
              <h1 className={`${sizing.title} text-black w-full font-semibold`}>
                Agencia de{" "}
              </h1>

              <div className="flex flex-col gap-2">
                <span
                  className={` ${sizing.title} text-white  px-1 w-fit font-semibold   leading-1	`}
                >
                  {/* <Typewriter
                    words={["Desarrollo de software"]}
                    onDelete={deleting}
                    typeSpeed={70}
                  /> */}

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
                </span>
              </div>
            </div>

            {/* //todo carousel or transition images  --------------------- */}

            <div className="flex gap-4  justify-start mt-12 ">
              <div className="w-full flex justify-between xl:pr-32 pr-12 ">
                <p className={`font-light ${sizing.description} text-white`}>
                  <Typewriter
                    words={[
                      "En Genius, nos especializamos en el desarrollo web de vanguardia que potencia la presencia en línea de tu empresa.",
                    ]}
                    onDelete={deleting}
                    typeSpeed={30}
                  />
                </p>
              </div>
            </div>
          </div>
        )}

        {position === 2 && (
          <div className="w-full flex flex-col animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal">
            <div className="flex flex-col animate-fade-right animate-duration-500  ">
              <h1 className={`${sizing.title} text-black w-full font-semibold`}>
                Agencia de{" "}
              </h1>
              <div className="flex flex-col gap-2">
                <span
                  className={` ${sizing.title} text-white  px-1 w-fit font-semibold   leading-1	`}
                >
                  {/* <Typewriter
                    words={["Desarrollo de software"]}
                    onDelete={deleting}
                    typeSpeed={70}
                  /> */}

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
                </span>
              </div>
            </div>

            {/* //todo carousel or transition images  --------------------- */}

            <div className="flex gap-4  justify-start mt-12 ">
              <div className="w-full flex justify-between xl:pr-32 pr-12">
                <p className={`font-light ${sizing.description} text-white`}>
                  <Typewriter
                    words={[
                      "En Genius, te ofrecemos orientación experta para optimizar tus estrategias de marketing y maximizar el retorno de inversión en cada iniciativa.",
                    ]}
                    onDelete={deleting}
                    typeSpeed={30}
                  />
                </p>
              </div>
            </div>
          </div>
        )}

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
