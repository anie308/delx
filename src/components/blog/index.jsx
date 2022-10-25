import React from "react";
import { Link } from "react-router-dom";
import { fakeData } from "../../data";

function Card() {
  return (
    <div className="p-[50px_40px] bg-green-50">
      <div className=" flex  items-center justify-center font-quicksand font-[800] text-[30px]  md:text-[50px]">Blog</div>
      <div className="mt-[25px] flex w-full  items-center justify-center px-[10px]">
        <div className="w-full grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5">
          {fakeData.map(({ id, title, content, slug, category }) => (
            <div
              className="bg-white shadow rounded-[10px] w-[300px] h-[270px] cursor-pointer p-[40px_25px]"
              key={id}
            >
              <p className="font-[800] capitalise font-quicksand text-[18px]">
                {title}
              </p>
              <p className="mt-[4px] text-[15px] font-quicksand">
                {content.substring(0, 120) + "..."}
              </p>
              <p className=" mt-[10px] flex items-center  ">
                <Link to={`/blog-categries/${category}`} className='text-[13px] bg-green-100 rounded-[20px] h-[15px] px-[10px] font-quicksand flex items-center justify-center w-fit text-primary py-[3px]'>{category}</Link>
              </p>
              <button className="mt-[20px]">
                <Link
                  to={`/blog/${slug}`}
                  className="bg-secondary text-white p-[8px_10px] font-quicksand rounded-[20px]"
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

export default Card;
