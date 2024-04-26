"use client";

import React from "react";

function DetailBlog() {
  return (
    <div className="xl:px-32 md:px-20 sm:px-12  px-8   py-4 pt-20 flex flex-col">
      <div className="flex flex-col h-[30rem] overflow-hidden rounded-b-lg ">
        <div className="flex md:gap-8 gap-4 ">
          <img
            className="w-28 h-28 rounded-xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdxqfvSE4KQSYOo5KeBe8Y2AHHzIUZxcmMaDRvE49tHw&s"
            alt=""
          />

          <div className="flex flex-col ">
            <h2 className="font-semibold md:text-lg text-xs ">
              Como los gatos influyen en el desarrollo de tu aplicacion web,
              100% real no fake
            </h2>

            <div className="flex flex-col mt-4 md:text-sm text-xs">
              <span>Hans Melchor</span>
              <span className="text-gray-500">Desarrolllador Full Stack</span>
            </div>
          </div>
        </div>
        <img
          className="w-full h-full inset-0  object-cover rounded-lg mt-4"
          src="https://www.shutterstock.com/image-photo/young-crazy-surprised-cat-make-260nw-2147678301.jpg"
          alt=""
        />
      </div>
      <div className="mt-8">
        <h2 className="font-semibold text-lg">
          Sabes como influyen los gatos en el desarrollo de Software? en este
          blog sabras como!
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          obcaecati ut voluptate quisquam necessitatibus ipsa. Omnis veritatis
          aliquid, corrupti nisi similique voluptate quaerat deleniti commodi
          quia qui ad error? Vel. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quam animi natus placeat, deserunt voluptates
          accusamus officia dolores corporis ullam ratione recusandae aliquid
          optio expedita impedit ea asperiores facere incidunt beatae. Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Tempore at
          nesciunt dignissimos, facilis consectetur possimus recusandae
          quibusdam nam nemo autem pariatur quidem, quisquam modi placeat quos
          tempora maiores voluptates. Ipsa. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolores, iure corporis enim officia
          soluta officiis praesentium eum illum. Architecto animi quia id,
          deleniti quas quae? Dignissimos explicabo distinctio voluptas dicta.
        </p>
      </div>
    </div>
  );
}

export default DetailBlog;
