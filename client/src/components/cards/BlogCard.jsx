import React from "react";
import { useNavigate } from "react-router-dom";

function BlogCard({ blog }) {
  const navigate = useNavigate();

  return (
    <div className="p-4 @container" onClick={() => navigate(`/${blog._id}`)}>
      <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
        {blog.image && (
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{
              backgroundImage: `url(${blog.image})`,
            }}
          />
        )}

        <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
          <p className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">
            {blog.title}
          </p>
          <div className="flex items-end gap-3 justify-between">
            <p className="text-neutral-500 text-base font-normal leading-normal">
              {blog.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
