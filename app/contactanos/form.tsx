"use client";

import axios from "axios";
import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import React, { FormEvent, useEffect, useState } from "react";

function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    service: "Marketing Digital",
    message: "",
  });

  const [isSubmiting, setIsSubmiting] = useState(false);

  async function captureTokenDynamic() {
    try {
      const response: any = await axios.post(
        "https://palegreen-anteater-636608.hostingersite.com/wp-json/jwt-auth/v1/token",
        {
          username: process.env.NEXT_PUBLIC_EMAIL,
          password: process.env.NEXT_PUBLIC_PASSWORD,
        }
      );
      return response.data.token;
    } catch (error) {}
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmiting(true);

    try {
      const token = await captureTokenDynamic();
      await axios.post(
        "https://palegreen-anteater-636608.hostingersite.com/wp-json/api/v1/send-mail/",
        data,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setIsSubmiting(false);
    } catch (error) {
      setIsSubmiting(false);
    }
  }

  // todo -> algoritmo de validacion por tiempo de envio del ultimo correo

  return (
    <section className="w-full min-h-screen  overflow-hidden">
      {/* <div className="md:min-h-screen min-h-[28rem]    flex bg-gray-100  relative">
        <div className=" md:min-h-screen h-full  overflow-hidden min-h-[28rem] absolute">
          <img
            className="w-screen  md:min-h-screen h-full min-h-[28rem] object-cover  overflow-hidden filter brightness-50"
            src="https://images.pexels.com/photos/2506947/pexels-photo-2506947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ></img>
        </div>
        <div className="xl:px-24 md:px-20 pb-16 md:pb-0 px-8 md:pt-12 pt-8">
          <RevealWrapper origin="left" duration={1500} className={"w-full"}>
            <span className="text-sky-400   xl:text-[7rem] md:text-[4rem] text-[3rem] ">
              Empecemos un nuevo objetivo juntos
            </span>
          </RevealWrapper>
          <RevealWrapper
            origin="left"
            duration={1500}
            className={"w-full mt-16"}
          >
            <span className=" font-light xl:text-4xl md:text-3xl text-xl text-gray-200">
              De la mano con las mejores tecnologías y especialitas, cumpliremos
              tus objetivos en logros.
            </span>
          </RevealWrapper>

          <div className="absolute inset-x-0 mx-auto max-w-sm  p-4 bottom-0 text-center ">
            <Link
              href={"#form"}
              className="floating-image text-sky-400  text-xl "
            >
              <span className="animate-pulse">Ir a solicitar</span>
            </Link>
          </div>
        </div>
      </div> */}

      <div
        className=" xl:px-20 md:px-16  px-8 grid  py-16 flex-col bg-gray-100 md:grid-cols-2 grid-cols-1 md:gap-16 gap-8"
        id="form"
      >
        <RevealWrapper origin="left" duration={1500} className={"w-full"}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487.679954499555!2d-77.05940564981158!3d-12.08202653644688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c90177c3f1ef%3A0xb310bcab75dd79dc!2sOficina%20PU!5e0!3m2!1ses-419!2spe!4v1714748493128!5m2!1ses-419!2spe"
            className="w-full h-[30rem] border"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </RevealWrapper>
        <RevealWrapper origin="right" duration={1500} className={"w-full"}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <h1 className="text-xl">Escribenos</h1>
            </div>
            <div className="flex flex-col gap-4">
              <input
                className="border p-2 outline-none w-full rounded-lg"
                placeholder="Nombres"
                type="text"
                defaultValue={data.name}
                required
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
              <input
                className="border p-2 outline-none w-full rounded-lg"
                placeholder="Correo"
                type="email"
                defaultValue={data.email}
                required
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              <select
                className="border p-2 outline-none w-full rounded-lg"
                defaultValue={data.service}
                onChange={(e) => setData({ ...data, service: e.target.value })}
              >
                <option value="Marketing Digital">Marketing Digital</option>
                <option value="Branding">Branding</option>
                <option value="Diseno Web">Diseno Web</option>
                <option value="Desarrollo de Software">
                  Desarrollo de Software
                </option>
                <option value="Desarrollo Movil">Desarrollo Movil</option>
              </select>
              <textarea
                defaultValue={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
                className="border p-2 outline-none w-full rounded-lg"
                placeholder="Cuentanos su idea"
              />
              <button
                className={`rounded-lg bg-blue-500 text-white px-4 py-2 w-fit ${
                  isSubmiting && "opacity-90 cursor-not-allowed"
                }`}
                disabled={isSubmiting}
              >
                Solicitar
              </button>
            </div>
          </form>
        </RevealWrapper>
      </div>
    </section>
  );
}

export default Form;
