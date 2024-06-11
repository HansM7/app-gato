import React from "react";
import { RevealWrapper } from "next-reveal";
import { sectionColors } from "./sectionColors";
import Link from "next/link";
interface Post {
  id: number;
  slug: string;
  acf: {
    secciones: string[];
    titulo: string;
    banner: string;
    fecha: string;
    "autor-name": string;
    "autor-profile": string;
    descripcion: string;
    "descripcion-imagen": string;
  };
}
const formatDate = (dateStr: string): string => {
  const year = parseInt(dateStr.slice(0, 4), 10);
  const month = parseInt(dateStr.slice(4, 6), 10) - 1;
  const day = parseInt(dateStr.slice(6, 8), 10);

  const date = new Date(year, month, day);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  return date.toLocaleDateString("en-US", options);
};

const MorePostCard = ({ post }: { post: Post }) => {
  return (
    <div className="w-full">
      <Link
        href="/blog/post/[slug]/"
        as={`/blog/post/${post.slug}`}
        className="w-full"
      >
        <RevealWrapper
          className={`w-full h-full flex flex-col gap-2 bg-white`}
          origin="left"
          duration={1500}
        >
          <img
            className="w-full h-auto aspect-video object-cover "
            src={post.acf["descripcion-imagen"]}
            alt={post.acf.titulo}
          />
          <div className="w-full h-full flex flex-col justify-between  text-[#3D3D3D] gap-2 md:gap-0">
            <div className="flex gap-1 overflow-x-auto whitespace-nowrap h-fit pb-2">
              {post?.acf?.secciones.map((tag) => (
                <Link
                  href="/blog/[slug]/"
                  as={`/blog/${tag}`}
                  key={tag}
                  
                >
                  <span className="text-xs px-2 py-1  text-white font-medium shadow-md capitalize inline-block"
                  style={{
                    backgroundColor: sectionColors[tag],
                    color: "white",
                  }}>
                  {tag === "diseno-web" ? "Diseño Web" : tag.replace(/-/g, " ")}
                  </span>
                  
                </Link>
              ))}
            </div>
            <div className="flex flex-col flex-grow justify-end h-full">
              <h2 className="md:line-clamp-2 lg:line-clamp-3 capitalize font-bold drop-shadow-xl text-[1.2rem] 2xl:text-[1.5rem]  ">
                {post.acf.titulo}
              </h2>
              <div className="pt-1 md:pt-4 flex gap-2 text-[#bdbdbd] text-[0.8rem]">
                <div className="flex gap-1 items-center ">
                  <img
                    className="w-[16px] h-[16px] xl:w-[22px] xl:h-[22px] aspect-square rounded-full object-cover"
                    src={post.acf["autor-profile"]}
                    alt="autor"
                  />
                  <span>{post.acf["autor-name"]}</span>
                </div>

                <div className="flex items-center justify-start gap-1 ">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 xl:w-5 xl:h-5"
                  >
                    <g clip-path="url(#clip0_1813_933)">
                      <path
                        d="M12.6875 7C12.6875 8.50842 12.0883 9.95506 11.0217 11.0217C9.95506 12.0883 8.50842 12.6875 7 12.6875C5.49158 12.6875 4.04494 12.0883 2.97833 11.0217C1.91172 9.95506 1.3125 8.50842 1.3125 7C1.3125 5.49158 1.91172 4.04494 2.97833 2.97833C4.04494 1.91172 5.49158 1.3125 7 1.3125C8.50842 1.3125 9.95506 1.91172 11.0217 2.97833C12.0883 4.04494 12.6875 5.49158 12.6875 7ZM0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7ZM6.34375 3.28125V7C6.34375 7.21875 6.45312 7.42383 6.63633 7.54688L9.26133 9.29688C9.56211 9.49922 9.96953 9.41719 10.1719 9.11367C10.3742 8.81016 10.2922 8.40547 9.98867 8.20312L7.65625 6.65V3.28125C7.65625 2.91758 7.36367 2.625 7 2.625C6.63633 2.625 6.34375 2.91758 6.34375 3.28125Z"
                        fill="#bdbdbd"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1813_933">
                        <rect width="14" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>{formatDate(post?.acf?.fecha)}</span>
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </Link>
    </div>
  );
};

export default MorePostCard;
