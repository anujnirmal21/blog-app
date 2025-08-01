import React from "react";
import { useSideBarStore } from "../store/useSideBarStore";
import { X } from "lucide-react";

const routes = [
  { name: "Home", icon: "House" },
  { name: "Create", icon: "Plus" },
  { name: "My Blogs", icon: "Note" },
  { name: "Profile", icon: "User" },
];
const icons = {
  House: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0l80,75.48A16,16,0,0,1,224,115.55Z" />
    </svg>
  ),
  Plus: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z" />
    </svg>
  ),
  User: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" />
    </svg>
  ),
  Note: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z" />
    </svg>
  ),
};

function SideBar() {
  const { sideBarState, setSideBarState, isSidebarOpen, toggleSidebar } =
    useSideBarStore();

  return (
    <>
      {/* Hamburger Menu (only visible on small screens) */}
      <div className="md:hidden p-4">
        <button onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M40,128a8,8,0,0,1,8-8H208a8,8,0,0,1,0,16H48A8,8,0,0,1,40,128Zm0-48a8,8,0,0,1,8-8H208a8,8,0,0,1,0,16H48A8,8,0,0,1,40,80Zm8,88H208a8,8,0,0,1,0,16H48a8,8,0,0,1,0-16Z" />
          </svg>
        </button>
      </div>

      {/* Sidebar (visible on desktop and when open on mobile) */}
      <div
        className={`  layout-content-container flex flex-col w-80 z-50 bg-white transition-transform duration-300 fixed md:static top-0 left-0 h-full shadow-md ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <X
          className=" absolute right-4 top-4"
          onClick={() => toggleSidebar()}
        />
        <div className="flex h-full min-h-[700px] flex-col justify-between bg-neutral-50 p-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-[#141414] text-base font-medium leading-normal">
              Bloggr
            </h1>
            <div className="flex flex-col gap-2">
              {routes.map((route) => (
                <div
                  key={route.name}
                  onClick={() => {
                    setSideBarState(route.name);
                    toggleSidebar();
                  }}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer ${
                    sideBarState === route.name ? "bg-[#ededed]" : ""
                  }`}
                >
                  <div className="text-[#141414]">{icons[route.icon]}</div>
                  <p className="text-[#141414] text-sm font-medium leading-normal">
                    {route.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3 px-3 py-2">
              <div className="text-[#141414]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,80a48,48,0,1,0,48,48..." />
                </svg>
              </div>
              <p className="text-[#141414] text-sm font-medium leading-normal">
                Settings
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
