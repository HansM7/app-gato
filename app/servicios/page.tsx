import { Metadata } from "next";
import Footer from "../components/footer";
import Services from "./services";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Gato - Servicios de tecnología en Lima",
  description:
    "Gato ofrece servicios de desarrollo de software, diseño web, desarrollo móvil, branding y marketing digital para ayudar a las empresas a crecer.",

  keywords: [
    "desarrollo software",
    "diseño web",
    "desarrollo móvil",
    "branding",
    "marketing digital",
    "Lima",
  ],
  openGraph: {
    title: "Gato - Servicios de tecnología en Lima",
    description:
      "Gato ofrece servicios de desarrollo de software, diseño web, desarrollo móvil, branding y marketing digital para ayudar a las empresas a crecer en Lima.",
    type: "website",
    images:
      "https://i.pinimg.com/originals/be/3e/c0/be3ec039bbfc3736c73736f19fc935dc.jpg",
    url: "https://www.tusitio.com/servicios",
  },
  twitter: {
    title: "Gato - Servicios de tecnología en Lima",
    description:
      "Gato ofrece servicios de desarrollo de software, diseño web, desarrollo móvil, branding y marketing digital para ayudar a las empresas a crecer en Lima.",
    images:
      "https://i.pinimg.com/originals/be/3e/c0/be3ec039bbfc3736c73736f19fc935dc.jpg",
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
      <div className="w-full h-screen ">
        <Services></Services>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Page;
