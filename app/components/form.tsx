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
