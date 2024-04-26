"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Items() {
  const [posts, setPosts] = useState<any>([]);

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://palegreen-anteater-636608.hostingersite.com/wp-json/wp/v2/posts?post_type=blog&per_page=3"
      );

      setPosts(response.data);

      console.log(response);
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="xl:px-32 md:px-20 sm:px-12  px-8   py-4 pt-20 flex flex-col">
        <section className="grid grid-cols-4 gap-8">
          <div className="col-span-4 md:col-span-2 xl:col-span-3   ">
            <h1 className="text-3xl text-gray-800 border-b">
              Nuestras publicaciones
            </h1>
            <div className="grid grid-cols-2 xl:grid-cols-3 col-span-2 xl:col-span-3 gap-8 mt-4">
              <div className="flex flex-col col-span-2 xl:col-span-1 gap-2">
                <img
                  className="rounded-lg w-full"
                  src="https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png"
                  alt=""
                />
                <h4 className="font-semibold">Title example blog for test</h4>
                <p className="text-sm text-gray-500 text-pretty">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita voluptatum dolor quos quibusdam consequatur
                  laudantium quidem obcaecati accusamus facilis veniam illo.
                </p>
                <div className="flex flex-col text-sm ">
                  <div>
                    <span>Jhonson smith </span>{" "}
                    <span className="text-gray-600">in</span>{" "}
                    <span>Design</span>
                  </div>

                  <span className="text-gray-500">Aprl 13, 2020</span>
                </div>
                <div>
                  <Link
                    href={""}
                    className="border border-sky-400 p-1 rounded-lg outline-none text-sky-500 font-light text-sm"
                  >
                    Ver completo
                  </Link>
                </div>
              </div>

              <div className="flex flex-col col-span-2 xl:col-span-2 gap-2">
                <Link href={""} className="flex gap-2">
                  <img
                    className="w-48 rounded-lg"
                    src="https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg"
                    alt=""
                  />
                  <div className="flex flex-col justify-around">
                    <h3 className="font-semibold">
                      How to Create a blog with Genius PE
                    </h3>
                    <div className="flex flex-col text-sm ">
                      <div>
                        <span>Jhonson smith </span>{" "}
                        <span className="text-gray-600">in</span>{" "}
                        <span>Design</span>
                      </div>

                      <span className="text-gray-500">Aprl 13, 2020</span>
                    </div>
                  </div>
                </Link>

                <Link href={""} className="flex gap-2">
                  <img
                    className="w-48 rounded-lg"
                    src="https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg"
                    alt=""
                  />
                  <div className="flex flex-col justify-around">
                    <h3 className="font-semibold">
                      How to Create a blog with Genius PE
                    </h3>
                    <div className="flex flex-col text-sm ">
                      <div>
                        <span>Jhonson smith </span>{" "}
                        <span className="text-gray-600">in</span>{" "}
                        <span>Design</span>
                      </div>

                      <span className="text-gray-500">Aprl 13, 2020</span>
                    </div>
                  </div>
                </Link>

                <Link href={""} className="flex gap-2">
                  <img
                    className="w-48 rounded-lg"
                    src="https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg"
                    alt=""
                  />
                  <div className="flex flex-col justify-around">
                    <h3 className="font-semibold">
                      How to Create a blog with Genius PE
                    </h3>
                    <div className="flex flex-col text-sm ">
                      <div>
                        <span>Jhonson smith </span>{" "}
                        <span className="text-gray-600">in</span>{" "}
                        <span>Design</span>
                      </div>

                      <span className="text-gray-500">Aprl 13, 2020</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-4 md:col-span-2  xl:col-span-1   ">
            <h1 className="text-3xl text-gray-800 border-b">Lo mas visto</h1>
            <div className="col-span-2 xl:col-span-1 mt-4">
              <div className="flex flex-col col-span-2 gap-4">
                <Link href={""} className="flex gap-4 border-b pb-2">
                  <div>
                    <span className="text-3xl text-gray-600">01</span>
                  </div>
                  <div className="flex flex-col justify-around">
                    <h3 className="font-semibold">
                      How to Create a blog with Genius PE
                    </h3>
                    <div className="flex flex-col text-sm ">
                      <div>
                        <span>Jhonson smith </span>{" "}
                        <span className="text-gray-600">in</span>{" "}
                        <span>Design</span>
                      </div>

                      <span className="text-gray-500">Aprl 13, 2020</span>
                    </div>
                  </div>
                </Link>

                <Link href={""} className="flex gap-4 border-b pb-2">
                  <div>
                    <span className="text-3xl text-gray-600">02</span>
                  </div>
                  <div className="flex flex-col justify-around">
                    <h3 className="font-semibold">
                      How to Create a blog with Genius PE
                    </h3>
                    <div className="flex flex-col text-sm ">
                      <div>
                        <span>Jhonson smith </span>{" "}
                        <span className="text-gray-600">in</span>{" "}
                        <span>Design</span>
                      </div>

                      <span className="text-gray-500">Aprl 13, 2020</span>
                    </div>
                  </div>
                </Link>

                <Link href={""} className="flex gap-4 border-b pb-2">
                  <div>
                    <span className="text-3xl text-gray-600">03</span>
                  </div>
                  <div className="flex flex-col justify-around">
                    <h3 className="font-semibold">
                      How to Create a blog with Genius PE
                    </h3>
                    <div className="flex flex-col text-sm ">
                      <div>
                        <span>Jhonson smith </span>{" "}
                        <span className="text-gray-600">in</span>{" "}
                        <span>Design</span>
                      </div>

                      <span className="text-gray-500">Aprl 13, 2020</span>
                    </div>
                  </div>
                </Link>

                <Link href={""} className="flex gap-4 border-b pb-2">
                  <div>
                    <span className="text-3xl text-gray-600">04</span>
                  </div>
                  <div className="flex flex-col justify-around">
                    <h3 className="font-semibold">
                      How to Create a blog with Genius PE
                    </h3>
                    <div className="flex flex-col text-sm ">
                      <div>
                        <span>Jhonson smith </span>{" "}
                        <span className="text-gray-600">in</span>{" "}
                        <span>Design</span>
                      </div>

                      <span className="text-gray-500">Aprl 13, 2020</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* section information */}
        </section>

        {/* // todo here is blog col */}

        <section className="flex flex-col gap-8 mt-16">
          <div className="grid grid-cols-3 gap-8 ">
            <div className="w-full col-span-1">
              <img
                className="w-full rounded-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGwpQpxNAbG3Z-JyRqmv5tdeC3yXKZ-VrUtgXjVB6-0g&s"
                alt=""
              />
            </div>
            <div className="flex flex-col col-span-2">
              <h2 className="font-semibold text-lg ">
                Como los gatos influyen en el desarrollo de tu aplicacion web,
                100% real no fake
              </h2>
              <p className="text-gray-500 font-light mt-2">
                Los gatos son como los sabios misteriosos del mundo en línea,
                dejando su huella en cada rincón de la web, ¡incluso en tu
                aplicación web! Su influencia puede ser sutil pero poderosa.
                Piénsalo, ¿cuántas veces has visto un video viral de un gato
                adorable o una foto de un minino haciendo una travesura en las
                redes sociales? Esas son las pequeñas dosis de alegría felina
                que mantienen a la gente enganchada y compartiendo contenido, lo
                que puede beneficiar enormemente a tu aplicación web.
              </p>
              <div className="flex flex-col mt-4 text-sm">
                <span>Hans Melchor</span>
                <span className="text-gray-500">Desarrolllador Full Stack</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 ">
            <div className="w-full col-span-1">
              <img
                className="w-full rounded-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGwpQpxNAbG3Z-JyRqmv5tdeC3yXKZ-VrUtgXjVB6-0g&s"
                alt=""
              />
            </div>
            <div className="flex flex-col col-span-2">
              <h2 className="font-semibold text-lg ">
                Como los gatos influyen en el desarrollo de tu aplicacion web,
                100% real no fake
              </h2>
              <p className="text-gray-500 font-light mt-2">
                Los gatos son como los sabios misteriosos del mundo en línea,
                dejando su huella en cada rincón de la web, ¡incluso en tu
                aplicación web! Su influencia puede ser sutil pero poderosa.
                Piénsalo, ¿cuántas veces has visto un video viral de un gato
                adorable o una foto de un minino haciendo una travesura en las
                redes sociales? Esas son las pequeñas dosis de alegría felina
                que mantienen a la gente enganchada y compartiendo contenido, lo
                que puede beneficiar enormemente a tu aplicación web.
              </p>
              <div className="flex flex-col mt-4 text-sm">
                <span>Hans Melchor</span>
                <span className="text-gray-500">Desarrolllador Full Stack</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 ">
            <div className="w-full col-span-1">
              <img
                className="w-full rounded-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGwpQpxNAbG3Z-JyRqmv5tdeC3yXKZ-VrUtgXjVB6-0g&s"
                alt=""
              />
            </div>
            <div className="flex flex-col col-span-2">
              <h2 className="font-semibold text-lg ">
                Como los gatos influyen en el desarrollo de tu aplicacion web,
                100% real no fake
              </h2>
              <p className="text-gray-500 font-light mt-2">
                Los gatos son como los sabios misteriosos del mundo en línea,
                dejando su huella en cada rincón de la web, ¡incluso en tu
                aplicación web! Su influencia puede ser sutil pero poderosa.
                Piénsalo, ¿cuántas veces has visto un video viral de un gato
                adorable o una foto de un minino haciendo una travesura en las
                redes sociales? Esas son las pequeñas dosis de alegría felina
                que mantienen a la gente enganchada y compartiendo contenido, lo
                que puede beneficiar enormemente a tu aplicación web.
              </p>
              <div className="flex flex-col mt-4 text-sm">
                <span>Hans Melchor</span>
                <span className="text-gray-500">Desarrolllador Full Stack</span>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-8 mt-8">
          {posts.map((post: any, index: number) => (
            <div key={index} className="rounded-lg p-4 shadow-large border">
              <div>
                <div className="flex  items-center justify-between">
                  <h1 className="font-semibold text-xl">
                    {post.title.rendered}
                  </h1>
                  <Link className="text-blue-600" href={"/blog/" + post.id}>
                    Ver completo
                  </Link>
                </div>
                <div className="overflow-hidden h-52 ">
                  <div
                    className="mb-8"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Items;

// https://www.free-css.com/assets/files/free-css-templates/preview/page272/mundana/ referencia de pagina web
