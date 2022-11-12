import React from "react";
import { Link } from "react-router-dom";
import {default as api} from '../../services/apiSlice'

function Card() {
  const { data, isError, isLoading, isSuccess } = api.usePostsQuery();
  const posts = data?.posts
  console.log(posts)
  let postDisplay;
  if(isLoading){
    postDisplay = <div className="w-full bg-gradient-to-r from-green-50 to-green-200 shadow rounded-[10px]  h-[270px] font-quicksand font-[700] flex items-center justify-center text-[25px] animate-pulse">
    Loading...
  </div>
  }else if(isSuccess){
    if(posts?.length === 0){
      postDisplay =  <div className="w-full bg-gradient-to-r from-green-50 to-green-200 shadow rounded-[10px]  h-[270px] font-quicksand font-[700] flex items-center justify-center text-[25px] ">
      No Posts For Now
    </div>
    }else {
      postDisplay = <div className="w-full grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5">
      {posts.slice(0,4)
  .map(({ id, title, content, slug, category }) => (
    <div
      className="bg-gradient-to-r from-green-50 to-green-200 shadow rounded-[10px] w-[300px] h-[270px] cursor-pointer p-[40px_25px] "
      key={id}
    >
      <p className="font-[800] capitalise font-quicksand text-[18px]">
        {title}
      </p>
      <p className="mt-[4px] text-[15px] font-quicksand h-[100px]">
        {content.substring(0, 120) + "..."}
      </p>
      <p className=" mt-[10px] flex items-center  ">
        <Link to={`/blog-categries/${category}`} className='text-[13px] bg-green-200 rounded-[20px] h-[15px] px-[8px] font-quicksand flex items-center justify-center w-fit text-primary py-[4px]'>{category}</Link>
      </p>
      <button className="mt-[20px]">
        <Link
          to={`/blog/${slug}`}
          className="bg-secondary text-white p-[8px_10px] text-[14px] font-quicksand rounded-[20px]"
        >
          View Full Post
        </Link>
      </button>
    </div>
  ))}
  </div>
    }
  } else if (isError){
    postDisplay = <div className="w-full bg-gradient-to-r from-green-50 to-green-200 shadow rounded-[10px]  h-[270px] font-quicksand font-[700] flex items-center justify-center text-[25px] ">
      Could not Fetch Posts
    </div>
  }
  return (
    <div className="p-[50px_40px] bg-green-50">
      <div className=" flex  items-center justify-center font-quicksand font-[800] text-[30px]  md:text-[50px]">Blog</div>
      <div className="mt-[20px] flex w-full  items-center justify-center px-[10px]">
        <div className="w-full">
        {
         postDisplay
        }
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-[50px]">
        <Link to='/blog' className="bg-secondary p-[10px_30px] text-white rounded-full font-quicksand text-[16px]">View More</Link>
      </div>
    </div>
  );
}

export default Card;



