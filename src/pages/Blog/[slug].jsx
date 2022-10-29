import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fakeData } from "../../data";

function Single() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    const singlePost = fakeData.find((posts) => posts.slug === slug);
    if (singlePost) {
      setPost(singlePost);
    }
  }, [slug]);

  return (
    <div className="grid gap-5 md:grid-cols-3 px-[15px] md:px-[40px] my-[40px]">
      <div className="md:col-span-2">
        {post ? (
          <div className="w-full">
            <div className="flex flex-col items-start justify-between w-full space-y-3">
              <div className="flex ">
                <p className="font-[800] text-[30px] font-quicksand">
                  {post.title}
                </p>
              </div>
              <div className="h-[200px] md:h-[400px] w-full bg-green-400"></div>
            </div>
            <div className="mt-[20px]">
              <div className="flex items-center space-x-3">
                <div className="h-[50px] w-[50px] rounded-full bg-green-900"></div>
                <div>
                  {" "}
                  <p className="font-[800] text-[18px] font-quicksand">
                    Deborah Delx
                  </p>
                  <p className="font-[800] text-[14px] font-quicksand">
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
      <div className="mt-[40px] md:mt-0 md:px-[20px] ">
        <div className="font-[800] font-quicksand text-[20px] mb-[10px]">Related Posts</div>

        <div className="flex flex-col space-y-5">
          {fakeData.map(() => (
            <div className="flex items-center  space-between border space-x-2 cursor-pointer">
              <div className="h-[80px] min-w-[100px] bg-green-900"></div>
              <div className="">
                <p className="font-[700] text-[15px] font-quicksand">
                  Post Title
                </p>
                <p className="font-[700] text-[12px] font-quicksand">
                  Lorem ipsum dolor sit amet consectetur orem ipsum dolor sit
                  amet
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Single;
