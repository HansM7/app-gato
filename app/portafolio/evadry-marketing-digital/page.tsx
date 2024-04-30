import { Metadata } from "next";
import Detail from "./detail";
import axios from "axios";

export async function generateMetadata(): Promise<Metadata> {
  const response = await axios.get(
    "https://palegreen-anteater-636608.hostingersite.com/wp-json/wp/v2/proyecto?slug=evadry-marketing-digital"
  );

  const data = response.data;

  return {
    title: data[0].title.rendered,
    description: "",
    openGraph: {},
  };
}

function Page() {
  return (
    <div className="w-full min-h-screen">
      <Detail></Detail>
    </div>
  );
}
export default Page;
