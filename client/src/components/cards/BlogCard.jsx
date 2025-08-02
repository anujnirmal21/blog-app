import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BlogCard({ blog }) {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const MAX_LENGTH = 400;
  const isLong = blog.content.length > MAX_LENGTH;
  const preview = blog.content.slice(0, MAX_LENGTH);

  const handleExpanded = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setExpanded((prv) => !prv);
  };

  return (
    <div className="p-4 @container">
      <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
        {blog.image && (
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl cursor-pointer"
            style={{
              backgroundImage: `url(${blog.image})`,
            }}
            onClick={() => navigate(`/${blog._id}`)}
          />
        )}

        <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
          <p className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">
            {blog.title}
          </p>

          <div className="flex flex-col gap-2 text-neutral-500 text-base font-normal leading-normal">
            <p>{expanded || !isLong ? blog.content : `${preview}...`}</p>

            {isLong && (
              <button
                onClick={handleExpanded}
                className="text-blue-600 hover:underline self-start"
              >
                {expanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
