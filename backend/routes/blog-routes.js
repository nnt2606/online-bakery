import express from "express";
import { getAllBlogs, viewBlog, createBlog, 
    updateBlog, deleteBlog } from "../controllers/blog-controller.js";

const blogRouter = express.Router()

blogRouter.get("/all", getAllBlogs)
blogRouter.get("/view/:id", viewBlog)
blogRouter.post("/create", createBlog)
blogRouter.put("/update/:id", updateBlog)
blogRouter.delete("/remove/:id", deleteBlog)

export default blogRouter