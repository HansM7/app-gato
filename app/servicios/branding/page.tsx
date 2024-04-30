import Footer from "@/app/components/footer";
import Content from "./content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
  openGraph: {},
};

function Page() {
  return (
    <>
      <Content></Content>
      <Footer></Footer>
    </>
  );
}

export default Page;
