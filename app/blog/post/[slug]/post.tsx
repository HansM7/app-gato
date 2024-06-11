"use client";

import Navigation from "@/app/components/navigation";
import Drawer from "@/app/components/drawer";
import Footer from "@/app/components/footer";
import WhatsappContact from "@/app/components/whatsapp-contact";
import { useEffect, useState } from "react";
import Banner from './banner'
import ContentPost from "./contentPost";

interface PostProps {
    post: Posts;
  }

interface Posts {
    id: number;
    title: {rendered: string}
    content: { rendered: string };
    slug: string;
    acf: {
      secciones: string[];
      titulo: string;
      banner: string;
      fecha: string;
      "autor-name": string;
      "autor-profile": string;
      descripcion: string;
      descripcion_corta: string;
      "descripcion-imagen": string;
    };
  }
  
const Post = ({ post }: PostProps) => {
  const [isDrawer, setIsDrawer] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") {
        setIsDrawer(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="relative bg-white flex">
      <WhatsappContact></WhatsappContact>

      <div
        className={`fixed top-0 left-0  ${
          isDrawer ? "w-screen h-screen" : "w-screen lg:w-16"
        } h-[60px] lg:h-screen z-10 flex flex-col lg:flex-row`}
      >
        <Navigation isDrawer={isDrawer} setIsDrawer={setIsDrawer}></Navigation>
        {isDrawer && <Drawer></Drawer>}
      </div>
      <main className="min-w-screen flex flex-col w-full pt-[60px] lg:pl-[80px] lg:pt-0">
      <Banner post={post}></Banner>
      <ContentPost post={post}></ContentPost>
        <Footer></Footer>
      </main>
    </div>
  );
};

export default Post;
