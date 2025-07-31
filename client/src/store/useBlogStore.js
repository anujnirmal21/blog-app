import { create } from "zustand";

export const useBlogStore = create((set, get) => {
  return {
    blogs: [],
    setBlogs: (blogs) => set({ blogs: [...blogs] }),
    createBlog: false,
    setCreateBlog: () => set({ createBlog: !get().createBlog }),
  };
});
