import CardSubject from "../components/blog/cardSubject";
import CardNew from "../components/blog/cardNew";

const entradas = () => {
  return (
    <div className="w-full max-w-[1920px] mx-auto px-8 pb-8 lg:px-16 lg:pb-16 xl:px32">
      <div className=" relative -top-[4%] md:-top-[10%] flex flex-col md:flex-row justify-between gap-4 md:gap-2 lg:gap-8">
        <CardNew></CardNew>
        <CardNew></CardNew>
        <CardNew></CardNew>
      </div>
      <h2
        className="text-3xl text-center
         text-[#3D3D3D] font-medium uppercase mb-8"
      >
        Otros temas
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-2 lg:gap-8 ">
        <CardSubject></CardSubject>
        <CardSubject></CardSubject>
        <CardSubject></CardSubject>
        <CardSubject></CardSubject>
        <CardSubject></CardSubject>
        <CardSubject></CardSubject>
      </div>
    </div>
  );
};

export default entradas;
