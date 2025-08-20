import { create } from "zustand";
import axiosInstance from "../api/axiosInstance";
import toast from "react-hot-toast";

export const useBlogStore = create((set, get) => {
  return {
    blog: {},
    isUploading: false,
    isUpdating: false,
    setBlog: (blog) => set({ blog }),
    handleCreateBlog: async (data) => {
      set({ isUploading: true });
      try {
        await axiosInstance.post("/blog/", data);
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
    handleUpdate: async (id, data) => {
      set({ isUpdating: true });
      try {
        const res = await axiosInstance.put(`/blog/${id}`, data);
        toast.success("blog updated successfully");
      } catch (error) {
        const errMsg =
          error?.response?.data?.message ||
          error?.message ||
          "blog update failed";
        console.log(errMsg);
        toast.error(errMsg);
      } finally {
        set({ isUpdating: false });
      }
    },
    handleLike: async (blogId) => {
      try {
        await axiosInstance.post(`/blog/like/${blogId}`);
      } catch (error) {
        const errMsg =
          error?.response?.data?.message ||
          error?.message ||
          "blog like failed";
        console.log(errMsg);
        toast.error(errMsg);
      }
    },
    handleDelete: async (blogId) => {
      try {
        await axiosInstance.delete(`/blog/${blogId}`);
        toast.success("blog deleted successfully");
      } catch (error) {
        const errMsg =
          error?.response?.data?.message ||
          error?.message ||
          "blog delete failed";
        console.log(errMsg);
        toast.error(errMsg);
      }
    },
  };
});
