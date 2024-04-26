"use client";

import { RevealWrapper } from "next-reveal";

function GridClients() {
  return (
    <section className="xl:px-32 md:px-24  px-8 flex  py-16  w-full bg-gray-100 flex-col">
      <div className="">
        <h2 className="text-3xl text-center">Nuestros clientes</h2>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-2 xl:mt-8 mt-4 2xl:gap-44 xl:gap-24 md:gap-12 gap-8 opacity-90  ">
        {Array.from({ length: 10 }, (_, index) => (
          <RevealWrapper
            origin="bottom"
            duration={1000 + index * 200}
            className={"w-full justify-center  flex items-center"}
          >
            <img
              className="md:w-1/2 w-full"
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
