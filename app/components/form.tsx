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
  return (
   <section className="xl:px-32 md:px-24  px-8 flex  py-16  w-full border-b">
        <RevealWrapper origin="right" duration={1500} className={"w-full flex justify-between gap-6"}>
          <div className="w-2/4 flex items-center">
            <img className="w-full h-full object-cover" src="https://i.pinimg.com/736x/d4/c3/fb/d4c3fbe8d97a0514ebe33641b8741f13.jpg" alt="imgen contactanos" />
            <div className="bg-[#9747FF] px-3 py-4 flex flex-col justify-center items-center h-fit gap-6">
            <Link
              href={"https://www.instagram.com/genius_mkt_peru/"}
              target="_blank"
              className="hover:scale-125 transition-all ease-in-out duration-00"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="28"
                height="28"
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
                  <stop
                    offset=".999"
                    stopColor="#fff"
                    stopOpacity="0"
                  ></stop>
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                ></path>
                <path
                  fill="#9747FF"
                  d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                ></path>
                <circle cx="31.5" cy="16.5" r="1.5" fill="#9747FF"></circle>
                <path
                  fill="#9747FF"
                  d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                ></path>
              </svg>
            </Link>
            <Link href={"https://www.facebook.com/geniusper"} target="_blank"
            className="hover:scale-125 transition-all ease-in-out duration-00">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="28"
                height="28"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#fff"
                  d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                ></path>
                <path
                  fill="#9747FF"
                  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                ></path>
              </svg>
            </Link>

            <Link
              href={"https://www.linkedin.com/company/geniusperu"}
              target="_blank"
              className="hover:scale-125 transition-all ease-in-out duration-00"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#fff"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                ></path>
                <path
                  fill="#9747FF"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                ></path>
              </svg>
            </Link>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="w-2/4 flex flex-col gap-4 px-16">
            <div>
              <h2 className="text-xl">Contáctanos</h2>
            </div>
            <div className="flex gap-2 mx-auto">
              <div>
                <span>+3</span>
                <span>Años de experiencia</span>
              </div>
              <div>
                <span>+100</span>
                <span>clientes satisfechos</span>
              </div>
              <div>
                <span>+2000</span>
                <span>Seguidores en redes sociales</span>
              </div>
            </div>
            <p>¿Buscas llevar tu presencia en línea al siguiente nivel? En Gato, creamos experiencias digitales impactantes. Desde páginas web y aplicaciones móviles hasta estrategias de marketing y branding personalizadas. ¡Contáctanos y descubre cómo podemos ayudarte a destacar en la web!</p>
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
                className={`rounded-lg bg-[#6D28D9] text-white px-4 py-2 w-fit hover:bg-[#823CF0] transition-all duration-300 ease-in-out ${
                  isSubmiting && "opacity-90 cursor-not-allowed"
                }`}
                disabled={isSubmiting}
              >
                Solicitar
              </button>
            </div>
          </form>
        </RevealWrapper>
        
   </section>
  );
}

export default Form;
