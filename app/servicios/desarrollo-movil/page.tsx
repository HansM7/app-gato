import Footer from "@/app/components/footer";
import Content from "./content";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gato - Desarrollo de Aplicaciones a Medida",
  description:
    "Desarrollamos aplicaciones a medida que transforman ideas en soluciones digitales innovadoras que mejoran la experiencia del usuario.",
  keywords: [
    "desarrollo de aplicaciones",
    "desarrollo de aplicaciones en lima",
    "aplicaciones a medida",
    "soluciones digitales",
    "experiencia del usuario",
    "GATO",
  ],
  openGraph: {
    title: "Gato - Desarrollo de Aplicaciones a Medida",
    description:
      "Desarrollamos aplicaciones a medida que transforman ideas en soluciones digitales innovadoras que mejoran la experiencia del usuario.",
    type: "website",
    url: "https://www.gato.pe/servicios/desarrollo-aplicaciones",
  },
  twitter: {
    title: "Gato - Desarrollo de Aplicaciones a Medida",
    description:
      "Desarrollamos aplicaciones a medida que transforman ideas en soluciones digitales innovadoras que mejoran la experiencia del usuario.",
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
