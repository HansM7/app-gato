import CardSubject from "@/app/components/blog/cardSubject";
import CardNew from "@/app/components/blog/cardNew";
import NavSections from "./navSections";
import Pagination from "../Pagination";

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

const entradas = ({ posts }: { posts: Post[] }) => {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.acf.fecha).getTime() - new Date(a.acf.fecha).getTime()
  );

  const latestPosts = sortedPosts.slice(0, 3);

  const remainingPosts = sortedPosts.slice(3);

  const renderPost = (post: Post) => <CardSubject key={post.id} post={post} />;

  return (
    <div className="w-full max-w-[1920px] mx-auto px-8  lg:px-16  xl:px-32">
      <div className=" relative flex flex-col md:flex-row justify-between gap-4 md:gap-2 lg:gap-8 pb-8">
        {latestPosts.map((post) => (
          <CardNew key={post.id} post={post} />
        ))}
      </div>
      <div className="w-full flex flex-col-reverse lg:flex-row gap-4 ">
        <div className="lg:w-3/4 lg:border-r">
          <h2
            className="text-3xl
         text-[#3D3D3D] font-medium uppercase mb-8"
          >
            Temas
          </h2>
          <div className="w-full">
            <Pagination
              data={posts}
              itemsPerPage={6}
              render={renderPost}
              gridClass="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 lg:gap-8"
              dataName="posts"
            />
            {remainingPosts.map((post) => (
              <CardSubject key={post.id} post={post} />
            ))}
          </div>
        </div>

        <div className="lg:w-1/4">
          <NavSections></NavSections>
        </div>
      </div>
    </div>
  );
};

export default entradas;
