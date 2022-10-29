import React from "react";
import { Link } from "react-router-dom";
import { fakeData } from "../../data";
function BlogLists() {
  const copywriting = fakeData.filter((e) => e.category === "copy-writing");
  const novelwriting = fakeData.filter((e) => e.category === "novel-writing");
  const technicalwriting = fakeData.filter((e) => e.category === "technical-writing");
  return (
    <div className="px-[15px] md:px-[40px] ">
        
      <div className='py-[40px] '>
        <p className="font-[800] font-quicksand text-[30px] ">CopyWriting</p>
        <div className=" mt-[30px] w-full grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5">
          {copywriting.map(({ id, title, content, slug }) => (
            <div
              className="bg-white shadow rounded-[10px] w-[300px] h-[270px] cursor-pointer p-[40px_25px] bg-gradient-to-r from-green-50 to-green-200"
              key={id}
            >
              <p className="font-[800] capitalise font-quicksand text-[18px]">
                {title}
              </p>
              <p className="mt-[10px] text-[15px] font-quicksand">
                {content.substring(0, 120) + "..."}
              </p>
              <button className="mt-[40px]">
                <Link
                  to={`/blog/${slug}`}
                  className="bg-secondary text-white p-[8px_10px] text-[14px] font-quicksand rounded-[20px]"
                >
                  Read More
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className='py-[40px] '>
        <p className="font-[800] font-quicksand text-[30px] ">Novel Writing</p>
        <div className=" mt-[30px] w-full grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5">
          {novelwriting.map(({ id, title, content, slug }) => (
            <div
              className="bg-white shadow rounded-[10px] w-[300px] h-[270px] cursor-pointer p-[40px_25px] bg-gradient-to-r from-green-50 to-green-200"
              key={id}
            >
              <p className="font-[800] capitalise font-quicksand text-[18px]">
                {title}
              </p>
              <p className="mt-[10px] text-[15px] font-quicksand">
                {content.substring(0, 120) + "..."}
              </p>
              <button className="mt-[40px]">
                <Link
                  to={`/blog/${slug}`}
                  className="bg-secondary text-white p-[8px_10px] text-[14px] font-quicksand rounded-[20px]"
                >
                  Read More
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className='py-[40px] '>
        <p className="font-[800] font-quicksand text-[30px] ">Technical Writing</p>
        <div className=" mt-[30px] w-full grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5">
          {technicalwriting.map(({ id, title, content, slug }) => (
            <div
              className="bg-white shadow rounded-[10px] w-[300px] h-[270px] cursor-pointer p-[40px_25px] bg-gradient-to-r from-green-50 to-green-200"
              key={id}
            >
              <p className="font-[800] capitalise font-quicksand text-[18px]">
                {title}
              </p>
              <p className="mt-[10px] text-[15px] font-quicksand">
                {content.substring(0, 120) + "..."}
              </p>
              <button className="mt-[40px]">
                <Link
                  to={`/blog/${slug}`}
                  className="bg-secondary text-white p-[8px_10px] text-[14px] font-quicksand rounded-[20px]"
                >
                  Read More
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogLists;
