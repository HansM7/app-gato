import axios from "axios";
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

import { Metadata, ResolvingMetadata } from "next";
import { useRouter } from "next/router";
import DetailBlog from "./detail";
import ItemBlog from "./item";

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: any
) {
  try {
    const post = await axios.get(
      "https://palegreen-anteater-636608.hostingersite.com/wp-json/wp/v2/posts/" +
        params.id
    );
    // const previousImages = (await parent).openGraph?.images || []

    // configure metadatas
    return {
      title: "id dinamic",
      description: "",
      // openGraph: {
      //   images: ['/some-specific-page-image.jpg', ...previousImages],
      // },
    };
  } catch (error) {
    return {
      title: "Error fech",
      description: "",
      // openGraph: {
      //   images: ['/some-specific-page-image.jpg', ...previousImages],
      // },
    };
    console.log("Error");
  }
}

function Page({ params }: { params: { id: string } }) {
  return (
    <div className="w-full min-h-screen">
      <ItemBlog></ItemBlog>
    </div>
  );
}

export default Page;
