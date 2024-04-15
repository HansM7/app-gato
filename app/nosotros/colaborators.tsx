"use client";

import { RevealWrapper } from "next-reveal";
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
    <div className="w-full px-36 min-h-screen flex flex-col pt-24 pb-32 bg-gray-100  text-slate-600">
      <div className="flex justify-center">
        <RevealWrapper origin="top" duration={1000}>
          <span className="text-[4rem]  ">Nuestros colaboradores</span>
        </RevealWrapper>
      </div>
      <div className="flex flex-col items-center mt-16 gap-16">
        <div className="grid grid-cols-4 gap-8 ">
          <RevealWrapper origin="left" duration={1000}>
            <img
              className="w-full  rounded-xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgLXwiDQusHqu4zMuvEVnBUv04xNZlSQjc5gyKlT7XQ&s"
              alt=""
            />
          </RevealWrapper>
          <RevealWrapper origin="left" duration={1000}>
            {" "}
            <img
              className=" rounded-xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4wfBr35CvAy_CH9EH438ACMR0_s9rq4q1tTsSAuPfw&s"
              alt=""
            />
          </RevealWrapper>
          <RevealWrapper origin="right" duration={1000}>
            <img
              className=" rounded-xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRrJB5e7WyvqC14eYPK0kXN6kzONkJDp02PejGumCcFQ&s"
              alt=""
            />
          </RevealWrapper>

          <RevealWrapper origin="right" duration={1000}>
            <img
              className=" rounded-xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdDvku89zTPPiEXoMucJ0YhFznM3xtg2D8WI6n2VwaQ&s"
              alt=""
            />
          </RevealWrapper>

          <RevealWrapper
            origin="bottom"
            duration={1000}
            className={"col-span-4"}
          >
            <img
              className=" w-full rounded-lg"
              src="https://scontent.flim11-1.fna.fbcdn.net/v/t39.30808-6/294488433_581874250296156_6381925361257838933_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGlNhE3bKdDNoTxphR27N0LSEWvgrzhPEdIRa-CvOE8R8u0q5FkSRsJQXMptZq0cGp7jdT-DooA77oYod9OJiAg&_nc_ohc=twhLRHPwG6kAb5BgH5t&_nc_ht=scontent.flim11-1.fna&oh=00_AfCAMAdUQSKu7CQcwlbqnxE5DGVufZQyo6J9jGhrlKLNsA&oe=66237DE7"
              alt=""
            />
          </RevealWrapper>
        </div>
      </div>

      {/* modal detail team */}
    </div>
  );
}

export default Colaborators;
