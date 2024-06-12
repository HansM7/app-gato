import React from "react";
import { TypeAnimation } from "react-type-animation";
import { RevealWrapper } from "next-reveal";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

const banner = () => {
  const labels = [
    {
      color: "#9747FF",
      name: "Marketing Digital",
      path: "marketing-digital",
    },
    {
      color: "#0BC2E1",
      name: "Diseño Web",
      path: "diseno-web",
    },
    {
      color: "#007CF8",
      name: "Desarrollo Software",
      path: "desarrollo-software",
    },
    {
      color: "#A42BE6",
      name: "Branding",
      path: "branding",
    },
    {
      color: "#0D5FB2",
      name: "Desarrollo Móvil",
      path: "desarrollo-movil",
    },
  ];
  return (
    <div className="w-full relative">
      <div className="w-full h-[calc(100vh-50px)] md:h-[600px] xl:h-[800px] relative  ">
        <img
          className="w-full h-full object-cover"
          src="https://i.pinimg.com/736x/d4/c3/fb/d4c3fbe8d97a0514ebe33641b8741f13.jpg"
          alt="banner blog"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#1E004D] bg-opacity-50 flex justify-start items-center">
            <div className="w-full max-w-[1920px] mx-auto px-8 pb-8 lg:px-16 lg:pb-16 xl:px32 flex flex-col gap-1 md:gap-4 lg:gap-8 ">
              <h2 className="capitalize text-white text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold drop-shadow-xl">
                <Typewriter
                  words={["Descubre las Últimas Tendencias y Mantente a la Vanguardia"]}
                  typeSpeed={60}
                />
              </h2>
              <div className="flex flex-wrap mb-2 gap-2 ">
                {labels.map((label, index) => (
                  <Link
                    key={index}
                    href="/blog/[slug]/"
                    as={`/blog/${label.path}`}
                    style={{ backgroundColor: label.color }}
                    className="px-2 md:px-4 py-1 text-sm md:text-base text-white font-medium shadow-md hover:scale-105 transition-all duration-300"
                  >
                    {label.name}
                  </Link>
                ))}
              </div>
            </div>
  
        </div>
      </div>
    </div>
  );
};

export default banner;
