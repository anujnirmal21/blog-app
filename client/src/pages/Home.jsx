import SideBar from "../components/SideBar";
import Explore from "../components/Explore";
import CreateBlog from "../components/CreateBlog";
import { useSideBarStore } from "../store/useSideBarStore";
import UserBlogs from "../components/UserBlogs";
import UpdateBlog from "./../components/UpdateBlog";
import { useBlogStore } from "../store/useBlogStore";

function Home() {
  const { sideBarState } = useSideBarStore();
  const { blog } = useBlogStore();

  return (
    <div className=" flex">
      <SideBar />
      {sideBarState === "Home" && <Explore />}
      {sideBarState === "Create" && <CreateBlog />}
      {sideBarState === "My Blogs" && <UserBlogs />}
      {sideBarState === "Update" && <UpdateBlog blog={blog} />}
    </div>
  );
}

export default Home;
