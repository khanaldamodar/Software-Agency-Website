import Link from "next/link";
import React from "react";

interface HeaderType {
  title: string;
  desc: string;
}

const NewsHeader = ({ title, desc }: HeaderType) => {
  return (
    <>
      <div
        className="h-[40vh] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/background/bg-media.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-10" />
        {/* Text content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center text-white text-center px-80 gap-5">
          <h1 className="self-start font-bold text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="mt-2 text-sm md:text-lg max-w-2xl self-start">{desc}</p>
        </div>
      </div>
      {/* Menus items */}
      <div className="w-full shadow-md flex items-center px-80 gap-12 font-poppins py-3 z-50">
        <Link href={"/corporate-news"} className="hover:text-blue-600">
          Corporate News
        </Link>
        <Link href={"/newsletter"} className="hover:text-blue-600">
          Pitstop
        </Link>
        <Link href={"/videos"} className="hover:text-blue-600">
          Videos
        </Link>
      </div>
    </>
  );
};

export default NewsHeader;
