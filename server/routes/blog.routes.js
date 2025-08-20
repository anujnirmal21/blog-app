import { Router } from "express";
import { protectRoute } from "./../middlewares/auth.middleware.js";
import {
  getAllBlogs,
  handleDeleteBlog,
  handleCreateBlog,
  handleUpdateBlog,
  getUserBlogs,
  getBlog,
  handleLikeBlog,
  handleCommenteBlog,
} from "../controllers/blog.controller.js";

const blogRoutes = Router();

blogRoutes.get("/user-blogs", protectRoute, getUserBlogs);
blogRoutes.get("/", getAllBlogs);
blogRoutes.get("/:id", protectRoute, getBlog);
blogRoutes.post("/", protectRoute, handleCreateBlog);
blogRoutes.post("/like/:id", protectRoute, handleLikeBlog);
blogRoutes.post("/comment/:id", protectRoute, handleCommenteBlog);
blogRoutes.put("/:id", protectRoute, handleUpdateBlog);
blogRoutes.delete("/:id", protectRoute, handleDeleteBlog);

export default blogRoutes;
