import Content from "./content";
import Service01 from "./service-01";

function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  return (
    <>
      <Content slug={slug}></Content>
    </>
  );
}

export default Page;
