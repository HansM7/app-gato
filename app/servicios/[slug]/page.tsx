import Footer from "@/app/components/footer";
import Content from "./content";
import Service01 from "./service_01";

function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  return (
    <>
      <Content slug={slug}></Content>
      <Footer></Footer>
    </>
  );
}

export default Page;
