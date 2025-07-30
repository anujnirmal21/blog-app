import { Router } from "express";

const blogRoutes = Router();

blogRoutes.get("/", getAllBlogs);
blogRoutes.get("/:id", getBlog);
blogRoutes.post("/", handleCreateBlog);
blogRoutes.put("/:id", handleUpdateBlog);
blogRoutes.delete("/:id", handleDeleteBlog);

export default blogRoutes;
