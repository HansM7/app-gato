"use client";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

function Banner() {
  const words = ["Desarrollo de Software", "Desarrollo web", "Marketing"];

  const bg_colors = ["bg-[#007CF8]", "bg-[#0BC2E1]", "bg-[#A52DE6]"];

  const [iterator, setIterator] = useState(0);

  const [colorSelected, setColorSelected] = useState(bg_colors[0]);

  function deleting() {
    setIterator(iterator + 1);

    if (iterator === 21) {
      setColorSelected(bg_colors[1]);
    } else if (iterator === 35) {
      setColorSelected(bg_colors[2]);
    }
  }

  return (
    <section className="xl:px-52 md:px-28  px-8 flex  py-4 pt-20">
      <div className="w-full flex flex-col">
        <div className="flex">
          <h1 className="xl:text-[3rem] md:text-[2rem] ">Agencia de </h1>
          <span
            className={`xl:text-[3rem] md:text-[2rem]  ml-2 px-1 ${colorSelected}`}
          >
            <Typewriter
              words={words}
              // onType={() => {
              //   console.log("type....");
              // }}
              // onLoopDone={() => {
              //   console.log("down");
              // }}
              onDelete={deleting}
              typeSpeed={50}
            />
          </span>
        </div>
        <div className="flex gap-4  justify-start mt-4">
          <div className="xl:pr-36 md:pr-20 pt-16">
            <p className="text-[#7A7678] font-light text-2xl">
              En Genius te asesoramos para tomar la mejor decisión y orientar tu
              presupuesto a los productos que mayor retorno brindarán a tu
              empresa.
            </p>
          </div>

          <div className="">
            <img
              className="rounded-full min-w-[18rem] "
              src="https://gestion.pe/resizer/SJKSRXdfehWOIsd6j_4Gnbcy_lE=/1200x1200/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/SQE2S74DKRAHPPLHWHHKYTEDEM.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
