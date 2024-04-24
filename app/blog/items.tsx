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
        <section className="grid grid-cols-2 gap-8">
          <div className="flex flex-col">
            <div className="group overflow-hidden">
              <img
                className=" inset-0 h-full w-full object-cover object-center transition-all duration-200 group-hover:scale-110"
                src="https://imgcap.capturetheatlas.com/wp-content/uploads/2020/04/Long-exposure-photograph-.jpg"
                alt=""
              />
            </div>

            <div>
              <h1 className="font-semibold">Title example</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti ipsa voluptatibus magni quae dolorum similique quisquam
                suscipit! Odit quaerat minus, commodi, officia amet pariatur a
                eveniet sint hic assumenda sunt?
              </p>
            </div>
          </div>
          <article>
            <div className="grid grid-cols-3">
              <img
                className="w-fll col-span-1"
                src="https://imgcap.capturetheatlas.com/wp-content/uploads/2020/04/Long-exposure-photograph-.jpg"
                alt=""
              />
              <div className="col-span-2">
                <h1 className="font-semibold text-sm">Title example</h1>
                <p className="text-xs text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti ipsa voluptatibus magni quae dolorum similique
                  quisquam suscipit! Odit quaerat minus, commodi, officia amet
                  pariatur a eveniet sint hic assumenda sunt?
                </p>
              </div>
            </div>
          </article>
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
