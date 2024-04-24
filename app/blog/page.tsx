import Blog from "./blog";

import { Metadata } from "next";

export async function generateMetadata(parent: any): Promise<Metadata> {
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: "Random title",
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

function Page() {
  return (
    <>
      <div className="w-full min-h-screen">
        <Blog></Blog>
      </div>
    </>
  );
}

export default Page;
