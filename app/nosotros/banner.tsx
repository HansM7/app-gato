"use client";

import { RevealWrapper } from "next-reveal";

function BannerAbout() {
  return (
    <section className="md:min-h-screen min-h-[25rem]    flex bg-gray-100  relative">
      <div className=" md:min-h-screen md:max-h-screen overflow-hidden min-h-[25rem] absolute">
        <video
          autoPlay
          muted
          loop
          className="w-full md:min-h-screen min-h-[25rem] object-cover  overflow-hidden filter brightness-50"
          src="https://videos.pexels.com/video-files/3249902/3249902-uhd_3840_2160_25fps.mp4"
        ></video>
      </div>
      <div className="xl:px-40 md:px-36 pb-16 md:pb-0 px-8 md:pt-32 pt-16">
        <RevealWrapper origin="bottom" duration={1500} className={"w-full"}>
          <h1 className="font-bold xl:text-[5rem] md:text-[4rem] text-[2rem] text-slate-100">
            Somo estrategas y soñadores comprometidos con el cambio digital.
          </h1>
        </RevealWrapper>
      </div>
    </section>
  );
}

export default BannerAbout;
