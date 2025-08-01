import { useNavigate } from "react-router-dom";
import { Trash, FilePenLine } from "lucide-react";
import { useBlogStore } from "../../store/useBlogStore";
import { useState } from "react";
import { useSideBarStore } from "../../store/useSideBarStore";

function UserBlogCard({ blog }) {
  const navigate = useNavigate();
  const { handleDelete, setBlog } = useBlogStore();
  const { setSideBarState } = useSideBarStore();
  const [deleteBlog, setDeleteBlog] = useState(false);

  const handleBlogDelete = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    await handleDelete(blog._id);
    setDeleteBlog(true);
  };

  const handleBlogUpdate = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setBlog(blog);
    setSideBarState("Update");
  };

  //deletes blog from ui
  if (deleteBlog) return null;

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
        <div className=" flex gap-2.5">
          <Trash
            className=" cursor-pointer text-red-500"
            onClick={handleBlogDelete}
          />
          <FilePenLine className=" cursor-pointer" onClick={handleBlogUpdate} />
        </div>
      </div>
    </div>
  );
}

export default UserBlogCard;
