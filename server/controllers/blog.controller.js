import { Blog } from "./../models/blog.model.js";
import { uploadToCloudinary } from "../utils/uploadToCloudinary.js";

const getAllBlogs = async (req, res) => {
  try {
    //sort by time of creation
    const allBlogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(allBlogs);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch blogs", error: error.message });
  }
};

const getBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not exist." });
    }
    res.status(200).json(blog);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch blog", error: error.message });
  }
};

const handleCreateBlog = async (req, res) => {
  const { title, content, image } = req.body;
  const { _id: userId } = req.user;
  console.log(image[0]);
  try {
    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and content are required" });
    }

    let uploadedImage = null;

    if (image) {
      uploadedImage = await uploadToCloudinary(image);
    }

    const newBlog = new Blog({
      userId,
      title,
      content,
      image: uploadedImage || "",
    });

    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Failed to create blog", error: error.message });
  }
};

const handleUpdateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content, image } = req.body;
  const { _id: userId } = req.user;

  try {
    if (blog.userId.toString() !== userId.toString()) {
      return res
        .status(403)
        .json({ message: "Unauthorized to perform this action" });
    }

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    let updatedImage = blog.image;

    if (image && image !== blog.image) {
      updatedImage = await uploadToCloudinary(image);
    }

    blog.title = title || blog.title;
    blog.content = content || blog.content;
    blog.image = updatedImage;

    const updatedBlog = await blog.save();
    res.status(200).json(updatedBlog);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update blog", error: error.message });
  }
};

const handleDeleteBlog = async (req, res) => {
  const { id } = req.params;
  const { _id: userId } = req.user;
  try {
    if (blog.userId.toString() !== userId.toString()) {
      return res
        .status(403)
        .json({ message: "Unauthorized to perform this action" });
    }
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete blog", error: error.message });
  }
};

export {
  handleDeleteBlog,
  handleCreateBlog,
  handleUpdateBlog,
  getAllBlogs,
  getBlog,
};
