"use client";

import Slider from "./slider";

function Carousel() {
  return (
    <section className="py-8 flex flex-col gap-8">
      <div className="">
        <Slider></Slider>
      </div>
      <div className="pl-20">
        <Slider></Slider>
      </div>
      <div className="">
        <Slider></Slider>
      </div>
    </section>
  );
}

export default Carousel;
