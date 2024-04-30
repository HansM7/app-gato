import { Metadata } from "next";
import Footer from "../components/footer";
import Services from "./services";

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
    url: "https://www.tusitio.com/servicios",
  },
  twitter: {
    title: "Gato - Servicios de tecnología en Lima",
    description:
      "Gato ofrece servicios de desarrollo de software, diseño web, desarrollo móvil, branding y marketing digital para ayudar a las empresas a crecer en Lima.",
    card: "summary_large_image",
    site: "@tucuentadetwitter",
  },
};

function Page() {
  return (
    <div className="w-full h-screen ">
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}

export default Page;
