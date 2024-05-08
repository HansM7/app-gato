import Footer from "@/app/components/footer";
import Content from "./content";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Gato - Servicio de Branding",
  description:
    "Capturamos la esencia de tu marca y la llevamos a nuevas alturas. Con la creación de identidades visuales impactantes te ayudamos a destacar en un mundo cada vez más competitivo.",
  keywords: [
    "branding",
    "branding en lima",
    "identidad visual",
    "imagen de marca",
    "diseño de marca",
    "GATO",
  ],
  openGraph: {
    title: "Gato - Servicios de Branding",
    description:
      "Capturamos la esencia de tu marca y la llevamos a nuevas alturas. Con la creación de identidades visuales impactantes te ayudamos a destacar en un mundo cada vez más competitivo.",
    type: "website",
    url: "https://www.gato.pe/servicios/branding",
  },
  twitter: {
    title: "Gato - Servicios de Branding",
    description:
      "Capturamos la esencia de tu marca y la llevamos a nuevas alturas. Con la creación de identidades visuales impactantes te ayudamos a destacar en un mundo cada vez más competitivo.",
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
