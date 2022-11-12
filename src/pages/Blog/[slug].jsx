import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { default as api } from "../../services/apiSlice";

function Single() {
  const { slug } = useParams();
  const { data, isError, isLoading, isSuccess } = api.usePostsQuery();
  const posts = data?.posts;
  const [post, setPost] = useState(null);
  useEffect(() => {
    const singlePost = posts?.find((posts) => posts.slug === slug);
    if (singlePost) {
      setPost(singlePost);
    }
  }, [slug, posts]);

  let showSingle;
  if (isLoading) {
    showSingle = (
      <div className="w-full flex items-center h-[200px] md:h-[400px] justify-center animate-pulse bg-gray-200 shadow text-[25px] font-[700] font-quicksand rounded-[10px]">
        Loading...
      </div>
    );
  } else if (isSuccess) {
    showSingle = (
      <div className="md:col-span-2">
        {post ? (
          <div className="w-full">
            <div className="flex flex-col items-start justify-between w-full space-y-3">
              <div className="flex ">
                <p className="font-[800] text-[25px] md:text-[30px] font-quicksand">
                  {post.title}
                </p>
              </div>
              <div className="h-[200px] md:h-[400px] w-full ">
                <img
                  src={post.thumbnail}
                  alt="blog thumbnail"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="mt-[20px]">
              <div className="flex items-center space-x-3">
                <div className="h-[50px] w-[50px] rounded-full bg-green-900"></div>
                <div>
                  {" "}
                  <p className="font-[800] text-[14px] md:text-[18px] font-quicksand">
                    Deborah Delx
                  </p>
                  <p className="font-[800] text-[12px] md:text-[14px] font-quicksand">
                    Content Creator
                  </p>
                </div>
              </div>
              <div className="mt-[30px]">
                <p>{post.content}</p>
                <div></div>
              </div>
            </div>
          </div>
        ) : (
          <div>Post Not Found</div>
        )}
      </div>
    );
  } else if (isError) {
    showSingle = (
      <div className="w-full flex items-center h-[200px] md:h-[400px] justify-center ">
        Could not find Post
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-3 px-[15px] md:px-[40px] my-[10px]">
      
      <div className="md:col-span-2">  {showSingle}</div>

        <div className="my-[50px] ">
          <div className="font-[800] font-quicksand text-[20px] mb-[10px]">
            Related Posts
          </div>

          <div className="flex flex-col space-y-5">
            {posts?.map(({ id, title, thumbnail, slug, content }) => (
              <Link
                to={`/blog/${slug}`}
                key={id}
                className="flex items-center  space-between border space-x-2 cursor-pointer"
              >
                <div className="min-h-[80px] max-h-[80px] min-w-[100px] max-w-[100px]">
                  <img
                    src={thumbnail}
                    alt=""
                    className="h-[80px] w-[100px] object-cover"
                  />
                </div>
                <div className="">
                  <p className="font-[700] text-[15px] font-quicksand">
                    {title}
                  </p>
                  <p className="font-[700] text-[12px] font-quicksand">
                    {content.substring(0, 60) + "..."}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      
    </div>
  );
}

export default Single;
