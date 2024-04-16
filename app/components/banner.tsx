"use client";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import CountUp from "react-countup";

function Banner() {
  // todo -> define states
  const words = [
    "Desarrollo de Software",
    "Desarrollo web",
    "Marketing Digital",
  ];

  const bg_colors = ["bg-[#007CF8]", "bg-[#0BC2E1]", "bg-[#A52DE6]"];

  const sizing = {
    title: "xl:text-[5rem] md:text-[4rem] sm:text-[3rem] text-[3rem]",
    description: "xl:text-[3rem] md:text-[2rem] sm:text-[2rem] text-[2rem]",
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
    <section className=" min-h-screen  bg-gray-100 ">
      <div className="xl:px-40 md:px-20 sm:px-12  px-8 flex  py-4 pt-20">
        {position === 0 && (
          <div className="w-full flex flex-col animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal">
            <div className="flex flex-col animate-fade-right ">
              <h1 className={`${sizing.title} text-black w-full`}>
                Agencia de{" "}
              </h1>

              <span
                className={`w-fit ${sizing.title} px-1 text-white  font-semibold  ${bg_colors[position]}`}
              >
                <Typewriter
                  words={[words[position]]}
                  onDelete={deleting}
                  typeSpeed={70}
                />
              </span>
            </div>

            {/* //todo carousel or transition images  --------------------- */}

            <div className="flex gap-4  justify-start mt-12 ">
              <div className="w-full flex justify-between xl:pr-32 pr-12">
                <p
                  className={`font-light ${sizing.description} text-[#7A7678]`}
                >
                  {/* En Genius te asesoramos para tomar la mejor decisión y
                  orientar tu presupuesto a los productos que mayor retorno
                  brindarán a tu empresa. */}

                  <Typewriter
                    words={[
                      "En Genius, somos expertos en el desarrollo de software a medida que impulsa la innovación y la eficiencia en tu empresa.",
                    ]}
                    onDelete={deleting}
                    typeSpeed={30}
                  />
                </p>
                {/* <img
                  className="h-[14rem]"
                  src="https://png.pngtree.com/png-clipart/20221006/original/pngtree-working-cat-png-image_8661191.png"
                  alt=""
                /> */}
              </div>

              {/* <div className=" ">
                <img
                  // className="rounded-full min-w-[18rem] "
                  className="rounded-3xl w-[55rem] "
                  src="animation-cat.gif "
                  alt=""
                />
              </div> */}
            </div>
          </div>
        )}

        {position === 1 && (
          <div className="w-full flex flex-col animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal">
            <div className="flex flex-col  animate-fade-right  ">
              <h1 className={`${sizing.title} text-black w-full`}>
                Agencia de{" "}
              </h1>

              <span
                className={`${sizing.title} text-white  px-1 w-fit font-semibold  ${bg_colors[position]}`}
              >
                <Typewriter
                  words={[words[position]]}
                  onDelete={deleting}
                  typeSpeed={70}
                />
              </span>
            </div>

            {/* //todo carousel or transition images  --------------------- */}

            <div className="flex gap-4  justify-start mt-12 ">
              <div className="w-full flex justify-between xl:pr-32 pr-12 ">
                <p
                  className={`font-light ${sizing.description} text-[#7A7678]`}
                >
                  <Typewriter
                    words={[
                      "En Genius, nos especializamos en el desarrollo web de vanguardia que potencia la presencia en línea de tu empresa.",
                    ]}
                    onDelete={deleting}
                    typeSpeed={30}
                  />
                </p>
                {/* <img
                  src="https://images.creativefabrica.com/products/thumbnails/2023/10/02/PDnV1GAQB/2WDK2dm2ymmVNuKA4dVhyQrJkCM.png"
                  alt=""
                /> */}
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
            <div className="flex flex-col animate-fade-right animate-duration-500  ">
              <h1 className={`${sizing.title} text-black w-full`}>
                Agencia de{" "}
              </h1>
              <span
                className={` ${sizing.title} text-white  px-1 w-fit font-semibold  ${bg_colors[position]} leading-1	`}
              >
                <Typewriter
                  words={[words[position]]}
                  onDelete={deleting}
                  typeSpeed={70}
                />
              </span>
            </div>

            {/* //todo carousel or transition images  --------------------- */}

            <div className="flex gap-4  justify-start mt-12 ">
              <div className="w-full flex justify-between xl:pr-32 pr-12">
                <p
                  className={`font-light ${sizing.description} text-[#7A7678]`}
                >
                  <Typewriter
                    words={[
                      "En Genius, te ofrecemos orientación experta para optimizar tus estrategias de marketing y maximizar el retorno de inversión en cada iniciativa.",
                    ]}
                    onDelete={deleting}
                    typeSpeed={30}
                  />
                </p>
                {/* <img
                  src="https://images.creativefabrica.com/products/thumbnails/2023/10/06/dbijaL9Uz/2WNuDaTVq8gEWWBD5Cwl1WWqe7Y.png"
                  alt=""
                /> */}
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

        <div className=" hidden md:flex text-slate-700 z-0    gap-8 text-right  justify-center pt-20 ">
          <img
            className="w-[26rem] h-[28rem]"
            src="https://img1.picmix.com/output/stamp/normal/6/8/9/8/1868986_4d8e5.gif"
            alt=""
          />
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
