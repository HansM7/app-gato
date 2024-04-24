"use client";

import { RevealWrapper } from "next-reveal";

function SectionVideo() {
  return (
    <section className="w-full xl:px-40 md:px-36 px-8 min-h-screen flex flex-col  bg-gray-100 pt-16  pb-32">
      <div className="flex flex-col justify-center items-center w-full">
        <RevealWrapper origin="top" duration={1000} className={`w-full`}>
          <iframe
            className="w-full h-[800px]"
            src="https://www.youtube.com/embed/9ec3QEDd-Cg"
            title="Eficiente gracias a BIM | Dlubal Software"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </RevealWrapper>
      </div>
    </section>
  );
}

export default SectionVideo;
