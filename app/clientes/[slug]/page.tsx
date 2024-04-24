type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

import { Metadata, ResolvingMetadata } from "next";

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

function Page({}) {
  return <div className="w-full min-h-screen "></div>;
}

export default Page;
