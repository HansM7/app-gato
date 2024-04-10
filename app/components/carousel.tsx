"use client";

import Slider from "./slider";

function Carousel() {
  return (
    <section className="py-8 flex flex-col gap-8">
      <div className="">
        <Slider direction="right"></Slider>
      </div>
      <div className="">
        <Slider direction="left"></Slider>
      </div>
      <div className="">
        <Slider direction="right"></Slider>
      </div>
    </section>
  );
}

export default Carousel;
