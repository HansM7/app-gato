"use client";

import axios from "axios";
import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import React, { FormEvent, useEffect, useState } from "react";

import CountNumber from "../components/countNumber";

import ConfirmationModal from "./modal";


function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Marketing Digital",
    message: "",
  });

  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isEnter, setIsEnter] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  function handleEnter() {
    setIsEnter(true);
  }

  function handleLeave() {
    setIsEnter(false);
  }

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
    } catch (error) {
      setModalMessage("Error al capturar el token.");
      setIsModalOpen(true);
      throw error;
    }
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
      setModalMessage("Gracias por dejar tus datos, Un ejecutivo te contactara o puedes contactarnos.");
      setIsModalOpen(true);
    } catch (error) {
      setIsSubmiting(false);
      setModalMessage("Error al enviar el mensaje. Por favor, inténtelo de nuevo o contactenos");
      setIsModalOpen(true);
    }
  }

  return (
    <section className=" flex  py-16  w-full">
      <RevealWrapper
        origin="right"
        duration={1500}
        className={
          "max-w-[1920px] mx-auto w-full xl:px-32 md:px-24  px-8 flex justify-between gap-6 flex-col-reverse lg:flex-row"
        }
      >
        <div className="xl:w-3/5 lg:w-2/4 w-full items-center  flex flex-row">
          <img
            className="h-full object-cover w-full lg:max-w-[85%] rounded-xl shadow-md"
            src="https://i.pinimg.com/736x/d4/c3/fb/d4c3fbe8d97a0514ebe33641b8741f13.jpg"
            alt="imgen contactanos"
          />
          <div className="hidden bg-[#6D28D9] px-3 py-4 lg:flex lg:flex-col justify-center items-center w-fit lg:h-fit gap-6 shadow-md lg:rounded-none lg:rounded-r-xl  rounded-b-xl">
            <Link
              href={"https://www.instagram.com/genius_mkt_peru/"}
              target="_blank"
              className="flex justify-center items-center hover:scale-125 transition-all ease-in-out duration-300"
            >
              <svg
                className="w-[40px] object-contain"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100%"
                height="100%"
                viewBox="0 0 48 48"
              >
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                  cx="19.38"
                  cy="42.035"
                  r="44.899"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff"></stop>
                  <stop offset=".328" stopColor="#fff"></stop>
                  <stop offset=".348" stopColor="#fff"></stop>
                  <stop offset=".504" stopColor="#fff"></stop>
                  <stop offset=".643" stopColor="#fff"></stop>
                  <stop offset=".761" stopColor="#fff"></stop>
                  <stop offset=".841" stopColor="#fff"></stop>
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                ></path>
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                  cx="11.786"
                  cy="5.54"
                  r="29.813"
                  gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff"></stop>
                  <stop offset=".999" stopColor="#fff" stopOpacity="0"></stop>
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                ></path>
                <path
                  fill="#6D28D9"
                  d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                ></path>
                <circle cx="31.5" cy="16.5" r="1.5" fill="#6D28D9"></circle>
                <path
                  fill="#6D28D9"
                  d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                ></path>
              </svg>
            </Link>
            <Link
              href={"https://www.facebook.com/geniusper"}
              target="_blank"
              className="hover:scale-125 transition-all ease-in-out duration-300"
            >
              <svg
                className="w-[40px] object-contain"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100%"
                height="100%"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#fff"
                  d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                ></path>
                <path
                  fill="#6D28D9"
                  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                ></path>
              </svg>
            </Link>
            <Link
              href={"https://www.linkedin.com/company/geniusperu"}
              target="_blank"
              className="flex justify-center items-center hover:scale-125 transition-all ease-in-out duration-300"
            >
              <svg
                className="w-[40px] object-contain"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100%"
                height="100%"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#fff"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                ></path>
                <path
                  fill="#6D28D9"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full xl:w-2/5 lg:w-2/4 flex flex-col gap-6 text-[#3D3D3D]"
        >
          <div>
            <h2 className="text-3xl text-center   text-[#3D3D3D] font-medium uppercase">
              Contáctanos
            </h2>
          </div>
          <div className="flex justify-center items-center gap-6 text-[#686D76]">
            <div className="flex flex-col gap text-center items-center justify-center text-xl lg:text-2xl">
              <span className="text-[#6D28D9] font-bold flex items-center justify-center text-3xl">
                + <CountNumber n={100} />
              </span>
              <span className="text-lg">Clientes</span>
            </div>
            <div className="flex flex-col justify-center items-center gap text-center text-xl lg:text-2xl">
              <span className="text-[#6D28D9] font-bold flex justify-center text-3xl">
                + <CountNumber n={200} />
              </span>
              <span className="text-lg text-center mx-auto">Proyectos</span>
            </div>
          </div>
          <p>
            ¿Buscas llevar tu presencia en línea al siguiente nivel? En Gato,
            creamos experiencias digitales impactantes. Desde páginas web y
            aplicaciones móviles hasta estrategias de marketing y branding
            personalizadas. ¡Contáctanos y descubre cómo podemos ayudarte a
            destacar en la web!
          </p>
          <div className="flex flex-col gap-6 text-[#3D3D3D]">
            <div className="relative w-full">
              <input
                className="peer h-full w-full border-b border-[#3D3D3D] bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-[#3D3D3D] outline outline-0 transition-all placeholder-shown:border-[#3D3D3D] focus:border-[#3D3D3D] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                placeholder=""
                id="name"
                type="text"
                defaultValue={data.name}
                required
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
              <label
                htmlFor="name"
                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-[#3D3D3D] transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#3D3D3D] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-[#3D3D3D] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-[#3D3D3D]"
              >
                Nombres
              </label>
            </div>
            <div className="w-full flex gap-4">
            <div className="relative w-full lg:w-3/5">
              <input
                className="peer h-full w-full border-b border-[#3D3D3D] bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-[#3D3D3D] outline outline-0 transition-all placeholder-shown:border-[#3D3D3D] focus:border-[#3D3D3D] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                placeholder=""
                id="email"
                type="email"
                defaultValue={data.email}
                required
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              <label
                htmlFor="email"
                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-[#3D3D3D] transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#3D3D3D] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-[#3D3D3D] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-[#3D3D3D]"
              >
                Correo
              </label>
            </div>
            <div className="relative w-full lg:w-2/5">
              <input
                className="peer h-full w-full border-b border-[#3D3D3D] bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-[#3D3D3D] outline outline-0 transition-all placeholder-shown:border-[#3D3D3D] focus:border-[#3D3D3D] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                placeholder=""
                id="phone"
                type="text"
                maxLength={9}
                defaultValue={data.phone}
                required
                onChange={(e) => setData({ ...data, phone: e.target.value })}
              />
              <label
                htmlFor="email"
                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-[#3D3D3D] transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#3D3D3D] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-[#3D3D3D] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-[#3D3D3D]"
              >
                Número
              </label>
            </div>
            </div>
            
            <select
              className="h-full w-full border-b border-[#3D3D3D] bg-transparent pt-4 pb-1.5 font-sans  font-normal text-[#3D3D3D] outline outline-0 "
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
            <div className="relative w-full">
              <textarea
                className="resize-none peer  w-full border-b border-[#3D3D3D] bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-[#3D3D3D] outline outline-0 transition-all placeholder-shown:border-[#3D3D3D] focus:border-[#3D3D3D] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                rows={4}
                placeholder=""
                id="message"
                defaultValue={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
              />
              <label
                htmlFor="message"
                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-[#3D3D3D] transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#3D3D3D] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-[#3D3D3D] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-[#3D3D3D]"
              >
                Cuentanos tu idea
              </label>
            </div>
            <div
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              role="button"
              className={`mx-auto relative rounded-3xl py-3 pr-2  w-fit   font-semibold flex items-center   ${
                isEnter && " transition-all"
              } transition-all`}
            >
              <div
                className={`bg-[#6D28D9] rounded-full w-12 h-full absolute transition-all  ${
                  isEnter ? "w-full bg-opacity-100" : "bg-opacity-20"
                }`}
              ></div>
              <button
                disabled={isSubmiting}
                className={`pl-4   ${
                  isEnter ? "text-white z-10 text-lg" : "text-[#6D28D9] text-lg"
                } `}
              >
                Contratar servicios {">"}
              </button>
            </div>
          </div>
        </form>
        
      </RevealWrapper>
      <ConfirmationModal
        isOpen={isModalOpen}
        message={modalMessage}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}

export default Form;
