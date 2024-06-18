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
        "martin.png",

      role: "Director General",
      description: "",
      alt: "GATO - Director General Martín Jara",
    },
    {
      name: "Diana Ortega",
      photo_name: "diana",

      photo:
        // "https://media.licdn.com/dms/image/D4E35AQHPXy-1TU49Ow/profile-framedphoto-shrink_800_800/0/1711806246117?e=1713628800&v=beta&t=mWQvQSUf5PGy_jwPjav-5imqRhOJfAHv8XpzYpHmyUw",
        "diana.png",
      role: "Directora Comercial",
      description: "",
      alt: "GATO - Directora Comercial Diana Ortega",
    },
  ];
  const workers = [
    {
      name: "Mariapia Contreras",
      photo_name: "mariapia",

      photo:
        // "https://media.licdn.com/dms/image/D4D03AQFxLpT4Jd4YgA/profile-displayphoto-shrink_400_400/0/1711981006091?e=1718236800&v=beta&t=X2Hb95A1iv9yJ_tnCZ_DYJT4vvyC669V6_ePQZoU3-E",
        "mariapia.png",
      role: "Analista de Marketing",
      description: "",
      alt: "GATO - Analista de Marketing Mariapia Contreras",
    },
    {
      name: "Alejandra Andía",
      photo_name: "alejandra",

      photo:
        // "https://media.licdn.com/dms/image/D4E03AQEUc7IVp3lySg/profile-displayphoto-shrink_800_800/0/1711981017350?e=1718236800&v=beta&t=Ol1RS_6KQ1lnKjwIMOL2DEYrKuYvcJeuFr-neKbMwXY",
        "alejandra.png",
      role: "Diseñadora Gráfica",
      description: "",
      alt: "GATO - Diseñadora Gráfica Alejandra Andía",
    },
    {
      name: "Solange Ferrando",
      photo_name: "sol",

      photo:
        // "https://media.licdn.com/dms/image/D4E03AQEUc7IVp3lySg/profile-displayphoto-shrink_800_800/0/1711981017350?e=1718236800&v=beta&t=Ol1RS_6KQ1lnKjwIMOL2DEYrKuYvcJeuFr-neKbMwXY",
        "solange.png",
      role: "Diseñadora Gráfica",
      description: "",
      alt: "GATO - Diseñadora Gráfica Sollage Ferrando",
    },
    {
      name: "Stefany Chapoñan",
      photo_name: "stefany",

      photo:
        // "https://media.licdn.com/dms/image/D4E03AQEUc7IVp3lySg/profile-displayphoto-shrink_800_800/0/1711981017350?e=1718236800&v=beta&t=Ol1RS_6KQ1lnKjwIMOL2DEYrKuYvcJeuFr-neKbMwXY",
        "stefany.png",
      role: "Asistente Audiovisual",
      description: "",
      alt: "GATO - Asistente Audiovisual Stefany Chapoñan",
    },
    {
      name: "Luis Saenz",
      photo_name: "luis",

      photo:
        // "https://media.licdn.com/dms/image/D4E03AQEUc7IVp3lySg/profile-displayphoto-shrink_800_800/0/1711981017350?e=1718236800&v=beta&t=Ol1RS_6KQ1lnKjwIMOL2DEYrKuYvcJeuFr-neKbMwXY",
        "luis.png",
      role: "Coordinador de Marketing Jr.",
      description: "",
      alt: "GATO - Coordinador de Marketing Jr. Luis Saenz",
    },
    {
      name: "Lucero Cueva",
      photo_name: "lucero",

      photo:
        // "https://media.licdn.com/dms/image/D4E03AQEUc7IVp3lySg/profile-displayphoto-shrink_800_800/0/1711981017350?e=1718236800&v=beta&t=Ol1RS_6KQ1lnKjwIMOL2DEYrKuYvcJeuFr-neKbMwXY",
        "lucero.png",
      role: "Asistente de Gestión Humana",
      description: "",
      alt: "GATO - Asistente de Gestión Humana Lucero Cueva",
    },
    {
      name: "Lucia Aguado",
      photo_name: "lucia",

      photo:
        // "https://media.licdn.com/dms/image/D4E03AQEUc7IVp3lySg/profile-displayphoto-shrink_800_800/0/1711981017350?e=1718236800&v=beta&t=Ol1RS_6KQ1lnKjwIMOL2DEYrKuYvcJeuFr-neKbMwXY",
        "lucia.png",
      role: "Asistente Contable",
      description: "",
      alt: "GATO - Asistente Contable Lucia Cueva",
    },

    {
      name: "Edson Huamaní",
      photo_name: "jordan",

      photo:
        // "https://media.licdn.com/dms/image/D4E03AQEDVxglbWreig/profile-displayphoto-shrink_800_800/0/1711986826924?e=1718236800&v=beta&t=jwQEry8mTXzsYGDmq5x3kEKaMl7HkfKMHAltfPgtN24",
        "jordan.png",
      role: "Coordinador de Desarrollo Web",
      description: "",
      alt: "GATO - Coordinador de Desarrollo Web Edson Huamaní",
    },
    {
      name: "Alonso Ulloa",
      photo_name: "alonso",

      photo:
        // "https://media.licdn.com/dms/image/D4D03AQFUHe6qo_0yQA/profile-displayphoto-shrink_800_800/0/1711981009206?e=1718236800&v=beta&t=dnZN-OtJPPET6P5WaWRAEZ0b75VK8FpS0yrVIUv_50M",
        "alonso.png",
      role: "Analista Diseñador UX/UI",
      description: "",
      alt: "GATO - Analista Diseñador UX/UI Alonso Ulloa",
    },
    {
      name: "George Alva",
      photo_name: "george",

      photo:
        // "https://media.licdn.com/dms/image/D4E03AQEUc7IVp3lySg/profile-displayphoto-shrink_800_800/0/1711981017350?e=1718236800&v=beta&t=Ol1RS_6KQ1lnKjwIMOL2DEYrKuYvcJeuFr-neKbMwXY",
        "george.png",
      role: "Desarrollador Web",
      description: "",
      alt: "GATO - Desarrollador Web George Alva",
    },
    {
      name: "Hans Melchor",
      photo_name: "hans",

      photo:
        // "https://media.licdn.com/dms/image/D4D03AQFUHe6qo_0yQA/profile-displayphoto-shrink_800_800/0/1711981009206?e=1718236800&v=beta&t=dnZN-OtJPPET6P5WaWRAEZ0b75VK8FpS0yrVIUv_50M",
        "hans.png",
      role: "Desarrollador Full Stack",
      description: "",
      alt: "GATO - Desarrollador Full Stack Hans Melchor",
    },
    {
      name: "Daniela Carrasco",
      photo_name: "daniela",

      photo:
        // "https://media.licdn.com/dms/image/D4E03AQEUc7IVp3lySg/profile-displayphoto-shrink_800_800/0/1711981017350?e=1718236800&v=beta&t=Ol1RS_6KQ1lnKjwIMOL2DEYrKuYvcJeuFr-neKbMwXY",
        "daniela.png",
      role: "Desarrolladora Frontend",
      description: "",
      alt: "GATO - Desarrolladora FrontendDaniela Carrasco",
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
        <div className="flex flex-col items-center mt-16 gap-4 md:gap-8 ">
          <div className="w-full 2xl:w-2/5 xl:w-2/4 md:w-2/3 mx-auto grid grid-cols-2 px-2 gap-4 md:gap-8 justify-center">
            {leaders.map((item, index) => (
              <RevealWrapper
                origin="bottom"
                duration={index * 300 + 1000}
                key={index}
              >
                <div className="flex flex-col text-center gap-2 overflow-hidden rounded-2xl">
                  <img
                    loading="lazy"
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
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-8 justify-center">
            {workers.map((item, index) => (
              <RevealWrapper
                origin="bottom"
                duration={index * 300 + 1000}
                key={index}
              >
                <div className="flex flex-col text-center gap-2 overflow-hidden rounded-2xl">
                  <img
                    loading="lazy"
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
              <img
                loading="lazy"
                className="rounded-lg"
                src={"team/" + data.photo}
                alt=""
              />
            </Typography>
          </Typography>
        </Modal.Content>
      </Modal.Body>
    </Modal>
  );
}

export default Team;
