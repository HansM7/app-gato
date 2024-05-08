import Footer from "@/app/components/footer";
import Content from "./content";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gato - Servicio de Diseño Web",
  description:
    "Transformamos tu presencia en línea con diseños web impactantes y funcionales. Desde la creación de sitios web atractivos hasta la optimización para una experiencia de usuario excepcional, nuestro servicio de diseño web te ayuda a destacar en el mundo digital.",
  keywords: [
    "diseño web",
    "diseño web en lima",
    "sitios web atractivos",
    "experiencia de usuario",
    "optimización web",
    "GATO",
  ],
  openGraph: {
    title: "Gato - Servicios de Diseño Web",
    description:
      "Transformamos tu presencia en línea con diseños web impactantes y funcionales. Desde la creación de sitios web atractivos hasta la optimización para una experiencia de usuario excepcional, nuestro servicio de diseño web te ayuda a destacar en el mundo digital.",
    type: "website",
    url: "https://www.gato.pe/servicios/diseno-web",
  },
  twitter: {
    title: "Gato - Servicios de Diseño Web",
    description:
      "Transformamos tu presencia en línea con diseños web impactantes y funcionales. Desde la creación de sitios web atractivos hasta la optimización para una experiencia de usuario excepcional, nuestro servicio de diseño web te ayuda a destacar en el mundo digital.",
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
