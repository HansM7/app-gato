import { Metadata } from "next";
import Detail from "./detail";
import axios from "axios";
import { api_projects } from "@/app/data/enviroments/api.enviroment";

export async function generateMetadata(parent: any): Promise<Metadata> {
  try {
    const [response] = await fetch(
      api_projects + "?slug=social-commerce-marketing-digital"
    ).then((res) => res.json());
    return {
      title: response.title.rendered,
      description: "Proyecto Evadry Marketing Digital",
      openGraph: {
        title: response.title.rendered,
        description: response.acf.descripcion_corta,
        images: response.acf.imagen,
      },
    };
  } catch (error) {
    return {};
  }
}

function Page() {
  return (
    <div className="w-full min-h-screen">
      <Detail></Detail>
    </div>
  );
}
export default Page;
