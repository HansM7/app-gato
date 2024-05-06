"use client";

// todo pending, no create

import { RevealWrapper } from "next-reveal";
import React from "react";

function TimeLine2({ data }: { data: any[] }) {
  const dataTemporal = [
    {
      title: "",
      items: [],
    },
    {
      title: "",
      items: [],
    },
  ];
  return (
    <>
      {/*  */}

      {data.map((item, index) => {
        return (index + 1) % 2 === 0 ? (
          <SectionRight
            key={index}
            title={item.title}
            items={item.items}
          ></SectionRight>
        ) : (
          <SectionLeft
            key={index}
            title={item.title}
            items={item.items}
          ></SectionLeft>
        );
      })}
    </>
  );
}

function SectionLeft({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="grid grid-cols-5 ">
      <RevealWrapper
        duration={2000}
        origin="left"
        className="col-span-3  flex flex-col justify-center items-start p-4  bg-blue-600 rounded-lg "
      >
        <div className="text-white">
          <span>{title}</span>
          <p className="font-light text-sm">{items[0]}</p>
        </div>
      </RevealWrapper>
    </div>
  );
}
function SectionRight({ title, items }: { title: string; items: string[] }) {
  return (
    <>
      <div className="grid grid-cols-5 ">
        <div className="col-span-2"></div>
        <RevealWrapper
          duration={2000}
          origin="right"
          className="col-span-3  flex flex-col justify-center items-start p-4  bg-sky-600 rounded-lg"
        >
          <div className="text-white">
            <span>{title}</span>
            <p className="font-light text-sm">{items[0]}</p>
          </div>
        </RevealWrapper>
      </div>
    </>
  );
}

export default TimeLine2;
