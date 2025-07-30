import { Router } from "express";
import {
  getAllBlogs,
  handleDeleteBlog,
  handleCreateBlog,
  handleUpdateBlog,
  getBlog,
} from "../controllers/blog.controller.js";

const blogRoutes = Router();

blogRoutes.get("/", getAllBlogs);
blogRoutes.get("/:id", getBlog);
blogRoutes.post("/", handleCreateBlog);
blogRoutes.put("/:id", handleUpdateBlog);
blogRoutes.delete("/:id", handleDeleteBlog);

export default blogRoutes;
