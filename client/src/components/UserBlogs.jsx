import { getFetcher } from "../api/fetcher.js";
import Pagenation from "./Pagenation.jsx";
import useSWR from "swr";
import { Loader2 } from "lucide-react";
import UserBlogCard from "./cards/UserBlogCard.jsx";
import SearchBar from "./SearchBar.jsx";
import { useState, useMemo } from "react";

function UserBlogs() {
  const {
    data: allBlogs,
    error,
    isLoading,
  } = useSWR("/blog/user-blogs", getFetcher);
  const [searchTerm, setSearchTerm] = useState("");

  //filter if searched
  const filteredBlogs = useMemo(
    () =>
      allBlogs?.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm, setSearchTerm, allBlogs]
  );

  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1 overflow-y-hidden overflow-x-hidden max-h-screen">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#141414] tracking-light text-[32px] font-bold leading-tight min-w-72">
          Your Blogs
        </p>
      </div>
      <div className="px-4 py-3">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className=" overflow-x-hidden overflow-y-scroll h-full">
        {error && <p>Error loading blogs.</p>}
        {isLoading && (
          <div className=" h-full w-full flex justify-center items-center">
            <Loader2 className=" animate-spin" />
          </div>
        )}
        {filteredBlogs?.map((blog) => (
          <UserBlogCard blog={blog} key={blog._id} />
        ))}
      </div>
      {/* <Pagenation /> */}
    </div>
  );
}

export default UserBlogs;
