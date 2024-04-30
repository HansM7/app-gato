"use client";

import { RevealWrapper } from "next-reveal";

function PortfolioInfoDetail() {
  return (
    <section className=" bg-gray-100 pt-16 ">
      <div className="xl:px-32 md:px-20  md:pb-0 px-4 grid md:grid-cols-2 grid-cols-1 mb-16 gap-8">
        <RevealWrapper origin="left" duration={1500} className={"w-full"}>
          <div>
            <p className="md:text-2xl text-xl font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              omnis consequatur beatae sunt atque expedita harum deserunt fugiat
              ducimus saepe hic assumenda pariatur necessitatibus nihil ex
              temporibus nisi! Commodi, perspiciatis? Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Id recusandae unde atque vero
              deleniti quidem a tenetur eum quis minima, quos ad molestias
              labore architecto rem, officia impedit repellat reprehenderit!
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper origin="right" duration={1500} className={"w-full"}>
          <div>
            <img
              className="w-full h-96 object-cover"
              src="https://static.vecteezy.com/system/resources/previews/017/404/341/non_2x/butterfly-logo-design-beautiful-flying-animal-company-brand-icon-illustration-screen-printing-salon-free-vector.jpg"
              alt=""
            />
          </div>
        </RevealWrapper>
      </div>

      <div className="xl:px-32 md:px-20  md:pb-0 px-4 grid md:grid-cols-2 grid-cols-1 mb-16 gap-8">
        <RevealWrapper origin="bottom" duration={1500} className={"w-full"}>
          <div>
            <span className="text-xl ">Problema</span>
            <p className="md:text-xl text-lg font-light ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              omnis consequatur beatae sunt atque expedita harum deserunt fugiat
              ducimus saepe hic assumenda pariatur necessitatibus nihil ex
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper origin="bottom" duration={1500} className={"w-full"}>
          <div>
            <span className="text-xl ">Solucion</span>
            <p className="md:text-xl text-lg font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              omnis consequatur beatae sunt atque expedita harum deserunt fugiat
              ducimus saepe hic assumenda pariatur necessitatibus nihil ex
            </p>
          </div>
        </RevealWrapper>
      </div>

      <div className="flex flex-col  ">
        <div className="w-full overflow-hidden">
          <img
            className=" w-full  object-cover h-[30rem] hover:scale-x-105 transition-all brightness-50"
            src="https://img.freepik.com/fotos-premium/banner-mariposas-arco-iris-sobre-fondo-blanco-fondo-mariposa-colores-arco-iris-ilustracion-acuarela-colorida-papel-tapiz-postales-publicitarias-concepto-verano-ia-generativa_756498-349.jpg"
            alt=""
          />
        </div>

        <div className="w-full overflow-hidden">
          <img
            className="w-full object-cover h-[30rem] hover:scale-x-105 transition-all brightness-50"
            src="https://previews.123rf.com/images/vectorshowstudio/vectorshowstudio2003/vectorshowstudio200300139/141552948-bandera-de-mariposas-volando-hermosos-insectos-de-primavera-y-verano-vector-ilustraci%C3%B3n-de-dibujos.jpg"
            alt=""
          />
        </div>

        <div className="w-full overflow-hidden bg-slate-700  py-16 px-2">
          <span className="text-white font-light ">Ver siguiente </span>
        </div>
      </div>
    </section>
  );
}

export default PortfolioInfoDetail;
