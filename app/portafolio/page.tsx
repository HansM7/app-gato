import Portfolio from "./portfolio";

import type { Metadata, ResolvingMetadata } from "next";

// crear seo a partir de una api
export async function generateMetadata(parent: any): Promise<Metadata> {
  try {
    const response = await fetch(`apiwordpress`).then((res) => res.json());

    return {
      title: response.title,
      openGraph: {},
    };
  } catch (error) {
    return {};
  }
}

function Page() {
  return (
    <div className="w-full min-h-screen">
      <Portfolio></Portfolio>
    </div>
  );
}

export default Page;
