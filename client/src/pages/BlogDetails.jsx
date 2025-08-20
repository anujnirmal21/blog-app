import useSWR, { mutate } from "swr";
import { getFetcher } from "../api/fetcher";
import { useNavigate, useParams } from "react-router-dom";
import { Loader2, ArrowLeft, Heart } from "lucide-react";
import { useBlogStore } from "../store/useBlogStore";
import { useState, useEffect } from "react";
import { useAuthStore } from "./../store/useAuthStore";

function BlogDetails() {
  const { authUser } = useAuthStore();
  const { handleLike } = useBlogStore();
  const { id } = useParams();
  const navigete = useNavigate();
  const { data: blog, error, isLoading } = useSWR(`/blog/${id}`, getFetcher);
  const [liked, setLiked] = useState(false);
  const formattedDate = new Date(blog?.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    if (blog && blog.likes && authUser) {
      setLiked(blog.likes.includes(authUser._id));
    }
  }, [blog, authUser]);

  const handleClick = async (blogId) => {
    await handleLike(blogId);
    setLiked(!liked);

    mutate(
      `/blog/${blogId}`,
      (prevBlog) => {
        if (!prevBlog || !authUser) return prevBlog;

        const hasLiked = prevBlog.likes.includes(authUser._id);
        const updatedLikes = hasLiked
          ? prevBlog.likes.filter((id) => id !== authUser._id)
          : [...prevBlog.likes, authUser._id];

        return {
          ...prevBlog,
          likes: updatedLikes,
        };
      },
      false
    );
  };

  if (error) return <p>Error loading blogs.</p>;
  if (isLoading)
    return (
      <div className=" h-screen w-full flex justify-center items-center">
        <Loader2 className=" animate-spin" />
      </div>
    );

  return (
    <>
      <div className=" px-2 lg:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <h1 className="text-[#141414] tracking-light text-3xl lg:text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-6 relative">
            <ArrowLeft
              size={40}
              className=" absolute -left-1 lg:-left-10 -top-4 cursor-pointer"
              onClick={() => navigete("/home")}
            />
            {blog.title}
          </h1>
          <div className="flex items-center gap-4 bg-neutral-50 px-4 min-h-[72px] py-2">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
              style={{
                backgroundImage:
                  'url("https://previews.123rf.com/images/mik38/mik382306/mik38230600134/206406358-young-student-avatar-generative-ai.jpg")',
              }}
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#141414] text-base font-medium leading-normal line-clamp-1">
                {blog.userId.fullname}
              </p>
              <p className="text-neutral-500 text-sm font-normal leading-normal line-clamp-2">
                Published on {formattedDate}
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full grow bg-neutral-50 @container py-3">
            <div className="w-full gap-1 overflow-hidden bg-neutral-50 @[480px]:gap-2 aspect-[3/4] lg:aspect-[4/3] flex">
              <div
                className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-lg flex-1"
                style={{
                  backgroundImage: `url(${blog.image})`,
                }}
              />
            </div>
            <div className=" flex justify-between gap-2 my-4 mx-2 items-center w-full">
              <div className=" flex items-center gap-2">
                <Heart
                  size={30}
                  style={{
                    stroke: liked ? "red" : "gray",
                    fill: liked ? "red" : "transparent",
                  }}
                  className="cursor-pointer"
                  onClick={() => handleClick(blog._id)}
                />
                <span className=" text-2xl">
                  {" "}
                  {blog?.likes.length ? blog?.likes.length : 0}
                </span>
              </div>
              <div className=" flex  gap-2 w-full justify-end">
                <input
                  className=" border-black border rounded-md p-2 w-[80%]"
                  type="text"
                  placeholder=" write a comment..."
                />
                <button className=" p-2 bg-black text-white rounded-md cursor-pointer hover:scale-105">
                  Comment
                </button>
              </div>
            </div>
          </div>
          <p className="text-[#141414] text-base font-normal text-justify leading-normal pb-3 pt-1 px-4">
            {blog.content}
          </p>
        </div>
      </div>
    </>
  );
}

export default BlogDetails;
