"use client";

import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import React, { useState } from "react";

function Colaborators() {
  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState({
    name: "",
    photo: "",
    role: "",
    description: "",
  });

  const leaders = [
    {
      name: "Martin Jara",
      photo_name: "martin",
      photo:
        "https://media.licdn.com/dms/image/D5635AQFGLM7VnS33PQ/profile-framedphoto-shrink_800_800/0/1711476726864?e=1713625200&v=beta&t=4QHErSs5nfjqgJMZz9K0sOruZTTr-CXvwuvt-bLOzFY",
      role: "CEO",
      description: "",
    },
    {
      name: "Diana Ortega",
      photo_name: "diana",

      photo:
        "https://media.licdn.com/dms/image/D4E35AQHPXy-1TU49Ow/profile-framedphoto-shrink_800_800/0/1711806246117?e=1713628800&v=beta&t=mWQvQSUf5PGy_jwPjav-5imqRhOJfAHv8XpzYpHmyUw",
      role: "CEO",
      description: "",
    },
  ];
  const workers = [
    {
      name: "Edson Huamaní",
      photo_name: "jordan",

      photo:
        "https://media.licdn.com/dms/image/D4E03AQEDVxglbWreig/profile-displayphoto-shrink_800_800/0/1711986826924?e=1718236800&v=beta&t=jwQEry8mTXzsYGDmq5x3kEKaMl7HkfKMHAltfPgtN24",
      role: "Desarrollador Web",
      description: "",
    },
    {
      name: "Hans Melchor",
      photo_name: "hans",

      photo:
        "https://media.licdn.com/dms/image/D4D03AQFUHe6qo_0yQA/profile-displayphoto-shrink_800_800/0/1711981009206?e=1718236800&v=beta&t=dnZN-OtJPPET6P5WaWRAEZ0b75VK8FpS0yrVIUv_50M",
      role: "Desarrollador de software",
      description: "",
    },
    {
      name: "Mariapia Contreras",
      photo_name: "mariapia",

      photo:
        "https://media.licdn.com/dms/image/D4D03AQFxLpT4Jd4YgA/profile-displayphoto-shrink_400_400/0/1711981006091?e=1718236800&v=beta&t=X2Hb95A1iv9yJ_tnCZ_DYJT4vvyC669V6_ePQZoU3-E",
      role: "Marketing",
      description: "",
    },
    {
      name: "Stacey Geraldine",
      photo_name: "stacey",

      photo:
        "https://media.licdn.com/dms/image/D4E03AQE-PeReXqOXqA/profile-displayphoto-shrink_800_800/0/1712686468366?e=1718236800&v=beta&t=syqAvo7kmkH70nvRJ81iozLAuMxdD66syADy-60Ookc",
      role: "Marketing",
      description: "",
    },
    {
      name: "Katherin Guerra",
      photo_name: "katherin",

      photo:
        "https://media.licdn.com/dms/image/D4E03AQEUc7IVp3lySg/profile-displayphoto-shrink_800_800/0/1711981017350?e=1718236800&v=beta&t=Ol1RS_6KQ1lnKjwIMOL2DEYrKuYvcJeuFr-neKbMwXY",
      role: "Marketing",
      description: "",
    },
  ];

  const openModal = (data: any) => {
    setData(data);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full xl:px-40 md:px-36 px-8  min-h-screen flex flex-col pt-16 pb-32 bg-gray-100  ">
      <div className="flex justify-center">
        <RevealWrapper origin="top" duration={1000}>
          <span className="text-[3rem]  ">Casos de éxito</span>
        </RevealWrapper>
      </div>
      <div className="flex flex-col items-center mt-8 gap-8">
        <div className="md:grid grid-cols-3 gap-8">
          <RevealWrapper origin="bottom" duration={1000}>
            <Link href={""} className="h-96 relative">
              <div className="overflow-hidden group h-full relative">
                <img
                  className="w-full h-full object-cover filter brightness-[30%] group-hover:scale-110 transition-all"
                  src="https://images.pexels.com/photos/7375/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />

                <div className="absolute inset-0 flex flex-col px-4 py-8  z-10  gap-4">
                  <span className="text-xl bg-violet-300 w-full opacity-70 py-1">
                    Naturmed Peru
                  </span>
                  <h3 className="text-white text-3xl">
                    Desarrollo de software
                  </h3>
                  <p className="text-gray-200">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consequatur inventore maiores magnam veritatis, provident
                    odio distinctio beatae laudantium deleniti repudiandae
                    harum, qui, a voluptatibus neque mollitia natus tempora
                    impedit dicta!
                  </p>
                  <div className="text-violet-300 p-2 hidden group-hover:flex animate-fade-right ">
                    Click para ver mas detalles
                  </div>
                </div>
              </div>
            </Link>
          </RevealWrapper>
          <RevealWrapper origin="bottom" duration={1000}>
            <Link href={""} className="h-96 relative">
              <div className="overflow-hidden group h-full relative">
                <img
                  className="w-full h-full object-cover filter brightness-[30%] group-hover:scale-110 transition-all"
                  src="https://images.pexels.com/photos/7375/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />

                <div className="absolute inset-0 flex flex-col px-4 py-8  z-10  gap-4">
                  <span className="text-xl bg-violet-300 w-full opacity-70 py-1">
                    Naturmed Peru
                  </span>
                  <h3 className="text-white text-3xl">
                    Desarrollo de software
                  </h3>
                  <p className="text-gray-200">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consequatur inventore maiores magnam veritatis, provident
                    odio distinctio beatae laudantium deleniti repudiandae
                    harum, qui, a voluptatibus neque mollitia natus tempora
                    impedit dicta!
                  </p>
                  <div className="text-violet-300 p-2 hidden group-hover:flex animate-fade-right ">
                    Click para ver mas detalles
                  </div>
                </div>
              </div>
            </Link>
          </RevealWrapper>
          <RevealWrapper origin="bottom" duration={1000}>
            <Link href={""} className="h-96 relative">
              <div className="overflow-hidden group h-full relative">
                <img
                  className="w-full h-full object-cover filter brightness-[30%] group-hover:scale-110 transition-all"
                  src="https://images.pexels.com/photos/7375/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />

                <div className="absolute inset-0 flex flex-col px-4 py-8  z-10  gap-4">
                  <span className="text-xl bg-violet-300 w-full opacity-70 py-1">
                    Naturmed Peru
                  </span>
                  <h3 className="text-white text-3xl">
                    Desarrollo de software
                  </h3>
                  <p className="text-gray-200">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consequatur inventore maiores magnam veritatis, provident
                    odio distinctio beatae laudantium deleniti repudiandae
                    harum, qui, a voluptatibus neque mollitia natus tempora
                    impedit dicta!
                  </p>
                  <div className="text-violet-300 p-2 hidden group-hover:flex animate-fade-right ">
                    Click para ver mas detalles
                  </div>
                </div>
              </div>
            </Link>
          </RevealWrapper>
        </div>

        {/* <RevealWrapper origin="left" duration={1000}>
          <div className="grid grid-cols-3 bg-white p-4 rounded-md group overflow-hidden">
            <div className="col-span-2 flex flex-col gap-4">
              <h3 className="font-semibold text-xl">Proyecto Web</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                fuga incidunt nisi, iure suscipit nobis iusto dolor aliquid at
                deleniti aliquam ducimus veritatis quidem! Eos minus laudantium
                iure eaque fugiat?
              </p>
              <Link
                href={""}
                className="hidden group-hover:flex text-blue-600 underline w-fit "
              >
                <span className="transition-all animate-fade-right">
                  Conocer mas
                </span>
              </Link>
            </div>
            <div className="col-span-1 flex justify-center">
              <img
                className="h-48  rounded-xl"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgLXwiDQusHqu4zMuvEVnBUv04xNZlSQjc5gyKlT7XQ&s"
                alt=""
              />
            </div>
          </div>
        </RevealWrapper>

        <RevealWrapper origin="left" duration={1000}>
          <div className="grid grid-cols-3 bg-white p-4 rounded-md group overflow-hidden">
            <div className="col-span-2 flex flex-col gap-4">
              <h3 className="font-semibold text-xl">Proyecto Web</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                fuga incidunt nisi, iure suscipit nobis iusto dolor aliquid at
                deleniti aliquam ducimus veritatis quidem! Eos minus laudantium
                iure eaque fugiat?
              </p>
              <Link
                href={""}
                className="hidden group-hover:flex text-blue-600 underline w-fit "
              >
                <span className="transition-all animate-fade-right">
                  Conocer mas
                </span>
              </Link>
            </div>
            <div className="col-span-1 flex justify-center">
              <img
                className="h-48  rounded-xl"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgLXwiDQusHqu4zMuvEVnBUv04xNZlSQjc5gyKlT7XQ&s"
                alt=""
              />
            </div>
          </div>
        </RevealWrapper> */}
      </div>

      {/* modal detail team */}
    </div>
  );
}

export default Colaborators;
