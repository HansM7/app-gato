import { Metadata } from "next";
import Index from ".";

// crear seo normal, sin api
export const metadata: Metadata = {
  title: "GATO",
  description: "Aplicación GATO modo desarollo",
  openGraph: {},
};

export default function Home() {
  return (
    <main className="">
      <Index></Index>
    </main>
  );
}
