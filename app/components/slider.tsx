"use client";

import React from "react";
import { motion } from "framer-motion";

// Define the array of slides with numbers
const slides = [
  {
    image:
      "https://static8.depositphotos.com/1594308/1073/i/450/depositphotos_10731758-stock-photo-at-meeting.jpg",
  },
  {
    image:
      "https://previews.123rf.com/images/microstockasia/microstockasia1611/microstockasia161110885/69312280-ejecutivos-en-una-reuni%C3%B3n.jpg",
  },
  {
    image:
      "https://img.freepik.com/foto-gratis/ejecutivos-negociando-reunion_1098-508.jpg",
  },
  {
    image:
      "https://img.freepik.com/foto-gratis/personas-tiro-medio-trabajando-juntas_23-2149271712.jpg?size=626&ext=jpg&ga=GA1.1.1488620777.1712448000&semt=ais",
  },
  {
    image:
      "https://us.123rf.com/450wm/xartproduction/xartproduction2004/xartproduction200400408/143979272-un-equipo-de-j%C3%B3venes-empresarios-con-traje-trabajando-y-comunic%C3%A1ndose-juntos-en-una-oficina.jpg?ver=6",
  },
];

const Slider = ({ direction }: { direction: string }) => {
  // Duplicate the slides array to ensure seamless looping
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className="relative w-full overflow-hidden rounded-md  ">
      <motion.div
        className="relative flex gap-4"
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
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${130 / slides.length}%` }}
          >
            <div className="flex  items-center justify-center h-full rounded-md overflow-hidden ">
              <img className="shadow-xl" src={slide.image} alt="" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
