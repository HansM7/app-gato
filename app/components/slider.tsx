"use client";

import React from "react";
import { motion } from "framer-motion";

// Define the array of slides with numbers
const slides = [
  {
    image: "https://1000marcas.net/wp-content/uploads/2024/02/Adidas-Logo.png",
  },
  {
    image:
      "https://seeklogo.com/images/B/bcp-bolivia-logo-87EC694136-seeklogo.com.png",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Interbank_logo.svg/2560px-Interbank_logo.svg.png",
  },
  {
    image:
      "https://1000marcas.net/wp-content/uploads/2021/09/Elektra-Logo-2008.png",
  },
];

const Slider = ({ direction }: { direction: string }) => {
  // Duplicate the slides array to ensure seamless looping
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className="relative flex flex-col w-full overflow-hidden rounded-md pt-8  bg-white">
      <div className="flex justify-between px-48 items-center">
        <h1 className="text-[3rem]">Nuestros clientes</h1>
        <div className="flex gap-4">
          <span className="bg-[#0A86ED] rounded-full p-2 w-10 h-10 text-white text-center">
            {"<"}
          </span>
          <span className="border border-[#0A86ED] rounded-full p-2  w-10 h-10 text-[#0A86ED] text-center">
            {">"}
          </span>
        </div>
      </div>
      <motion.div
        className="relative flex gap-4 items-center py-2"
        animate={{
          x: direction === "right" ? ["-100%", "0%"] : ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          },
        }}
      >
        {/* Render duplicated slides */}
        {/* {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${130 / slides.length}%` }}
          >
            <div className="flex  items-center justify-center h-full rounded-md overflow-hidden ">
              <img
                className="shadow-xl hover:scale-110 transition-all"
                src={slide.image}
                alt=""
              />
            </div>
          </div>
        ))} */}

        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${130 / slides.length}%` }}
          >
            <div className="flex  items-center justify-center w-64 rounded-md overflow-hidden ">
              <img className="  transition-all" src={slide.image} alt="" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
