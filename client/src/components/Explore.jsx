import { getFetcher } from "../api/fetcher.js";
import BlogCard from "./cards/BlogCard";
import Pagenation from "./Pagenation.jsx";
import useSWR from "swr";
import { Loader2 } from "lucide-react";
import SearchBar from "./SearchBar.jsx";
import { useMemo, useState } from "react";
function Explore() {
  const { data: allBlogs, error, isLoading } = useSWR("/blog/", getFetcher);
  const [searchTerm, setSearchTerm] = useState("");

  //filter if searched
  const filteredBlogs = useMemo(
    () =>
      allBlogs?.filter((blog) =>
        blog.title.toLowerCase().startsWith(searchTerm.toLowerCase())
      ),
    [searchTerm, setSearchTerm, allBlogs]
  );

  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1 overflow-y-hidden overflow-x-hidden max-h-screen">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#141414] tracking-light text-[32px] font-bold leading-tight min-w-72">
          Explore
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
        {filteredBlogs?.length === 0 && (
          <div className=" h-full w-full flex justify-center items-center">
            <p className=" text-lg text-gray-400">
              No blogs to show right now.
            </p>
          </div>
        )}
        {filteredBlogs?.map((blog) => (
          <BlogCard blog={blog} key={blog._id} />
        ))}
      </div>
      {/* <Pagenation /> */}
    </div>
  );
}

export default Explore;
