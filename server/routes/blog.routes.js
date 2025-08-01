import { Router } from "express";
import { protectRoute } from "./../middlewares/auth.middleware.js";
import {
  getAllBlogs,
  handleDeleteBlog,
  handleCreateBlog,
  handleUpdateBlog,
  getUserBlogs,
  getBlog,
} from "../controllers/blog.controller.js";

const blogRoutes = Router();

blogRoutes.get("/user-blogs", protectRoute, getUserBlogs);
blogRoutes.get("/", protectRoute, getAllBlogs);
blogRoutes.get("/:id", protectRoute, getBlog);

blogRoutes.post("/", protectRoute, handleCreateBlog);
blogRoutes.put("/:id", protectRoute, handleUpdateBlog);
blogRoutes.delete("/:id", protectRoute, handleDeleteBlog);

export default blogRoutes;
