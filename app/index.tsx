"use client";

import { useState } from "react";
import Page from "./home/page";

function Index() {
  const [isLoading, setIsLoading] = useState(true);

  const [isFade, setIsFade] = useState(false);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  setTimeout(() => {
    setIsFade(true);
  }, 1000);

  console.log(isLoading);

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
            <div className="bg-white rounded-full p-2">
              <img
                className="w-20 animate-spin animate-once animate-duration-[1000ms] animate-ease-linear animate-reverse"
                src="https://cdn-icons-png.freepik.com/512/1051/1051377.png"
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
