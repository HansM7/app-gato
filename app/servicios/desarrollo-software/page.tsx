import Footer from "@/app/components/footer";
import Content from "./content";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gato - Servicio de Desarrollo de Software",
  description:
    "En GATO transformamos tus ideas en software funcional. Creamos soluciones a medida que potencian tu negocio y simplifican tus operaciones.",
  keywords: [
    "desarrollo de software",
    "desarrollo de software en lima",
    "soluciones a medida",
    "conceptualización de software",
    "implementación de software",
    "GATO",
  ],
  openGraph: {
    title: "Gato - Servicios de Desarrollo de Software",
    description:
      "En GATO transformamos tus ideas en software funcional. Creamos soluciones a medida que potencian tu negocio y simplifican tus operaciones.",
    type: "website",
    url: "https://www.gato.pe/servicios/desarrollo-software",
  },
  twitter: {
    title: "Gato - Servicios de Desarrollo de Software",
    description:
      "En GATO transformamos tus ideas en software funcional. Creamos soluciones a medida que potencian tu negocio y simplifican tus operaciones.",
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
      <Content></Content>
      <Footer></Footer>
    </>
  );
}

export default Page;
