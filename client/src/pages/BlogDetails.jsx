import useSWR from "swr";
import { getFetcher } from "../api/fetcher";
import { useNavigate, useParams } from "react-router-dom";
import { Loader2, ArrowLeft } from "lucide-react";

function BlogDetails() {
  const { id } = useParams();
  const navigete = useNavigate();
  const { data: blog, error, isLoading } = useSWR(`/blog/${id}`, getFetcher);

  const formattedDate = new Date(blog?.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
          <div className="flex w-full grow bg-neutral-50 @container py-3">
            <div className="w-full gap-1 overflow-hidden bg-neutral-50 @[480px]:gap-2 aspect-[3/4] lg:aspect-[4/3] flex">
              <div
                className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-lg flex-1"
                style={{
                  backgroundImage: `url(${blog.image})`,
                }}
              />
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
