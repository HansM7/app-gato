"use client";

function GridClients() {
  return (
    <section className="xl:px-44 md:px-28  px-8 flex  py-16  w-full bg-white flex-col">
      <div className="">
        <h2 className="text-3xl">Nuestros clientes</h2>
      </div>
      <div className="grid grid-cols-4 mt-4">
        <div>
          <img
            src="https://www.staffcreativa.pe/uploads/shares/clientes/cenetenario.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.staffcreativa.pe/uploads/shares/clientes/cenetenario.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.staffcreativa.pe/uploads/shares/clientes/cenetenario.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.staffcreativa.pe/uploads/shares/clientes/cenetenario.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default GridClients;
