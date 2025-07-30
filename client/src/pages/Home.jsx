import React from "react";
import ButtonOne from "../components/buttons/ButtonOne";
import SideBar from "../components/SideBar";
import Explore from "../components/Explore";
import CreateBlog from "../components/CreateBlog";

function Home() {
  return (
    <div className=" flex">
      <SideBar />
      {/* <Explore /> */}
      <CreateBlog />
    </div>
  );
}

export default Home;
