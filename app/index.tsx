"use client";

import { useState } from "react";
import Page from "./home/page";

function Index() {
  const [isLoading, setIsLoading] = useState(true);

  const [isFade, setIsFade] = useState(false);

  setTimeout(() => {
    setIsLoading(false);
  }, 4000);
  setTimeout(() => {
    setIsFade(true);
  }, 3000);

  return (
    <>
      {isLoading ? (
        <div
          className={`bg-[#0A86ED] w-full h-screen flex justify-center items-center  ${
            isFade &&
            "animate-fade animate-duration-1000 animate-ease-linear animate-reverse"
          }`}
        >
          <div className="flex gap-4">
            <div className=" rounded-full p-2">
              <img
                className="w-32 rounded-full animate-spin animate-once animate-duration-[1000ms] animate-ease-linear animate-reverse"
                src="animation-cat.gif"
                alt=""
              />
            </div>
            <div className="flex items-center animate-fade-right animate-duration-[2000ms] animate-ease-in-out ">
              <span className="text-xl font-semibold text-white">
                GATO TECHNOLOGY
              </span>
            </div>
          </div>
        </div>
      ) : (
        <Page />
      )}
    </>
  );
}

export default Index;
