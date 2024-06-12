"use client";

import { useEffect, useState } from "react";
import Page from "./home/page";

function Index() {
  const [isLoading, setIsLoading] = useState(true);

  const [isFade, setIsFade] = useState(false);

  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      setIsFirstVisit(false);
      setIsLoading(false);
    } else {
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  useEffect(() => {
    let timer1: NodeJS.Timeout;
    let timer2: NodeJS.Timeout;

    if (isFirstVisit) {
      const timer1 = setTimeout(() => {
        setIsLoading(false);
      }, 4000);
      const timer2 = setTimeout(() => {
        setIsFade(true);
      }, 3000);

      return () => {
        if (timer1) clearTimeout(timer1);
        if (timer2) clearTimeout(timer2);
      };
    }
  }, [isFirstVisit]);

  /*   setTimeout(() => {
    setIsLoading(false);
  }, 4000);
  setTimeout(() => {
    setIsFade(true);
  }, 3000); */

  return (
    <>
      {isLoading ? (
        <div
          className={`bg-[#9623DE] w-full h-screen flex justify-center items-center  ${
            isFade &&
            "animate-fade animate-duration-1000 animate-ease-linear animate-reverse"
          }`}
        >
          <div className="flex gap-4">
            <div className=" rounded-full p-2  bg-[#9623DE]">
              <img
                loading="lazy"
                className="w-60 rounded-full animate-spin animate-once animate-duration-[1000ms] animate-ease-linear animate-reverse"
                src="animation-cat.gif"
                alt=""
              />
            </div>
            {/* <div className="flex items-center animate-fade-right animate-duration-[2000ms] animate-ease-in-out ">
              <span className="text-xl font-semibold text-white">
                GATO TECHNOLOGY
              </span>
            </div> */}
          </div>
        </div>
      ) : (
        <Page />
      )}
    </>
  );
}

export default Index;
