import { create } from "zustand";
import axiosInstance from "../api/axiosInstance";
import toast from "react-hot-toast";

export const useBlogStore = create((set, get) => {
  return {
    blogs: [],
    isUploading: false,
    setBlogs: (blogs) => set({ blogs: [...blogs] }),
    handleCreateBlog: async (data) => {
      set({ isUploading: true });
      try {
        const res = await axiosInstance.post("/blog/", data);
        set({ blogs: [...get().blogs, res.data] });
        toast.success("blog created successfully");
      } catch (error) {
        const errMsg =
          error?.response?.data?.message ||
          error?.message ||
          "blog upload failed";
        console.log(errMsg);
        toast.error(errMsg);
      } finally {
        set({ isUploading: false });
      }
    },
  };
});
