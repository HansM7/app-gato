import NavSections from "@/app/components/blog/navSections";
import Link from "next/link";
import MorePost from "./morePost";

interface PostProps {
  post: Posts;
}

interface Posts {
  id: number;
  title: { rendered: string };
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

const ContentPost = ({ post }: PostProps) => {
  const createMarkup = (htmlString: string) => {
    return { __html: htmlString };
  };
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row pt-8 px-8 lg:px16 lg:py-16 xl:px-32">
        <div className="flex flex-col w-full md:w-3/4 md:border-r ">
          <div className="w-full pr-4 flex-1">
            <img
              className="float-left mr-4 mb-4 w-full md:w-1/3 aspect-square object-cover"
              src={post.acf["descripcion-imagen"]}
              alt="imagen blog"
            />
            <div
        className="mb-4"
        dangerouslySetInnerHTML={createMarkup(post.content.rendered)}
      />
          </div>
          <div>
          <div className="flex flex-wrap gap-1 pb-8 lg:pb-16 ">
            {post?.acf?.secciones.map((tag) => (
              <Link
                href="/blog/[slug]/"
                as={`/blog/${tag}`}
                key={tag}
                className="text-xs px-2 py-1  text-gray-400 font-medium capitalize bg-gray-300"
              >
                {tag === "diseno-web" ? "Diseño Web" : tag.replace(/-/g, " ")}
              </Link>
            ))}
          </div>
        </div>
        </div>
        <div className="w-full flex flex-col gap-4 md:w-1/4 md:pl-4">
          <NavSections />
          <MorePost></MorePost>
        </div>
      </div>
    </div>
  );
};

export default ContentPost;
