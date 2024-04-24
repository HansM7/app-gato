import axios from "axios";
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await axios.get(
    "https://palegreen-anteater-636608.hostingersite.com/wp-json/wp/v2/posts/" +
      params.id
  );
  // const previousImages = (await parent).openGraph?.images || []

  // configure metadatas
  return {
    title: post.data.title.rendered,
    description: "",
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

function Page({ params }: { params: { id: string } }) {
  return <></>;
}

export default Page;
