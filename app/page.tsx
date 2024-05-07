import { Metadata } from "next";
import Index from ".";
import Head from "next/head";

// crear seo normal, sin api
export const metadata: Metadata = {
  title: "GATO - TI",
  description:
    "En GATO, transformamos ideas en soluciones digitales. Diseño web, marketing digital, software y branding. Potencia tu presencia en línea.",
  openGraph: {
    title: "GATO - Tu Alianza para el Éxito Digital",
    description:
      "Transforma tu negocio con GATO. Diseño web, marketing digital, software y branding. Creemos en soluciones a medida.",
    images:
      "https://i.pinimg.com/originals/73/fe/ce/73fece7ac631330d0dd4c1bd22325029.png",
  },
};

export default function Home() {
  return (
    <main className="">
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
      <Index></Index>
    </main>
  );
}
