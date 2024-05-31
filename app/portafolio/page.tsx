import Head from "next/head";
import Portfolio from "./portfolio";

import type { Metadata, ResolvingMetadata } from "next";

export const metadata: Metadata = {
  title: "GATO - Portafolio",
  description:
    "Portafolio GATO. Descubre nuestros proyectos destacados que muestran nuestra experiencia en diseño web, marketing digital, desarrollo de software y branding.",
  openGraph: {
    title: "Nuestro Portafolio - Muestra de Nuestro Trabajo",
    description:
      "Sumérgete en el portafolio de GATO y descubre una muestra de nuestros proyectos más destacados. Desde diseño web hasta desarrollo de software, nuestro trabajo habla por sí mismo.",
    images: [
      {
        url: "https://i.pinimg.com/736x/14/d4/1e/14d41e8e044f772dd97ba883eae11075.jpg",
        alt: "Proyecto CR Motors",
      },
      {
        url: "https://i.pinimg.com/736x/0d/4b/9b/0d4b9bc3bb65614f182fc563c8b32dd0.jpg",
        alt: "Proyecto Caprepar Group",
      },
      {
        url: "https://i.pinimg.com/736x/81/dd/00/81dd000b83b99271f5b58c8c2232e033.jpg",
        alt: "Proyecto Flowers Travel",
      },
      {
        url: "https://i.pinimg.com/736x/01/a2/5b/01a25b770392bf75c3bf4182b91892cf.jpg",
        alt: "Proyecto Eva-Dry",
      },

    ],
  },
};

function Page() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://gato.pe" />

        <link rel="facebook" href="https://www.facebook.com/agenciagatope" />
        <link
          rel="instagram"
          href="https://www.instagram.com/genius_mkt_peru"
        />
        <link
          rel="linkedin"
          href="https://www.linkedin.com/company/agenciagato"
        />
      </Head>
      <div className="w-full min-h-screen">
        <Portfolio></Portfolio>
      </div>
    </>
  );
}

export default Page;
