"use client";

import { api_projects } from "@/app/data/enviroments/api.enviroment";
import axios from "axios";
import { RevealWrapper } from "next-reveal";
import { useEffect, useState } from "react";

function BannerDetailPortfolio() {
  const [data, setData] = useState<any>({});

  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await axios.get(
        `${api_projects}?slug=evadry-marketing-digital`
      );
      setData(response.data[0]);
      setIsLoading(false);
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!isLoading) {
    return (
      <section className="md:min-h-screen  h-full  flex bg-gray-100  relative  overflow-hidden">
        <div className=" md:min-h-screen h-full  overflow-hidden min-h-[28rem] absolute ">
          {/* <video
            loop={true}
            autoPlay={true}
            muted
            className="w-screen h-full md:min-h-screen min-h-[25rem] object-cover  overflow-hidden filter brightness-50"
            src="https://videos.pexels.com/video-files/2616637/2616637-hd_1920_1080_30fps.mp4"
          ></video> */}

          {/* md:px-20 pb-16 md:pb-0 px-4 */}
        </div>
        <div className="  md:pt-16 pt-8  bg-slate-800  w-full">
          <RevealWrapper origin="left" duration={1500} className={"w-full"}>
            <div className=" md:px-32 pb-20 md:pb-0 px-4  flex justify-between items-start gap-8 md:gap-0">
              <span className="text-sky-400 xl:text-[5rem] md:text-[4rem] text-[2rem]  leading-10">
                {data.title.rendered}
              </span>

              <div className="h-fit flex flex-col">
                <span className="text-gray-100 xl:text-[2rem] md:text-[2rem] text-xl ">
                  Cliente
                </span>
                <span className="font-light text-gray-300 md:text-lg text-sm ">
                  {data.acf.cliente}
                </span>
              </div>
            </div>
          </RevealWrapper>
          <RevealWrapper
            origin="right"
            duration={1500}
            className={"w-full md:mt-16 -mt-8  "}
          >
            <div className="w-full relative  bg-gray-800">
              {/* <video
                muted
                loop
                autoPlay
                className="w-full object-cover h-[30rem] md:ml-20 brightness-50"
                src="https://videos.pexels.com/video-files/2616637/2616637-hd_1920_1080_30fps.mp4"
              ></video> */}
              <img
                className="w-full object-cover h-[30rem] md:ml-32 brightness-50"
                src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="py-4 md:ml-32 ml-4 flex flex-col text-gray-200 font-light text-xl">
                <span>Responsabilidad</span>

                <span>Compromiso</span>
              </div>
            </div>
          </RevealWrapper>

          {/* <RevealWrapper origin="top" duration={1500} className={`flex mt-12`}>
            <p className="text-gray-200 text-4xl font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              suscipit at enim voluptatibus, laudantium soluta quas doloribus
              sapiente quam qui similique ut adipisci? Deleniti voluptas ipsa ea
              perferendis, facilis quis?
            </p>
          </RevealWrapper>
  
          <RevealWrapper
            origin="bottom"
            duration={1500}
            className={` mt-12 grid grid-cols-3`}
          >
            <div className=" overflow-hidden ">
              <img
                className="object-cover w-full overflow-hidden h-96 hover:scale-105 transition-all"
                src="https://cdn-e360.s3-sa-east-1.amazonaws.com/cms_shutterstock-1931340746jpg__ti5ev7TTqnVMdMOfQ0WICxwloXDzEfjG8wPfK6f7.jpeg"
                alt=""
              />
            </div>
            <div className="overflow-hidden">
              <img
                className="object-cover w-full h-96 hover:scale-105 transition-all"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3JgJUl3NCU10g6aEWoq_6iLeOO1ZCy468O_gg3HJXb1fLR9EZazS7XprVMslG9oJ_olM&usqp=CAU"
                alt=""
              />
            </div>
            <div className=" overflow-hidden ">
              <img
                className="object-cover w-full overflow-hidden h-96 hover:scale-105 transition-all"
                src="https://cdn-e360.s3-sa-east-1.amazonaws.com/cms_shutterstock-1931340746jpg__ti5ev7TTqnVMdMOfQ0WICxwloXDzEfjG8wPfK6f7.jpeg"
                alt=""
              />
            </div>
          </RevealWrapper> */}
        </div>
      </section>
    );
  }
}

export default BannerDetailPortfolio;
