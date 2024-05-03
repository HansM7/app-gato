import { Metadata } from "next";
import About from "./about";

export const metadata: Metadata = {
  title: "GATO",
};

function Page() {
  return (
    <div className="w-full  ">
      <About></About>
    </div>
  );
}

export default Page;
