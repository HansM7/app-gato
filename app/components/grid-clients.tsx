"use client";

import { RevealWrapper } from "next-reveal";

function GridClients() {
  return (
    <section className="xl:px-44 md:px-28 h-screen  px-8 flex  py-16  w-full bg-white flex-col">
      <div className="">
        <h2 className="text-3xl">Nuestros clientes</h2>
      </div>
      <div className="grid grid-cols-4 mt-8 gap-24 opacity-90 h-full ">
        {Array.from({ length: 10 }, (_, index) => (
          <RevealWrapper
            origin="bottom"
            duration={1000 + index * 200}
            className={"w-full border-b flex justify-center items-center"}
          >
            <img
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
