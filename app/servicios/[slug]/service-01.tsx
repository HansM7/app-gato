"use client";

import { RevealWrapper } from "next-reveal";
import { useState } from "react";

function Service01() {
  const [step, setStep] = useState(1);

  return (
    <section className="w-full min-h-screen  overflow-hidden">
      <div className="min-h-screen xl:px-80 md:px-28  px-8 flex bg-gray-100 pt-16 flex-col pb-16">
        <div className="flex gap-16 items-center">
          <div className="flex flex-col">
            <RevealWrapper origin="left" duration={1500} className={"w-full"}>
              <h1 className="xl:text-[5rem] md:text-[4rem] font-semibold">
                Marketing
              </h1>
            </RevealWrapper>
            <RevealWrapper origin="right" duration={1500} className={"w-full"}>
              <h1 className="xl:text-[5rem] md:text-[4rem] ">Digital</h1>
            </RevealWrapper>
          </div>
          <div className="w-fit">
            <RevealWrapper origin="top" duration={1500} className={"w-full"}>
              <img
                className="w-96"
                src="https://images.vexels.com/media/users/3/215556/isolated/preview/56cab15c9dd85351a1546bdfa86b9dd6-gato-acostado-mullido-plano.png"
                alt=""
              />
            </RevealWrapper>
          </div>
        </div>

        <RevealWrapper origin="left" duration={1500} className={"w-full"}>
          <p className="text-2xl text-slate-600">
            Nuestros servicios de Marketing Digital te ayudarán a lograr tus
            objetivos de negocio a través de estrategias personalizadas para
            cada plataforma. Creamos contenido atractivo y relevante que cautiva
            a tu público objetivo, implementamos campañas de pago por clic y
            marketing de influencers para ampliar tu alcance, y analizamos
            constantemente los resultados para optimizar tus inversiones
            inversiones.
          </p>
        </RevealWrapper>
        <RevealWrapper origin="right" duration={1500} className={"w-full"}>
          {/* <div className="">
            <img
              className="w-full "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHZ9nZyE2bXxKITFeUCu98ewZTqMP1o6LAdb_uDMG-jjXmmPd5lPGGhR36ZbzpO8EZ4Y&usqp=CAU "
              alt=""
            />
          </div> */}
          <div className="flex flex-col mt-16">
            <div className="flex justify-between">
              <div
                onClick={() => setStep(1)}
                className={`rounded-full ${
                  step === 1 ? "bg-[#0A86ED]" : "bg-white"
                } border border-[#0A86ED] p-3  w-36 h-36 flex justify-center items-center`}
                role="button"
              >
                <span>Step 1</span>
              </div>
              <div
                onClick={() => setStep(2)}
                className={`rounded-full ${
                  step === 2 ? "bg-[#0A86ED]" : "bg-white"
                } border border-[#0A86ED] p-3  w-36 h-36 flex justify-center items-center`}
                role="button"
              >
                <span>Step 2</span>
              </div>
              <div
                onClick={() => setStep(3)}
                className={`rounded-full ${
                  step === 3 ? "bg-[#0A86ED]" : "bg-white"
                } border border-[#0A86ED] p-3  w-36 h-36 flex justify-center items-center`}
                role="button"
              >
                <span>Step 3</span>
              </div>
            </div>

            <div className="mt-8">
              {step === 1 && (
                <RevealWrapper
                  origin="left"
                  duration={1500}
                  className={"w-full"}
                >
                  <div className="mt-12 grid grid-cols-2">
                    <div className="">
                      <span className="text-3xl">Diseño y color</span>
                    </div>
                    <div>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Dicta aspernatur atque repellat sequi, vitae,
                        facilis nihil natus similique delectus pariatur
                        exercitationem soluta, perferendis modi placeat
                        accusantium dolorem nulla sed temporibus!
                      </p>
                    </div>
                  </div>
                  <img
                    className="w-full mt-8"
                    src="https://img.freepik.com/vector-gratis/banner-marketing-digital_157027-1372.jpg"
                    alt=""
                  />
                </RevealWrapper>
              )}
              {step === 2 && (
                <RevealWrapper
                  origin="left"
                  duration={1500}
                  className={"w-full"}
                >
                  <div className="mt-12 grid grid-cols-2">
                    <div className="">
                      <span className="text-3xl">Diseño y color</span>
                    </div>
                    <div>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Dicta aspernatur atque repellat sequi, vitae,
                        facilis nihil natus similique delectus pariatur
                        exercitationem soluta, perferendis modi placeat
                        accusantium dolorem nulla sed temporibus!
                      </p>
                    </div>
                  </div>
                  <img
                    className="w-full mt-8"
                    src="https://img.freepik.com/vector-gratis/banner-marketing-digital_157027-1372.jpg"
                    alt=""
                  />
                </RevealWrapper>
              )}
              {step === 3 && (
                <RevealWrapper
                  origin="left"
                  duration={1500}
                  className={"w-full"}
                >
                  <div className="mt-12 grid grid-cols-2">
                    <div className="">
                      <span className="text-3xl">Diseño y color</span>
                    </div>
                    <div>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Dicta aspernatur atque repellat sequi, vitae,
                        facilis nihil natus similique delectus pariatur
                        exercitationem soluta, perferendis modi placeat
                        accusantium dolorem nulla sed temporibus!
                      </p>
                    </div>
                  </div>
                  <img
                    className="w-full mt-8"
                    src="https://img.freepik.com/vector-gratis/banner-marketing-digital_157027-1372.jpg"
                    alt=""
                  />
                </RevealWrapper>
              )}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

export default Service01;
