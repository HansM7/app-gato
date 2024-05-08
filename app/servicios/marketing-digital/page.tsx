import Footer from "@/app/components/footer";
import Content from "./content";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Gato - Servicio de Marketing Digital",
  description:
    "Transforma tus redes sociales en canales de venta con nuestros servicios de Marketing Digital. Ayudamos a alcanzar los objetivos de tu negocio.",
  keywords: [
    "marketing digital",
    "marketing digital en lima",
    "redes sociales",
    "ventas en línea",
    "estrategia digital",
    "publicidad en línea",
  ],
  openGraph: {
    title: "Gato - Servicios de Marketing Digital ",
    description:
      "Transforma tus redes sociales en canales de venta con nuestros servicios de Marketing Digital . Ayudamos a alcanzar los objetivos de tu negocio.",
    type: "website",
    url: "https://www.gato.pe/servicios/marketing-digital",
  },
  twitter: {
    title: "Gato - Servicios de Marketing Digital ",
    description:
      "Transforma tus redes sociales en canales de venta con nuestros servicios de Marketing Digital . Ayudamos a alcanzar los objetivos de tu negocio.",
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
