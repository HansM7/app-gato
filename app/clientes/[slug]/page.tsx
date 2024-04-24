type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

import { Metadata, ResolvingMetadata } from "next";
import Detail from "./detail";

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: "",
    description: "",
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  return (
    <div className="w-full min-h-screen ">
      <Detail slug={slug}></Detail>
    </div>
  );
}

export default Page;
