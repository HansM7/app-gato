"use client";

import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import React, { useState } from "react";

function Colaborators() {
  const data = [
    {
      id: 1,
      slug: "naturmed-peru",
      title: "Naturmed Peru",
    },
    {
      id: 2,
      slug: "medical-phone",
      title: "Medical Phone",
    },
    {
      id: 3,
      slug: "vivir-salud",
      title: "Vivir Salud",
    },
  ];

  return (
    <div className="w-full xl:px-24 md:px-16  px-8  min-h-screen flex flex-col pt-16 pb-32 bg-gray-100  ">
      <div className="flex justify-center">
        <RevealWrapper origin="top" duration={1000}>
          <span className="text-[3rem]  ">Casos de éxito</span>
        </RevealWrapper>
      </div>
      <div className="flex flex-col items-center mt-8 gap-8">
        <div className="grid xl:grid-cols-3 grid-cols-2   gap-8">
          {data.map((item, index) => (
            <RevealWrapper
              origin="bottom"
              duration={1000}
              className={"min-h-96"}
            >
              <Link href={"/clientes/" + item.slug} className="h-96 relative">
                <div className="overflow-hidden group h-full relative">
                  <img
                    className="w-full h-full object-cover filter brightness-[30%] group-hover:scale-110 transition-all"
                    src="https://images.pexels.com/photos/7375/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />

                  <div className="absolute inset-0 flex flex-col justify-between  z-10  gap-4 ">
                    <div className="px-4 py-8 flex flex-col gap-4">
                      <span className="xl:text-xl text-sm bg-violet-300 w-full opacity-70 py-1">
                        {item.title}
                      </span>
                      <h3 className="text-white xl:text-3xl text-lg font-semibold">
                        Desarrollo de software
                      </h3>
                      <p className="text-gray-200 font-light">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Consequatur inventore maiores magnam veritatis,
                        provident odio distinctio beatae laudantium deleniti
                        repudiandae harum, qui, a voluptatibus neque mollitia
                        natus tempora impedit dicta!
                      </p>
                    </div>
                    <div className="text-white pt-2 -mt-1   text-sm  justify-center w-full bg-violet-600 hidden group-hover:flex animate-fade-up animate-ease-in-out ">
                      <span className="">Click para ver mas detalles</span>
                      <br />
                    </div>
                  </div>
                </div>
              </Link>
            </RevealWrapper>
          ))}
          {/* <RevealWrapper origin="bottom" duration={1000}>
            <Link href={""} className="h-96 relative">
              <div className="overflow-hidden group h-full relative">
                <img
                  className="w-full h-full object-cover filter brightness-[30%] group-hover:scale-110 transition-all"
                  src="https://images.pexels.com/photos/7375/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />

                <div className="absolute inset-0 flex flex-col px-4 py-8  z-10  gap-4">
                  <span className="text-xl bg-violet-300 w-full opacity-70 py-1">
                    Naturmed Peru
                  </span>
                  <h3 className="text-white text-3xl">
                    Desarrollo de software
                  </h3>
                  <p className="text-gray-200">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consequatur inventore maiores magnam veritatis, provident
                    odio distinctio beatae laudantium deleniti repudiandae
                    harum, qui, a voluptatibus neque mollitia natus tempora
                    impedit dicta!
                  </p>
                  <div className="text-violet-300 p-2 hidden group-hover:flex animate-fade-right ">
                    Click para ver mas detalles
                  </div>
                </div>
              </div>
            </Link>
          </RevealWrapper>
          <RevealWrapper origin="bottom" duration={1000}>
            <Link href={""} className="h-96 relative">
              <div className="overflow-hidden group h-full relative">
                <img
                  className="w-full h-full object-cover filter brightness-[30%] group-hover:scale-110 transition-all"
                  src="https://images.pexels.com/photos/7375/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />

                <div className="absolute inset-0 flex flex-col px-4 py-8  z-10  gap-4">
                  <span className="text-xl bg-violet-300 w-full opacity-70 py-1">
                    Naturmed Peru
                  </span>
                  <h3 className="text-white text-3xl">
                    Desarrollo de software
                  </h3>
                  <p className="text-gray-200">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consequatur inventore maiores magnam veritatis, provident
                    odio distinctio beatae laudantium deleniti repudiandae
                    harum, qui, a voluptatibus neque mollitia natus tempora
                    impedit dicta!
                  </p>
                  <div className="text-violet-300 p-2 hidden group-hover:flex animate-fade-right ">
                    Click para ver mas detalles
                  </div>
                </div>
              </div>
            </Link>
          </RevealWrapper>
          <RevealWrapper origin="bottom" duration={1000}>
            <Link href={""} className="h-96 relative">
              <div className="overflow-hidden group h-full relative">
                <img
                  className="w-full h-full object-cover filter brightness-[30%] group-hover:scale-110 transition-all"
                  src="https://images.pexels.com/photos/7375/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />

                <div className="absolute inset-0 flex flex-col px-4 py-8  z-10  gap-4">
                  <span className="text-xl bg-violet-300 w-full opacity-70 py-1">
                    Naturmed Peru
                  </span>
                  <h3 className="text-white text-3xl">
                    Desarrollo de software
                  </h3>
                  <p className="text-gray-200">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consequatur inventore maiores magnam veritatis, provident
                    odio distinctio beatae laudantium deleniti repudiandae
                    harum, qui, a voluptatibus neque mollitia natus tempora
                    impedit dicta!
                  </p>
                  <div className="text-violet-300 p-2 hidden group-hover:flex animate-fade-right ">
                    Click para ver mas detalles
                  </div>
                </div>
              </div>
            </Link>
          </RevealWrapper> */}
        </div>

        {/* <RevealWrapper origin="left" duration={1000}>
          <div className="grid grid-cols-3 bg-white p-4 rounded-md group overflow-hidden">
            <div className="col-span-2 flex flex-col gap-4">
              <h3 className="font-semibold text-xl">Proyecto Web</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                fuga incidunt nisi, iure suscipit nobis iusto dolor aliquid at
                deleniti aliquam ducimus veritatis quidem! Eos minus laudantium
                iure eaque fugiat?
              </p>
              <Link
                href={""}
                className="hidden group-hover:flex text-blue-600 underline w-fit "
              >
                <span className="transition-all animate-fade-right">
                  Conocer mas
                </span>
              </Link>
            </div>
            <div className="col-span-1 flex justify-center">
              <img
                className="h-48  rounded-xl"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgLXwiDQusHqu4zMuvEVnBUv04xNZlSQjc5gyKlT7XQ&s"
                alt=""
              />
            </div>
          </div>
        </RevealWrapper>

        <RevealWrapper origin="left" duration={1000}>
          <div className="grid grid-cols-3 bg-white p-4 rounded-md group overflow-hidden">
            <div className="col-span-2 flex flex-col gap-4">
              <h3 className="font-semibold text-xl">Proyecto Web</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                fuga incidunt nisi, iure suscipit nobis iusto dolor aliquid at
                deleniti aliquam ducimus veritatis quidem! Eos minus laudantium
                iure eaque fugiat?
              </p>
              <Link
                href={""}
                className="hidden group-hover:flex text-blue-600 underline w-fit "
              >
                <span className="transition-all animate-fade-right">
                  Conocer mas
                </span>
              </Link>
            </div>
            <div className="col-span-1 flex justify-center">
              <img
                className="h-48  rounded-xl"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgLXwiDQusHqu4zMuvEVnBUv04xNZlSQjc5gyKlT7XQ&s"
                alt=""
              />
            </div>
          </div>
        </RevealWrapper> */}
      </div>

      {/* modal detail team */}
    </div>
  );
}

export default Colaborators;
