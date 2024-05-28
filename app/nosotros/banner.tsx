"use client";

import { RevealWrapper } from "next-reveal";
import { Typewriter } from "react-simple-typewriter";

function BannerAbout() {
  return (
    <section className="md:min-h-screen  h-full  flex bg-gray-100  relative ">
      <div className=" md:min-h-screen h-full  overflow-hidden min-h-[28rem] absolute">
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
          <div className="  flex flex-col  ">
            {/* <span className="text-gray-200 xl:text-[5rem] md:text-[4rem] text-[3rem] h-fit">
              Somos
            </span> */}

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
      </div>
    </section>
  );
}

export default BannerAbout;
