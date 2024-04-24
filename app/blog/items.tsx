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
      <div className="xl:px-40 md:px-20 sm:px-12  px-8   py-4 pt-20 flex flex-col">
        <section className="grid grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-3  border-b ">
            <h1 className="text-3xl text-gray-800">Nuestras publicaciones</h1>
          </div>
          <div className=" col-span-2  md:col-span-1  border-b ">
            <h1 className="text-3xl text-gray-800">Lo mas visto</h1>
          </div>

          {/* section information */}
          <div className="grid grid-cols-2 md:grid-cols-3 col-span-2 md:col-span-3 gap-8">
            <div className="flex flex-col col-span-2 md:col-span-1 gap-2">
              <img
                className="rounded-lg w-full"
                src="https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png"
                alt=""
              />
              <h4 className="font-semibold">Title example blog for test</h4>
              <p className="text-sm text-gray-500 text-pretty">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita voluptatum dolor quos quibusdam consequatur laudantium
                quidem obcaecati accusamus facilis veniam illo.
              </p>
              <div className="flex flex-col text-sm ">
                <div>
                  <span>Jhonson smith </span>{" "}
                  <span className="text-gray-600">in</span> <span>Design</span>
                </div>

                <span className="text-gray-500">Aprl 13, 2020</span>
              </div>
              <div>
                <button className="border border-sky-400 p-1 rounded-lg outline-none text-sky-500 font-light text-sm">
                  Ver completo
                </button>
              </div>
            </div>

            <div className="flex flex-col col-span-2 xl:col-span-2 gap-2">
              <div className="flex gap-2">
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
              </div>

              <div className="flex gap-2">
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
              </div>

              <div className="flex gap-2">
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
              </div>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1">
            <div className="flex flex-col col-span-2 gap-4">
              <div className="flex gap-4 border-b pb-2">
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
              </div>

              <div className="flex gap-4 border-b pb-2">
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
              </div>

              <div className="flex gap-4 border-b pb-2">
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
              </div>

              <div className="flex gap-4 border-b pb-2">
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
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-8">
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
