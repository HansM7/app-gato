"use client";

import { Button, Modal } from "keep-react";
import Typography from "@mui/material/Typography";
import { RevealWrapper } from "next-reveal";
import { CloudArrowUp } from "phosphor-react";
import { useState } from "react";

function Team() {
  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState({
    name: "",
    photo: "",
    role: "",
    description: "",
  });

  const leaders = [
    {
      name: "Martín Jara",
      photo_name: "martin",
      photo:
        // "https://media.licdn.com/dms/image/D5635AQFGLM7VnS33PQ/profile-framedphoto-shrink_800_800/0/1711476726864?e=1713625200&v=beta&t=4QHErSs5nfjqgJMZz9K0sOruZTTr-CXvwuvt-bLOzFY",
        "martin.jpg",

      role: "Director General",
      description: "",
      alt: "GATO - Director General Martín Jara",
    },
    {
      name: "Diana Ortega",
      photo_name: "diana",

      photo:
        // "https://media.licdn.com/dms/image/D4E35AQHPXy-1TU49Ow/profile-framedphoto-shrink_800_800/0/1711806246117?e=1713628800&v=beta&t=mWQvQSUf5PGy_jwPjav-5imqRhOJfAHv8XpzYpHmyUw",
        "diana.jpg",
      role: "Director General",
      description: "",
      alt: "GATO - Director General Diana Ortega",
    },
  ];
  const workers = [
    {
      name: "Edson Huamaní",
      photo_name: "jordan",

      photo:
        // "https://media.licdn.com/dms/image/D4E03AQEDVxglbWreig/profile-displayphoto-shrink_800_800/0/1711986826924?e=1718236800&v=beta&t=jwQEry8mTXzsYGDmq5x3kEKaMl7HkfKMHAltfPgtN24",
        "jordan.png",
      role: "Coordinador de Proyectos Web",
      description: "",
      alt: "GATO - Coordinador de Proyectos Web Edson Huamaní",
    },
    {
      name: "Hans Melchor",
      photo_name: "hans",

      photo:
        // "https://media.licdn.com/dms/image/D4D03AQFUHe6qo_0yQA/profile-displayphoto-shrink_800_800/0/1711981009206?e=1718236800&v=beta&t=dnZN-OtJPPET6P5WaWRAEZ0b75VK8FpS0yrVIUv_50M",
        "hans.png",
      role: "Desarrollador Full Stack Jr",
      description: "",
      alt: "GATO - Desarrollador Full Stack Jr Hans Melchor",
    },
    {
      name: "Alonso Ulloa",
      photo_name: "alonso",

      photo:
        // "https://media.licdn.com/dms/image/D4D03AQFUHe6qo_0yQA/profile-displayphoto-shrink_800_800/0/1711981009206?e=1718236800&v=beta&t=dnZN-OtJPPET6P5WaWRAEZ0b75VK8FpS0yrVIUv_50M",
        "alonso.png",
      role: "Desarrollador Web",
      description: "",
      alt: "GATO - Desarrollador Web Alonso Ulloa",
    },
    {
      name: "Mariapia Contreras",
      photo_name: "mariapia",

      photo:
        // "https://media.licdn.com/dms/image/D4D03AQFxLpT4Jd4YgA/profile-displayphoto-shrink_400_400/0/1711981006091?e=1718236800&v=beta&t=X2Hb95A1iv9yJ_tnCZ_DYJT4vvyC669V6_ePQZoU3-E",
        "mariapia.png",
      role: "Asistente de Marketing",
      description: "",
      alt: "GATO - Asistente de Marketing Mariapia Contreras",
    },
    {
      name: "Alejandra Andía",
      photo_name: "alejandra",

      photo:
        // "https://media.licdn.com/dms/image/D4E03AQEUc7IVp3lySg/profile-displayphoto-shrink_800_800/0/1711981017350?e=1718236800&v=beta&t=Ol1RS_6KQ1lnKjwIMOL2DEYrKuYvcJeuFr-neKbMwXY",
        "alejandra.png",
      role: "Asistente de Marketing",
      description: "",
      alt: "GATO - Asistente de Marketing Alejandra Andía",
    },
    {
      name: "Solange Ferrando",
      photo_name: "sol",

      photo:
        // "https://media.licdn.com/dms/image/D4E03AQEUc7IVp3lySg/profile-displayphoto-shrink_800_800/0/1711981017350?e=1718236800&v=beta&t=Ol1RS_6KQ1lnKjwIMOL2DEYrKuYvcJeuFr-neKbMwXY",
        "sol.png",
      role: "Diseñadora Gráfica",
      description: "",
      alt: "GATO - Diseñadora Gráfica Sollage Ferrando",
    },
    {
      name: "Stefany Chapoñan",
      photo_name: "stefany",

      photo:
        // "https://media.licdn.com/dms/image/D4E03AQEUc7IVp3lySg/profile-displayphoto-shrink_800_800/0/1711981017350?e=1718236800&v=beta&t=Ol1RS_6KQ1lnKjwIMOL2DEYrKuYvcJeuFr-neKbMwXY",
        "estefany.png",
      role: "Asistente Audiovisual",
      description: "",
      alt: "GATO - Asistente Audiovisual Stefany Chapoñan",
    },
    {
      name: "Luis Saenz",
      photo_name: "luis",

      photo:
        // "https://media.licdn.com/dms/image/D4E03AQEUc7IVp3lySg/profile-displayphoto-shrink_800_800/0/1711981017350?e=1718236800&v=beta&t=Ol1RS_6KQ1lnKjwIMOL2DEYrKuYvcJeuFr-neKbMwXY",
        "luis.jpg",
      role: "Community Manager",
      description: "",
      alt: "GATO - Community Manager Luis Saenz",
    },
    {
      name: "George Alva",
      photo_name: "gio",

      photo:
        // "https://media.licdn.com/dms/image/D4E03AQEUc7IVp3lySg/profile-displayphoto-shrink_800_800/0/1711981017350?e=1718236800&v=beta&t=Ol1RS_6KQ1lnKjwIMOL2DEYrKuYvcJeuFr-neKbMwXY",
        "gio-alva.png",
      role: "Desarrollador Web",
      description: "",
      alt: "GATO - Desarrollador Web George Alva",
    },
    {
      name: "Daniela Carrasco",
      photo_name: "daniela",

      photo:
        // "https://media.licdn.com/dms/image/D4E03AQEUc7IVp3lySg/profile-displayphoto-shrink_800_800/0/1711981017350?e=1718236800&v=beta&t=Ol1RS_6KQ1lnKjwIMOL2DEYrKuYvcJeuFr-neKbMwXY",
        "daniela.png",
      role: "Desarrolladora Full Stack Jr.",
      description: "",
      alt: "GATO - Desarrolladora Full Stack Jr.Daniela Carrasco",
    },
    {
      name: "Lucero Cueva",
      photo_name: "lucero",

      photo:
        // "https://media.licdn.com/dms/image/D4E03AQEUc7IVp3lySg/profile-displayphoto-shrink_800_800/0/1711981017350?e=1718236800&v=beta&t=Ol1RS_6KQ1lnKjwIMOL2DEYrKuYvcJeuFr-neKbMwXY",
        "lucero.jpg",
      role: "Asistente de Gestión Humana",
      description: "",
      alt: "GATO - Asistente de Gestión Humana Lucero Cueva",
    },
    {
      name: "Lucia Aguado",
      photo_name: "lucia",

      photo:
        // "https://media.licdn.com/dms/image/D4E03AQEUc7IVp3lySg/profile-displayphoto-shrink_800_800/0/1711981017350?e=1718236800&v=beta&t=Ol1RS_6KQ1lnKjwIMOL2DEYrKuYvcJeuFr-neKbMwXY",
        "lucia.jpg",
      role: "Asistente Contable",
      description: "",
      alt: "GATO - Asistente Contable Lucia Cueva",
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
    <div className="w-full">
      <div className="max-w-[1920px] mx-auto xl:px-24 md:px-16 px-8  flex flex-col pt-8 pb-16">
      <div className="flex justify-center">
        <RevealWrapper origin="top" duration={1000}>
          <h1 className="md:text-[3rem] text-[2rem] ">Nuestro equipo</h1>
        </RevealWrapper>
      </div>
      <div className="flex flex-col items-center mt-16 gap-16">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-8 justify-center">
          {leaders.map((item, index) => (
            <RevealWrapper
              origin="bottom"
              duration={index * 300 + 1000}
              key={index}
            >
              <div className="flex flex-col text-center gap-2 overflow-hidden rounded-2xl">
                <img
                  role="buttom"
                  onClick={() => openModal(item)}
                  className="rounded-2xl w-full hover:scale-105 transition-all cursor-pointer  "
                  src={"team/" + item.photo}
                  alt={item.alt}
                  title={item.alt}
                />
                <span className="text-gray-500 rounded-lg px-2 ">
                  {item.role}
                </span>
                <span>{item.name}</span>
              </div>
            </RevealWrapper>
          ))}
          {workers.map((item, index) => (
            <RevealWrapper
              origin="bottom"
              duration={index * 300 + 1000}
              key={index}
            >
              <div className="flex flex-col text-center gap-2 overflow-hidden rounded-2xl">
                <img
                  role="buttom"
                  onClick={() => openModal(item)}
                  className="rounded-2xl w-full hover:scale-105 transition-all cursor-pointer "
                  src={"team/" + item.photo}
                  alt={item.alt}
                  title={item.alt}
                />
                <span className="  text-gray-500 rounded-lg px-2 ">
                  {item.role}
                </span>
                <span>{item.name}</span>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
      </div>
      

      {/* modal detail team */}

      <ModalDetail isOpen={isOpen} closeModal={closeModal} data={data} />
    </div>
  );
}

function ModalDetail({
  isOpen,
  closeModal,
  data,
}: {
  isOpen: any;
  closeModal: any;
  data: any;
}) {
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <Modal.Body className="space-y-3">
        <Modal.Content>
          <Typography variant="body2" className="!mb-6">
            <Typography
              variant="h3"
              className="mb-2 text-body-1  text-metal-900 text-center"
            >
              {data.name}
            </Typography>
            <Typography
              variant="body2"
              className="text-body-4 font-normal text-metal-600"
            >
              <img className="rounded-lg" src={"team/" + data.photo} alt="" />
            </Typography>
          </Typography>
        </Modal.Content>
        {/* <Modal.Footer className="flex justify-between">
          <div className="flex gap-2">
            <svg
              className="hover:scale-105 transition-all"
              data-testid="geist-icon"
              height="24"
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width="24"
            >
              <path
                className="fill-slate-500"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.00319 15.9377C12.948 15.4442 16 12.0785 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.8172 2.67341 15.0099 6.25 15.808V10.4303H4.5V8H6.25V6.93969C6.25 4.22193 7.28461 2.96364 9.95128 2.96364C10.4559 2.96364 11.3277 3.06264 11.6854 3.16164V5.37163C11.497 5.35247 11.168 5.34289 10.7625 5.34289C9.45307 5.34289 9 5.8379 9 7.12812V8H11.5577L11.1106 10.4303H9.00319V15.9377Z"
                fill="currentColor"
              ></path>
            </svg>
            <svg
              className="hover:scale-105 transition-all"
              data-testid="geist-icon"
              height="24"
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width="24"
            >
              <path
                id="Subtract"
                className="fill-slate-500 "
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 0C0.895431 0 0 0.895431 0 2V14C0 15.1046 0.895431 16 2 16H14C15.1046 16 16 15.1046 16 14V2C16 0.895431 15.1046 0 14 0H2ZM5 6.75V13H3V6.75H5ZM5 4.50008C5 5.05554 4.61409 5.5 3.99408 5.5H3.98249C3.38582 5.5 3 5.05554 3 4.50008C3 3.93213 3.39765 3.5 4.00584 3.5C4.61409 3.5 4.98845 3.93213 5 4.50008ZM8.5 13H6.5C6.5 13 6.53178 7.43224 6.50007 6.75H8.5V7.78371C8.5 7.78371 9 6.75 10.5 6.75C12 6.75 13 7.59782 13 9.83107V13H11V10.1103C11 10.1103 11 8.46616 9.7361 8.46616C8.4722 8.46616 8.5 9.93972 8.5 9.93972V13Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <Button
            onClick={closeModal}
            size="xs"
            variant="outline"
            color="secondary"
          >
            Cerrar
          </Button>
        </Modal.Footer> */}
      </Modal.Body>
    </Modal>
  );
}

export default Team;
