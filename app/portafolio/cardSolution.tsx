import React from "react";
interface cardProps {
  title: string;
  description: string;
  imgSrc: string;
  svgPath: string;
}
const cardSolution: React.FC<cardProps> = ({ title, description, imgSrc, svgPath }) => {
  return (
    <div className="container">
      <div className="card w-full h-[550px] relative group shadow-md transition-all duration-500 rounded-xl">
        <div className="front absolute top-0 left-0 z-[2] w-full h-full">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center flex-col rounded-xl">
            <div
              className="w-[100px] h-auto mb-6"
              dangerouslySetInnerHTML={{
                __html: `
                ${svgPath}
              `,
              }}
            />
            <span className="text-white text-4xl font-semibold">{title}</span>
          </div>
        </div>

        <div className="back absolute top-0 left-0 z-[1] bg-[#A52DE6] w-full h-full flex justify-center items-center flex-col p-3 text-white text-center transition-all duration-600 origin-center rounded-xl">
          <span className="text-2xl mb-2 font-semibold">{title}</span>
          <p className="text-center w-full md:w-3/5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default cardSolution;
