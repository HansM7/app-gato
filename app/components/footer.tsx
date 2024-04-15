"use client";

function Footer() {
  return (
    <footer className="bg-white xl:px-44 md:px-28  px-8 flex  py-16  w-full flex-col">
      <div className="text-sm flex gap-16 justify-between w-full mb-4">
        <div>
          <span className="text-3xl">GATO</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">Visitanos</span>
          <span className="text-slate-600">Lima, Perú</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">Hablemos</span>
          <span className="text-slate-600">99999999</span>
          <span className="text-slate-600">99999999</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">Escríbenos</span>
          <span className="text-slate-600">info@gmail.com</span>
          <span className="text-slate-600">staff.gg@gmail.com</span>
        </div>
      </div>
      <hr />
      <div className="text-center w-full mt-4">
        <span className="text-slate-600">&copy; 2024 - Gato</span>
      </div>
    </footer>
  );
}

export default Footer;
