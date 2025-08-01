import SideBar from "../components/SideBar";
import Explore from "../components/Explore";
import CreateBlog from "../components/CreateBlog";
import { useSideBarStore } from "../store/useSideBarStore";
import UserBlogs from "../components/UserBlogs";
import UpdateBlog from "./../components/UpdateBlog";
import { useBlogStore } from "../store/useBlogStore";
import Profile from "../components/Profile";

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
      {sideBarState === "Profile" && <Profile />}
    </div>
  );
}

export default Home;
