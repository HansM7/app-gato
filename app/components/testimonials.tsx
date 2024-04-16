"use client";

import { Carousel } from "keep-react";
import { RevealWrapper } from "next-reveal";
import Image from "next/image";

function Testimonials() {
  return (
    <section className="xl:px-44 md:px-28  px-8 flex  py-16  w-full bg-white  flex-col  mt-16">
      {/* <RevealWrapper duration={1500} origin="left">
        <div className="flex flex-col px-24 gap-4">
          <div className="flex justify-center">
            <img
              className="rounded-full w-24"
              src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4 justify-center text-center">
            <p className="text-slate-600 text-xl">
              “Be genuine in your assessment, and provide constructive feedback
              to benefit both potential customers and the company providing the
              product or service.”
            </p>
            <div className="flex flex-col gap-2">
              <span className="font-bold">Jhon Doe</span>
              <span>CEO of and eduport</span>
            </div>
          </div>

          <div></div>
        </div>
      </RevealWrapper> */}

      <RevealWrapper duration={1500} origin="left">
        <Carousel
          slideInterval={5000}
          showControls={true}
          indicators={true}
          style={{ minHeight: "20rem!important" }}
          className=" bg-gray-600 text-white rounded-lg  carousel_dinamic"
        >
          <div className="flex flex-col px-8 md:px-24 gap-4 py-12 h-[20rem]">
            <div className="flex justify-center">
              <img
                className="rounded-full w-16 md:w-24"
                src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4 justify-center text-center">
              <p className="text-white text-sm md:text-xl">
                “Be genuine in your assessment, and provide constructive
                feedback to benefit both potential customers and the company
                providing the product or service.”
              </p>
              <div className="flex flex-col gap-2">
                <span className="text-sm md:text-md font-bold">Jhon Doe</span>
                <span className="text-sm md:text-md ">CEO of and eduport</span>
              </div>
            </div>
            {/* options prev next */}
            <div></div>
          </div>

          <div className="flex flex-col px-8 md:px-24 gap-4 py-12 h-[20rem]">
            <div className="flex justify-center">
              <img
                className="rounded-full w-16 md:w-24"
                src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4 justify-center text-center">
              <p className="text-white text-sm md:text-xl">
                “Be genuine in your assessment, and provide constructive
                feedback to benefit both potential customers and the company
                providing the product or service.”
              </p>
              <div className="flex flex-col gap-2">
                <span className="text-sm md:text-md font-bold">Jhon Doe</span>
                <span className="text-sm md:text-md ">CEO of and eduport</span>
              </div>
            </div>
            {/* options prev next */}
            <div></div>
          </div>
        </Carousel>
      </RevealWrapper>
    </section>
  );
}

export default Testimonials;
