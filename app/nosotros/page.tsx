import { Metadata } from "next";
import About from "./about";
import Head from "next/head";

export const metadata: Metadata = {
  title: "GATO - Sobre Nosotros",
  description:
    "Descubre quiénes somos en GATO. Conoce nuestro equipo, nuestra misión y nuestra pasión por transformar ideas en soluciones digitales innovadoras.",
  openGraph: {
    title: "Conoce a GATO - Tu Socio en Soluciones Digitales",
    description:
      "En GATO, somos más que una empresa. Somos tu socio en el viaje digital. Descubre nuestra historia, nuestro equipo y nuestra dedicación a tu éxito.",
    images:
      "https://i.pinimg.com/originals/73/fe/ce/73fece7ac631330d0dd4c1bd22325029.png",
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
      <div className="w-full  ">
        <About></About>
      </div>
    </>
  );
}

export default Page;
