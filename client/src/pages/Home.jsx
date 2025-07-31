import SideBar from "../components/SideBar";
import Explore from "../components/Explore";
import CreateBlog from "../components/CreateBlog";
import { useSideBarStore } from "../store/useSideBarStore";

function Home() {
  const { sideBarState } = useSideBarStore();

  return (
    <div className=" flex">
      <SideBar />
      {sideBarState === "Home" && <Explore />}
      {sideBarState === "Create" && <CreateBlog />}
      {sideBarState === "My Blogs" && <Explore />}
    </div>
  );
}

export default Home;
