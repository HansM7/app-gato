import Detail from "./detail";
import type { Metadata } from "next";
import { api_projects } from "@/app/data/enviroments/api.enviroment";

async function fetchAllProjectSlugs() {
  const response = await fetch(
    "https://palegreen-anteater-636608.hostingersite.com/wp-json/wp/v2/proyecto?per_page=100"
  );
  const projects = await response.json();

  return projects.map((project: any) => project.acf["cliente-slug"]);
}

export async function generateStaticParams() {
  const slugs = await fetchAllProjectSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const project = await fetchProjectData(params.slug);
    return {
      title: "Proyecto " + project.title.rendered,
      description: project.acf.descripcion_corta,
      openGraph: {
        title: project.title.rendered,
        description: project.acf.descripcion_corta,
        images: project.acf.imagen,
      },
    };
  } catch (error) {
    return {};
  }
}

async function fetchProjectData(slug: string) {
  const response = await fetch(`${api_projects}?per_page=100`);
  const [project] = await response.json();

  return project;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const project = await fetchProjectData(params.slug);

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div className="">
      <Detail slug={params.slug} />
         
    </div>
  );
}
