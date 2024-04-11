"use client";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import CountUp from "react-countup";

function Banner() {
  // todo -> define states
  const words = ["Desarrollo de Software", "Desarrollo web", "Marketing"];

  const bg_colors = ["bg-[#007CF8]", "bg-[#0BC2E1]", "bg-[#A52DE6]"];

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
    <section className=" min-h-screen">
      <div className="xl:px-44 md:px-28  px-8 flex  py-4 pt-20">
        {position === 0 && (
          <div className="w-full flex flex-col animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal">
            <div className="flex flex-col animate-fade-right ">
              <h1 className="xl:text-[4rem] md:text-[4rem] text-white w-full">
                Agencia de{" "}
              </h1>
              <br />

              <span
                className={` xl:text-[4rem] md:text-[2rem]  ml-2 px-1 w-fit font-semibold  ${bg_colors[position]}`}
              >
                <Typewriter
                  words={[words[position]]}
                  onDelete={deleting}
                  typeSpeed={50}
                />
              </span>
            </div>

            {/* //todo carousel or transition images  --------------------- */}

            <div className="flex gap-4  justify-start mt-4 ">
              <div className="xl:pr-36 md:pr-20 pt-16">
                <p className="text-white font-light text-2xl ">
                  {/* En Genius te asesoramos para tomar la mejor decisión y
                  orientar tu presupuesto a los productos que mayor retorno
                  brindarán a tu empresa. */}
                  En Genius, somos expertos en el desarrollo de software a
                  medida que impulsa la innovación y la eficiencia en tu
                  empresa. Nuestro equipo de ingenieros trabaja en colaboración
                  contigo para crear soluciones de software robustas y
                  escalables que se adapten perfectamente a tus necesidades
                  empresariales y te ayuden a alcanzar tus metas.
                </p>
              </div>

              {/* <div className=" ">
                <img
                  // className="rounded-full min-w-[18rem] "
                  className="rounded-3xl w-[55rem] "
                  src="https://static.wixstatic.com/media/377bd9_e2045c531cb5435eadad4a35b31bd05b~mv2.gif "
                  alt=""
                />
              </div> */}
            </div>
          </div>
        )}

        {position === 1 && (
          <div className="w-full flex flex-col animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal">
            <div className="flex  animate-fade-right  ">
              <h1 className="xl:text-[4rem] md:text-[4rem] text-white">
                Agencia de{" "}
              </h1>

              <span
                className={` xl:text-[4rem] md:text-[2rem]  ml-2 px-1 w-fit font-semibold  ${bg_colors[position]}`}
              >
                <Typewriter
                  words={[words[position]]}
                  onDelete={deleting}
                  typeSpeed={50}
                />
              </span>
            </div>

            {/* //todo carousel or transition images  --------------------- */}

            <div className="flex gap-4  justify-start mt-4 ">
              <div className="xl:pr-36 md:pr-20 pt-16">
                <p className="text-white font-light text-2xl ">
                  En Genius, nos especializamos en el desarrollo web de
                  vanguardia que potencia la presencia en línea de tu empresa.
                  Con nuestra experiencia técnica y creatividad, creamos
                  soluciones web personalizadas que destacan tu marca y generan
                  resultados tangibles para tu negocio.
                </p>
              </div>

              {/* <div className=" ">
                <img
                  // className="rounded-full min-w-[18rem] "
                  className="rounded-3xl w-[55rem] "
                  src="https://static.wixstatic.com/media/377bd9_e2045c531cb5435eadad4a35b31bd05b~mv2.gif "
                  alt=""
                />
              </div> */}
            </div>
          </div>
        )}

        {position === 2 && (
          <div className="w-full flex flex-col animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal">
            <div className="flex  animate-fade-right animate-duration-500  ">
              <h1 className="xl:text-[4rem] md:text-[4rem] text-white">
                Agencia de{" "}
              </h1>

              <span
                className={` xl:text-[4rem] md:text-[2rem]  ml-2 px-1 w-fit font-semibold  ${bg_colors[position]}`}
              >
                <Typewriter
                  words={[words[position]]}
                  onDelete={deleting}
                  typeSpeed={50}
                />
              </span>
            </div>

            {/* //todo carousel or transition images  --------------------- */}

            <div className="flex gap-4  justify-start mt-4 ">
              <div className="xl:pr-36 md:pr-20 pt-16">
                <p className="text-white font-light text-2xl ">
                  En Genius, te ofrecemos orientación experta para optimizar tus
                  estrategias de marketing y maximizar el retorno de inversión
                  en cada iniciativa. Nuestro equipo especializado te guiará
                  para tomar decisiones informadas y alcanzar tus objetivos
                  comerciales con eficacia.
                </p>
              </div>

              {/* <div className=" ">
                <img
                  // className="rounded-full min-w-[18rem] "
                  className="rounded-3xl w-[55rem] "
                  src="https://static.wixstatic.com/media/377bd9_e2045c531cb5435eadad4a35b31bd05b~mv2.gif "
                  alt=""
                />
              </div> */}
            </div>
          </div>
        )}

        {/* //todo data about company */}
        <div className=" p- text-white z-0  flex flex-col gap-8 text-right">
          <div className="flex flex-col">
            <span className="text-4xl ">
              {" "}
              <CountUp end={40} />
            </span>
            <span className="opacity-80 text-sm font-light">
              Años en el mercado
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl ">
              <CountUp end={300} />
            </span>
            <span className="opacity-80 text-sm font-light">
              {" "}
              Proyectos realizados
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl ">
              <CountUp end={10} />
            </span>
            <span className="opacity-80 text-sm font-light">Colaboradores</span>
          </div>
        </div>
      </div>

      {/* //todo carousel or transition images  --------------------- */}

      {/* <div className="flex gap-4  justify-start mt-4">
        <AwesomeSlider className="px-4" organicArrows={false} bullets={false}>
          <div>
            <img
              className="w-screen"
              src="https://www.vinccihoteles.com/blog-expert/wp-content/uploads/2022/05/reunion-1024x682.jpg"
              alt=""
            />
          </div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </AwesomeSlider>
      </div> */}
    </section>
  );
}

export default Banner;
