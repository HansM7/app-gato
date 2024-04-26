"use client";

import { RevealWrapper } from "next-reveal";

function GridClients() {
  return (
    <section className="xl:px-32 md:px-24  px-8 flex  py-16  w-full bg-white flex-col">
      <div className="">
        <h2 className="text-3xl">Nuestros clientes</h2>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 xl:mt-8 mt-4 2xl:gap-44 xl:gap-24 md:gap-12 gap-8 opacity-90  ">
        {Array.from({ length: 10 }, (_, index) => (
          <RevealWrapper
            origin="bottom"
            duration={1000 + index * 200}
            className={"w-full   flex justify-center items-center"}
          >
            <img
              className="w-full"
              src="https://www.staffcreativa.pe/uploads/shares/clientes/cenetenario.png"
              alt=""
            />
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}

export default GridClients;
